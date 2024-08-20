import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black shadow-md font-mono">
      <NavLink to="/" className="pl-8 text-2xl font-bold">
        Logo
      </NavLink>
      <div className="pr-8 flex space-x-4">
        <NavLink to="/" className="p-4 text-black hover:text-gray-700">
          Count
        </NavLink>
        <NavLink to="/about" className="p-4 text-black hover:text-gray-700">
          Typing
        </NavLink>
        <NavLink to="/password" className="p-4 text-black hover:text-gray-700">
          Password
        </NavLink>
        <NavLink to="/third" className="p-4 text-black hover:text-gray-700">
          Form
        </NavLink>
        <NavLink to="/fourth" className="p-4 text-black hover:text-gray-700">
          Color
        </NavLink>
        <NavLink to="/fifth" className="p-4 text-black hover:text-gray-700">
          Text
        </NavLink>
        <NavLink to="/sixth" className="p-4 text-black hover:text-gray-700">
          Changer
        </NavLink>
        <NavLink to="/seventh" className="p-4 text-black hover:text-gray-700">
          Seventh
        </NavLink>
        <NavLink to="/eight" className="p-4 text-black hover:text-gray-700">
          Toggle
        </NavLink>
        <NavLink to="/ninth" className="p-4 text-black hover:text-gray-700">
          Like
        </NavLink>
        <NavLink to="/tenth" className="p-4 text-black hover:text-gray-700">
          Hidden
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
