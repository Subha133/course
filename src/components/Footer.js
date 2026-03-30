import React from 'react';
import { Mail, ShieldCheck, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-16 mb-16">
          <div className="col-span-2">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              DocBrand
            </span>
            <p className="mt-6 text-gray-400 max-w-sm leading-relaxed font-medium">
              Empowering medical professionals to build digital authority and scale their impact globally.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="flex items-center space-x-4 text-gray-400 mb-4 hover:text-white transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span className="font-medium tracking-tight">support@docbrand.com</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <ShieldCheck className="w-5 h-5 text-gray-600" />
                <span className="font-medium tracking-tight">Privacy Policy</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <FileText className="w-5 h-5 text-gray-600" />
                <span className="font-medium tracking-tight">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 font-bold uppercase tracking-widest text-xs">
          <p>© 2026 DocBrand. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with ❤️ for Doctors</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
