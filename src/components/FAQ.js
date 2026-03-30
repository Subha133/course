"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-8 rounded-2xl flex justify-between items-center transition-all border-2 border-transparent ${
          isOpen ? 'bg-blue-50 border-blue-100 shadow-lg' : 'bg-white border-gray-100'
        }`}
      >
        <span className="text-xl font-bold text-gray-900">{question}</span>
        {isOpen ? <Minus className="text-blue-600 w-6 h-6 flex-shrink-0" /> : <Plus className="text-gray-400 w-6 h-6 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-10 text-gray-600 text-lg leading-relaxed bg-white/50 border-x-2 border-b-2 border-blue-50/50 rounded-b-2xl mx-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "How long is the access?", answer: "Lifetime access. You can watch anytime, anywhere, at your own pace." },
    { question: "Is there a refund policy?", answer: "Yes, we offer a 7-day money-back guarantee (optional)." },
    { question: "Who is this course for?", answer: "Medical professionals, doctors, and students looking to build a personal brand." },
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Frequently Asked <span className="text-blue-600">Questions</span></h2>
          <p className="text-lg text-gray-500 font-medium">Everything you need to know about the course.</p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
