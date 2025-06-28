import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../assets/icons/github.png';

const ProjectCard = ({ image, title, subtitle, domain, Component , github}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-800 rounded-xl shadow-lg p-4 transition-transform hover:scale-105">
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-4 w-full h-52 object-fill border border-gray-600"
        />
        <div className="text-white px-1">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-gray-300 mb-2">{subtitle}</p>
          <p className="text-sm mb-4">
            <span className="font-semibold text-gray-400">Domain/Function:</span>{' '}
            <span className="text-white">{domain}</span>
          </p>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg"
            >
              See My Work
            </button>
            <Link to={github} target="_blank">
              <img src={githubIcon} alt="Github" className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-red-400 text-xl font-bold"
            >
              X
            </button>
            {Component}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
