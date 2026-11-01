

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiGithub,
  SiInstagram,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#172033] px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-3">

          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#home" className="text-3xl font-extrabold">
              Jafna
              <span className="text-[#F28B38]">.</span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-[#D5D0C7]">
              Creative Developer passionate about building
              beautiful websites and digital experiences.
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/jafna-k"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F28B38]"
              >
                <SiGithub size={22} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jafna-k-7472243b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F28B38]"
              >
                <FaLinkedin size={22} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jafnaaaah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F28B38]"
              >
                <SiInstagram size={22} />
              </a>

            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#F6C94D]">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#D5D0C7] transition hover:translate-x-1 hover:text-[#F28B38]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-[#F6C94D]">
              Let's Connect
            </h3>

            <p className="mt-6 leading-7 text-[#D5D0C7]">
              Have an idea or a project in mind?
              Let's create something amazing together.
            </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-[#F28B38] transition hover:text-[#F6C94D]"
            >
                jafnakalathingal@gmail.com →
            </a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center md:flex-row">

          <p className="text-sm text-[#B9A58C]">
            © {currentYear} Jafna. All rights reserved.
          </p>

          <p className="text-sm text-[#B9A58C]">
            Designed with
            <span className="mx-1 text-[#F28B38]">♥</span>
            and built with Next.js
          </p>

        </div>

      </div>

      {/* Back to Top - Hidden in Hero Section */}
      {showBackToTop && (
        <a
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F28B38] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D96D24]"
        >
          <ArrowUp size={22} />
        </a>
      )}

    </footer>
  );
}
