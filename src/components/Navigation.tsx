
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg border-b border-gray-700' : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-indigo-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Sai Mohanachary
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <motion.button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('certifications')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Certifications
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
