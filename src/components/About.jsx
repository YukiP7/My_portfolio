import React from 'react';
import { motion } from 'framer-motion';
import resumePdf from '../assets/documents/yukti-resume.pdf' ;

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-6">
            I'm a passionate web developer with a keen eye for design and a love for creating 
            intuitive, user-friendly interfaces. My journey in web development started with 
            HTML, CSS, and JavaScript, and has since expanded to include modern frameworks 
            and libraries like React and Tailwind CSS.
          </p>
          <p className="text-xl mb-6">
            When I'm not coding, you can find me exploring new technologies like Python , Data science and contributing 
            to open-source projects, or sharing my knowledge through blog posts.
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