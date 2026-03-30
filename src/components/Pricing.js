"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, CheckCircle2, User, Mail, Phone, ShoppingCart } from 'lucide-react';
import { handleBuyNow } from '@/lib/payment';

const Pricing = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    // 1. Validate Form
    if (!user.name || !user.email || !user.phone) {
      alert("Please fill in all your details to proceed with the enrollment.");
      return;
    }

    // Call centralized payment handler
    await handleBuyNow({
      user,
      amount: 499,
      setLoading,
      onSuccess: (result) => {
        alert("Payment Successful! Welcome to the course.");
        // clear form or redirect could happen here
        setUser({ name: "", email: "", phone: "" });
      },
      onError: (errorMsg) => {
        alert(errorMsg);
      }
    });
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50/30 flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative inline-block mb-10">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-full blur-2xl opacity-40" />
          <div className="relative px-6 py-2.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full font-bold text-sm uppercase tracking-widest flex items-center justify-center">
            <Flame className="w-4 h-4 mr-2 text-orange-500 fill-current" />
            Limited Time Launch Offer
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
          Start Your Journey for <span className="text-blue-600">₹499</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto mt-12">
          {/* Left: What's Included */}
          <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-[2.5rem] p-10 text-left shadow-xl shadow-blue-900/5 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What You&apos;ll Get</h3>
            <ul className="space-y-6">
              {[
                "Lifetime Access to Course Content",
                "Personal Branding Masterclass",
                "Monetization Blueprint for Doctors",
                "Private Community Access",
                "Certificate of Completion"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Enrollment Form */}
          <div className="bg-white border-2 border-blue-100 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-blue-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <ShoppingCart className="w-24 h-24 text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-left flex items-center">
              Enroll Now
              <span className="ml-3 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full uppercase tracking-tighter">Secure Checkout</span>
            </h3>

            <div className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={user.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-semibold text-gray-900"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={user.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-semibold text-gray-900"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={user.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-semibold text-gray-900"
                />
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  onClick={handlePayment}
                  className={`w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : "Pay ₹499 Now 🔥"}
                </motion.button>
                <div className="mt-6 flex items-center justify-center space-x-4">
                  <span className="text-2xl font-bold text-gray-400 line-through">₹1999</span>
                  <span className="text-3xl font-black text-blue-600">₹499</span>
                </div>
                <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Secure 128-bit SSL Encrypted Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
