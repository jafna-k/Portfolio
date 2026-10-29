

"use client";

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
  { number: "15+", label: "Projects Built", icon: Code2 },
  { number: "10+", label: "Technologies", icon: Zap },
];

const interests = [
  "Web Development",
  "Problem Solving",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF9F0] px-5 py-24 md:px-12"
    >
      {/* Background Decorations */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#F6C94D]/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#F28B38]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-[#F28B38]">
            GET TO KNOW ME
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#172033] md:text-6xl">
            About <span className="text-[#F28B38]">Me.</span>
          </h2>

          <p className="mt-4 text-[#827968]">
            A little introduction about myself
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Developer Card - No Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative flex min-h-[400px] flex-col items-center justify-center rounded-[35px] border border-orange-100 bg-[#F4EBDD] p-7 shadow-[12px_15px_0px_#E9D8BE]"
            >
              {/* Developer Icon */}
              <div className="flex h-64 w-full items-center justify-center rounded-[25px] bg-gradient-to-br from-[#F6C94D]/40 to-[#F28B38]/30">
                <Code2
                  size={115}
                  strokeWidth={1.5}
                  className="text-[#172033]"
                />
              </div>

              {/* Profile Content */}
              <div className="mt-7 text-center">
                <h3 className="text-3xl font-black text-[#172033]">
                  Creative Developer
                </h3>

                <p className="mt-2 text-[#827968]">
                  Building ideas into digital experiences.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#172033] shadow-sm">
                  <Lightbulb size={20} className="text-[#172033]" />
                  Passionate Creator
                </div>
              </div>
            </motion.div>

            {/* Floating Dream Badge */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl"
            >
              <Rocket size={28} className="text-[#172033]" />

              <p className="text-sm font-bold text-[#172033]">
                Dream Big
              </p>
            </motion.div>

            {/* Floating Creative Badge */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-2xl bg-[#F28B38] px-5 py-4 shadow-xl"
            >
              <Lightbulb size={22} className="text-[#172033]" />

              <p className="font-bold text-white">
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
            <span className="text-sm font-bold tracking-widest text-[#F28B38]">
              WHO AM I?
            </span>

            <h3 className="mt-5 text-3xl font-black leading-tight text-[#172033] md:text-4xl">
              I Love Creating
              <span className="text-[#F28B38]">
                {" "}Digital Things.
              </span>
            </h3>

            <p className="mt-6 leading-8 text-[#827968]">
              Hello! I'm a passionate developer who enjoys
              creating modern websites and interactive digital
              experiences. I love exploring new technologies
              and turning creative ideas into reality.
            </p>

            <p className="mt-4 leading-8 text-[#827968]">
              My goal is to build beautiful, user-friendly
              and meaningful digital products while continuously
              improving my skills.
            </p>

            {/* Interests */}
            <div className="mt-8">
              <h4 className="mb-4 font-bold text-[#172033]">
                My Interests
              </h4>

              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-[#F28B38] shadow-sm transition-all hover:-translate-y-1 hover:bg-[#F28B38] hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="mt-24 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="group rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-[0_8px_0_#E9D8BE] transition-all hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F28B38]">
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    className="text-[#172033] transition-colors group-hover:text-[#172033]"
                  />
                </div>

                {/* Number */}
                <h3 className="mt-5 text-4xl font-black text-[#F28B38]">
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="mt-2 font-semibold text-[#827968]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}