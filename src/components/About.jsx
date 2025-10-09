import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl p-6 rounded-3xl bg-white/10 backdrop-blur-lg shadow-lg text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          I am a passionate frontend developer who loves creating interactive and animated websites using <span className="font-semibold underline decoration-pink-300">React</span> and <span className="font-semibold underline decoration-purple-300">Tailwind CSS</span>. I enjoy crafting smooth animations and visually stunning interfaces that delight users.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full font-semibold text-white shadow-lg hover:bg-white/30 transition duration-300"
          >
            Get in Touch
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1R1VjDIhPycjl1fBinhz6WX5nOGJHXMY3/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:from-pink-600 hover:to-purple-700 transition duration-300"
          >
            View Resume
          </motion.a>

          {/* GitHub Button */}
          <motion.a
            href="https://github.com/prajwaltijar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-900 rounded-full font-semibold text-white shadow-lg hover:bg-gray-800 transition duration-300"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/prajwal-tijare-34763631a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 rounded-full font-semibold text-white shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Icons Section */}
      <motion.div
        className="mt-12 flex space-x-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div whileHover={{ y: -10, scale: 1.1 }} className="bg-white/20 p-4 rounded-xl shadow-lg cursor-pointer transition duration-300">
          <span role="img" aria-label="react" className="text-3xl">⚛️</span>
        </motion.div>
        <motion.div whileHover={{ y: -10, scale: 1.1 }} className="bg-white/20 p-4 rounded-xl shadow-lg cursor-pointer transition duration-300">
          <span role="img" aria-label="tailwind" className="text-3xl">🌬️</span>
        </motion.div>
        <motion.div whileHover={{ y: -10, scale: 1.1 }} className="bg-white/20 p-4 rounded-xl shadow-lg cursor-pointer transition duration-300">
          <span role="img" aria-label="code" className="text-3xl">💻</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
