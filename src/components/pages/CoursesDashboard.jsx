import React from 'react';

const CoursesDashboard = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Online Courses Dashboard</h1>

      <p className="mb-4">
        This project is a professional Power BI dashboard analyzing the performance and trends of online courses. It helps businesses and instructors understand:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
        <li>Course revenue trends</li>
        <li>User engagement by platform and device</li>
        <li>Top-performing instructors</li>
        <li>Review breakdown by rating and category</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">💡 Key Insights:</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Courses with 4.5 rating perform 70% better in sales.</li>
        <li>Mobile-first users prefer shorter course durations.</li>
        <li>Instructor engagement directly correlates with retention rate.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🛠 Tools Used:</h2>
      <p>Power BI, DAX, Power Query, Excel</p>

    </div>
  );
};

export default CoursesDashboard;
