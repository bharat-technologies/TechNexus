import { useEffect } from 'react';

const Product2 = () => {
  useEffect(() => {
    document.title = 'Quantum Security Suite - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Quantum Security Suite</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Next-generation protection for the post-quantum cybersecurity landscape
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Future-Proof Security</h2>
              <p className="text-lg mb-4">
                The Quantum Security Suite by Bharat Technologies is a comprehensive cybersecurity solution designed to protect your organization's critical assets against both conventional and quantum computing threats.
              </p>
              <p className="text-lg">
                As quantum computing continues to advance, traditional encryption methods will become vulnerable to new types of attacks. Our suite implements quantum-resistant algorithms and security protocols to ensure your data remains secure in this new era.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <circle cx="300" cy="200" r="120" fill="#e0e0e0"></circle>
                <circle cx="300" cy="200" r="90" fill="white" stroke="#333" strokeWidth="2" strokeDasharray="8,4"></circle>
                <rect x="260" y="160" width="80" height="80" fill="#e0e0e0" stroke="#333" strokeWidth="2" rx="5"></rect>
                <circle cx="250" cy="150" r="20" fill="#333"></circle>
                <circle cx="350" cy="150" r="20" fill="#333"></circle>
                <circle cx="250" cy="250" r="20" fill="#333"></circle>
                <circle cx="350" cy="250" r="20" fill="#333"></circle>
                <path d="M250 150 L300 200 L350 150" stroke="#333" strokeWidth="2" fill="none"></path>
                <path d="M250 250 L300 200 L350 250" stroke="#333" strokeWidth="2" fill="none"></path>
                <path d="M260 160 L300 200 L260 240" stroke="#333" strokeWidth="2" fill="none"></path>
                <path d="M340 160 L300 200 L340 240" stroke="#333" strokeWidth="2" fill="none"></path>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-lock"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Quantum-Resistant Encryption</h3>
                <p className="text-gray-600">Advanced encryption algorithms designed to withstand attacks from both classical and quantum computers.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Adaptive Threat Protection</h3>
                <p className="text-gray-600">AI-powered defense system that evolves with the threat landscape to identify and neutralize emerging attacks.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-key"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Secure Key Management</h3>
                <p className="text-gray-600">Robust system for generating, storing, and rotating cryptographic keys with quantum entropy sources.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Comprehensive Protection</h2>
              <p className="text-lg mb-4">
                Our Quantum Security Suite provides end-to-end protection across your entire digital ecosystem:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Network Security:</strong> Quantum-resistant VPNs, firewalls, and intrusion detection systems</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Data Protection:</strong> Advanced encryption for data at rest, in transit, and in use</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Identity Management:</strong> Multi-factor authentication with quantum-resistant protocols</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Application Security:</strong> Secure development frameworks and runtime protection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Cloud Security:</strong> Specialized controls for hybrid and multi-cloud environments</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <polygon points="300,100 150,200 300,300 450,200" fill="#e0e0e0" stroke="#333" strokeWidth="2"></polygon>
                <circle cx="300" cy="200" r="60" fill="white" stroke="#333" strokeWidth="2"></circle>
                <rect x="275" y="175" width="50" height="50" fill="#333" rx="5"></rect>
                <circle cx="300" cy="160" r="8" fill="#333"></circle>
                <path d="M292 175 L292 160 L308 160 L308 175" stroke="#333" strokeWidth="2" fill="none"></path>
                <line x1="150" y1="200" x2="250" y2="200" stroke="#333" strokeWidth="2"></line>
                <line x1="350" y1="200" x2="450" y2="200" stroke="#333" strokeWidth="2"></line>
                <line x1="300" y1="100" x2="300" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="300" y1="250" x2="300" y2="300" stroke="#333" strokeWidth="2"></line>
                <circle cx="150" cy="200" r="10" fill="#333"></circle>
                <circle cx="450" cy="200" r="10" fill="#333"></circle>
                <circle cx="300" cy="100" r="10" fill="#333"></circle>
                <circle cx="300" cy="300" r="10" fill="#333"></circle>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-university"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Financial Services</h3>
                <p className="text-sm text-gray-600">Protect financial transactions and sensitive customer data from advanced threats.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">Secure patient records and medical systems against evolving cyber threats.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-industry"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Manufacturing</h3>
                <p className="text-sm text-gray-600">Safeguard intellectual property and operational technology from emerging risks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-satellite"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Government & Defense</h3>
                <p className="text-sm text-gray-600">Protect critical infrastructure and classified information with quantum-level security.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Implementation & Support</h2>
              <p className="text-lg mb-4">
                We understand that implementing advanced security solutions requires expertise and careful planning. Our team of security specialists provides comprehensive support throughout your security journey:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-search text-black mt-1 mr-2"></i>
                  <span><strong>Security Assessment:</strong> Comprehensive evaluation of your current security posture</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-sitemap text-black mt-1 mr-2"></i>
                  <span><strong>Custom Implementation:</strong> Tailored deployment aligned with your specific requirements</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-graduation-cap text-black mt-1 mr-2"></i>
                  <span><strong>Training:</strong> Knowledge transfer to ensure your team can effectively manage the system</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-headset text-black mt-1 mr-2"></i>
                  <span><strong>24/7 Support:</strong> Continuous monitoring and incident response assistance</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="font-poppins font-semibold text-xl mb-6 text-center">Client Testimonial</h3>
                <blockquote className="italic text-gray-600 mb-4">
                  "The Quantum Security Suite has transformed our approach to cybersecurity. As a financial institution, we handle extremely sensitive data and need to stay ahead of emerging threats. Bharat Technologies' solution provides us with the confidence that our systems will remain secure, even in the post-quantum era."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-user text-gray-500"></i>
                  </div>
                  <div>
                    <p className="font-medium">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">CISO, National Banking Corporation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Secure Your Future Today</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Don't wait until quantum computing threats become a reality. Prepare your organization now with the Quantum Security Suite.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Schedule a Security Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product2;
