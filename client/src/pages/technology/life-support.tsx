import React from 'react';

export default function LifeSupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Life Support Technology</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Critical life support systems and technology designed for the most challenging environments, from healthcare facilities to space exploration.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="mb-4">
          Our Life Support Technology page is currently under development. We're working on creating comprehensive content that showcases our innovative solutions for critical life support systems.
        </p>
        <p>
          Please check back soon for detailed information about our life support technology offerings, case studies, and implementation strategies for various environments.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center max-w-md">
          <h3 className="text-xl font-bold mb-3">Interested in learning more?</h3>
          <p className="mb-4">Contact our life support technology specialists to discuss your specific needs and how we can help provide critical life-sustaining solutions.</p>
          <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">Contact Us</a>
        </div>
      </div>
    </div>
  );
}