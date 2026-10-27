
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-white py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Have a project in mind? Feel free to contact me.
        </p>

        <form
          action="https://formsubmit.co/YOUR_EMAIL"
          method="POST"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Message"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-[#151515] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-[#151515] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="w-full bg-[#151515] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition resize-none"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-full transition duration-300 hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
