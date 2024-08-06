import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Git', 'Responsive Design'];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center px-3">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg text-center"
            >
              <span className="text-lg font-semibold">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;