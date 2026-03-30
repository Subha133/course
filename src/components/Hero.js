"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
              Become a Top <span className="text-blue-600 italic">Doctor Brand</span> in 30 Days
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Build your personal brand, grow your clinic presence, and master the art of medical entrepreneurship with our comprehensive masterclass.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPricing}
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all flex items-center justify-center group"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-700 rounded-2xl font-bold text-lg transition-all flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5 fill-current text-blue-600" />
                Watch Preview
              </motion.button>
            </div>

            <div className="mt-16 flex items-center justify-center space-x-12 grayscale opacity-70">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-1 tracking-tighter">⭐ 500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-black">Students</p>
              </div>
              <div className="text-center border-l border-gray-200 pl-12">
                <p className="text-3xl font-bold text-gray-900 mb-1 tracking-tighter">₹499</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-black">Limited Access</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
