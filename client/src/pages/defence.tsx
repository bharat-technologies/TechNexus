import { useEffect } from 'react';

const Defence = () => {
  useEffect(() => {
    document.title = 'Defence - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Defence Technology</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Cutting-edge solutions for national security and defense capabilities
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Advanced Defence Solutions</h2>
              <p className="text-lg mb-4">
                Bharat Technologies is at the forefront of developing sophisticated defence technology solutions that enhance national security, protect critical infrastructure, and strengthen military capabilities.
              </p>
              <p className="text-lg">
                Our team of defence experts and engineers combines deep domain knowledge with cutting-edge technological innovation to deliver reliable, secure, and effective defence systems.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <path d="M300 100 L200 200 L300 300 L400 200 Z" fill="#e0e0e0" stroke="#333" strokeWidth="3"></path>
                <line x1="250" y1="150" x2="350" y2="150" stroke="#333" strokeWidth="3"></line>
                <line x1="250" y1="250" x2="350" y2="250" stroke="#333" strokeWidth="3"></line>
                <circle cx="300" cy="200" r="30" fill="#333"></circle>
                <path d="M250 150 L200 200 L250 250" stroke="#333" strokeWidth="3" fill="none"></path>
                <path d="M350 150 L400 200 L350 250" stroke="#333" strokeWidth="3" fill="none"></path>
                <line x1="150" y1="200" x2="200" y2="200" stroke="#333" strokeWidth="2" strokeDasharray="5,5"></line>
                <line x1="400" y1="200" x2="450" y2="200" stroke="#333" strokeWidth="2" strokeDasharray="5,5"></line>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Our Defence Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-satellite-dish"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Intelligence Systems</h3>
                <p className="text-gray-600">Advanced surveillance and intelligence gathering technologies for enhanced situational awareness.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Cyber Defence</h3>
                <p className="text-gray-600">Military-grade cybersecurity solutions to protect critical defence infrastructure from sophisticated attacks.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-broadcast-tower"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Communication Systems</h3>
                <p className="text-gray-600">Secure, reliable, and encrypted communication networks for military and defence operations.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Defence AI & Autonomous Systems</h2>
              <p className="text-lg mb-4">
                Our cutting-edge AI capabilities are transforming defence operations, enabling faster decision-making, predictive analysis, and autonomous systems that reduce risk to personnel.
              </p>
              <p className="text-lg">
                From unmanned aerial vehicles to intelligent threat detection systems, our AI solutions provide defence organizations with a technological advantage while prioritizing ethical considerations and human oversight.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="150" y="150" width="300" height="100" fill="#e0e0e0" rx="5"></rect>
                <rect x="200" y="180" width="200" height="40" fill="#333" rx="5"></rect>
                <circle cx="170" cy="200" r="10" fill="#333"></circle>
                <circle cx="430" cy="200" r="10" fill="#333"></circle>
                <path d="M300 100 L300 150" stroke="#333" strokeWidth="2"></path>
                <path d="M300 250 L300 300" stroke="#333" strokeWidth="2"></path>
                <circle cx="300" cy="80" r="20" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="300" cy="320" r="20" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <path d="M150 200 L120 180 L120 220 Z" fill="#333"></path>
                <path d="M450 200 L480 180 L480 220 Z" fill="#333"></path>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Our Defence Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lock text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Security</h3>
                <p className="text-sm">Multi-layered security approach with the highest standards</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cogs text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Reliability</h3>
                <p className="text-sm">Robust systems designed for mission-critical operations</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bolt text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Speed</h3>
                <p className="text-sm">Fast deployment and real-time processing capabilities</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Compliance</h3>
                <p className="text-sm">Adherence to international defence standards and regulations</p>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Partner with Bharat Technologies for Defence Innovation</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our team of defence technology experts is ready to discuss your requirements and develop tailored solutions to address your most complex challenges.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Defence;
