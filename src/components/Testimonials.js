import React from 'react';
import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Dr. Rahul", text: "Amazing course! Helped me understand how to leverage social media for my clinic effectively.", role: "Dermatologist" },
    { name: "Dr. Amit", text: "The monetization strategies are a game changer. My practice has seen 2x growth in just 2 months.", role: "Dentist" },
    { name: "Dr. Sneha", text: "Best investment for my medical career. The branding modules are pure gold.", role: "Pediatrician" },
  ];

  return (
    <section id="testimonials" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            Loved by <span className="text-blue-600">Doctors</span>
          </h2>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-blue-50/50 border border-gray-100 relative group transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-8">
                <Star className="w-8 h-8 text-blue-50/50 fill-current" />
              </div>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-4 rounded-2xl flex items-center justify-center">
                   <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-tight">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
