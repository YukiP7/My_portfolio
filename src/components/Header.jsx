import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm p-5">
      <nav className="container mx-auto px-10 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold text-blue-500">YG</Link>
          <div className="hidden md:flex space-x-8 text-blue-500 rounded">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Hamburger menu for mobile devices */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden text-blue-500 text-center flex flex-col"
        >
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="py-2 px-4 text-xl hover:bg-gray-800 transition duration-200 rounded-xl" 
  >
    {children}
  </Link>
)
export default Header;