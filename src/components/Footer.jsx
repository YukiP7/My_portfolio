import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2023 Yukti Garg. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/YukiP7" className="hover:text-blue-500 transition-colors"
          target='_blank'>GitHub</a>
          <a href="https://www.linkedin.com/in/yukti-garg-8397b4218/" className="hover:text-blue-500 transition-colors"
          target='_blank'>LinkedIn</a>
          <a href="https://x.com/Garg239?t=kSVtXa70J6dn15vDdY2wgw&s=09" className="hover:text-blue-500 transition-colors"
          target='_blank'>Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;