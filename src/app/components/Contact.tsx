
// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="bg-[#0a0a0a] text-white py-24 px-6"
//     >
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Get In <span className="text-purple-500">Touch</span>
//         </h2>

//         <p className="text-gray-400 text-center mb-12">
//           Have a project in mind? Feel free to contact me.
//         </p>

//         <form
//           action="https://formsubmit.co/YOUR_EMAIL"
//           method="POST"
//           className="space-y-6"
//         >
//           <input
//             type="hidden"
//             name="_subject"
//             value="New Portfolio Contact Message"
//           />

//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full bg-[#151515] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="w-full bg-[#151515] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition"
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={6}
//             required
//             className="w-full bg-[#151515] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition resize-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-full transition duration-300 hover:scale-[1.02]"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }







"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = "yourmail@gmail.com";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="bg-[#F4EBDD] px-6 py-24"
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
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#172033] md:text-5xl">
            Let's Work
            <span className="text-[#F28B38]"> Together</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[#827968]">
            Have a project idea or want to work together?
            Feel free to contact me.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid items-stretch gap-10 md:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-[#172033] p-8 text-white shadow-xl md:p-10"
          >
           

            <h3 className="mt-7 text-3xl font-bold">
              Let's talk about your project!
            </h3>

            <p className="mt-4 leading-7 text-[#D5D0C7]">
              I'm always interested in discussing new projects,
              creative ideas and opportunities.
            </p>

            {/* Email */}
            <div className="mt-10">
              <p className="text-sm text-[#F6C94D]">
                EMAIL ME
              </p>

              <a
                href="mailto:yourmail@gmail.com"
                className="mt-2 inline-block break-all text-lg font-semibold transition hover:text-[#F6C94D]"
              >
                yourmail@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="mt-7">
              <p className="text-sm text-[#F6C94D]">
                LOCATION
              </p>

              <p className="mt-2 text-lg font-semibold">
                Kerala, India
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="mb-4 text-sm text-[#F6C94D]">
                FOLLOW ME
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/20 px-5 py-3 transition hover:border-[#F28B38] hover:bg-[#F28B38]"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/20 px-5 py-3 transition hover:border-[#F28B38] hover:bg-[#F28B38]"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/20 px-5 py-3 transition hover:border-[#F28B38] hover:bg-[#F28B38]"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-[#E9D8BE] bg-white p-8 shadow-[0_15px_40px_rgba(185,165,140,0.15)] md:p-10"
          >
            <h3 className="text-2xl font-bold text-[#172033]">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-[#827968]">
              Fill in the details below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#172033]">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-[#E9D8BE] bg-[#FFF9F0] px-4 py-3 text-[#172033] outline-none transition focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#172033]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-[#E9D8BE] bg-[#FFF9F0] px-4 py-3 text-[#172033] outline-none transition focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#172033]">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-xl border border-[#E9D8BE] bg-[#FFF9F0] px-4 py-3 text-[#172033] outline-none transition focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#172033]">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-[#E9D8BE] bg-[#FFF9F0] px-4 py-3 text-[#172033] outline-none transition focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#F28B38] px-6 py-4 font-bold text-white shadow-lg shadow-[#F28B38]/20 transition hover:-translate-y-1 hover:bg-[#D96D24]"
              >
                Send Message →
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
