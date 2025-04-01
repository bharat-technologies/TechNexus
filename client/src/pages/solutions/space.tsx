import { useEffect } from 'react';

const SpaceSolutions = () => {
  useEffect(() => {
    document.title = 'Space Technology Solutions - Bharat Technologies';
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6" data-aos="fade-up">
              Space Technology Solutions
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Pioneering innovations that expand humanity's presence beyond Earth and transform how we leverage space capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Redefining Space Technology</h2>
              <p className="text-lg mb-5">
                At Bharat Technologies, we're reimagining how space technology can solve Earth's most pressing challenges. Our suite of space solutions leverages cutting-edge innovations in satellite technology, space communications, and data analytics to deliver unprecedented insights and capabilities.
              </p>
              <p className="text-lg mb-5">
                We collaborate with government agencies, research institutions, and commercial enterprises to develop sustainable, efficient, and groundbreaking space technologies that push the boundaries of what's possible in orbit and beyond.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Satellite Systems</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Space Communications</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Orbital Analytics</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Remote Sensing</span>
              </div>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="relative">
                {/* Space visualization SVG */}
                <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#080c24" rx="10"></rect>
                  {/* Stars */}
                  <circle cx="50" cy="50" r="1" fill="white"></circle>
                  <circle cx="100" cy="80" r="1.5" fill="white"></circle>
                  <circle cx="150" cy="30" r="1" fill="white"></circle>
                  <circle cx="200" cy="90" r="1.2" fill="white"></circle>
                  <circle cx="250" cy="40" r="1" fill="white"></circle>
                  <circle cx="300" cy="70" r="1.4" fill="white"></circle>
                  <circle cx="350" cy="20" r="1" fill="white"></circle>
                  <circle cx="400" cy="60" r="1.3" fill="white"></circle>
                  <circle cx="450" cy="50" r="1" fill="white"></circle>
                  <circle cx="500" cy="40" r="1.5" fill="white"></circle>
                  <circle cx="550" cy="80" r="1" fill="white"></circle>
                  <circle cx="70" cy="120" r="1.2" fill="white"></circle>
                  <circle cx="130" cy="150" r="1" fill="white"></circle>
                  <circle cx="190" cy="130" r="1.3" fill="white"></circle>
                  <circle cx="230" cy="180" r="1" fill="white"></circle>
                  <circle cx="330" cy="140" r="1.5" fill="white"></circle>
                  <circle cx="370" cy="170" r="1" fill="white"></circle>
                  <circle cx="430" cy="120" r="1.2" fill="white"></circle>
                  <circle cx="490" cy="160" r="1" fill="white"></circle>
                  <circle cx="530" cy="130" r="1.4" fill="white"></circle>
                  
                  {/* Earth */}
                  <circle cx="150" cy="300" r="70" fill="#1a53ff" opacity="0.8"></circle>
                  <circle cx="150" cy="300" r="65" fill="#1a53ff"></circle>
                  <path d="M 90 270 Q 130 250 180 280 Q 220 300 190 340 Q 150 350 120 330 Q 90 310 90 270" fill="#00cc00" opacity="0.8"></path>
                  
                  {/* Satellite orbits */}
                  <ellipse cx="300" cy="280" rx="220" ry="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"></ellipse>
                  <ellipse cx="300" cy="280" rx="180" ry="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"></ellipse>
                  
                  {/* Satellites */}
                  <g transform="translate(450, 220) rotate(30)">
                    <rect x="-10" y="-5" width="20" height="10" fill="#f0f0f0"></rect>
                    <rect x="-15" y="-2" width="5" height="4" fill="#f0f0f0"></rect>
                    <rect x="10" y="-2" width="5" height="4" fill="#f0f0f0"></rect>
                    <rect x="-8" y="5" width="16" height="3" fill="#e0e0e0"></rect>
                  </g>
                  
                  <g transform="translate(180, 200) rotate(-20)">
                    <rect x="-8" y="-4" width="16" height="8" fill="#f0f0f0"></rect>
                    <rect x="-12" y="-2" width="4" height="4" fill="#f0f0f0"></rect>
                    <rect x="8" y="-2" width="4" height="4" fill="#f0f0f0"></rect>
                    <rect x="-6" y="4" width="12" height="2" fill="#e0e0e0"></rect>
                  </g>
                  
                  {/* Space station */}
                  <g transform="translate(370, 290) rotate(10)">
                    <rect x="-30" y="-5" width="60" height="10" fill="#f0f0f0"></rect>
                    <rect x="-25" y="-15" width="50" height="10" fill="#c0c0c0"></rect>
                    <rect x="-25" y="5" width="50" height="10" fill="#c0c0c0"></rect>
                    <rect x="-15" y="-25" width="10" height="50" fill="#e0e0e0"></rect>
                    <rect x="5" y="-25" width="10" height="50" fill="#e0e0e0"></rect>
                  </g>
                  
                  {/* Datastream */}
                  <path d="M 240 220 Q 300 250 370 290" stroke="rgba(0,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" fill="none"></path>
                  <path d="M 440 230 Q 400 260 370 290" stroke="rgba(0,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" fill="none"></path>
                  <path d="M 370 290 Q 270 310 150 300" stroke="rgba(0,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" fill="none"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-4">Our Space Technology Solutions</h2>
            <p className="text-lg text-gray-600">
              Comprehensive suite of space technologies designed to address the complex challenges of operating in Earth's orbit and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="0">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-8">
                <div className="text-5xl text-blue-600 mb-6">
                  <i className="fas fa-satellite"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Advanced Satellite Systems</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed satellite platforms optimized for specific mission requirements, from Earth observation to communications and scientific research.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Modular satellite bus architecture</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>High-efficiency solar power systems</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Radiation-hardened onboard computing</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <div className="h-3 bg-purple-600"></div>
              <div className="p-8">
                <div className="text-5xl text-purple-600 mb-6">
                  <i className="fas fa-broadcast-tower"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Space Communication Networks</h3>
                <p className="text-gray-600 mb-4">
                  Secure, high-bandwidth communication systems connecting space assets with ground infrastructure, enabling real-time data transfer and command capabilities.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Optical intersatellite links</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Advanced encryption protocols</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Adaptive bandwidth management</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="h-3 bg-red-600"></div>
              <div className="p-8">
                <div className="text-5xl text-red-600 mb-6">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Launch & Recovery Services</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive planning and support for deploying spacecraft into orbit, including integration services, launch vehicle selection, and mission planning.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Mission profile optimization</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Launch vehicle integration</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Re-entry and recovery systems</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="0">
              <div className="h-3 bg-green-600"></div>
              <div className="p-8">
                <div className="text-5xl text-green-600 mb-6">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Earth Observation Systems</h3>
                <p className="text-gray-600 mb-4">
                  Advanced imaging and sensing systems providing high-resolution data for environmental monitoring, agriculture, urban planning, and disaster management.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Multi-spectral imaging payloads</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Synthetic aperture radar (SAR)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Hyperspectral environmental analysis</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <div className="h-3 bg-yellow-600"></div>
              <div className="p-8">
                <div className="text-5xl text-yellow-600 mb-6">
                  <i className="fas fa-microchip"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Space-Qualified Hardware</h3>
                <p className="text-gray-600 mb-4">
                  Radiation-hardened electronic components and mechanical systems designed to withstand the harsh conditions of the space environment.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Radiation-tolerant computing platforms</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Thermal management systems</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Precision attitude control mechanisms</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="h-3 bg-cyan-600"></div>
              <div className="p-8">
                <div className="text-5xl text-cyan-600 mb-6">
                  <i className="fas fa-chart-network"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Space Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics platforms that transform satellite data into actionable intelligence, utilizing AI and machine learning to derive insights from space-based observations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>AI-powered image analysis</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Predictive analytics platforms</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Real-time monitoring dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-4">Industries Leveraging Our Space Technology</h2>
            <p className="text-lg text-gray-600">
              Our space technology solutions are transforming operations across multiple sectors, providing insights and capabilities previously impossible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="0">
              <div className="text-3xl text-gray-800 mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Agriculture</h3>
              <p className="text-gray-600">Precision farming and crop health monitoring through satellite imagery and analysis</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="50">
              <div className="text-3xl text-gray-800 mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Defense & Security</h3>
              <p className="text-gray-600">Strategic surveillance and situational awareness for defense applications</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="text-3xl text-gray-800 mb-4">
                <i className="fas fa-city"></i>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Urban Development</h3>
              <p className="text-gray-600">Infrastructure monitoring and urban expansion planning with spatial intelligence</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="150">
              <div className="text-3xl text-gray-800 mb-4">
                <i className="fas fa-satellite-dish"></i>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Telecommunications</h3>
              <p className="text-gray-600">Global connectivity and broadband services via satellite networks</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="text-3xl text-gray-800 mb-4">
                <i className="fas fa-water"></i>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Environmental Monitoring</h3>
              <p className="text-gray-600">Climate change research and natural resource management through Earth observation</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="250">
              <div className="text-3xl text-gray-800 mb-4">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Logistics & Transportation</h3>
              <p className="text-gray-600">Fleet tracking and route optimization with satellite navigation and monitoring</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="text-3xl text-gray-800 mb-4">
                <i className="fas fa-oil-can"></i>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Energy</h3>
              <p className="text-gray-600">Infrastructure monitoring and exploration support for energy producers</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="350">
              <div className="text-3xl text-gray-800 mb-4">
                <i className="fas fa-medkit"></i>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Healthcare</h3>
              <p className="text-gray-600">Telemedicine services and health monitoring in remote regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-4">Success Stories in Space</h2>
            <p className="text-lg opacity-80">
              Real-world applications of our space technology solutions driving innovation and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="0">
              <div className="h-48 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                <i className="fas fa-satellite text-white text-6xl"></i>
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-semibold text-xl mb-3">Environmental Monitoring Network</h3>
                <p className="text-gray-300 mb-4">
                  Developed a constellation of Earth observation satellites providing critical data on climate patterns, deforestation, and natural disasters.
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-blue-400 font-medium">Government Agency</span>
                  <span className="bg-blue-900 text-blue-300 text-xs px-3 py-1 rounded-full">Completed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="h-48 bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center">
                <i className="fas fa-broadcast-tower text-white text-6xl"></i>
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-semibold text-xl mb-3">Global Communications Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Designed and implemented satellite communication systems providing connectivity to remote regions across three continents.
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-purple-400 font-medium">Telecommunications Provider</span>
                  <span className="bg-purple-900 text-purple-300 text-xs px-3 py-1 rounded-full">Ongoing</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="h-48 bg-gradient-to-r from-green-900 to-green-700 flex items-center justify-center">
                <i className="fas fa-leaf text-white text-6xl"></i>
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-semibold text-xl mb-3">Agricultural Resource Management</h3>
                <p className="text-gray-300 mb-4">
                  Created a specialized satellite data analytics platform that helps agricultural companies optimize irrigation and resource application.
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-green-400 font-medium">Agricultural Consortium</span>
                  <span className="bg-green-900 text-green-300 text-xs px-3 py-1 rounded-full">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Ready to Launch Your Space Technology Initiative?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Our team of space technology experts is ready to help you harness the power of space-based solutions for your unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#contact" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 inline-block">
                Schedule a Consultation
              </a>
              <a href="/space" className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 inline-block">
                Learn More About Our Technology
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpaceSolutions;