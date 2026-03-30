import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import LearnCards from '@/components/LearnCards';
import Instructor from '@/components/Instructor';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Become a Top Doctor Brand | Course",
  description: "30-day personal branding course for medical professionals.",
};

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100/50" />
      </div>
      <Overview />
      <LearnCards />
      <Instructor />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
