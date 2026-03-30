import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

const Instructor = () => {
  return (
    <section id="instructor" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-blue-50/50 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[3rem] flex-shrink-0 relative group">
            <div className="absolute inset-2 bg-white rounded-[2.5rem] flex items-center justify-center border-4 border-blue-50 overflow-hidden">
               <Users className="w-32 h-32 text-blue-200" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-xl font-bold text-lg rotate-6">
              👨‍⚕️ Dr. XYZ
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Meet Your <span className="text-blue-600">Instructor</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              10+ years of experience helping medical professionals build authority and scale their practices. 10+ years of experience helping medical professionals build authority and scale their practices.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Expert Leader</h4>
                  <p className="text-gray-500 text-sm">Recognized as a leading authority in medical branding.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex-shrink-0">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">1000+ Students</h4>
                  <p className="text-gray-500 text-sm">Successfully trained 1000+ doctors globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
