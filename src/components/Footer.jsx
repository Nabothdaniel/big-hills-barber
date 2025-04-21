import React from 'react';
//import { Link } from 'react-router-dom';
import Logo from './utils/Logo';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Branding */}
        <div className="text-center md:text-left">
         <Logo/>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle: Navigation Links (Optional) */}
        <div className="flex space-x-6">
          <a href="#hero" className="text-sm hover:text-amber-400 transition">
            Home
          </a>
          <a href="#about" className="text-sm hover:text-amber-400 transition">
            About
          </a>
          <a href="#services" className="text-sm hover:text-amber-400 transition">
            Services
          </a>
          <a href="#contact" className="text-sm hover:text-amber-400 transition">
            Contact
          </a>
        </div>

        {/* Right Side: Social / Credit */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            Made with ❤️ by{' '}
            <a
              href="https://github.com/Nabothdaniel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              DannyTheeWebDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
