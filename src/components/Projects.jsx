import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Portfolio Website', desc: 'My personal portfolio built with React', link: '#' },
  { title: 'E-commerce App', desc: 'career path for student', link: 'https://prajwalsondawalek.netlify.app/' },
  { title: 'Blog Platform', desc: 'Full-stack blog using MERN', link: '#' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white px-6 py-16"
    >
      {/* Animated Heading */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text 
                   bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 tracking-wider"
      >
        🚀 My Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {projects.map((proj, i) => (
          <motion.div 
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl text-center 
                       shadow-lg hover:shadow-[0_0_20px_#ec4899] 
                       border border-pink-500/30 transition-all duration-300 
                       hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-3 text-cyan-300">{proj.title}</h3>
            <p className="mb-6 text-gray-300">{proj.desc}</p>
            
            <motion.a 
              href={proj.link} 
              whileHover={{ scale: 1.1 }}
              className="inline-block px-6 py-2 rounded-lg 
                         bg-gradient-to-r from-pink-500 to-purple-600 
                         text-white font-semibold shadow-lg
                         hover:from-purple-600 hover:to-pink-500 transition-all"
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
