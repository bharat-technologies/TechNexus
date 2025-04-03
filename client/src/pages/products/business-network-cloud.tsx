import { useEffect } from 'react';

const BusinessNetworkCloud = () => {
  useEffect(() => {
    document.title = 'Business Network Cloud - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Business Network Cloud</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Connect, collaborate, and streamline business operations with our secure network platform
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Seamless Business Connectivity</h2>
              <p className="text-lg mb-4">
                Bharat Business Network Cloud creates a secure, integrated environment where your company can connect with partners, suppliers, and customers. Our platform simplifies complex multi-party processes and enables real-time collaboration across organizational boundaries.
              </p>
              <p className="text-lg">
                Built on advanced blockchain technology and secure APIs, our business network solution provides the transparency, security, and efficiency needed to thrive in today's interconnected business landscape.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                  <circle cx="300" cy="200" r="120" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                  <circle cx="300" cy="200" r="80" fill="white" stroke="#333" strokeWidth="1"></circle>
                  <circle cx="180" cy="120" r="40" fill="white" stroke="#333" strokeWidth="2"></circle>
                  <circle cx="420" cy="120" r="40" fill="white" stroke="#333" strokeWidth="2"></circle>
                  <circle cx="180" cy="280" r="40" fill="white" stroke="#333" strokeWidth="2"></circle>
                  <circle cx="420" cy="280" r="40" fill="white" stroke="#333" strokeWidth="2"></circle>
                  <line x1="214" y1="136" x2="266" y2="166" stroke="#333" strokeWidth="2"></line>
                  <line x1="334" y1="166" x2="386" y2="136" stroke="#333" strokeWidth="2"></line>
                  <line x1="214" y1="264" x2="266" y2="234" stroke="#333" strokeWidth="2"></line>
                  <line x1="334" y1="234" x2="386" y2="264" stroke="#333" strokeWidth="2"></line>
                  <text x="170" y="125" fill="#333" fontSize="14" fontWeight="bold" textAnchor="middle">Vendors</text>
                  <text x="430" y="125" fill="#333" fontSize="14" fontWeight="bold" textAnchor="middle">Clients</text>
                  <text x="170" y="285" fill="#333" fontSize="14" fontWeight="bold" textAnchor="middle">Partners</text>
                  <text x="430" y="285" fill="#333" fontSize="14" fontWeight="bold" textAnchor="middle">Finance</text>
                  <text x="300" y="200" fill="#333" fontSize="16" fontWeight="bold" textAnchor="middle">Your</text>
                  <text x="300" y="220" fill="#333" fontSize="16" fontWeight="bold" textAnchor="middle">Business</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Secure Network Infrastructure</h3>
                <p className="text-gray-600">Enterprise-grade security with end-to-end encryption, identity management, and granular access controls to protect sensitive business data.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Seamless Integration</h3>
                <p className="text-gray-600">Connect easily with existing enterprise systems including ERP, CRM, SCM, and financial platforms through our comprehensive API ecosystem.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Rapid Deployment</h3>
                <p className="text-gray-600">Get up and running quickly with pre-built templates, connectors, and workflows designed for common business processes and industry standards.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Business Solutions</h2>
              <p className="text-lg mb-4">
                Our Business Network Cloud enables powerful solutions for various business needs:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-box"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Supply Chain Management</h3>
                    <p className="text-gray-600">Gain end-to-end visibility into your supply chain with real-time tracking, automated procurement, and inventory optimization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Contract Management</h3>
                    <p className="text-gray-600">Streamline contract creation, approval, execution, and monitoring with digital workflows and smart contracts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Trade Finance</h3>
                    <p className="text-gray-600">Simplify complex trade financing with secure document exchange, automated compliance checks, and streamlined payment processes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Network Analytics</h3>
                  <p className="text-gray-600">Gain insights into network performance and business relationships</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-cube"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Blockchain Ledger</h3>
                  <p className="text-gray-600">Immutable transaction records for enhanced trust and transparency</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Automated Workflows</h3>
                  <p className="text-gray-600">Streamline processes with intelligent automation and rules</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Compliance Tools</h3>
                  <p className="text-gray-600">Built-in features to maintain regulatory compliance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Industry Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-industry"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Manufacturing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Supplier collaboration portal</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Quality assurance tracking</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Production planning tools</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Logistics & Distribution</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Shipment tracking system</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Fleet management tools</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Customs documentation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-hospital"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Healthcare</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Medical supply chain</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Provider credentialing</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>HIPAA compliant sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Implementation & Support</h2>
              <p className="text-lg mb-4">
                Our experienced team ensures a smooth transition to the Business Network Cloud with comprehensive implementation services and ongoing support:
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-clipboard-check"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Network Planning</h3>
                    <p className="text-gray-600">Collaborate on business objectives, technical requirements, and network architecture design</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-users-cog"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Partner Onboarding</h3>
                    <p className="text-gray-600">Streamlined process for adding business partners to your network with minimal disruption</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Training & Education</h3>
                    <p className="text-gray-600">Comprehensive training programs for administrators, users, and network participants</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">24/7 Support</h3>
                    <p className="text-gray-600">Around-the-clock technical assistance and dedicated account management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="font-poppins font-bold text-3xl mb-6">Success Stories</h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-700 pb-4">
                    <h3 className="font-poppins font-semibold text-xl mb-2">Global Manufacturing Leader</h3>
                    <p className="mb-2">Reduced supply chain delays by 47% and improved inventory accuracy to 99.8% through our network solutions.</p>
                    <div className="flex items-center mt-3">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="ml-3 text-green-400">85% ROI</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <h3 className="font-poppins font-semibold text-xl mb-2">International Logistics Company</h3>
                    <p className="mb-2">Streamlined customs processing by connecting 32 partners across 18 countries, reducing documentation errors by 92%.</p>
                    <div className="flex items-center mt-3">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="ml-3 text-green-400">78% ROI</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">Financial Services Consortium</h3>
                    <p className="mb-2">Accelerated trade finance processes by 65% while enhancing compliance verification and reducing fraud risks.</p>
                    <div className="flex items-center mt-3">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="ml-3 text-green-400">92% ROI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Transform Your Business Network Today</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join leading organizations that have revolutionized their business operations with our Business Network Cloud. Schedule a consultation to learn how we can help streamline your business processes.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Request a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessNetworkCloud;