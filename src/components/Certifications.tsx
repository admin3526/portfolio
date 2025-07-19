
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, BookOpen, Trophy, Users, Laptop } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-animations';

const Certifications = () => {
  const { ref: certsRef, inView } = useScrollAnimation(0.1);
  
  const certifications = [
    {
      title: "STAAD.Pro Internship",
      issuer: "AICTE Eduskills",
      type: "Internship",
      description: "Comprehensive training on structural analysis and design using STAAD.Pro software",
      icon: Laptop
    },
    {
      title: "Bentley Education Modeling Course",
      issuer: "Bentley Systems",
      type: "Course",
      description: "Advanced training in 3D modeling and BIM technologies for infrastructure projects",
      icon: BookOpen
    },
    {
      title: "ICCRIP 2024 Conference Participation",
      issuer: "International Conference",
      type: "Conference",
      description: "Participated in International Conference on Construction & Real Estate Industry Practices",
      icon: Users
    },
    {
      title: "ProjectExpo'23 - Smart Dam Consolation Prize",
      issuer: "ProjectExpo",
      type: "Award",
      description: "Recognition for innovative IoT-based smart dam monitoring system project",
      icon: Trophy
    },
    {
      title: "Cement Chemistry Course",
      issuer: "edX",
      type: "Online Course",
      description: "In-depth study of cement chemistry and its applications in construction",
      icon: BookOpen
    },
    {
      title: "Construction Management Course",
      issuer: "edX",
      type: "Online Course",
      description: "Comprehensive course on modern construction management principles and practices",
      icon: Award
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'Course': return 'bg-indigo-900/50 text-indigo-400 border-indigo-700';
      case 'Conference': return 'bg-purple-900/50 text-purple-400 border-purple-700';
      case 'Award': return 'bg-yellow-900/50 text-yellow-400 border-yellow-700';
      case 'Online Course': return 'bg-indigo-900/50 text-indigo-400 border-indigo-700';
      default: return 'bg-gray-800/50 text-gray-300 border-gray-700';
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case 'Internship': return 'from-green-500 to-green-600';
      case 'Course': return 'from-blue-500 to-blue-600';
      case 'Conference': return 'from-purple-500 to-purple-600';
      case 'Award': return 'from-yellow-500 to-yellow-600';
      case 'Online Course': return 'from-indigo-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

      return (
      <section 
        ref={certsRef}
        id="certifications" 
        className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      >
        {/* Background Elements */}
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
            className="absolute top-10 left-10 w-32 h-32 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
            className="absolute bottom-10 right-10 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-15"
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
          <motion.div 
            className="absolute top-1/2 left-1/2 w-28 h-28 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
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
              Certifications & <motion.span 
                className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Achievements
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
              Professional certifications and achievements in structural engineering and construction technology
            </motion.p>
          </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGradient(cert.type)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                          {cert.title}
                        </h3>
                        <p className="text-indigo-400 font-semibold mb-4">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="flex items-center ml-2">
                        {cert.type === 'Award' && (
                          <div className="w-8 h-8 bg-yellow-900/50 rounded-full flex items-center justify-center">
                            <Star className="w-5 h-5 text-yellow-400" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <Badge className={`mb-4 font-semibold ${getTypeColor(cert.type)}`}>
                      {cert.type}
                    </Badge>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
