import React from 'react';
import { motion } from 'framer-motion';
import drive_img from '../assets/images/driveImg.jpg'

const Projects = () => {
  const projectList = [
    { id: 1, 
      title: 'Expense Manager', 
      description: 'A full-stack expense manager built with React and Appwrite' , 
      url:'https://github.com/YukiP7/expense' ,
      drive_link : ''
    },
    { id: 2, 
      title: 'Fitness Workout App', 
      description: 'A Fitness app gives suggestions for different workout videos using React and REST API' ,
      url: 'https://github.com/YukiP7/FitnessForte' ,
      drive_link : 'https://drive.google.com/file/d/1ITB_L7y2kstFTk3onHjU3KrowjdPDiWZ/view?usp=sharing'
    },
    { id: 3, 
      title: 'Movie Recommendation App', 
      description: "This is a web application that provides movie recommendations to users based on their preferences using React and ML" , 
      url:'https://github.com/YukiP7/Task2-grp-6' ,
      drive_link : 'https://drive.google.com/file/d/1TbaQsqqdqL-ZG1rHVRfFctCb3FdtLwnt/view?usp=sharing'
    },
    { id: 4, 
      title: 'School Management System - Internship', 
      description: "Worked on forming a user web interface for different roles (Admin, Student, Teacher, Parent), integrated multiple APIs, and ensured smooth user flow. Developed as part of my role at Organebits Technology Ltd.",
      url: '',
      drive_link: ''
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-40">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className='flex gap-1'>
                <motion.a
                  href= {project.url}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-300 "
                >
                  View Project
                </motion.a>
                <motion.a
                  href= {project.drive_link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" text-white px-4 py-2 font-semibold transition duration-300"
                  target='_blank'
                >
                  <img src={drive_img} height="30px" width="30px" className=' rounded-full' />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;