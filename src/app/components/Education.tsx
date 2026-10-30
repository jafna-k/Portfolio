
"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap,CalendarDays,  } from "lucide-react";

const education = [
  {
    year: "2026 - Present",
    title: "MERN Stack Development",
    institution: "Full Stack Web Development",
    description: "MongoDB · Express · React · Node.js",
    icon: Code2,
  },
  {
    year: "2023 - 2026",
    title: "Bachelor of Computer Applications ",
    institution: "PPTM Arts and Science College",
    description:
      "Building a strong academic foundation and improving my knowledge and skills.",
    icon: GraduationCap,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#F5EBDD] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-[#F6C94D]/30 px-5 py-2 text-sm font-semibold text-[#D96D24]">
            MY JOURNEY
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#172033] md:text-5xl">
            Education &
            <span className="text-[#F28B38]"> Learning</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#827968]">
            My academic journey and the knowledge that
            helps me grow as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">

          {/* Timeline Line */}
          <div className="absolute left-6 top-4 h-[calc(100%-32px)] w-1 rounded-full bg-[#F6C94D] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">

            {education.map((item, index) => {
              const EducationIcon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex pl-16 md:pl-0 ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-[13px] top-7 z-10 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#FFF9F0] bg-[#F28B38] shadow-md md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  {/* Education Card */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      rotate: 0.5,
                    }}
                    className="w-full rounded-3xl border border-[#E9D8BE] bg-white p-6 shadow-[0_12px_30px_rgba(185,165,140,0.15)] transition-shadow hover:shadow-[0_18px_35px_rgba(242,139,56,0.15)] md:w-[45%]"
                  >

                    {/* Year & Icon */}
                    <div className="mb-4 flex items-center justify-between">

                      <span className="rounded-full bg-[#F6C94D]/30 px-4 py-2 text-xs font-bold text-[#D96D24]">
                        {item.year}
                      </span>

                      <EducationIcon
                        size={30}
                        strokeWidth={2}
                        className="text-[#172033]"
                      />

                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#172033]">
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <p className="mt-2 font-semibold text-[#F28B38]">
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-[#827968]">
                      {item.description}
                    </p>

                    {/* Calendar */}
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#D96D24]">
                      <CalendarDays size={18} />
                      <span>{item.year}</span>
                    </div>

                    {/* Bottom Line */}
                    <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-[#F4EBDD]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[#F6C94D] to-[#F28B38]"
                      />
                    </div>

                  </motion.div>
                </motion.div>
              );
            })}

          </div>
        </div>

      
{/* Bottom Note */}
<motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-16 rounded-[30px] bg-[#172033] p-8 text-center shadow-[0_10px_0_#B9A58C] md:p-12"
>
  <h3 className="mt-5 text-2xl font-black text-white md:text-3xl">
    Learning Never Stops!
  </h3>

  <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">
    I believe in continuous learning, exploring new
    technologies and improving my development skills.
  </p>
</motion.div>

      </div>
    </section>
  );
}