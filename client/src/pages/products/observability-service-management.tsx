import { useEffect } from 'react';

const ObservabilityServiceManagement = () => {
  useEffect(() => {
    document.title = 'Observability & Service Management - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Observability & Service Management</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Gain complete visibility and control over your digital infrastructure and services
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Complete System Visibility</h2>
              <p className="text-lg mb-4">
                Bharat Observability & Service Management is an integrated platform that provides end-to-end visibility into your digital infrastructure, applications, and services. Our solution helps organizations monitor, analyze, and optimize performance while ensuring exceptional service delivery.
              </p>
              <p className="text-lg">
                By combining advanced monitoring, AI-powered analytics, and automated service management, we enable teams to proactively address issues, reduce downtime, and deliver superior digital experiences.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                  <rect x="50" y="50" width="500" height="300" fill="#e0e0e0" rx="8"></rect>
                  <rect x="70" y="70" width="460" height="260" fill="white" rx="5"></rect>
                  <line x1="70" y1="120" x2="530" y2="120" stroke="#e0e0e0" strokeWidth="2"></line>
                  <rect x="90" y="85" width="200" height="20" fill="#f0f0f0" rx="3"></rect>
                  <rect x="440" y="85" width="70" height="20" fill="#f0f0f0" rx="3"></rect>
                  
                  <rect x="90" y="140" width="100" height="80" fill="#f0f0f0" rx="3"></rect>
                  <rect x="105" y="155" width="70" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="105" y="175" width="70" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="105" y="195" width="40" height="10" fill="#e0e0e0" rx="2"></rect>
                  
                  <rect x="210" y="140" width="100" height="80" fill="#f0f0f0" rx="3"></rect>
                  <rect x="225" y="155" width="70" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="225" y="175" width="70" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="225" y="195" width="40" height="10" fill="#e0e0e0" rx="2"></rect>
                  
                  <rect x="330" y="140" width="100" height="80" fill="#f0f0f0" rx="3"></rect>
                  <rect x="345" y="155" width="70" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="345" y="175" width="70" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="345" y="195" width="40" height="10" fill="#e0e0e0" rx="2"></rect>
                  
                  <rect x="90" y="240" width="340" height="70" fill="#f0f0f0" rx="3"></rect>
                  <path d="M110 260 L140 290 L170 270 L200 280 L230 260 L260 275 L290 265 L320 285 L350 255 L380 270 L410 260" 
                    stroke="#333" strokeWidth="2" fill="none"></path>
                  <circle cx="140" cy="290" r="4" fill="#333"></circle>
                  <circle cx="200" cy="280" r="4" fill="#333"></circle>
                  <circle cx="260" cy="275" r="4" fill="#333"></circle>
                  <circle cx="320" cy="285" r="4" fill="#333"></circle>
                  <circle cx="380" cy="270" r="4" fill="#333"></circle>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Unified Observability</h3>
                <p className="text-gray-600">Collect and correlate metrics, logs, and traces from all components of your technology stack for a holistic view of system performance.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">AI-Powered Insights</h3>
                <p className="text-gray-600">Machine learning algorithms that automatically detect anomalies, predict potential issues, and recommend optimizations.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-tools"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Service Management</h3>
                <p className="text-gray-600">Streamlined incident management, change control, and service request fulfillment with automated workflows and self-service capabilities.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Comprehensive Monitoring</h2>
              <p className="text-lg mb-4">
                Our platform provides deep visibility across your entire technology landscape:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-server"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Infrastructure Monitoring</h3>
                    <p className="text-gray-600">Track performance of physical and virtual servers, containers, networks, storage, and cloud resources in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-code"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Application Performance Monitoring</h3>
                    <p className="text-gray-600">Monitor application health, performance metrics, and user experience with code-level visibility and transaction tracing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Network Performance Monitoring</h3>
                    <p className="text-gray-600">Ensure optimal network connectivity with comprehensive visibility into traffic, latency, and packet loss across your network.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Real-time Dashboards</h3>
                  <p className="text-gray-600">Customizable views for different stakeholders</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-bell"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Intelligent Alerting</h3>
                  <p className="text-gray-600">Context-aware notifications with reduced noise</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Dependency Mapping</h3>
                  <p className="text-gray-600">Visualize relationships between components</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-database"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Metrics Collection</h3>
                  <p className="text-gray-600">High-resolution data with long-term storage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Service Management Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Incident Management</h3>
                <p className="text-gray-600">Rapidly detect, diagnose, and resolve service disruptions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Problem Management</h3>
                <p className="text-gray-600">Identify root causes and implement permanent solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Change Management</h3>
                <p className="text-gray-600">Safely implement changes with minimal disruption</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-sitemap"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Configuration Management</h3>
                <p className="text-gray-600">Maintain accurate CMDB with service relationships</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Automation & Intelligence</h2>
              <p className="text-lg mb-4">
                Reduce manual effort and accelerate resolution with intelligent automation:
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-brain"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">AIOps Capabilities</h3>
                    <p className="text-gray-600">Machine learning algorithms that continuously analyze patterns, detect anomalies, and predict potential issues before they impact users</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-magic"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Automated Remediation</h3>
                    <p className="text-gray-600">Self-healing systems that automatically execute predefined remediation actions in response to specific events</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Virtual Agents</h3>
                    <p className="text-gray-600">AI-powered chatbots and virtual assistants that automate service desk interactions and provide 24/7 support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Workflow Automation</h3>
                    <p className="text-gray-600">Visual workflow editor for creating custom automation sequences without coding</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="font-poppins font-bold text-3xl mb-6">Operational Impact</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Mean Time to Detect</h3>
                      <span className="text-green-400">-75%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Mean Time to Resolve</h3>
                      <span className="text-green-400">-68%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Service Availability</h3>
                      <span className="text-green-400">+99.99%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">IT Operational Efficiency</h3>
                      <span className="text-green-400">+45%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Customer Testimonial</h3>
                  <p className="italic">"Bharat's platform reduced our mean time to resolution by over 60% while improving service availability to 99.99%. The ROI has been exceptional."</p>
                  <p className="mt-2 font-semibold">- CIO, Global Financial Services Company</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Implementation & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-poppins font-bold text-2xl mb-2 text-center">Standard</h3>
                <p className="text-center text-gray-600 mb-6">For small to medium IT operations</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Core observability platform</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Basic service management</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Standard integrations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Email support</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/#contact" className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform md:scale-105 z-10 border-2 border-black">
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl">POPULAR</div>
                <h3 className="font-poppins font-bold text-2xl mb-2 text-center">Professional</h3>
                <p className="text-center text-gray-600 mb-6">For medium to large IT departments</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>All Standard features</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Automated remediation</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Custom dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>24/5 technical support</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/#contact" className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-poppins font-bold text-2xl mb-2 text-center">Enterprise</h3>
                <p className="text-center text-gray-600 mb-6">For complex enterprise environments</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>All Professional features</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Full AIOps capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Business service mapping</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Dedicated support team</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/#contact" className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors duration-300">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Transform Your IT Operations</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have revolutionized their IT operations with Bharat Observability & Service Management Platform. Gain complete visibility, automate routine tasks, and deliver exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
                Request a Demo
              </a>
              <a href="/products/a-z-listing" className="bg-white text-black border border-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 inline-block">
                Explore All Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ObservabilityServiceManagement;