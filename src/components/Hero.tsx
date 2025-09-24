import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, User, Briefcase, FolderOpen, GraduationCap, MessageCircle } from 'lucide-react';
import { useGreeting } from '../hooks/useGreeting';

const Hero = () => {
  const greeting = useGreeting();
  
  const navigationFlow = [
    { path: '/about', label: 'About Me', icon: User, description: 'Learn about me' },
    { path: '/experience', label: 'Experience', icon: Briefcase, description: 'My career journey' },
    { path: '/projects', label: 'Projects', icon: FolderOpen, description: 'View my work' },
    { path: '/education', label: 'Education', icon: GraduationCap, description: 'Academic background' },
    { path: '/contact', label: 'Contact', icon: MessageCircle, description: 'Contact me' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-white to-emerald-50/30 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 relative overflow-hidden pt-20 transition-colors duration-300">
      <h1 className="sr-only">Shawava Tritya - Portfolio Pelajar SMK Teknik Komputer dan Jaringan</h1>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400"
                  alt="Shawava Tritya - SMK Student & Tech Enthusiast"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shawava Tritya</span>
            </h1>
            
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                SMK Student & Tech Enthusiast
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium">
                Teknik Komputer dan Jaringan • Arduino Developer • Data Specialist
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed px-4">
              {greeting}
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Passionate dalam bidang teknologi dengan fokus pada <span className="font-semibold text-blue-600 dark:text-blue-400">Arduino & IoT</span>, 
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Network Installation</span>, dan 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> Data Processing</span>. 
              Siap berkontribusi dalam proyek teknologi yang inovatif.
            </p>
          </motion.div>

          {/* Navigation Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 px-4">Jelajahi Perjalanan Saya</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
              {navigationFlow.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="group block p-4 sm:p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-400 transition-all duration-300 h-full transform hover:-translate-y-2 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    aria-label={`Navigate to ${item.label}: ${item.description}`}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800/50 dark:group-hover:to-blue-700/50 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                        <item.icon size={22} className="text-blue-600 dark:text-blue-400 sm:w-6 sm:h-6" />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                        {item.description}
                      </p>
                      <ArrowRight size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 sm:mb-16 px-4"
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl text-center min-w-[180px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 text-center min-w-[180px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-4 sm:space-x-6 px-4"
          >
            <motion.a
              href="https://github.com/CyXd404"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-4 sm:p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="Visit GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} className="sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shawava-tritya"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-4 sm:p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="Visit LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} className="sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="mailto:shawavatritya@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-4 sm:p-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="Send email"
            >
              <Mail size={22} className="sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
