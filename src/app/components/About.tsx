
export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-gray-300 text-lg leading-8 mb-6">
            Hello! I am a passionate Full Stack Developer
            interested in creating modern and responsive
            web applications.
          </p>

          <p className="text-gray-400 leading-8">
            I enjoy learning new technologies, solving
            problems and building creative projects.
            My goal is to develop user-friendly websites
            with clean and efficient code.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

          <div className="bg-zinc-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-purple-400">
              Developer
            </h3>
            <p className="text-gray-400 mt-2">
              Web Development
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-purple-400">
              Creative
            </h3>
            <p className="text-gray-400 mt-2">
              UI Design
            </p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-purple-400">
              Learner
            </h3>
            <p className="text-gray-400 mt-2">
              New Technologies
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
