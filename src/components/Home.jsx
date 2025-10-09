import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-400 to-red-400">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center  text-white">
        <h1 className="text-6xl text-se font-bold">Hi, I'm Prajwal</h1>
        <p className="mt-4 text-2xl font-semibold ">A MERN Stack Developer </p>
      </motion.div>
    </section>
  );
};

export default Home;



