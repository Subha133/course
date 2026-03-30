import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Overview = () => {
  const benefits = [
    "Grow patient trust & authority",
    "Increase clinical income by 3x",
    "Build a powerful online presence",
  ];

  return (
    <section id="overview" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              What is this course?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Learn how to build your personal brand... Learn how to build your personal brand... Learn how to build your personal brand...
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-video bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white flex items-center justify-center">
               <div className="text-gray-300 text-lg uppercase tracking-widest font-black">Course Preview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
