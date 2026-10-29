
// "use client";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-black text-white px-8 py-5 flex justify-between items-center">
//       <h1 className="text-2xl font-bold">
//         MyPortfolio
//       </h1>

//       <div className="flex gap-6">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#skills">Skills</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </nav>
//   );
// }






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
    <nav className="fixed top-0 left-0 z-50 w-full ">
      <div className="mx-auto ">

        <div className="flex items-center justify-between rounded-[4px] border border-orange-100 bg-white/85 px-6 py-4  backdrop-blur-xl">

          {/* Logo */}
          <Link href="#home"
            className="text-2xl font-black tracking-tight text-[#172033]">
            {/* David<span className="text-[#F28B38]">.</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#172033] transition-colors duration-300 hover:text-[#F28B38]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          {/* <Link
            href="#contact"
            className="hidden rounded-full bg-[#F28B38] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:translate-y-1 hover:shadow-[0_2px_0_#D96D24] md:block"
          >
            Let's Talk →
          </Link> */}

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl font-bold text-[#172033] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="mt-3 flex flex-col gap-5 rounded-2xl border border-orange-100 bg-white p-6 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-[#172033] transition-colors hover:text-[#F28B38]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#F28B38] py-3 text-center font-bold text-white"
            >
              Let's Talk →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
