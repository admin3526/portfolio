
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, GitBranch, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-animations';

const Projects = () => {
  const { ref: projectsRef, inView } = useScrollAnimation(0.1);
  
  const projects = [
    {
      title: "Foam Concrete with Coarse Aggregate",
      description: "Innovative research project focusing on sustainable concrete alternatives using foam concrete technology combined with coarse aggregates to improve structural properties while reducing environmental impact.",
      technologies: ["Material Science", "Sustainable Construction", "Research & Development"],
      status: "Research Phase",
      statusColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
      gradient: "from-blue-500 to-blue-600",
      link: null
    },
    {
      title: "IoT Smart Dam with Safe Causeway",
      description: "Smart dam monitoring system integrated with IoT sensors for real-time water level monitoring, structural health assessment, and automated alert systems for safe causeway operations.",
      technologies: ["IoT", "Smart Infrastructure", "Data Analytics", "Safety Systems"],
      status: "Development",
      statusColor: "bg-blue-100 text-blue-700 border-blue-200",
      gradient: "from-green-500 to-green-600",
      link: "https://docs.google.com/document/d/1wsPbElOyC6FWx0AIZhJRKoDlqQypTzgN/edit?usp=drive_link&ouid=108221872762601741451&rtpof=true&sd=true"
    },
    {
      title: "Replacement of Bamboo Instead of Steel",
      description: "Sustainable construction research exploring bamboo as an alternative to steel reinforcement in specific construction applications, focusing on cost-effectiveness and environmental benefits.",
      technologies: ["Sustainable Materials", "Green Construction", "Cost Analysis"],
      status: "Research Complete",
      statusColor: "bg-green-100 text-green-700 border-green-200",
      gradient: "from-purple-500 to-purple-600",
      link: "https://drive.google.com/file/d/1tmRAcPJRb9Mtx6ZEhV54oE8LQb3nvLk7/view?usp=drive_link"
    }
  ];

  const handleViewDetails = (link: string | null) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

      return (
      <section 
        ref={projectsRef}
        id="projects" 
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
            className="absolute top-20 right-20 w-32 h-32 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
            className="absolute bottom-20 left-20 w-40 h-40 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-15"
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
            className="absolute top-1/2 right-1/3 w-28 h-28 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
              Featured <motion.span 
                className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Projects
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
              Innovative engineering solutions focusing on sustainability and modern technology integration
            </motion.p>
          </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {projects.map((project, index) => (
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
              <CardHeader className={`bg-gradient-to-r ${project.gradient} text-white rounded-t-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-5 h-5" />
                      <span className="text-sm font-medium opacity-90">Project</span>
                    </div>
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-3">{project.title}</CardTitle>
                  <Badge className={`${project.statusColor} font-semibold`}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group/btn border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-900/50 transition-all duration-300"
                  onClick={() => handleViewDetails(project.link)}
                  disabled={!project.link}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
