
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Wrench, Lightbulb, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-animations';

const Skills = () => {
  const { ref: skillsRef, inView } = useScrollAnimation(0.1);
  
  const skillCategories = [
    {
      title: "Structural Tools",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "AutoCAD", level: 90 },
        { name: "STAAD.Pro", level: 85 },
      ]
    },
    {
      title: "Planning & Management",
      icon: Wrench,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Gantt Charts", level: 80 },
        { name: "MS Excel", level: 85 },
      ]
    },
    {
      title: "Currently Learning",
      icon: BookOpen,
      color: "from-orange-500 to-orange-600",
      isLearning: true,
      skills: [
        { name: "Revit", logo: "https://img.icons8.com/color/48/autodesk-revit.png" },
        { name: "3ds Max", logo: "https://img.icons8.com/color/48/3ds-max.png" },
        { name: "ETabs", logo: "https://res.cloudinary.com/ddsceuctd/image/upload/v1752927025/j08monariksrhuksanx7.png" },
      ]
    },
    {
      title: "Other Tools",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "IoT in Construction", level: 75 },
        { name: "Canva Pro", level: 90 },
        { name: "MS Office", level: 85 },
        { name: "AI Tools", level: 80 },
      ]
    }
  ];

      return (
      <section 
        ref={skillsRef}
        id="skills" 
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
            className="absolute top-10 left-10 w-32 h-32 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
            className="absolute top-1/2 left-1/3 w-28 h-28 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
              My <motion.span 
                className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Skills
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
              Expertise in structural engineering tools, project management, and modern construction technologies
            </motion.p>
          </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = typeof category.icon === 'string' ? null : category.icon;
            const isImageIcon = typeof category.icon === 'string';
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + categoryIndex * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                }}
              >
                <Card className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 group ${category.isLearning ? 'relative overflow-hidden' : ''}`}>
                  {category.isLearning && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                        LEARNING
                      </span>
                    </div>
                  )}
                  {category.isLearning && (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-yellow-900/10 pointer-events-none"></div>
                  )}
                  <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      {category.isLearning ? (
                        <BookOpen className="w-8 h-8 text-white" />
                      ) : (
                        IconComponent && <IconComponent className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        {category.isLearning ? (
                          <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-orange-900/20 transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center group-hover/skill:scale-110 transition-transform animate-pulse">
                              <img 
                                src={skill.logo} 
                                alt={skill.name}
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <span className="font-semibold text-gray-300 group-hover/skill:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ) : (
                          <>
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-semibold text-gray-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                              <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white shadow-sm`}>
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                              <div 
                                className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
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

export default Skills;
