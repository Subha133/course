"use client";

import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DocBrand
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#overview" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Overview</a>
            <a href="#learn" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Curriculum</a>
            <a href="#instructor" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Instructor</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">FAQ</a>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
