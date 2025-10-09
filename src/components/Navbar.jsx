import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 text-white p-5 flex justify-between">
      <div className="text-xl font-bold">MyPortfolio</div>
      <div className="space-x-4">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
