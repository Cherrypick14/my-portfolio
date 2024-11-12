import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";  // Importing icons for hamburger and close buttons

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu on or off
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-footer-gradient p-6 text-darkBlue-100">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      
      {/* Hamburger icon for small devices */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Show close icon if menu is open */}
        </button>
      </div>

      {/* Navbar links */}
      <ul
        className={`lg:flex gap-6 ${menuOpen ? "flex flex-col absolute top-0 right-0 bg-darkBlue-500 text-darkBlue-100 w-3/4 h-1/2 p-6 space-y-6 z-50 transition-all duration-500 ease-in-out" : "hidden"} lg:space-x-6 lg:flex-row`}
      >
        {/* Close button inside the drawer to close the menu */}
        <div className="absolute top-4 right-4 text-2xl lg:hidden">
          <button onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>

        <li><a href="#about" className="hover:text-darkBlue-300">About Me</a></li>
        <li><a href="#task" className="hover:text-darkBlue-300">What I Do</a></li>
        <li><a href="#stacks" className="hover:text-darkBlue-300">Techstacks</a></li>
        <li><a href="#projects" className="hover:text-darkBlue-300">Projects</a></li>
        <li><a href="#gallery" className="hover:text-darkBlue-300">Gallery</a></li>
        <li><a href="#contact" className="hover:text-darkBlue-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
