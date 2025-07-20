import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send the message, please try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 sm:py-0 text-white md:pt-20 md:mb-20">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto md:px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto p-4 md:p-8 bg-gray-800/50 rounded-xl border border-gray-700">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex-1"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-blue-400 mb-6"
            >
              Contact Information
            </motion.h3>
            <motion.div variants={itemVariants} className="space-y-5 text-base sm:text-lg">
              <p className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <a href="mailto:maidulislammanik8991@gmail.com" className="hover:text-blue-300 break-all">
                  maidulislammanik8991@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-400 flex-shrink-0" />
                <a href="tel:+8613161750176" className="hover:text-blue-300">+8613161750176</a>
              </p>
              <p className="flex items-center gap-4">
                <FaWhatsapp className="text-blue-400 flex-shrink-0" />
                <a href="https://wa.me/8801792887606" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                  +8801792887606
                </a>
              </p>
              <p className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                <span>Beijing, China</span>
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-gray-600">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Find me on</h4>
              <div className="flex items-center gap-6">
                <a href="https://github.com/Dev-Maidul" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-125 transition-transform duration-300">
                  <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/md-maidul-islam-3744b21ba/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-125 transition-transform duration-300">
                  <FaLinkedin size={30} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex-1"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md cursor-pointer disabled:cursor-not-allowed"
                >
                  <span className="w-full h-full bg-gradient-to-br from-[#1e87f0] via-[#8e44ad] to-[#c0392b] group-hover:from-[#c0392b] group-hover:via-[#8e44ad] group-hover:to-[#1e87f0] absolute"></span>
                  <span className="w-full relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">
                      {isSending ? "Sending..." : "Send Email"}
                    </span>
                  </span>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;