

"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="w-full">

        <div className="flex items-center justify-between border-b border-gray-200/70 bg-white/75 px-6 py-4 shadow-sm backdrop-blur-xl md:px-12 lg:px-16">

          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-black tracking-[-1px] text-[#172033] transition-colors duration-300 hover:text-[#F28B38]"
          >
            Jafna<span className="text-[#F28B38]"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-sm font-semibold text-[#172033] transition-colors duration-300 hover:text-[#F28B38]"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#F28B38] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl font-bold text-[#172033] transition-colors hover:text-[#F28B38] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="flex flex-col gap-2 border-b border-gray-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold text-[#172033] transition-colors duration-300 hover:bg-orange-50 hover:text-[#F28B38]"
              >
                {link.name}
              </Link>
            ))}

          </div>
        )}
      </div>
    </nav>
  );
}