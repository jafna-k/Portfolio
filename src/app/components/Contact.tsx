
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby4uiNMtZ58ytruxqsdqpjEmAXWGOg2IH8XPPL7j6nvrCBxqmAFeROkEhKGUiY6-8Dz/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const formBody = new URLSearchParams();

      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("subject", formData.subject);
      formBody.append("message", formData.message);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setStatus(
        "Message sent! Thank you for contacting me."
      );

    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF8ED] via-[#FFF4E5] to-[#F4EBDD] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl relative z-10">

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
                href="mailto:jafnakalathingal@gmail.com"
                className="mt-2 inline-block break-all text-lg font-semibold transition hover:text-[#F6C94D]"
              >
                jafnakalathingal@gmail.com
              </a>
            </div>
"
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
                  href="https://github.com/jafna-k"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition hover:-translate-y-1 hover:border-[#F28B38] hover:bg-[#F28B38]"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/jafna-k-7472243b9/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition hover:-translate-y-1 hover:border-[#F28B38] hover:bg-[#F28B38]"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="https://www.instagram.com/jafnaaaah/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition hover:-translate-y-1 hover:border-[#F28B38] hover:bg-[#F28B38]"
                >
                  <FaInstagram size={22} />
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
            className="rounded-[2rem] border border-[#E9D8BE] bg-white/90 p-8 shadow-[0_15px_40px_rgba(185,165,140,0.15)] md:p-10"
          >
            <h3 className="text-2xl font-bold text-[#172033]">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-[#827968]">
              Fill in the details below to get in touch.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {[
                {
                  label: "Your Name",
                  name: "name",
                  placeholder: "Enter your name",
                  type: "text",
                },
                {
                  label: "Email Address",
                  name: "email",
                  placeholder: "Enter your email",
                  type: "email",
                },
                {
                  label: "Subject",
                  name: "subject",
                  placeholder: "Enter subject",
                  type: "text",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-sm font-semibold text-[#172033]">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    name={field.name}
                    value={
                      formData[
                        field.name as keyof typeof formData
                      ]
                    }
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full rounded-xl border border-[#E9D8BE] bg-[#FFF9F0] px-4 py-3 text-[#172033] outline-none transition focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20"
                  />
                </div>
              ))}

              {/* Message */}
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

              {/* Status */}
              {status && (
                <p
                  className="text-sm font-semibold text-center text-[#D96D24]"
                  role="status"
                >
                  {status}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#F28B38] px-6 py-4 font-bold text-white shadow-lg shadow-[#F28B38]/20 transition hover:-translate-y-1 hover:bg-[#D96D24] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Sending..."
                  : "Send Message →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
