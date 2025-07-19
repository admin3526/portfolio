import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-t from-gray-900 to-black text-white py-12 border-t border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4 text-indigo-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Katroju Sai Mohanachary
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Structural Engineering Enthusiast | Innovating Sustainable Solutions
          </motion.p>
          <motion.div 
            className="border-t border-gray-700 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">© 2025 Katroju Sai Mohanachary. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
export default Footer;