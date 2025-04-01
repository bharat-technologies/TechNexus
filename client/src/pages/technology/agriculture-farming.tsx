import React from 'react';

export default function AgricultureFarmingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Agriculture & Farming Technology</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Cutting-edge solutions to revolutionize agriculture and farming practices for improved efficiency, sustainability, and productivity.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="mb-4">
          Our Agriculture & Farming Technology page is currently under development. We're working on creating comprehensive content that showcases our innovative solutions for the agriculture sector.
        </p>
        <p>
          Please check back soon for detailed information about our agricultural technology offerings, case studies, and implementation strategies.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center max-w-md">
          <h3 className="text-xl font-bold mb-3">Interested in learning more?</h3>
          <p className="mb-4">Contact our agriculture technology specialists to discuss your specific needs and how we can help transform your agricultural operations.</p>
          <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">Contact Us</a>
        </div>
      </div>
    </div>
  );
}