
export default function Education() {
  return (
    <section
      id="education"
      className="bg-zinc-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-purple-400 text-center mb-3">
          My Academic Background
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-purple-500">Education</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">

          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-purple-600/40"></div>

          <div className="relative pl-16">

            {/* Timeline dot */}
            <div className="absolute left-2 top-8 w-7 h-7 rounded-full bg-purple-600 border-4 border-zinc-950"></div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">

              <span className="text-purple-400 text-sm font-semibold">
                Bachelor's Degree
              </span>

              <h3 className="text-2xl font-bold mt-4 mb-3">
                Bachelor of Computer Applications
              </h3>

              <h4 className="text-xl text-purple-300 mb-4">
                BCA
              </h4>

              <p className="text-gray-400 leading-7">
                Studied computer applications, programming,
                database management and web development.
                Developed an interest in building modern
                web applications.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Computer Applications
                </span>

                <span className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Programming
                </span>

                <span className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Web Development
                </span>

              </div>

              <p className="text-gray-500 text-sm mt-6">
                Add College Name and Graduation Year
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
