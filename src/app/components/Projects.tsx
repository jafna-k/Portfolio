

"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Dress E-Commerce",
    category: "Full Stack Development",
    description:
      "A modern online fashion shopping platform with products, cart, authentication and admin dashboard.",
    image: "/Ecommerce.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    number: "01",
  },
  {
    title: "Creative Portfolio",
    category: "Frontend Development",
    description:
      "A beautiful personal portfolio with creative animations, modern layouts and responsive design.",
    image: "/images/project2.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
    number: "02",
  },
  {
    title: "Dashboard UI",
    category: "Web Application",
    description:
      "A clean dashboard interface with statistics, data cards and interactive components.",
    image: "/images/project3.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    number: "03",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF9F0] px-5 py-24 md:px-12"
    >
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
            MY RECENT WORK
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#172033] md:text-6xl">
            My <span className="text-[#F28B38]">Projects.</span>
          </h2>

          <p className="mt-4 text-[#827968]">
            Some creative projects I have worked on
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, rotateX: 3, rotateY: -3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-[0_9px_0_#E9D8BE] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(120,80,30,0.15)]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-[#F4EBDD] p-4">
                <div className="absolute left-7 top-7 z-10 rounded-full bg-white px-4 py-2 text-sm font-black text-[#F28B38] shadow">
                  {project.number}
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F28B38]">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-black text-[#172033]">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-[#827968]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#F4EBDD] px-3 py-2 text-xs font-bold text-[#827968]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border-2 border-[#172033] py-3 text-center text-sm font-bold text-[#172033] transition hover:bg-[#172033] hover:text-white"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full bg-[#F28B38] py-3 text-center text-sm font-bold text-white  transition hover:translate-y-1 hover:shadow-[0_1px_0_#D96D24]"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-black text-[#172033] md:text-3xl">
            Have a project in mind?
          </h3>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-[#F28B38] px-8 py-4 font-bold text-white transition hover:translate-y-1 hover:shadow-[0_2px_0_#D96D24]"
          >
            Let's Work Together →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
