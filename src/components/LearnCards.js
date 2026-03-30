import React from 'react';
import { Smartphone, Target, DollarSign, TrendingUp } from 'lucide-react';

const LearnCards = () => {
  const items = [
    { title: "Social Media", icon: <Smartphone className="w-8 h-8 text-blue-600 mb-4" />, description: "Master platforms like Instagram, LinkedIn, and more." },
    { title: "Branding", icon: <Target className="w-8 h-8 text-indigo-600 mb-4" />, description: "Define your unique identity in the medical field." },
    { title: "Monetization", icon: <DollarSign className="w-8 h-8 text-emerald-600 mb-4" />, description: "Turn your authority into secondary income streams." },
    { title: "Growth Strategy", icon: <TrendingUp className="w-8 h-8 text-violet-600 mb-4" />, description: "Scale your personal brand and clinical presence." },
  ];

  return (
    <section id="learn" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            What You&apos;ll Learn
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive modules designed specifically for doctors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="p-10 bg-gray-50/50 hover:bg-white border border-gray-100 hover:border-blue-100 rounded-[2rem] hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group">
              <div className="bg-white group-hover:bg-blue-50 transition-colors w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnCards;
