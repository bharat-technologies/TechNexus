import { useEffect } from 'react';

const Product1 = () => {
  useEffect(() => {
    document.title = 'AI Analytics Platform - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">AI Analytics Platform</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Transform your data into actionable intelligence with our advanced AI-powered analytics solution
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Intelligent Data Analytics</h2>
              <p className="text-lg mb-4">
                The Bharat AI Analytics Platform is a comprehensive solution that combines advanced machine learning algorithms with intuitive visualization tools to help businesses extract maximum value from their data.
              </p>
              <p className="text-lg">
                Whether you're looking to optimize operations, enhance customer experiences, or identify new market opportunities, our platform provides the insights you need to make data-driven decisions with confidence.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="100" y="100" width="400" height="200" fill="#e0e0e0" rx="10"></rect>
                <rect x="120" y="120" width="360" height="160" fill="white" rx="5"></rect>
                <path d="M150 200 L200 150 L250 180 L300 120 L350 170 L400 130 L450 200" stroke="#333" strokeWidth="3" fill="none"></path>
                <circle cx="200" cy="150" r="5" fill="#333"></circle>
                <circle cx="250" cy="180" r="5" fill="#333"></circle>
                <circle cx="300" cy="120" r="5" fill="#333"></circle>
                <circle cx="350" cy="170" r="5" fill="#333"></circle>
                <circle cx="400" cy="130" r="5" fill="#333"></circle>
                <line x1="150" y1="250" x2="450" y2="250" stroke="#e0e0e0" strokeWidth="1"></line>
                <line x1="150" y1="220" x2="450" y2="220" stroke="#e0e0e0" strokeWidth="1"></line>
                <line x1="150" y1="190" x2="450" y2="190" stroke="#e0e0e0" strokeWidth="1"></line>
                <line x1="150" y1="160" x2="450" y2="160" stroke="#e0e0e0" strokeWidth="1"></line>
                <line x1="150" y1="130" x2="450" y2="130" stroke="#e0e0e0" strokeWidth="1"></line>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Predictive Analytics</h3>
                <p className="text-gray-600">Forecast trends, predict outcomes, and identify opportunities using advanced machine learning models trained on your historical data.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Real-time Dashboards</h3>
                <p className="text-gray-600">Visualize key metrics and performance indicators in real-time with customizable, interactive dashboards that make data comprehension intuitive.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Automated Insights</h3>
                <p className="text-gray-600">Receive automatic notifications about anomalies, trends, and opportunities that might otherwise remain hidden in your data.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Seamless Integration</h2>
              <p className="text-lg mb-4">
                Our AI Analytics Platform is designed to integrate seamlessly with your existing systems and data sources, eliminating the need for complex data migrations or system overhauls.
              </p>
              <p className="text-lg">
                With support for multiple data formats and connectors for all major database systems, CRM platforms, and enterprise applications, you can start gaining insights from your data in days, not months.
              </p>
              <div className="mt-6">
                <h3 className="font-poppins font-semibold text-xl mb-3">Supported Integrations:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-database text-black mr-2"></i>
                    <span>SQL Databases</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-file-excel text-black mr-2"></i>
                    <span>Excel & CSV</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-aws text-black mr-2"></i>
                    <span>AWS Services</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cloud text-black mr-2"></i>
                    <span>Cloud Storage</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-salesforce text-black mr-2"></i>
                    <span>Salesforce</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cogs text-black mr-2"></i>
                    <span>REST APIs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="200" y="80" width="200" height="240" fill="#e0e0e0" rx="10"></rect>
                <rect x="220" y="100" width="160" height="200" fill="white" rx="5"></rect>
                <circle cx="150" cy="150" r="40" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="150" cy="250" r="40" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="450" cy="150" r="40" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="450" cy="250" r="40" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <line x1="190" y1="150" x2="210" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="190" y1="250" x2="210" y2="250" stroke="#333" strokeWidth="2"></line>
                <line x1="390" y1="150" x2="410" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="390" y1="250" x2="410" y2="250" stroke="#333" strokeWidth="2"></line>
                <text x="130" y="155" fill="#333" fontSize="14" fontWeight="bold" textAnchor="middle">SQL</text>
                <text x="130" y="255" fill="#333" fontSize="14" fontWeight="bold" textAnchor="middle">CSV</text>
                <text x="450" y="155" fill="#333" fontSize="14" fontWeight="bold" textAnchor="middle">API</text>
                <text x="450" y="255" fill="#333" fontSize="14" fontWeight="bold" textAnchor="middle">CRM</text>
                <rect x="240" y="130" width="120" height="20" fill="#333" rx="3"></rect>
                <rect x="240" y="160" width="120" height="20" fill="#333" rx="3"></rect>
                <rect x="240" y="190" width="120" height="20" fill="#333" rx="3"></rect>
                <rect x="240" y="220" width="120" height="20" fill="#333" rx="3"></rect>
                <rect x="240" y="250" width="120" height="20" fill="#333" rx="3"></rect>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow flex items-start">
                <div className="text-3xl text-black mr-4 mt-1">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Enhanced Decision Making</h3>
                  <p className="text-gray-600">Make confident, data-driven decisions backed by accurate predictions and clear visualizations.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex items-start">
                <div className="text-3xl text-black mr-4 mt-1">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Operational Efficiency</h3>
                  <p className="text-gray-600">Identify bottlenecks, streamline processes, and optimize resource allocation.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex items-start">
                <div className="text-3xl text-black mr-4 mt-1">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Customer Intelligence</h3>
                  <p className="text-gray-600">Understand customer behavior, preferences, and needs to deliver personalized experiences.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex items-start">
                <div className="text-3xl text-black mr-4 mt-1">
                  <i className="fas fa-search-dollar"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Revenue Growth</h3>
                  <p className="text-gray-600">Uncover new opportunities, optimize pricing strategies, and improve marketing ROI.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Flexible Deployment Options</h2>
              <p className="text-lg mb-4">
                Choose the deployment model that works best for your organization's needs and infrastructure:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <i className="fas fa-cloud text-black mt-1 mr-2"></i>
                  <span><strong>Cloud-Based:</strong> Fully managed SaaS solution with automatic updates and scalability</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-server text-black mt-1 mr-2"></i>
                  <span><strong>On-Premises:</strong> Deploy within your own infrastructure for maximum control and security</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-random text-black mt-1 mr-2"></i>
                  <span><strong>Hybrid:</strong> Combine cloud and on-premises components for the best of both worlds</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="font-poppins font-semibold text-xl mb-6 text-center">Pricing Tiers</h3>
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h4 className="font-poppins font-semibold mb-2">Starter</h4>
                    <p className="text-gray-600 mb-2">For small businesses and teams</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">₹25,000</span>
                      <span className="text-sm text-gray-600 ml-1">/month</span>
                    </div>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-poppins font-semibold mb-2">Professional</h4>
                    <p className="text-gray-600 mb-2">For growing organizations</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">₹75,000</span>
                      <span className="text-sm text-gray-600 ml-1">/month</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold mb-2">Enterprise</h4>
                    <p className="text-gray-600 mb-2">For large-scale deployments</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">Custom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Ready to Transform Your Data?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Schedule a demo to see how our AI Analytics Platform can help your organization unlock the full potential of your data.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product1;
