import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, MapPin, GraduationCap, Star, Award, Code, Zap } from 'lucide-react';
import { useScrollAnimation, useMousePosition } from '@/hooks/use-animations';
import Particles from '@/components/ui/particles';
import FloatingElements from '@/components/ui/floating-elements';

const Hero = () => {
  const { ref: heroRef, inView } = useScrollAnimation(0.1);
  const mousePosition = useMousePosition();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1PEy2bBHorwAlCkhnxS_shoURKoaSI2ev/view?usp=drive_link', '_blank');
  };

  const floatingElements = [
    { id: '1', icon: Star, color: '#F59E0B', size: 16, x: 10, y: 20, delay: 0, duration: 3 },
    { id: '2', icon: Award, color: '#10B981', size: 12, x: 85, y: 30, delay: 1, duration: 4 },
    { id: '3', icon: Code, color: '#6366F1', size: 14, x: 15, y: 70, delay: 2, duration: 3.5 },
    { id: '4', icon: Zap, color: '#8B5CF6', size: 10, x: 80, y: 80, delay: 0.5, duration: 4.5 },
  ];

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Particles Background */}
      <Particles count={30} color="#6366F1" speed={0.3} size={3} opacity={0.1} />
      
      {/* Enhanced Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <FloatingElements elements={floatingElements} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-indigo-500/[0.05] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-indigo-900/50 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-indigo-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for Internships & Projects
          </motion.div>

          {/* Profile Section */}
          <motion.div 
            className="mb-12 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative inline-block">
              {/* Profile Image Container */}
              <motion.div 
                className="w-40 h-40 mx-auto relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 p-1.5 shadow-2xl group-hover:shadow-indigo-500/25 transition-all duration-500"
                >
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold text-indigo-400 relative overflow-hidden">
                    <span className="relative z-10">SM</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                  </div>
                </motion.div>
                
                {/* Enhanced Floating Elements */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                >
                  <GraduationCap className="w-4 h-4 text-white" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-1 -left-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.div 
            className="mb-8 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.span 
                className="block text-white leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Katroju
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Sai Mohanachary
              </motion.span>
            </motion.h1>
            
            {/* Location & Status */}
            <motion.div 
              className="flex items-center justify-center gap-6 text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>SR University</span>
              </motion.div>
              <motion.div 
                className="w-2 h-2 bg-gray-500 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.8 }}
              />
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 }}
              >
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>B.Tech Civil Engineering</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Tagline */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <motion.p 
              className="text-2xl md:text-3xl font-medium text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              Structural Engineering Enthusiast
            </motion.p>
            <motion.p 
              className="text-xl text-indigo-400 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              Innovating Sustainable Solutions
            </motion.p>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            Passionate Civil Engineering student specializing in structural modeling, 
            sustainable construction methods, and modern technology integration in infrastructure development.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 3.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 3.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-900/50 px-8 py-4 text-lg font-medium rounded-xl hover:shadow-lg transition-all duration-300 group"
                onClick={downloadResume}
              >
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 3.6 }}
          >
            {[
              { value: '9.28', label: 'Current CGPA' },
              { value: '3+', label: 'Major Projects' },
              { value: '5+', label: 'Certifications' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3.8 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-indigo-400 mb-2 group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollToSection('about')}
        >
          <motion.div 
            className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
