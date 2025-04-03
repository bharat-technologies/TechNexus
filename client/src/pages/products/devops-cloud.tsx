import { useEffect } from 'react';

const DevOpsCloud = () => {
  useEffect(() => {
    document.title = 'DevOps Cloud - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">DevOps Cloud</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Accelerate software delivery with our integrated development and operations platform
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Seamless Development Pipeline</h2>
              <p className="text-lg mb-4">
                Bharat DevOps Cloud is a comprehensive platform that streamlines software development workflows, enabling teams to build, test, deploy, and monitor applications with unprecedented speed and reliability.
              </p>
              <p className="text-lg">
                By automating repetitive tasks and integrating all stages of the development lifecycle, our solution helps organizations embrace DevOps culture and practices to deliver high-quality software continuously and efficiently.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                  <rect x="50" y="150" width="100" height="100" fill="#e0e0e0" rx="8"></rect>
                  <rect x="175" y="150" width="100" height="100" fill="#e0e0e0" rx="8"></rect>
                  <rect x="300" y="150" width="100" height="100" fill="#e0e0e0" rx="8"></rect>
                  <rect x="425" y="150" width="100" height="100" fill="#e0e0e0" rx="8"></rect>
                  <path d="M150 200 L175 200" stroke="#333" strokeWidth="3" strokeDasharray="5,5"></path>
                  <path d="M275 200 L300 200" stroke="#333" strokeWidth="3" strokeDasharray="5,5"></path>
                  <path d="M400 200 L425 200" stroke="#333" strokeWidth="3" strokeDasharray="5,5"></path>
                  <text x="100" y="185" fill="#333" fontSize="12" textAnchor="middle" fontWeight="bold">Code</text>
                  <text x="100" y="205" fill="#333" fontSize="12" textAnchor="middle">Repositories</text>
                  <text x="225" y="185" fill="#333" fontSize="12" textAnchor="middle" fontWeight="bold">Build</text>
                  <text x="225" y="205" fill="#333" fontSize="12" textAnchor="middle">CI/CD</text>
                  <text x="350" y="185" fill="#333" fontSize="12" textAnchor="middle" fontWeight="bold">Deploy</text>
                  <text x="350" y="205" fill="#333" fontSize="12" textAnchor="middle">Environments</text>
                  <text x="475" y="185" fill="#333" fontSize="12" textAnchor="middle" fontWeight="bold">Monitor</text>
                  <text x="475" y="205" fill="#333" fontSize="12" textAnchor="middle">Operate</text>
                  <circle cx="100" cy="260" r="10" fill="#333"></circle>
                  <circle cx="225" cy="260" r="10" fill="#333"></circle>
                  <circle cx="350" cy="260" r="10" fill="#333"></circle>
                  <circle cx="475" cy="260" r="10" fill="#333"></circle>
                  <path d="M100 260 A 187.5 187.5 0 0 1 475 260" stroke="#333" strokeWidth="2" fill="none"></path>
                  <text x="290" y="320" fill="#333" fontSize="14" textAnchor="middle" fontWeight="bold">Continuous Feedback</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-code-branch"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Version Control & Collaboration</h3>
                <p className="text-gray-600">Integrated Git repositories with advanced collaboration features including code review, issue tracking, and project management tools.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Automated CI/CD</h3>
                <p className="text-gray-600">Powerful automation pipelines for continuous integration and delivery, with built-in testing frameworks and deployment orchestration.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cubes"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Container Orchestration</h3>
                <p className="text-gray-600">Native Kubernetes integration for container deployment, scaling, and management across cloud and on-premises environments.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">End-to-End DevOps Tools</h2>
              <p className="text-lg mb-4">
                Our comprehensive platform includes everything teams need throughout the software development lifecycle:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-code"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Development Environments</h3>
                    <p className="text-gray-600">Cloud-based IDE with integrated debugging tools, pre-configured environments, and real-time collaboration features.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Security & Compliance</h3>
                    <p className="text-gray-600">Built-in static code analysis, vulnerability scanning, and policy enforcement to ensure secure and compliant applications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Performance Monitoring</h3>
                    <p className="text-gray-600">Comprehensive observability tools with real-time metrics, logs, and traces to maintain application health and performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-sitemap"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Infrastructure as Code</h3>
                  <p className="text-gray-600">Automated provisioning and configuration management</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Test Automation</h3>
                  <p className="text-gray-600">End-to-end testing with parallel execution</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Microservices Support</h3>
                  <p className="text-gray-600">Tools for building and managing service architectures</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Analytics & Insights</h3>
                  <p className="text-gray-600">Actionable metrics for continuous improvement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">DevOps Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">1</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Assess</h3>
                <p className="text-gray-600">Evaluate current processes, tools, and team capabilities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">2</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Implement</h3>
                <p className="text-gray-600">Adopt tools and practices aligned with your goals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">3</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Optimize</h3>
                <p className="text-gray-600">Refine processes and automation for maximum efficiency</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">4</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Scale</h3>
                <p className="text-gray-600">Expand DevOps practices across all teams and projects</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Enterprise Integration</h2>
              <p className="text-lg mb-4">
                Bharat DevOps Cloud integrates seamlessly with your existing tools and platforms:
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Third-Party Tools</h3>
                    <p className="text-gray-600">Connects with popular development tools like GitHub, Jenkins, Terraform, Ansible, and more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">API-First Approach</h3>
                    <p className="text-gray-600">Comprehensive APIs for custom integrations and extensions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Enterprise Systems</h3>
                    <p className="text-gray-600">Integration with ITSM, CMDB, and enterprise security solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Multi-Cloud Support</h3>
                    <p className="text-gray-600">Works across AWS, Azure, Google Cloud, and private cloud environments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="font-poppins font-bold text-3xl mb-6">Business Impact</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Deployment Frequency</h3>
                      <span className="text-green-400">+300%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Lead Time for Changes</h3>
                      <span className="text-green-400">-80%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Change Failure Rate</h3>
                      <span className="text-green-400">-60%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Time to Restore Service</h3>
                      <span className="text-green-400">-90%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>*Based on average customer results after 6 months of implementation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Service Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-poppins font-bold text-2xl mb-2 text-center">Team</h3>
                <p className="text-center text-gray-600 mb-6">For small development teams</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Up to 10 developers</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Unlimited repositories</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Basic CI/CD pipelines</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Standard monitoring</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/#contact" className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors duration-300">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform md:scale-105 z-10 border-2 border-black">
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl">POPULAR</div>
                <h3 className="font-poppins font-bold text-2xl mb-2 text-center">Business</h3>
                <p className="text-center text-gray-600 mb-6">For growing organizations</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Up to 50 developers</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Advanced CI/CD capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Container orchestration</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Enhanced security scanning</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Advanced monitoring</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/#contact" className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors duration-300">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-poppins font-bold text-2xl mb-2 text-center">Enterprise</h3>
                <p className="text-center text-gray-600 mb-6">For large organizations</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Unlimited developers</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Custom CI/CD solutions</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Multi-cloud orchestration</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Advanced compliance tools</span>
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
            <h2 className="font-poppins font-bold text-3xl mb-8">Accelerate Your Development Journey</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of organizations that have transformed their development processes with Bharat DevOps Cloud. Deliver better software, faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
                Schedule a Demo
              </a>
              <a href="/development" className="bg-white text-black border border-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 inline-block">
                Explore Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DevOpsCloud;