import { useEffect } from 'react';

const AnalyticsCloud = () => {
  useEffect(() => {
    document.title = 'Analytics Cloud - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Analytics Cloud</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Harness the power of data with our comprehensive analytics platform
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Transform Data into Insights</h2>
              <p className="text-lg mb-4">
                Bharat Analytics Cloud is a robust platform that helps businesses collect, process, and visualize data to make informed decisions. Our cloud-based analytics solution is designed to handle massive datasets while providing easy-to-understand insights.
              </p>
              <p className="text-lg">
                Whether you're looking to optimize business processes, understand customer behavior, or predict market trends, our analytics platform provides the tools you need to turn raw data into actionable intelligence.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                  <rect x="50" y="50" width="500" height="300" fill="#e0e0e0" rx="8"></rect>
                  <rect x="70" y="80" width="460" height="250" fill="white" rx="4"></rect>
                  <path d="M100 250 L200 150 L300 200 L400 100 L500 180" stroke="#333" strokeWidth="3" fill="none"></path>
                  <circle cx="100" cy="250" r="6" fill="#333"></circle>
                  <circle cx="200" cy="150" r="6" fill="#333"></circle>
                  <circle cx="300" cy="200" r="6" fill="#333"></circle>
                  <circle cx="400" cy="100" r="6" fill="#333"></circle>
                  <circle cx="500" cy="180" r="6" fill="#333"></circle>
                  <line x1="70" y1="300" x2="530" y2="300" stroke="#e0e0e0" strokeWidth="1"></line>
                  <line x1="70" y1="250" x2="530" y2="250" stroke="#e0e0e0" strokeWidth="1"></line>
                  <line x1="70" y1="200" x2="530" y2="200" stroke="#e0e0e0" strokeWidth="1"></line>
                  <line x1="70" y1="150" x2="530" y2="150" stroke="#e0e0e0" strokeWidth="1"></line>
                  <line x1="70" y1="100" x2="530" y2="100" stroke="#e0e0e0" strokeWidth="1"></line>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Advanced Analytics</h3>
                <p className="text-gray-600">Powerful tools for statistical analysis, data mining, and predictive modeling to extract valuable insights from complex datasets.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Interactive Dashboards</h3>
                <p className="text-gray-600">Create custom dashboards with drag-and-drop simplicity, featuring interactive visualizations that update in real-time.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">AI-Powered Insights</h3>
                <p className="text-gray-600">Machine learning algorithms that automatically identify patterns, anomalies, and trends in your data without manual intervention.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Industry Applications</h2>
              <p className="text-lg mb-4">
                Bharat Analytics Cloud is designed to serve diverse industries with specialized analytics solutions that address unique challenges and opportunities.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Retail Analytics</h3>
                    <p className="text-gray-600">Optimize inventory, understand customer behavior, and personalize marketing campaigns.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-university"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Financial Analytics</h3>
                    <p className="text-gray-600">Detect fraud, manage risk, and identify market opportunities with precision.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Healthcare Analytics</h3>
                    <p className="text-gray-600">Improve patient outcomes, optimize operations, and enhance clinical decision-making.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Seamless Integration</h3>
                  <p className="text-gray-600">Connect with hundreds of data sources and business applications</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Enterprise Security</h3>
                  <p className="text-gray-600">Military-grade encryption and compliance with global standards</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">High Performance</h3>
                  <p className="text-gray-600">Process billions of data points with minimal latency</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-expand-arrows-alt"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Scalable Solution</h3>
                  <p className="text-gray-600">Grow your analytics capabilities alongside your business</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">1</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Connect</h3>
                <p className="text-gray-600">Integrate with your existing data sources and systems</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">2</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Analyze</h3>
                <p className="text-gray-600">Process and analyze your data using our powerful tools</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">3</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Visualize</h3>
                <p className="text-gray-600">Create interactive dashboards and custom reports</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">4</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Act</h3>
                <p className="text-gray-600">Make informed decisions based on actionable insights</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Service Tiers</h2>
              <p className="text-lg mb-6">
                Choose the plan that fits your organization's needs and budget:
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gray-900">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Standard</h3>
                  <p className="text-gray-600 mb-3">Essential analytics capabilities for small to medium businesses</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Up to 10 million rows of data</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>5 custom dashboards</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Basic predictive analytics</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gray-900">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Professional</h3>
                  <p className="text-gray-600 mb-3">Advanced capabilities for growing organizations</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Up to 100 million rows of data</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Unlimited dashboards</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Advanced AI-powered analytics</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gray-900">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-3">Comprehensive solution for large organizations</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Unlimited data capacity</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Custom AI model development</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>Dedicated support team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="font-poppins font-bold text-3xl mb-6">Get Started Today</h2>
                <p className="text-lg mb-6">
                  Transform your business with data-driven insights. Our experts will guide you through the implementation process.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <p>Quick setup with minimal disruption</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <p>Comprehensive training and onboarding</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-headset"></i>
                    </div>
                    <p>24/7 technical support</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="/#contact" className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Ready to Unlock the Power of Your Data?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of organizations that trust Bharat Analytics Cloud to drive their data-informed decisions.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnalyticsCloud;