
// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const mailTo = "yourmail@gmail.com";

//     const emailSubject = encodeURIComponent(formData.subject);
//     const emailBody = encodeURIComponent(
//       `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
//     );

//     window.location.href = `mailto:${mailTo}?subject=${emailSubject}&body=${emailBody}`;
//   };

//   const inputStyle =
//     "w-full rounded-xl border border-[#E9D8BE] bg-[#FFFCF7] px-5 py-4 text-sm text-[#172033] outline-none transition-all duration-300 placeholder:text-[#A69A88] focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20";

//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-gradient-to-br from-[#FFF8ED] via-[#FFF4E5] to-[#F4EBDD] px-6 py-24"
//     >
//       <div className="relative mx-auto max-w-7xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <p className="mb-4 text-sm font-bold tracking-[0.3em] text-[#F28B38]">
//             GET IN TOUCH
//           </p>

//           <h2 className="text-4xl font-bold text-[#172033] md:text-5xl">
//             Let's Work Together
//           </h2>

//           <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#827968]">
//             Have a project in mind or just want to say hello? Feel free to
//             contact me. I'd love to hear from you!
//           </p>
//         </motion.div>

//         {/* Contact Cards */}
//         <div className="grid gap-8 lg:grid-cols-2">

//           {/* Left Contact Card */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="rounded-[30px] bg-[#172033] p-8 text-white shadow-[0_15px_40px_rgba(23,32,51,0.15)] md:p-10"
//           >
//             <h3 className="text-3xl font-bold leading-snug md:text-4xl">
//               Let's talk about
//               <span className="block text-[#F28B38]">
//                 your project!
//               </span>
//             </h3>

//             <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
//               I'm always excited to work on new projects, creative ideas,
//               and opportunities. Let's connect and create something amazing
//               together.
//             </p>

//             {/* Contact Details */}
//             <div className="mt-10 space-y-7">

//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F28B38]/15 text-[#F28B38]">
//                   <FaEnvelope size={20} />
//                 </div>

//                 <div>
//                   <p className="text-xs text-white/50">EMAIL ME</p>
//                   <a
//                     href="mailto:yourmail@gmail.com"
//                     className="mt-1 text-sm font-medium transition-colors hover:text-[#F28B38]"
//                   >
//                     yourmail@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F28B38]/15 text-[#F28B38]">
//                   <FaMapMarkerAlt size={20} />
//                 </div>

//                 <div>
//                   <p className="text-xs text-white/50">LOCATION</p>
//                   <p className="mt-1 text-sm font-medium">
//                     Kerala, India
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Icons Only */}
//             <div className="mt-12">
//               <p className="mb-5 text-sm font-semibold tracking-widest text-[#F6C94D]">
//                 FOLLOW ME
//               </p>

//               <div className="flex gap-4">

//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="GitHub"
//                   className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F28B38] hover:bg-[#F28B38]"
//                 >
//                   <FaGithub size={22} />
//                 </a>

//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="LinkedIn"
//                   className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F28B38] hover:bg-[#F28B38]"
//                 >
//                   <FaLinkedin size={22} />
//                 </a>

//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="Instagram"
//                   className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F28B38] hover:bg-[#F28B38]"
//                 >
//                   <FaInstagram size={22} />
//                 </a>

//               </div>
//             </div>
//           </motion.div>

//           {/* Right Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="rounded-[30px] border border-[#E9D8BE] bg-white p-8 shadow-[0_15px_40px_rgba(23,32,51,0.06)] md:p-10"
//           >
//             <h3 className="text-2xl font-bold text-[#172033]">
//               Send Me a Message
//             </h3>

//             <p className="mt-3 text-sm leading-6 text-[#827968]">
//               Fill out the form below and I'll get back to you as soon as
//               possible.
//             </p>

//             <form onSubmit={handleSubmit} className="mt-8 space-y-5">

//               {/* Name */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#172033]">
//                   Your Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   required
//                   className={inputStyle}
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#172033]">
//                   Your Email
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                   className={inputStyle}
//                 />
//               </div>

//               {/* Subject */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#172033]">
//                   Subject
//                 </label>

//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Enter subject"
//                   required
//                   className={inputStyle}
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#172033]">
//                   Your Message
//                 </label>

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Write your message..."
//                   rows={5}
//                   required
//                   className={`${inputStyle} resize-none`}
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#F28B38] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#F28B38]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D96D24] hover:shadow-xl"
//               >
//                 Send Message
//                 <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>
//               </button>

//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const email = "yourmail@gmail.com";

//     const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
//       formData.subject
//     )}&body=${encodeURIComponent(
//       `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
//     )}`;

//     window.location.href = mailtoLink;
//   };

//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-gradient-to-br from-[#FFF8ED] via-[#FFF4E5] to-[#F4EBDD] px-6 py-24"
//     >
//       <div className="mx-auto max-w-6xl relative z-10">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <span className="rounded-full bg-[#F6C94D]/30 px-5 py-2 text-sm font-semibold text-[#D96D24]">
//             GET IN TOUCH
//           </span>

