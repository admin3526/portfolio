
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-animations';

const Contact = () => {
  const { ref: contactRef, inView } = useScrollAnimation(0.1);
  
  const handleEmailClick = () => {
    window.open('mailto:saimohankatroju@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    navigator.clipboard.writeText('+91 6300971399');
    alert('Phone number copied to clipboard!');
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=SR University, India', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sai-mohanachary-9992142ab', '_blank');
  };

  return (
    <section 
      ref={contactRef}
      id="contact" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In <motion.span 
              className="text-indigo-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Touch
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-indigo-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Let's discuss opportunities, projects, or collaborations in structural engineering
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Contact Information
            </motion.h3>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gray-700/50 border border-gray-600 cursor-pointer hover:bg-gray-700/70 transition-all duration-300" onClick={handleEmailClick}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-900/50 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Email</h4>
                        <p className="text-gray-300 font-medium">saimohankatroju@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.0 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gray-700/50 border border-gray-600 cursor-pointer hover:bg-gray-700/70 transition-all duration-300" onClick={handlePhoneClick}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-900/50 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                        <p className="text-gray-300 font-medium">+91 6300971399</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gray-700/50 border border-gray-600 cursor-pointer hover:bg-gray-700/70 transition-all duration-300" onClick={handleLinkedInClick}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-900/50 p-3 rounded-lg">
                        <Linkedin className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                        <p className="text-gray-300 font-medium">sai-mohanachary-9992142ab</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-gray-700/50 border border-gray-600 cursor-pointer hover:bg-gray-700/70 transition-all duration-300" onClick={handleLocationClick}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-900/50 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Location</h4>
                        <p className="text-gray-300 font-medium">SR University, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
