import { useEffect } from 'react';

const Product3 = () => {
  useEffect(() => {
    document.title = 'Enterprise Cloud Platform - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Enterprise Cloud Platform</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            A comprehensive cloud solution for modern enterprise needs
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Cloud Infrastructure for the Future</h2>
              <p className="text-lg mb-4">
                The Bharat Technologies Enterprise Cloud Platform provides a complete, flexible, and secure cloud computing environment designed specifically for the complex needs of modern enterprises.
              </p>
              <p className="text-lg">
                Whether you're looking to migrate existing applications, develop new cloud-native solutions, or implement a hybrid strategy, our platform delivers the performance, reliability, and scalability your business requires.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <path d="M150 250 Q 300 100 450 250" stroke="#e0e0e0" strokeWidth="60" fill="none" strokeLinecap="round"></path>
                <rect x="200" y="200" width="200" height="120" fill="#e0e0e0" rx="10"></rect>
                <rect x="225" y="225" width="150" height="70" fill="white" rx="5"></rect>
                <rect x="240" y="240" width="120" height="10" fill="#333" rx="2"></rect>
                <rect x="240" y="260" width="80" height="10" fill="#333" rx="2"></rect>
                <rect x="240" y="280" width="100" height="10" fill="#333" rx="2"></rect>
                <circle cx="190" cy="170" r="15" fill="#333"></circle>
                <circle cx="410" cy="170" r="15" fill="#333"></circle>
                <path d="M150 250 L175 220" stroke="#333" strokeWidth="2" strokeDasharray="5,5"></path>
                <path d="M450 250 L425 220" stroke="#333" strokeWidth="2" strokeDasharray="5,5"></path>
                <path d="M300 160 L300 200" stroke="#333" strokeWidth="2"></path>
                <circle cx="300" cy="140" r="20" fill="#333"></circle>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Platform Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Compute Services</h3>
                <p className="text-gray-600">Scalable virtual machines, containers, and serverless functions to power your applications with optimal performance.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Storage Solutions</h3>
                <p className="text-gray-600">Flexible storage options including object storage, block storage, and file systems with enterprise-grade reliability.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Networking</h3>
                <p className="text-gray-600">Advanced networking capabilities including virtual networks, load balancing, and software-defined networking.</p>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Security & Compliance</h3>
                <p className="text-gray-600">Comprehensive security controls, identity management, and compliance frameworks to protect your assets.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Management Tools</h3>
                <p className="text-gray-600">Intuitive dashboards and automation tools for efficient cloud resource management and monitoring.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Developer Services</h3>
                <p className="text-gray-600">Integrated development tools, APIs, and frameworks to accelerate application development and deployment.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Enterprise-Grade Reliability</h2>
              <p className="text-lg mb-4">
                Our platform is built on a globally distributed infrastructure with multiple redundancies to ensure maximum uptime and data durability.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>99.99% Uptime SLA:</strong> Guaranteed availability for critical services</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Auto-scaling:</strong> Dynamically adjust resources based on demand</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Disaster Recovery:</strong> Automated backup and recovery solutions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Global Edge Network:</strong> Content delivery with minimal latency</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>24/7 Monitoring:</strong> Continuous system health checks and alerts</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <circle cx="300" cy="200" r="150" fill="#e0e0e0"></circle>
                <circle cx="300" cy="200" r="120" fill="white" stroke="#333" strokeWidth="1" strokeDasharray="5,5"></circle>
                <rect x="250" y="150" width="100" height="100" fill="#e0e0e0" stroke="#333" strokeWidth="2" rx="5"></rect>
                <rect x="260" y="160" width="80" height="80" fill="white" stroke="#333" strokeWidth="1" rx="3"></rect>
                <circle cx="200" cy="150" r="30" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="400" cy="150" r="30" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="200" cy="250" r="30" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="400" cy="250" r="30" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <line x1="230" y1="150" x2="250" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="350" y1="150" x2="370" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="230" y1="250" x2="250" y2="250" stroke="#333" strokeWidth="2"></line>
                <line x1="350" y1="250" x2="370" y2="250" stroke="#333" strokeWidth="2"></line>
                <circle cx="300" cy="100" r="20" fill="#333"></circle>
                <circle cx="300" cy="300" r="20" fill="#333"></circle>
                <line x1="300" y1="120" x2="300" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="300" y1="250" x2="300" y2="280" stroke="#333" strokeWidth="2"></line>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Deployment Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">Public Cloud</h3>
                <p className="text-gray-600">Fully managed cloud infrastructure with pay-as-you-go pricing and rapid scalability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-lock"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">Private Cloud</h3>
                <p className="text-gray-600">Dedicated cloud environment for maximum control, security, and compliance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">Hybrid Cloud</h3>
                <p className="text-gray-600">Seamlessly integrate public and private cloud resources for optimal flexibility.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Industry Solutions</h2>
              <p className="text-lg mb-4">
                Our Enterprise Cloud Platform is customized to address the unique challenges of different industries:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-poppins font-semibold text-lg mb-1">Healthcare</h3>
                  <p className="text-gray-600">HIPAA-compliant infrastructure with specialized tools for healthcare data management and analytics.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-poppins font-semibold text-lg mb-1">Financial Services</h3>
                  <p className="text-gray-600">Secure, high-performance computing with financial compliance frameworks and transaction processing capabilities.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-poppins font-semibold text-lg mb-1">Manufacturing</h3>
                  <p className="text-gray-600">IoT integration, supply chain optimization, and real-time analytics for modern manufacturing operations.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-poppins font-semibold text-lg mb-1">Retail</h3>
                  <p className="text-gray-600">Scalable e-commerce platforms, customer data analytics, and inventory management solutions.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="font-poppins font-semibold text-xl mb-6 text-center">Platform Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg flex items-center">
                    <i className="fas fa-database text-black mr-3"></i>
                    <span>Database Services</span>
                  </div>
                  <div className="p-3 border rounded-lg flex items-center">
                    <i className="fas fa-eye text-black mr-3"></i>
                    <span>AI & Machine Learning</span>
                  </div>
                  <div className="p-3 border rounded-lg flex items-center">
                    <i className="fas fa-chart-bar text-black mr-3"></i>
                    <span>Analytics & Big Data</span>
                  </div>
                  <div className="p-3 border rounded-lg flex items-center">
                    <i className="fas fa-microchip text-black mr-3"></i>
                    <span>IoT Platform</span>
                  </div>
                  <div className="p-3 border rounded-lg flex items-center">
                    <i className="fas fa-file-alt text-black mr-3"></i>
                    <span>Content Management</span>
                  </div>
                  <div className="p-3 border rounded-lg flex items-center">
                    <i className="fas fa-users text-black mr-3"></i>
                    <span>Identity Management</span>
                  </div>
                  <div className="p-3 border rounded-lg flex items-center">
                    <i className="fas fa-mobile-alt text-black mr-3"></i>
                    <span>Mobile Services</span>
                  </div>
                  <div className="p-3 border rounded-lg flex items-center">
                    <i className="fas fa-play-circle text-black mr-3"></i>
                    <span>Media Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Begin Your Cloud Journey</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Whether you're just starting your cloud migration or looking to optimize your existing cloud infrastructure, our team is ready to help you achieve your goals.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Talk to a Cloud Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product3;
