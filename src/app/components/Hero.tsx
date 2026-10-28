
// import SocialLinks from "./SocialLinks";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6"
//     >
//       <div className="text-center max-w-4xl mx-auto">

//         {/* Welcome Text */}
//         <p className="text-purple-400 text-lg mb-5">
//           Welcome to my portfolio
//         </p>

//         {/* Name */}
//         <h1 className="text-5xl md:text-7xl font-bold mb-6">
//           Hi, I'm{" "}
//           <span className="text-purple-500">
//             JAFNA K
//           </span>
//         </h1>

//         {/* Role */}
//         <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
//           Full Stack Developer
//         </h2>

//         {/* Description */}
//         <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-8">
//           I create beautiful and responsive websites
//           using modern web technologies like HTML, CSS,
//           JavaScript, React, Next.js, Node.js and MongoDB.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-center gap-5">

//           <a
//             href="#projects"
//             className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-transparent hover:text-purple-400 hover:scale-105 transition-all duration-300"
//           >
//             View Projects
//           </a>

//           <a
//             href="#contact"
//             className="bg-transparent text-purple-400 px-8 py-3 rounded-full font-semibold border-2 border-purple-500 hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300"
//           >
//             Contact Me
//           </a>

//         </div>

//         {/* Social Links */}
//         <SocialLinks />

//       </div>
//     </section>
//   );
// }






"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F4EBDD] px-5 pb-16 pt-32 md:px-12"
    >
      {/* Background decoration */}
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
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-bold text-[#F28B38] shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for opportunities
          </span>

          <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight text-[#172033] sm:text-6xl xl:text-7xl">
            Hi, I'm
            <span className="block text-[#F28B38]">
              Jafna 
            </span>
            <span className="block text-3xl sm:text-4xl xl:text-5xl">
              Creative Developer
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#827968] lg:mx-0">
            I create beautiful digital experiences with modern
            technologies, creative ideas and interactive designs.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="#contact"
              className="rounded-full bg-[#F28B38] px-8 py-4 font-bold text-white shadow-[0_6px_0_#D96D24] transition-all hover:translate-y-1 hover:shadow-[0_2px_0_#D96D24]"
            >
              Get in touch →
            </Link>

            <Link
              href="#projects"
              className="rounded-full border-2 border-[#172033] px-8 py-4 font-bold text-[#172033] transition-all hover:bg-[#172033] hover:text-white"
            >
              View Projects
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-5 lg:justify-start">
            <span className="text-sm font-semibold text-[#827968]">
              Follow me:
            </span>

            <a href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#172033] transition hover:text-[#F28B38]">
              GitHub
            </a>

            <a href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#172033] transition hover:text-[#F28B38]">
              LinkedIn
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
          {/* Floating background circle */}
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
              src="portfolio.png"
              alt="3D developer workspace with computer desk"
              className="h-auto w-full drop-shadow-[0_25px_25px_rgba(90,60,30,0.15)]"
            />
          </motion.div>

          {/* Floating Badge */}
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

      {/* Scroll indicator */}
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

