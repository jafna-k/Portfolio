

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F4EBDD] px-5 pb-16 pt-32 md:px-12"
    >
      {/* Background Decoration */}
      <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-[#F6C94D]/20 blur-3xl" />

      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#F28B38]/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center lg:text-left"
        >
          {/* Availability Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-bold text-[#F28B38] shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for opportunities
          </span>

          {/* Heading */}
          <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight text-[#172033] sm:text-6xl xl:text-7xl">
            Hi, I'm{" "}
            <span className="text-[#F28B38]">
              Jafna
            </span>

            <span className="mt-3 block text-3xl sm:text-4xl xl:text-5xl">
              Full Stack Developer
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#827968] lg:mx-0">
           I'm a passionate Full Stack Developer who loves creating modern, responsive, and user-friendly web applications.
            I enjoy turning creative ideas into interactive digital experiences using React, Next.js, Node.js, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">

            <Link
              href="#contact"
              className="rounded-full bg-[#F28B38] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#D96D24]"
            >
              Get in touch →
            </Link>

            <Link
              href="#projects"
              className="rounded-full border-2 border-[#172033] px-6 py-3 text-sm font-bold text-[#172033] transition-all duration-300 hover:bg-[#172033] hover:text-white"
            >
              View Projects
            </Link>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-5 lg:justify-start">

            <span className="text-sm font-semibold text-[#827968]">
              Follow me:
            </span>

            {/* GitHub Icon */}
            <a
              href="  https://github.com/jafna-k"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[#172033] transition-all duration-300 hover:-translate-y-1 hover:text-[#F28B38]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/jafna-k-7472243b9/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[#172033] transition-all duration-300 hover:-translate-y-1 hover:text-[#F28B38]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.09 18.94H5.12V9.38h2.97v9.56ZM6.61 8.07a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.33 10.87h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.66V9.38h2.85v1.3h.04c.4-.75 1.37-1.55 2.82-1.55 3.02 0 3.57 1.99 3.57 4.58v5.23Z" />
              </svg>
            </a>

          </div>
        </motion.div>

        {/* Right 3D Workspace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Floating Background Circle */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6C94D]/30 blur-2xl md:h-96 md:w-96" />

          {/* 3D Illustration */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <img
              src="/portfolio1.png"
              alt="3D developer workspace with computer desk"
              className="h-auto w-full drop-shadow-[0_25px_25px_rgba(90,60,30,0.15)]"
            />
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-2 top-12 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl md:-left-8"
          >
            <p className="text-xs font-semibold text-[#827968]">
              Experience
            </p>

            <p className="text-2xl font-black text-[#F28B38]">
              Creative
            </p>
          </motion.div>

          {/* Floating Message */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-2 right-0 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl md:-right-5"
          >
            <p className="text-sm font-bold text-[#172033]">
              ✨ Let's build something!
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#172033] md:flex"
      >
        <span className="text-xs font-bold tracking-widest">
          SCROLL DOWN
        </span>

        <span className="h-8 w-5 rounded-full border-2 border-[#172033] p-1">
          <span className="mx-auto block h-2 w-1 rounded-full bg-[#F28B38]" />
        </span>
      </a>

    </section>
  );
}