//           <h2 className="mt-5 text-4xl font-extrabold text-[#172033] md:text-5xl">
//             Let's Work
//             <span className="text-[#F28B38]"> Together</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-[#827968]">
//             Have a project idea or want to work together?
//             Feel free to contact me.
//           </p>
//         </motion.div>

//         {/* Contact Layout */}
//         <div className="grid items-stretch gap-10 md:grid-cols-2">

//           {/* Left Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="rounded-[2rem] bg-[#172033] p-8 text-white shadow-xl md:p-10"
//           >
//             <h3 className="mt-7 text-3xl font-bold">
//               Let's talk about your project!
//             </h3>

//             <p className="mt-4 leading-7 text-[#D5D0C7]">
//               I'm always interested in discussing new projects,
//               creative ideas and opportunities.
//             </p>

//             {/* Email */}
//             <div className="mt-10">
//               <p className="text-sm text-[#F6C94D]">
//                 EMAIL ME
//               </p>

//               <a
//                 href="mailto:yourmail@gmail.com"
//                 className="mt-2 inline-block break-all text-lg font-semibold transition hover:text-[#F6C94D]"
//               >
//                 yourmail@gmail.com
//               </a>
//             </div>

//             {/* Location */}
//             <div className="mt-7">
//               <p className="text-sm text-[#F6C94D]">
//                 LOCATION
//               </p>

//               <p className="mt-2 text-lg font-semibold">
//                 Kerala, India
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="mt-10">
//               <p className="mb-4 text-sm text-[#F6C94D]">
//                 FOLLOW ME
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="rounded-xl border border-white/20 px-5 py-3 transition hover:border-[#F28B38] hover:bg-[#F28B38]"
//                 >
//                   GitHub ↗
//                 </a>

//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="rounded-xl border border-white/20 px-5 py-3 transition hover:border-[#F28B38] hover:bg-[#F28B38]"
//                 >
//                   LinkedIn ↗
//                 </a>

//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="rounded-xl border border-white/20 px-5 py-3 transition hover:border-[#F28B38] hover:bg-[#F28B38]"
//                 >
//                   Instagram ↗
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="rounded-[2rem] border border-[#E9D8BE] bg-white/90 p-8 shadow-[0_15px_40px_rgba(185,165,140,0.15)] md:p-10"
//           >
//             <h3 className="text-2xl font-bold text-[#172033]">
//               Send Me a Message
//             </h3>

//             <p className="mt-2 text-sm text-[#827968]">
//               Fill in the details below to get in touch.
//             </p>

//             <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//               {[
//                 { label: "Your Name", name: "name", placeholder: "Enter your name", type: "text" },
//                 { label: "Email Address", name: "email", placeholder: "Enter your email", type: "email" },
//                 { label: "Subject", name: "subject", placeholder: "Enter subject", type: "text" },
//               ].map((field) => (
//                 <div key={field.name}>
//                   <label className="mb-2 block text-sm font-semibold text-[#172033]">
//                     {field.label}
//                   </label>

//                   <input
//                     type={field.type}
//                     name={field.name}
//                     value={formData[field.name as keyof typeof formData]}
//                     onChange={handleChange}
//                     placeholder={field.placeholder}
//                     required
//                     className="w-full rounded-xl border border-[#E9D8BE] bg-[#FFF9F0] px-4 py-3 text-[#172033] outline-none transition focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20"
//                   />
//                 </div>
//               ))}

//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-[#172033]">
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Write your message..."
//                   rows={5}
//                   required
//                   className="w-full resize-none rounded-xl border border-[#E9D8BE] bg-[#FFF9F0] px-4 py-3 text-[#172033] outline-none transition focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full rounded-xl bg-[#F28B38] px-6 py-4 font-bold text-white shadow-lg shadow-[#F28B38]/20 transition hover:-translate-y-1 hover:bg-[#D96D24]"
//               >
//                 Send Message →
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

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

            {/* Social Links - Icons Only */}
            <div className="mt-10">
              <p className="mb-4 text-sm text-[#F6C94D]">
                FOLLOW ME
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition hover:-translate-y-1 hover:border-[#F28B38] hover:bg-[#F28B38]"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-white transition hover:-translate-y-1 hover:border-[#F28B38] hover:bg-[#F28B38]"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="https://instagram.com"
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

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {[
                { label: "Your Name", name: "name", placeholder: "Enter your name", type: "text" },
                { label: "Email Address", name: "email", placeholder: "Enter your email", type: "email" },
                { label: "Subject", name: "subject", placeholder: "Enter subject", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-sm font-semibold text-[#172033]">
                    {field.label}
                  </label>

                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full rounded-xl border border-[#E9D8BE] bg-[#FFF9F0] px-4 py-3 text-[#172033] outline-none transition focus:border-[#F28B38] focus:ring-2 focus:ring-[#F28B38]/20"
                  />
                </div>
              ))}

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
