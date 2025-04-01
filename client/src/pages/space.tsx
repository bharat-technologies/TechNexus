import { useEffect } from 'react';

const Space = () => {
  useEffect(() => {
    document.title = 'Space Technology - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Space Technology</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Pioneering the next frontier of space exploration and satellite technology
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Advancing Space Capabilities</h2>
              <p className="text-lg mb-4">
                At Bharat Technologies, we're driving innovation in space technology, developing cutting-edge solutions for satellite systems, space communications, and data analytics that enable new possibilities in Earth observation, telecommunications, and space exploration.
              </p>
              <p className="text-lg">
                Our team of aerospace engineers, data scientists, and technology experts collaborates to create reliable, efficient, and groundbreaking space technologies that solve complex challenges for government agencies, research institutions, and commercial enterprises.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <circle cx="300" cy="200" r="150" fill="#e0e0e0"></circle>
                <circle cx="300" cy="200" r="120" fill="#f5f5f5"></circle>
                <ellipse cx="300" cy="200" rx="120" ry="30" fill="#e0e0e0"></ellipse>
                <path d="M300 80 L300 320" stroke="#333" strokeWidth="2" strokeDasharray="5,5"></path>
                <path d="M180 200 L420 200" stroke="#333" strokeWidth="2" strokeDasharray="5,5"></path>
                <circle cx="300" cy="200" r="40" fill="#333"></circle>
                <circle cx="300" cy="200" r="35" fill="#e0e0e0"></circle>
                <circle cx="240" cy="160" r="10" fill="#333"></circle>
                <circle cx="360" cy="240" r="10" fill="#333"></circle>
                <path d="M250 120 L270 140" stroke="#333" strokeWidth="2"></path>
                <path d="M350 280 L330 260" stroke="#333" strokeWidth="2"></path>
                <path d="M230 200 L270 200" stroke="#333" strokeWidth="2"></path>
                <path d="M330 200 L370 200" stroke="#333" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Our Space Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-satellite"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Satellite Systems</h3>
                <p className="text-gray-600">Custom satellite platforms and subsystems designed for reliability, longevity, and optimal performance in the space environment.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-broadcast-tower"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Space Communications</h3>
                <p className="text-gray-600">Advanced communication technology enabling high-bandwidth, secure data transmission between Earth and space assets.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Earth Observation</h3>
                <p className="text-gray-600">Sophisticated imaging and sensing technologies providing valuable insights for environmental monitoring, urban planning, and disaster management.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Space Data Analytics</h2>
              <p className="text-lg mb-4">
                The true value of space technology lies in the data it generates. Our advanced analytics platforms transform raw satellite data into actionable intelligence, helping organizations make informed decisions.
              </p>
              <p className="text-lg">
                Using artificial intelligence and machine learning, we process and analyze vast quantities of space-derived data to uncover patterns, predict trends, and generate insights across industries from agriculture to defense.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="150" y="100" width="300" height="200" fill="#e0e0e0" rx="10"></rect>
                <line x1="150" y1="150" x2="450" y2="150" stroke="#333" strokeWidth="2"></line>
                <rect x="170" y="120" width="260" height="20" fill="#333" rx="2"></rect>
                <rect x="170" y="170" width="80" height="110" fill="#333" rx="5"></rect>
                <rect x="270" y="170" width="80" height="110" fill="#333" rx="5"></rect>
                <rect x="370" y="170" width="60" height="50" fill="#333" rx="5"></rect>
                <rect x="370" y="230" width="60" height="50" fill="#333" rx="5"></rect>
                <circle cx="190" cy="135" r="5" fill="white"></circle>
                <circle cx="210" cy="135" r="5" fill="white"></circle>
                <circle cx="230" cy="135" r="5" fill="white"></circle>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Applications & Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Agriculture</h3>
                <p className="text-sm text-gray-600">Precision farming and crop monitoring using satellite imagery</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-city"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Urban Planning</h3>
                <p className="text-sm text-gray-600">Infrastructure monitoring and urban development analysis</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-satellite-dish"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Telecommunications</h3>
                <p className="text-sm text-gray-600">Global connectivity and broadband internet services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Defense & Security</h3>
                <p className="text-sm text-gray-600">Strategic surveillance and situational awareness</p>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Explore the Possibilities of Space Technology</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Discover how our space technology solutions can provide valuable insights and capabilities for your organization's unique needs.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Connect with Our Space Experts
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Space;
