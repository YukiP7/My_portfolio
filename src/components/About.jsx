import React from 'react';
import { motion } from 'framer-motion';
import resumePdf from "../assets/documents/Yukti_resume.pdf"

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-6">
            I am a Computer Science student passionate about using data to solve real-world problems. With hands-on experience in Python, SQL, Power BI and machine learning, I build end-to-end analytical solutions-from data cleaning and exploration to model deployment and visualization. I also have a strong background in frontend development, allowing me to create interactive dashboards and user interfaces for data-driven applications.
          </p>
          <p className="text-xl mb-6">
            When I'm not coding, you can find me exploring new technologies like Gen AI and contributing 
            to open-source projects.
          </p>
          <div className="flex justify-center">
            
            {/* use of motion anchor tag to address the link of resume */}
          <motion.a
            href={resumePdf} 
            download="Yukti_Garg_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;