import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-gray-900/70 backdrop-blur-md border-b border-white/10 
      px-6 py-4 shadow-lg flex justify-between items-center">
       <Link 
        to="/" 
        className="text-2xl font-bold text-white hover:text-transparent 
        bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition"
      >
        EurekaAI
      </Link>
       <div className="space-x-4 text-lg font-medium flex">
        <Link 
          to="/" 
          className="px-4 py-2 rounded-lg text-gray-200 hover:text-white 
          hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 
          transition"
        >
          Home
        </Link>
         <Link 
          to="/about" 
          className="px-4 py-2 rounded-lg text-gray-200 hover:text-white 
          hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 
          transition"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
