


// const skills = [
//   {
//     name: "HTML",
//     description: "Web Structure",
//     level: "Frontend",
//   },
//   {
//     name: "CSS",
//     description: "Web Styling",
//     level: "Frontend",
//   },
//   {
//     name: "JavaScript",
//     description: "Programming",
//     level: "Frontend",
//   },
//   {
//     name: "React",
//     description: "UI Development",
//     level: "Frontend",
//   },
//   {
//     name: "Next.js",
//     description: "React Framework",
//     level: "Frontend",
//   },
//   {
//     name: "Node.js",
//     description: "Backend Development",
//     level: "Backend",
//   },
//   {
//     name: "MongoDB",
//     description: "Database",
//     level: "Database",
//   },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="bg-zinc-950 text-white py-24 px-6"
//     >
//       <div className="max-w-6xl mx-auto">

//         <p className="text-purple-400 text-center mb-3">
//           What I Know
//         </p>

//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
//           My <span className="text-purple-500">Skills</span>
//         </h2>

//         <p className="text-gray-400 text-center mb-14">
//           Technologies and tools I use to build modern websites.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
//             >

//               <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-purple-600/15 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
//                 <span className="text-2xl font-bold text-purple-400 group-hover:text-white">
//                   {skill.name === "JavaScript"
//                     ? "JS"
//                     : skill.name === "MongoDB"
//                     ? "DB"
//                     : skill.name === "Next.js"
//                     ? "N"
//                     : skill.name === "Node.js"
//                     ? "Node"
//                     : skill.name === "React"
//                     ? "R"
//                     : skill.name.slice(0, 1)}
//                 </span>
//               </div>

//               <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
//                 {skill.name}
//               </h3>

//               <p className="text-gray-400 text-sm mb-4">
//                 {skill.description}
//               </p>

//               <span className="text-xs text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full">
//                 {skill.level}
//               </span>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    description: "Web Structure",
    level: "Frontend",
    icon: "H",
  },
  {
    name: "CSS",
    description: "Web Styling",
    level: "Frontend",
    icon: "C",
  },
  {
    name: "JavaScript",
    description: "Programming",
    level: "Frontend",
    icon: "JS",
  },
  {
    name: "React",
    description: "UI Development",
    level: "Frontend",
    icon: "R",
  },
  {
    name: "Next.js",
    description: "React Framework",
    level: "Frontend",
    icon: "N",
  },
  {
    name: "Node.js",
    description: "Backend Development",
    level: "Backend",
    icon: "Node",
  },
  {
    name: "MongoDB",
    description: "Database",
    level: "Database",
    icon: "DB",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="overflow-hidden bg-[#F4EBDD] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full bg-[#F6C94D]/30 px-5 py-2 text-sm font-bold text-[#D96D24]">
            WHAT I KNOW
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#172033] md:text-5xl">
            My{" "}
            <span className="text-[#F28B38]">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[#827968]">
            Technologies and tools I use to build modern
            websites and creative digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 45, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                rotate: -2,
                scale: 1.03,
              }}
              className="group relative cursor-pointer"
            >

              {/* Subtle card depth - no orange shadow */}
              <div className="absolute inset-0 rounded-3xl bg-[#E9D8BE] opacity-60 blur-sm" />

              {/* Main Card */}
              <div className="relative rounded-3xl border border-[#E9D8BE] bg-[#FFF9F0] p-7 shadow-[0_12px_25px_rgba(185,165,140,0.15)] transition-all duration-300 group-hover:border-[#F28B38] group-hover:shadow-[0_18px_30px_rgba(185,165,140,0.2)]">

               
                {/* Icon Box */}
                <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F28B38] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#F6C94D]">

                  <span className="text-xl font-extrabold text-white transition-colors group-hover:text-[#172033]">
                    {skill.icon}
                  </span>

                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-extrabold text-[#172033] transition-colors group-hover:text-[#D96D24]">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-[#827968]">
                  {skill.description}
                </p>

                {/* Category */}
                <div className="mt-6">
                  <span className="rounded-full bg-[#F6C94D]/30 px-4 py-2 text-xs font-bold text-[#D96D24]">
                    {skill.level}
                  </span>
                </div>

                {/* Bottom Decoration */}
                <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-[#E9D8BE]">
                  <div className="h-full w-0 rounded-full bg-[#F28B38] transition-all duration-700 group-hover:w-full" />
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg font-semibold text-[#172033]">
            Always Learning. Always Building.
          </p>

          <p className="mt-2 text-sm text-[#827968]">
            Exploring new technologies and improving my skills every day.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
