
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Zap,
  Rocket,
  Lightbulb,
} from "lucide-react";

const stats = [
  { number: "02+", label: "Years Learning", icon: GraduationCap },
  { number: "5+", label: "Projects Built", icon: Code2 },
  { number: "8+", label: "Technologies", icon: Zap },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FFF9F0] px-5 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-[#F28B38]">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-black text-[#172033] md:text-6xl">
            About Me<span className="text-[#F28B38]">.</span>
          </h2>

          <p className="mt-4 text-base font-medium text-[#827968] md:text-lg">
            A little introduction about myself
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full"
            >
              <Image
                src="/about1.png"
                alt="My Profile"
                width={800}
                height={1000}
                priority
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 100vw, 620px"
              />
            </motion.div>

            {/* Dream Big */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              animate={{ y: [0, -8, 0] }}
              className="absolute -right-3 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg md:-right-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E2]">
                <Rocket className="text-[#F28B38]" size={23} />
              </div>

              <p className="font-bold text-[#172033]">
                Dream Big
              </p>
            </motion.div>

            {/* Think Creative */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              animate={{ y: [0, 8, 0] }}
              className="absolute -bottom-3 -left-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg md:-left-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E2]">
                <Lightbulb className="text-[#F28B38]" size={23} />
              </div>

              <p className="font-bold text-[#172033]">
                Think Creative
              </p>
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#F28B38]">
              WHO I AM
            </p>

            <h3 className="mb-6 text-3xl font-black leading-tight text-[#172033] md:text-4xl">
              Passionate About Building
              <span className="text-[#F28B38]">
                {" "}Digital Experiences.
              </span>
            </h3>

            <p className="mb-5 text-base font-medium leading-8 text-[#827968]">
              I'm a passionate Full Stack Developer specializing in the{" "}
              <span className="font-bold text-[#F28B38]">
                MERN Stack
              </span>
              . I enjoy building modern, responsive, and user-friendly web
              applications with clean and efficient code.
            </p>

            <p className="mb-10 text-base font-medium leading-8 text-[#827968]">
              My goal is to create meaningful web applications that combine
              great design with powerful functionality. I love learning new
              technologies and turning creative ideas into reality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-sm transition-all hover:shadow-lg"
                  >
                    <Icon
                      size={25}
                      strokeWidth={2}
                      className="mx-auto mb-3 text-[#F28B38]"
                    />

                    <h4 className="text-2xl font-black text-[#172033]">
                      {stat.number}
                    </h4>

                    <p className="mt-1 text-xs font-bold text-[#827968] sm:text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
