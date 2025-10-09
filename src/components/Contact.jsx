import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaComment } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl w-96 md:w-[450px] flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide">
          Contact Me
        </h2>
        <form className="flex flex-col w-full space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-white/70" />
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 pl-10 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white/60 transition"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-white/70" />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white/60 transition"
            />
          </div>
          <div className="relative">
            <FaComment className="absolute left-3 top-3 text-white/70" />
            <textarea
              placeholder="Message"
              className="w-full p-3 pl-10 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white/60 transition resize-none h-28"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
