import React from 'react';

const ProjectModal = ({ isOpen, onClose, Component }) => {
  if (!isOpen || !Component) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-scroll">
        <div className="flex justify-end mb-2">
          <button onClick={onClose} className="text-red-400 text-xl font-bold">X</button>
        </div>
        <Component />
      </div>
    </div>
  );
};

export default ProjectModal;
