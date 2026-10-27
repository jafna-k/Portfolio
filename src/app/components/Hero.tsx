
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl mx-auto">

        {/* Welcome Text */}
        <p className="text-purple-400 text-lg mb-5">
          Welcome to my portfolio
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-purple-500">
            JAFNA K
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Full Stack Developer
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-8">
          I create beautiful and responsive websites
          using modern web technologies like HTML, CSS,
          JavaScript, React, Next.js, Node.js and MongoDB.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="#projects"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-transparent hover:text-purple-400 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="bg-transparent text-purple-400 px-8 py-3 rounded-full font-semibold border-2 border-purple-500 hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>

        </div>

        {/* Social Links */}
        <SocialLinks />

      </div>
    </section>
  );
}
