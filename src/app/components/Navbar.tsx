

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
  Menu,
  X,
  House,
  UserRound,
  Code,
  FolderKanban,
  GraduationCap,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: House },
  { name: "About", href: "#about", icon: UserRound },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect active section while scrolling
  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const marker = window.scrollY + 180;
      let current = "home";

      navLinks.forEach((link) => {
        const id = link.href.substring(1);
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (marker >= sectionTop) {
          current = id;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        current = "contact";
      }

      setActiveSection(current);
      frame = 0;
    };

    const handleScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Handle navigation click
  const handleClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full">

      {/* Main Navbar */}
      <div className="flex items-center justify-between border-b border-[#E9D8BE]/70 bg-[#FFF9F0]/90 px-5 py-4 shadow-sm backdrop-blur-xl md:px-12 lg:px-16">

        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleClick("home")}
          className="group flex flex-col items-start leading-none"
        >
          <span className="text-xl font-black tracking-[2px] text-[#172033] transition-colors duration-300 group-hover:text-[#F28B38] md:text-2xl">
            JAFNA
          </span>

          
        </Link>

        {/* Desktop Navigation - Text Only */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const active = activeSection === id;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleClick(id)}
                className={`group relative py-2 text-sm font-bold transition-colors duration-300 ${
                  active
                    ? "text-[#F28B38]"
                    : "text-[#172033] hover:text-[#F28B38]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#F28B38] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E9D8BE] bg-white text-[#172033] shadow-sm transition-all duration-300 hover:border-[#F28B38] hover:text-[#F28B38] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown - Icons + Names */}
      <div
        className={`absolute left-0 top-full w-full border-b border-[#E9D8BE] bg-[#FFF9F0]/95 px-5 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 py-5">

          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const Icon = link.icon;
            const active = activeSection === id;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleClick(id)}
                className={`flex items-center justify-between rounded-xl px-5 py-4 transition-all duration-300 ${
                  active
                    ? "bg-[#FFF0E2] text-[#F28B38]"
                    : "text-[#172033] hover:bg-[#FFF0E2] hover:text-[#F28B38]"
                }`}
              >
                <span className="flex items-center gap-4 text-base font-bold">
                  <Icon size={21} strokeWidth={2} />
                  {link.name}
                </span>

                {active && (
                  <span className="h-2 w-2 rounded-full bg-[#F28B38]" />
                )}
              </Link>
            );
          })}

        </div>
      </div>
    </nav>
  );
}