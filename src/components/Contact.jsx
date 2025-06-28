import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-32 px-8 md:px-24">
      <h1 className="text-4xl font-bold mb-2 text-yellow-400">Let’s Work Together!</h1>
      <p className="text-gray-300 mb-10">
        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email */}
        <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition">
          <FaEnvelope className="text-yellow-400 text-3xl" />
          <div>
            <h2 className="text-sm text-gray-400">EMAIL</h2>
            <p className="text-lg font-semibold text-white">gargyukti112@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition">
          <FaPhone className="text-yellow-400 text-3xl" />
          <div>
            <h2 className="text-sm text-gray-400">Call Me</h2>
            <p className="text-lg font-semibold text-white">+91 7895434637</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition">
          <FaLinkedin className="text-yellow-400 text-3xl" />
          <div>
            <h2 className="text-sm text-gray-400">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/yukti-garg-8397b4218/"
              className="text-blue-400 hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/yukti-garg-8397b4218/
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md hover:shadow-lg transition">
          <FaGithub className="text-yellow-400 text-3xl" />
          <div>
            <h2 className="text-sm text-gray-400">GitHub</h2>
            <a
              href="https://github.com/YukiP7"
              className="text-blue-400 hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/YukiP7
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
