
// export default function Education() {
//   return (
//     <section
//       id="education"
//       className="bg-zinc-950 text-white py-24 px-6"
//     >
//       <div className="max-w-5xl mx-auto">

//         <p className="text-purple-400 text-center mb-3">
//           My Academic Background
//         </p>

//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           My <span className="text-purple-500">Education</span>
//         </h2>

//         <div className="relative max-w-3xl mx-auto">

//           {/* Timeline line */}
//           <div className="absolute left-5 top-0 bottom-0 w-1 bg-purple-600/40"></div>

//           <div className="relative pl-16">

//             {/* Timeline dot */}
//             <div className="absolute left-2 top-8 w-7 h-7 rounded-full bg-purple-600 border-4 border-zinc-950"></div>

//             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">

//               <span className="text-purple-400 text-sm font-semibold">
//                 Bachelor's Degree
//               </span>

//               <h3 className="text-2xl font-bold mt-4 mb-3">
//                 Bachelor of Computer Applications
//               </h3>

//               <h4 className="text-xl text-purple-300 mb-4">
//                 BCA
//               </h4>

//               <p className="text-gray-400 leading-7">
//                 Studied computer applications, programming,
//                 database management and web development.
//                 Developed an interest in building modern
//                 web applications.
//               </p>

//               <div className="mt-6 flex flex-wrap gap-3">

//                 <span className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm">
//                   Computer Applications
//                 </span>

//                 <span className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm">
//                   Programming
//                 </span>

//                 <span className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm">
//                   Web Development
//                 </span>

//               </div>

//               <p className="text-gray-500 text-sm mt-6">
//                 Add College Name and Graduation Year
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2022 – 2025",
    title: "Your Degree / Course",
    institution: "Your College / Institution",
    description:
      "Add your course details, major subjects and achievements here.",
    icon: "🎓",
  },
  {
    year: "2020 – 2022",
    title: "Higher Secondary Education",
    institution: "Your School Name",
    description:
      "Add your stream, subjects and academic achievements here.",
    icon: "📚",
  },
  // {
  //   year: "2019 – 2020",
  //   title: "SSLC",
  //   institution: "Your School Name",
  //   description:
  //     "Add your school details and achievements here.",
  //   icon: "🏫",
  // },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#FFF9F0] px-6 py-24"
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

          {/* Timeline line */}
          <div className="absolute left-6 top-4 h-[calc(100%-32px)] w-1 rounded-full bg-[#F6C94D] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex pl-16 md:pl-0 ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] top-7 z-10 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#FFF9F0] bg-[#F28B38] shadow-md md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6, rotate: 0.5 }}
                  className="w-full rounded-3xl border border-[#E9D8BE] bg-white p-6 shadow-[0_12px_30px_rgba(185,165,140,0.15)] transition-shadow hover:shadow-[0_18px_35px_rgba(242,139,56,0.15)] md:w-[45%]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-[#F6C94D]/30 px-4 py-2 text-xs font-bold text-[#D96D24]">
                      {item.year}
                    </span>

                    <span className="text-3xl">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#172033]">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-semibold text-[#F28B38]">
                    {item.institution}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#827968]">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl bg-[#F4EBDD] p-8 text-center"
        >
          <span className="text-4xl">💡</span>

          <h3 className="mt-4 text-2xl font-bold text-[#172033]">
            Learning Never Stops!
          </h3>

          <p className="mt-3 text-[#827968]">
            I believe in continuous learning, exploring new
            technologies and improving my development skills.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
