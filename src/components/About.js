import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Code, Smartphone, Globe, Database, Zap } from 'lucide-react';

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'HTML', level: 95, icon: <Code className="w-6 h-6" /> },
    { name: 'CSS', level: 90, icon: <Code className="w-6 h-6" /> },
    { name: 'Tailwind CSS', level: 88, icon: <Code className="w-6 h-6" /> },
    { name: 'JavaScript', level: 85, icon: <Code className="w-6 h-6" /> },
    { name: 'React', level: 90, icon: <Globe className="w-6 h-6" /> },
    { name: 'React Native', level: 80, icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Node.js', level: 75, icon: <Database className="w-6 h-6" /> },
    { name: 'Python', level: 70, icon: <Code className="w-6 h-6" /> },
    { name: 'Java', level: 75, icon: <Code className="w-6 h-6" /> },
    { name: 'Swift', level: 70, icon: <Smartphone className="w-6 h-6" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate Full Stack Developer with 2+ years of freelancing experience, 
            specializing in modern web technologies and mobile app development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo & Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-64 h-64 rounded-full overflow-hidden shadow-2xl ${
                    isDarkMode ? 'ring-4 ring-gray-700' : 'ring-4 ring-gray-200'
                  }`}
                >
                  <img
                    src="/photo.jpg"
                    alt="Mitanshu Sarode"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Decorative elements */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
                } flex items-center justify-center`}>
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div className={`absolute -bottom-2 -left-2 w-8 h-8 rounded-full ${
                  isDarkMode ? 'bg-purple-500' : 'bg-purple-400'
                } flex items-center justify-center`}>
                  <Globe className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Experience
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    2+ years in freelancing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Stack Development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Mobile App Development
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Web Development
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Location
              </h3>
              <p className={`text-lg ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Pune, Loni Kalbhor, India
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Info
              </h3>
              <div className="space-y-2">
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  📧 mitanshupsarode@gmail.com
                </p>
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  📧 sarodemitanshu21@gmail.com
                </p>
                <p className={`text-lg ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  📱 +91 9960856994
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`${
                          isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {skill.icon}
                        </div>
                        <span className={`font-medium ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className={`w-6 h-6 mt-1 ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
                  }`} />
                  <div>
                    <h4 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Full Stack Development
                    </h4>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Building complete web applications from frontend to backend
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Smartphone className={`w-6 h-6 mt-1 ${
                    isDarkMode ? 'text-green-400' : 'text-green-500'
                  }`} />
                  <div>
                    <h4 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Mobile App Development
                    </h4>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Creating cross-platform mobile apps with React Native
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className={`w-6 h-6 mt-1 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-500'
                  }`} />
                  <div>
                    <h4 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Web Development
                    </h4>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Modern, responsive websites with cutting-edge technologies
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

