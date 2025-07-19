
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Star, MapPin, GraduationCap, Award, Code, Compass, Leaf, Building2, BookOpen } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-animations';

const About = () => {
  const { ref: aboutRef, inView } = useScrollAnimation(0.1);
  
  const educationData = [
    {
      title: "B.Tech Civil Engineering",
      institution: "SR University, Hanamkonda",
      period: "2023 – 2026 (Expected)",
      status: "Currently Pursuing",
      statusColor: "bg-indigo-600",
      progress: 9.28,
      icon: BookOpen,
      iconColor: "bg-indigo-600"
    },
    {
      title: "Diploma in Civil Engineering",
      institution: "Govt. Polytechnic, Station Ghanpur",
      period: "Jun 2020 – Apr 2023",
      status: "Completed",
      statusColor: "bg-green-600",
      progress: 9.2,
      icon: GraduationCap,
      iconColor: "bg-green-600"
    }
  ];

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div 
          className="absolute top-20 right-10 w-32 h-32 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
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
            About <motion.span 
              className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"
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
            Passionate about innovation in structural engineering
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Aspiring Structural Engineer Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Aspiring Structural Engineer</h3>
              </motion.div>
              <motion.p 
                className="text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                I'm a passionate civil engineering student specializing in structural design and innovation. 
                From designing on paper to modeling in AutoCAD, STAAD.Pro, ETABS, and RCDC, I bring concepts 
                to life turning textbook knowledge into practical and executable structures. I strive to build 
                structures that are smart, sustainable, and future-ready.
              </motion.p>
            </motion.div>

            {/* Sustainable Construction Advocate Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm p-6 border-0 shadow-none">
                <CardContent className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">Sustainable Construction Advocate</h4>
                        <p className="text-gray-300 text-sm">Working towards eco-friendly solutions such as smart dams and alternative reinforcement materials that contribute to sustainable development.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

                    {/* Right Column - Education Journey */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Academic Journey
              </motion.h3>
            </motion.div>

            {educationData.map((education, index) => {
              const IconComponent = education.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm p-6 border-0 shadow-none">
                    <CardContent className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 ${education.iconColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-1">{education.title}</h4>
                            <p className="text-gray-300 text-sm">{education.institution}</p>
                            <p className="text-indigo-400 text-xs">{education.period}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1 ${education.statusColor} text-white text-xs font-bold rounded-full`}>
                          {education.status}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{education.progress} CGPA</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className={`h-2 rounded-full ${education.statusColor === 'bg-indigo-600' ? 'bg-indigo-500' : 'bg-green-500'}`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${(education.progress / 10) * 100}%` } : {}}
                            transition={{ duration: 1, delay: 2 + index * 0.3 }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
