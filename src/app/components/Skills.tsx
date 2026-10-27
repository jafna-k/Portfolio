
// const skills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "MongoDB",
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="bg-zinc-950 text-white py-24 px-6"
//     >
//       <div className="max-w-5xl mx-auto">

//         <h2 className="text-4xl font-bold text-center mb-4">
//           My <span className="text-purple-500">Skills</span>
//         </h2>

//         <p className="text-gray-400 text-center mb-12">
//           Technologies I work with
//         </p>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//           {skills.map((skill) => (
//             <div
//               key={skill}
//               className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl text-center hover:border-purple-500 hover:scale-105 transition"
//             >
//               <h3 className="text-xl font-semibold text-purple-400">
//                 {skill}
//               </h3>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }





const skills = [
  {
    name: "HTML",
    description: "Web Structure",
    level: "Frontend",
  },
  {
    name: "CSS",
    description: "Web Styling",
    level: "Frontend",
  },
  {
    name: "JavaScript",
    description: "Programming",
    level: "Frontend",
  },
  {
    name: "React",
    description: "UI Development",
    level: "Frontend",
  },
  {
    name: "Next.js",
    description: "React Framework",
    level: "Frontend",
  },
  {
    name: "Node.js",
    description: "Backend Development",
    level: "Backend",
  },
  {
    name: "MongoDB",
    description: "Database",
    level: "Database",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-purple-400 text-center mb-3">
          What I Know
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <p className="text-gray-400 text-center mb-14">
          Technologies and tools I use to build modern websites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-purple-600/15 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                <span className="text-2xl font-bold text-purple-400 group-hover:text-white">
                  {skill.name === "JavaScript"
                    ? "JS"
                    : skill.name === "MongoDB"
                    ? "DB"
                    : skill.name === "Next.js"
                    ? "N"
                    : skill.name === "Node.js"
                    ? "Node"
                    : skill.name === "React"
                    ? "R"
                    : skill.name.slice(0, 1)}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
                {skill.name}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {skill.description}
              </p>

              <span className="text-xs text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full">
                {skill.level}
              </span>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
