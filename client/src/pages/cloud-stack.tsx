import { useEffect } from 'react';

const CloudStack = () => {
  useEffect(() => {
    document.title = 'Cloud Stack - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Cloud Stack Solutions</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Scalable, secure, and flexible cloud infrastructure for modern businesses
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Comprehensive Cloud Solutions</h2>
              <p className="text-lg mb-4">
                Bharat Technologies provides end-to-end cloud solutions that help businesses modernize their IT infrastructure, improve operational efficiency, and accelerate innovation.
              </p>
              <p className="text-lg">
                Our cloud stack is designed to be modular, allowing you to select the components that best fit your business needs while ensuring seamless integration and performance.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <path d="M150 250 Q 300 100 450 250" stroke="#e0e0e0" strokeWidth="60" fill="none" strokeLinecap="round"></path>
                <rect x="200" y="200" width="200" height="150" fill="#e0e0e0" rx="10"></rect>
                <rect x="225" y="225" width="150" height="100" fill="white" rx="5"></rect>
                <circle cx="300" cy="180" r="25" fill="#333"></circle>
                <path d="M260 180 Q 300 140 340 180" stroke="#333" strokeWidth="10" fill="none"></path>
                <line x1="250" y1="250" x2="350" y2="250" stroke="#333" strokeWidth="2"></line>
                <line x1="250" y1="275" x2="350" y2="275" stroke="#333" strokeWidth="2"></line>
                <line x1="250" y1="300" x2="350" y2="300" stroke="#333" strokeWidth="2"></line>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Our Cloud Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Infrastructure as a Service (IaaS)</h3>
                <p className="text-gray-600">Virtualized computing resources including servers, storage, and networking components delivered over the internet.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-layer-group"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Platform as a Service (PaaS)</h3>
                <p className="text-gray-600">A complete development and deployment environment in the cloud, with resources that enable you to deliver everything from simple cloud-based apps to sophisticated enterprise applications.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cloud-download-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Software as a Service (SaaS)</h3>
                <p className="text-gray-600">Cloud-based software delivered on demand, typically accessed through a web browser, with infrastructure and platforms completely managed by the provider.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Why Choose Our Cloud Stack</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Scalability:</strong> Easily scale resources up or down based on demand</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Security:</strong> Enterprise-grade security with multi-layered protection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Reliability:</strong> 99.9% uptime guarantee with redundant systems</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Cost-Efficiency:</strong> Pay only for what you use with no upfront hardware costs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Integration:</strong> Seamless integration with existing systems and third-party services</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="150" y="100" width="300" height="50" fill="#e0e0e0" rx="5"></rect>
                <rect x="150" y="175" width="300" height="50" fill="#e0e0e0" rx="5"></rect>
                <rect x="150" y="250" width="300" height="50" fill="#e0e0e0" rx="5"></rect>
                <rect x="175" y="100" width="30" height="50" fill="#333" rx="2"></rect>
                <rect x="225" y="100" width="30" height="50" fill="#333" rx="2"></rect>
                <rect x="275" y="175" width="30" height="50" fill="#333" rx="2"></rect>
                <rect x="325" y="175" width="30" height="50" fill="#333" rx="2"></rect>
                <rect x="375" y="250" width="30" height="50" fill="#333" rx="2"></rect>
                <rect x="425" y="250" width="30" height="50" fill="#333" rx="2"></rect>
                <line x1="300" y1="150" x2="300" y2="175" stroke="#333" strokeWidth="2"></line>
                <line x1="300" y1="225" x2="300" y2="250" stroke="#333" strokeWidth="2"></line>
              </svg>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Ready to Move to the Cloud?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Let our cloud experts help you design and implement the perfect cloud solution for your business needs.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Get Started with Cloud
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudStack;
