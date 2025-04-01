import { useEffect } from 'react';

const Support = () => {
  useEffect(() => {
    document.title = 'Support Services - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Support Services</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive technical support for your mission-critical systems
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Reliable Technical Support</h2>
              <p className="text-lg mb-4">
                Bharat Technologies offers comprehensive support services designed to keep your technology infrastructure running smoothly and efficiently. Our experienced support team provides timely assistance for all your technical needs, ensuring minimal disruption to your business operations.
              </p>
              <p className="text-lg">
                Whether you need help with troubleshooting, system maintenance, or emergency response, our support team is available 24/7 to provide expert guidance and swift resolution to your technical challenges.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="150" y="100" width="300" height="200" fill="#e0e0e0" rx="10"></rect>
                <rect x="170" y="120" width="260" height="160" fill="white" rx="5"></rect>
                <circle cx="300" cy="200" r="60" fill="#333"></circle>
                <path d="M270 180 L330 220" stroke="white" strokeWidth="4"></path>
                <path d="M270 220 L330 180" stroke="white" strokeWidth="4"></path>
                <circle cx="200" cy="130" r="10" fill="#333"></circle>
                <circle cx="230" cy="130" r="10" fill="#333"></circle>
                <circle cx="260" cy="130" r="10" fill="#333"></circle>
                <rect x="190" y="270" width="220" height="20" fill="#333" rx="5"></rect>
                <circle cx="130" cy="200" r="20" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <path d="M130 185 L130 215" stroke="#333" strokeWidth="2"></path>
                <path d="M115 200 L145 200" stroke="#333" strokeWidth="2"></path>
                <circle cx="470" cy="200" r="20" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <path d="M460 190 L480 210" stroke="#333" strokeWidth="2"></path>
                <path d="M460 210 L480 190" stroke="#333" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Our Support Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Help Desk Support</h3>
                <p className="text-gray-600">Multi-channel support for day-to-day technical issues, providing quick resolution through phone, email, and chat assistance.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Infrastructure Management</h3>
                <p className="text-gray-600">Proactive monitoring and maintenance of your IT infrastructure, including servers, networks, and cloud resources.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Security Support</h3>
                <p className="text-gray-600">Continuous security monitoring, threat detection, and incident response to protect your systems and data.</p>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">System Updates & Patching</h3>
                <p className="text-gray-600">Regular maintenance, updates, and patching to keep your systems secure, stable, and performing optimally.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">User Administration</h3>
                <p className="text-gray-600">Management of user accounts, access controls, and permissions for your organizational systems.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Training & Knowledge Transfer</h3>
                <p className="text-gray-600">Comprehensive training sessions and documentation to empower your team with technical knowledge.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Support Service Levels</h2>
              <p className="text-lg mb-6">
                We offer flexible support plans designed to meet your specific business needs and budget constraints. Choose the support level that aligns with your requirements:
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                    <h3 className="font-poppins font-semibold text-xl">Standard Support</h3>
                  </div>
                  <ul className="space-y-2 pl-14">
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>Business hours (9 AM - 6 PM) support</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>Email and chat assistance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>4-hour response time for critical issues</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                    <h3 className="font-poppins font-semibold text-xl">Premium Support</h3>
                  </div>
                  <ul className="space-y-2 pl-14">
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>24/7 support coverage</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>Phone, email, and chat assistance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>1-hour response time for critical issues</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>Dedicated support engineer</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center mb-2">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                    <h3 className="font-poppins font-semibold text-xl">Enterprise Support</h3>
                  </div>
                  <ul className="space-y-2 pl-14">
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>24/7 priority support</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>15-minute response time for critical issues</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>Dedicated support team</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>Quarterly system reviews and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-black mt-1 mr-2"></i>
                      <span>Proactive monitoring and issue prevention</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="150" y="100" width="300" height="200" fill="#e0e0e0" rx="5"></rect>
                <rect x="170" y="130" width="260" height="30" fill="white" rx="5"></rect>
                <rect x="170" y="180" width="260" height="30" fill="white" rx="5"></rect>
                <rect x="170" y="230" width="260" height="30" fill="white" rx="5"></rect>
                <rect x="150" y="80" width="300" height="30" fill="#333" rx="5"></rect>
                <text x="300" y="100" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SUPPORT TIERS</text>
                <rect x="150" y="60" width="60" height="20" fill="#333" rx="3"></rect>
                <rect x="220" y="60" width="60" height="20" fill="#333" rx="3"></rect>
                <rect x="290" y="60" width="60" height="20" fill="#333" rx="3"></rect>
                <circle cx="180" cy="145" r="10" fill="#333"></circle>
                <circle cx="180" cy="195" r="10" fill="#333"></circle>
                <circle cx="180" cy="245" r="10" fill="#333"></circle>
                <text x="220" y="150" fill="#333" fontSize="14">Standard</text>
                <text x="220" y="200" fill="#333" fontSize="14">Premium</text>
                <text x="220" y="250" fill="#333" fontSize="14">Enterprise</text>
                <path d="M350 145 L390 145" stroke="#333" strokeWidth="2"></path>
                <path d="M350 195 L410 195" stroke="#333" strokeWidth="2"></path>
                <path d="M350 245 L430 245" stroke="#333" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Our Support Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-ticket-alt text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Issue Logging</h3>
                <p className="text-sm">Submit support tickets through multiple channels</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Diagnosis</h3>
                <p className="text-sm">Our experts analyze and diagnose the issue</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tools text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Resolution</h3>
                <p className="text-sm">Swift implementation of the solution</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Verification</h3>
                <p className="text-sm">Confirm the issue is fully resolved</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Client Testimonials</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="italic text-gray-600 mb-4">
                    "The support team at Bharat Technologies has been exceptional. They respond quickly to our issues and provide effective solutions that minimize our downtime. Their proactive approach to system maintenance has significantly reduced our IT-related problems."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-user text-gray-500"></i>
                    </div>
                    <div>
                      <p className="font-medium">Vikram Singh</p>
                      <p className="text-sm text-gray-500">IT Director, Global Retail Solutions</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="italic text-gray-600 mb-4">
                    "When we experienced a critical system failure during a major product launch, the Bharat Technologies support team worked through the night to get us back online. Their dedication and technical expertise saved what could have been a disaster for our business."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-user text-gray-500"></i>
                    </div>
                    <div>
                      <p className="font-medium">Priya Sharma</p>
                      <p className="text-sm text-gray-500">COO, TechStart Innovations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="font-poppins font-semibold text-xl mb-6 text-center">Support Channels</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-4 rounded-lg mr-4">
                      <i className="fas fa-phone text-2xl text-black"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold">Phone Support</h4>
                      <p className="text-gray-600">+123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-4 rounded-lg mr-4">
                      <i className="fas fa-envelope text-2xl text-black"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold">Email Support</h4>
                      <p className="text-gray-600">support@bharattechnologies.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-4 rounded-lg mr-4">
                      <i className="fas fa-comments text-2xl text-black"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold">Live Chat</h4>
                      <p className="text-gray-600">Available 24/7 on our customer portal</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-4 rounded-lg mr-4">
                      <i className="fas fa-ticket-alt text-2xl text-black"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold">Support Portal</h4>
                      <p className="text-gray-600">Log and track support tickets online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Need Technical Support?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Contact our support team today to learn more about our support services and how we can help keep your systems running smoothly.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Support;
