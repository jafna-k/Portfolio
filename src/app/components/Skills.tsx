


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











// "use client";

// import { motion } from "framer-motion";

// const skills = [
//   {
//     name: "HTML",
//     description: "Web Structure",
//     level: "Frontend",
//     icon: "H",
//   },
//   {
//     name: "CSS",
//     description: "Web Styling",
//     level: "Frontend",
//     icon: "C",
//   },
//   {
//     name: "JavaScript",
//     description: "Programming",
//     level: "Frontend",
//     icon: "JS",
//   },
//   {
//     name: "React",
//     description: "UI Development",
//     level: "Frontend",
//     icon: "R",
//   },
//   {
//     name: "Next.js",
//     description: "React Framework",
//     level: "Frontend",
//     icon: "N",
//   },
//   {
//     name: "Node.js",
//     description: "Backend Development",
//     level: "Backend",
//     icon: "Node",
//   },
//   {
//     name: "MongoDB",
//     description: "Database",
//     level: "Database",
//     icon: "DB",
//   },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="overflow-hidden bg-[#F4EBDD] px-6 py-24"
//     >
//       <div className="mx-auto max-w-6xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-20 text-center"
//         >
//           <span className="rounded-full bg-[#F6C94D]/30 px-5 py-2 text-sm font-bold text-[#D96D24]">
//             WHAT I KNOW
//           </span>

//           <h2 className="mt-6 text-4xl font-extrabold text-[#172033] md:text-5xl">
//             My{" "}
//             <span className="text-[#F28B38]">
//               Skills
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-xl text-[#827968]">
//             Technologies and tools I use to build modern
//             websites and creative digital experiences.
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 45, rotateX: 15 }}
//               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.08,
//               }}
//               whileHover={{
//                 y: -12,
//                 rotate: -2,
//                 scale: 1.03,
//               }}
//               className="group relative cursor-pointer"
//             >

//               {/* Subtle card depth - no orange shadow */}
//               <div className="absolute inset-0 rounded-3xl bg-[#E9D8BE] opacity-60 blur-sm" />

//               {/* Main Card */}
//               <div className="relative rounded-3xl border border-[#E9D8BE] bg-[#FFF9F0] p-7 shadow-[0_12px_25px_rgba(185,165,140,0.15)] transition-all duration-300 group-hover:border-[#F28B38] group-hover:shadow-[0_18px_30px_rgba(185,165,140,0.2)]">

               
//                 {/* Icon Box */}
//                 <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F28B38] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#F6C94D]">

//                   <span className="text-xl font-extrabold text-white transition-colors group-hover:text-[#172033]">
//                     {skill.icon}
//                   </span>

//                 </div>

//                 {/* Skill Name */}
//                 <h3 className="text-xl font-extrabold text-[#172033] transition-colors group-hover:text-[#D96D24]">
//                   {skill.name}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-2 text-sm text-[#827968]">
//                   {skill.description}
//                 </p>

//                 {/* Category */}
//                 <div className="mt-6">
//                   <span className="rounded-full bg-[#F6C94D]/30 px-4 py-2 text-xs font-bold text-[#D96D24]">
//                     {skill.level}
//                   </span>
//                 </div>

//                 {/* Bottom Decoration */}
//                 <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-[#E9D8BE]">
//                   <div className="h-full w-0 rounded-full bg-[#F28B38] transition-all duration-700 group-hover:w-full" />
//                 </div>

//               </div>
//             </motion.div>
//           ))}

//         </div>

//         {/* Bottom Message */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-20 text-center"
//         >
//           <p className="text-lg font-semibold text-[#172033]">
//             Always Learning. Always Building.
//           </p>

//           <p className="mt-2 text-sm text-[#827968]">
//             Exploring new technologies and improving my skills every day.
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";



const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F4EBDD] px-5 py-24 md:px-12"
    >
      {/* Background */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#F6C94D]/20 blur-3xl" />

      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#F28B38]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-[#F28B38]">
            MY EXPERTISE
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#172033] md:text-6xl">
            My <span className="text-[#F28B38]">Skills.</span>
          </h2>

          <p className="mt-4 text-[#827968]">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -12,
                  rotateX: 6,
                  rotateY: -5,
                }}
                className="group rounded-3xl border border-orange-100 bg-[#FFF9F0] p-7 shadow-[0_8px_0_#E9D8BE] transition-all duration-300 hover:shadow-[0_14px_25px_rgba(120,80,30,0.15)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Skill Icon */}
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    backgroundColor: `${skill.color}18`,
                  }}
                >
                  <SkillIcon size={38} color={skill.color} />
                </div>

                {/* Skill Name */}
                <h3 className="mt-6 text-xl font-black text-[#172033]">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#827968]">
                  {skill.name} development
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[30px] bg-[#172033] p-8 text-center shadow-[0_10px_0_#B9A58C] md:p-12"
        >
        {/* Rocket Icon */}


          <h3 className="mt-5 text-2xl font-black text-white md:text-3xl">
            Always Learning, Always Growing!
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">
            I continuously explore new technologies and improve
            my development skills to create better digital experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}