
const projects = [
  {
    number: "01",
    title: "Dress E-Commerce Website",
    category: "Full Stack Development",
    description:
      "A complete online dress shopping platform with user authentication, product management, shopping cart, orders, payments and admin dashboard.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/jafna-k/Ecommerce-Frontend",
  },
  {
    number: "02",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A responsive personal portfolio website to showcase my profile, technical skills, projects and contact information.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-purple-400 text-center mb-3">
          My Recent Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Some projects I have worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.number}
              className="group bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex justify-between items-center mb-7">

                <span className="text-purple-500 text-4xl font-bold">
                  {project.number}
                </span>

                <span className="text-xs text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full">
                  {project.category}
                </span>

              </div>

              <h3 className="text-2xl font-bold mb-5 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-zinc-800 text-purple-300 px-4 py-2 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                View on GitHub →
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
