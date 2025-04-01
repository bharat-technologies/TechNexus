import { useEffect } from 'react';

const MultiCloud = () => {
  useEffect(() => {
    document.title = 'Multi Cloud - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Multi Cloud Solutions</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Seamlessly integrate and manage multiple cloud environments
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Multi-Cloud Strategy Advantages</h2>
              <p className="text-lg mb-4">
                In today's complex IT landscape, relying on a single cloud provider can create limitations. Our multi-cloud solutions allow you to leverage the best services from different providers, creating a custom environment optimized for your specific needs.
              </p>
              <p className="text-lg">
                With Bharat Technologies' multi-cloud management platform, you can seamlessly orchestrate workloads across multiple clouds while maintaining consistent security, governance, and operational practices.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <circle cx="200" cy="150" r="60" fill="#e0e0e0"></circle>
                <path d="M170 140 Q 200 110 230 140" stroke="#333" strokeWidth="3" fill="none"></path>
                <circle cx="400" cy="150" r="60" fill="#e0e0e0"></circle>
                <path d="M370 140 Q 400 110 430 140" stroke="#333" strokeWidth="3" fill="none"></path>
                <circle cx="300" cy="280" r="60" fill="#e0e0e0"></circle>
                <path d="M270 270 Q 300 240 330 270" stroke="#333" strokeWidth="3" fill="none"></path>
                <line x1="240" y1="180" x2="280" y2="230" stroke="#333" strokeWidth="2"></line>
                <line x1="360" y1="180" x2="320" y2="230" stroke="#333" strokeWidth="2"></line>
                <line x1="300" y1="150" x2="300" y2="220" stroke="#333" strokeWidth="2"></line>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-random"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Avoid Vendor Lock-in</h3>
                <p className="text-gray-600">Distribute your workloads across multiple providers to maintain flexibility and negotiating power.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Enhanced Reliability</h3>
                <p className="text-gray-600">Improve disaster recovery capabilities with geographically distributed cloud services.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Best-of-Breed Services</h3>
                <p className="text-gray-600">Select specific services from different providers based on performance, features, and cost.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Our Multi-Cloud Management Approach</h2>
              <p className="text-lg mb-4">
                Managing multiple cloud environments can be complex. Our unified management platform simplifies operations with:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Centralized Control:</strong> Single dashboard for managing all cloud resources</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Automated Orchestration:</strong> Streamlined deployment across cloud environments</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Consistent Security:</strong> Unified security policies across all cloud platforms</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-black mt-1 mr-2"></i>
                  <span><strong>Cost Optimization:</strong> Smart allocation of resources to minimize expenses</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="150" y="100" width="300" height="200" fill="#e0e0e0" rx="10"></rect>
                <rect x="170" y="120" width="260" height="160" fill="white" rx="5"></rect>
                <rect x="190" y="140" width="100" height="60" fill="#333" rx="5"></rect>
                <rect x="310" y="140" width="100" height="60" fill="#333" rx="5"></rect>
                <rect x="190" y="220" width="100" height="40" fill="#333" rx="5"></rect>
                <rect x="310" y="220" width="100" height="40" fill="#333" rx="5"></rect>
                <circle cx="240" cy="170" r="15" fill="white"></circle>
                <circle cx="360" cy="170" r="15" fill="white"></circle>
                <line x1="240" y1="170" x2="360" y2="170" stroke="white" strokeWidth="2"></line>
                <line x1="240" y1="220" x2="240" y2="170" stroke="white" strokeWidth="2"></line>
                <line x1="360" y1="220" x2="360" y2="170" stroke="white" strokeWidth="2"></line>
              </svg>
            </div>
          </div>

          <div className="mb-16 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-6 text-center">Supported Cloud Platforms</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-5xl mb-2">
                  <i className="fab fa-aws"></i>
                </div>
                <p>AWS</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">
                  <i className="fab fa-microsoft"></i>
                </div>
                <p>Azure</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">
                  <i className="fab fa-google"></i>
                </div>
                <p>Google Cloud</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">
                  <i className="fas fa-cloud"></i>
                </div>
                <p>IBM Cloud</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">
                  <i className="fas fa-server"></i>
                </div>
                <p>Oracle Cloud</p>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Ready for Multi-Cloud Strategy?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Let our experts help you design and implement an optimal multi-cloud solution tailored to your business requirements.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Discuss Your Multi-Cloud Needs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MultiCloud;
