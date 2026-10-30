


// "use client";

// import { motion } from "framer-motion";

// import {
//   SiHtml5,
//   SiCss,
//   SiJavascript,
//   SiReact,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiMongodb,
// } from "react-icons/si";

// const skills = [
//   { name: "HTML", label: "MARKUP", icon: SiHtml5, color: "#E34F26" },
//   { name: "CSS", label: "STYLING", icon: SiCss, color: "#1572B6" },
//   { name: "JavaScript", label: "INTERACTIVITY", icon: SiJavascript, color: "#F7DF1E" },
//   { name: "React", label: "FRONTEND", icon: SiReact, color: "#61DAFB" },
//   { name: "Next.js", label: "FRAMEWORK", icon: SiNextdotjs, color: "#000000" },
//   { name: "Tailwind CSS", label: "DESIGN", icon: SiTailwindcss, color: "#06B6D4" },
//   { name: "Node.js", label: "RUNTIME", icon: SiNodedotjs, color: "#339933" },
//   { name: "MongoDB", label: "DATABASE", icon: SiMongodb, color: "#47A248" },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-[#F4EBDD] px-5 py-24 md:px-12"
//     >
//       {/* Background */}
//       <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#F6C94D]/20 blur-3xl" />

//       <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#F28B38]/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 text-center"
//         >
//           <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-[#F28B38]">
//             MY EXPERTISE
//           </span>

//           <h2 className="mt-6 text-4xl font-black text-[#172033] md:text-6xl">
//             My <span className="text-[#F28B38]">Skills.</span>
//           </h2>

//           <p className="mt-4 text-[#827968]">
//             Technologies and tools I work with
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
//           {skills.map((skill, index) => {
//             const SkillIcon = skill.icon;

//             return (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.08,
//                 }}
//                 whileHover={{
//                   y: -12,
//                   rotateX: 6,
//                   rotateY: -5,
//                 }}
//                 className="group rounded-3xl border border-orange-100 bg-[#FFF9F0] p-7 shadow-[0_8px_0_#E9D8BE] transition-all duration-300 hover:shadow-[0_14px_25px_rgba(120,80,30,0.15)]"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 {/* Skill Icon */}
//                 <div
//                   className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
//                   style={{
//                     backgroundColor: `${skill.color}18`,
//                   }}
//                 >
//                   <SkillIcon size={38} color={skill.color} />
//                 </div>

//                 {/* Skill Name */}
//                 <h3 className="mt-6 text-xl font-black text-[#172033]">
//                   {skill.name}
//                 </h3>

//                 {/* Skill Category */}
//                 <p className="mt-3 text-xs font-extrabold tracking-[0.25em] text-[#F28B38]">
//                   {skill.label}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-16 rounded-[30px] bg-[#172033] p-8 text-center shadow-[0_10px_0_#B9A58C] md:p-12"
//         >
//           <h3 className="mt-5 text-2xl font-black text-white md:text-3xl">
//             Always Learning, Always Growing!
//           </h3>

//           <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">
//             I continuously explore new technologies and improve
//             my development skills to create better digital experiences.
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
  { name: "HTML", label: "MARKUP", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", label: "STYLING", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", label: "INTERACTIVITY", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", label: "FRONTEND", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", label: "FRAMEWORK", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", label: "DESIGN", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", label: "RUNTIME", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", label: "DATABASE", icon: SiMongodb, color: "#47A248" },
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

                {/* Skill Category */}
                <p className="mt-3 text-sm font-normal text-[#F28B38]">
                  {skill.label}
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


