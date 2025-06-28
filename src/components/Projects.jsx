import React from 'react';
import ProjectCard from '../components/ProjectCard';
import iplImage from '../assets/images/ipl_dashboard_screenshot.png';
import sqlImage from '../assets/images/sql_case_studies.png'
import IPLCaseStudy from './pages/IPLCaseStudy';
import CoursesDashboard from './pages/CoursesDashboard';
import coursesImg from '../assets/images/courses_dashboard.png'
import SQLCaseStudies from './pages/sqlCaseStudies';


const Projects = () => {
  const projects= [
      {
      image: iplImage,
      title: 'IPL(2025) Impact Dashboard',
      subtitle: 'Data-driven insights for franchise-level sponsorship ethics',
      domain: 'Business Analytics & Ethics',
      Component: <IPLCaseStudy/>,
      github: 'https://github.com/YukiP7/IPL-Case-Study-2025' ,
    },
    {
      image: coursesImg,
      title: 'Online Edtech Courses Analysis Dashboard',
      subtitle: 'Project focuses on category-wise trends, language preferences, instructor effectiveness, and user engagement patterns.',
      domain: 'Business Analytics',
      Component: <CoursesDashboard/>,
      github:'https://github.com/YukiP7/online-courses-dashboard'
    },
    {
      image: sqlImage,
      title: 'SQL Business Insights',
      subtitle: 'Answering retail performance questions with SQL + BI',
      domain: 'Retail Sales & BI Reporting',
      Component: <SQLCaseStudies/>,
      github:'https://github.com/YukiP7/sql-business-case-studies'
    },
  ];

return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6 ">
      <h2 className="text-4xl font-bold mb-12 text-center pt-10">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-0 lg:px-0">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
