import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profileImg.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5 pt-28 md:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:w-1/2 lg:ml-10"
      >
        <h1 className="text-lg md:text-3xl font-bold mb-4">HEY THERE ,</h1>
        <h1 className="text-xl md:text-5xl font-bold mb-4">I AM YUKTI GARG</h1>
        <p className="text-lg md:text-2xl mb-8 m-2">
          Aspiring <span className="text-blue-400 font-bold">Data Scientist</span> | Python • SQL • Power BI • Machine Learning | I build solutions that turn messy data into business impact.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          <Link to="/projects">View My Work</Link>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-10 md:mt-0 md:ml-0"
      >
        <img
          src={profileImage}
          alt="Yukti Garg"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-blue-500 shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Home;
