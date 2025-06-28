import React from 'react';

const IPLCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-2">
      <h1 className="text-4xl font-bold mb-6">IPL Impact Dashboard</h1>

      <p className="text-lg mb-4">
        This project analyzes the sponsorship ecosystem of the Indian Premier League (IPL) with a focus on public health and economic influence. It highlights how brand sponsorships impact public behavior and team finances.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🔍 Problem Statement</h2>
      <p>
        With increasing fantasy gaming and alcohol brands sponsoring teams, there's a growing concern about ethical advertising. The goal was to quantify this impact.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🧰 Tools & Tech</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Power BI</li>
        <li>Smart Narrative + KPIs</li>
        <li>Data Cleaning in Power Query</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">📊 Key Insights</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>34% of team sponsors belong to high-risk categories (fantasy gaming, alcohol).</li>
        <li>Team X had 67% sponsor value from potentially harmful categories.</li>
        <li>Opportunities exist to regulate sponsorship while keeping economic value intact.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🚀 Impact</h2>
      <p>
        This dashboard helps advertisers, governing bodies, and franchise owners make smarter, more responsible sponsorship decisions.
      </p>
    </div>
  );
};

export default IPLCaseStudy;
