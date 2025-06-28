import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = {
  "👩‍💻 Programming & Scripting": [
    "Python", "SQL", "Java", "JavaScript"
  ],
  "📊 Data Analysis & BI Tools": [
    "Pandas", "NumPy", "Power BI", "Tableau", "Excel"
  ],
  "🧠 Machine Learning & Modeling": [
    "Scikit-learn", "Matplotlib", "Feature Engineering", "EDA", "Data Cleaning" , "Data visualization" , "Supervised & Unsupervised ML"
  ],
  "🌐 Web Development (UI/UX)": [
    "HTML", "CSS","JavaScript", "React.js", "Tailwind CSS", "API Integration", "Appwrite"
  ]
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-28 px-6">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skillGroups).map(([groupTitle, skills], index) => (
            <div key={groupTitle}>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{groupTitle}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (index + i) * 0.05 }}
                    className="bg-gray-800 p-3 rounded-lg shadow-lg text-center text-sm font-medium hover:bg-blue-500 hover:text-white transition"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
