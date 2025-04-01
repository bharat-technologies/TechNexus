import { useEffect } from 'react';

const Development = () => {
  useEffect(() => {
    document.title = 'Development Services - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Development Services</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Building cutting-edge software solutions that drive business success
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Custom Software Development</h2>
              <p className="text-lg mb-4">
                At Bharat Technologies, our development team creates bespoke software solutions that address your unique business challenges and opportunities. From enterprise applications to mobile apps and web platforms, we deliver high-quality, scalable software that drives real business value.
              </p>
              <p className="text-lg">
                Our development process combines technical excellence with a deep understanding of business needs, ensuring that every solution we build is not just technically sound but also strategically aligned with your objectives.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="150" y="80" width="300" height="240" fill="#e0e0e0" rx="10"></rect>
                <rect x="170" y="100" width="260" height="200" fill="#333" rx="5"></rect>
                <rect x="190" y="120" width="220" height="160" fill="white" rx="3"></rect>
                <rect x="210" y="140" width="180" height="20" fill="#e0e0e0" rx="2"></rect>
                <rect x="210" y="170" width="140" height="20" fill="#e0e0e0" rx="2"></rect>
                <rect x="210" y="200" width="160" height="20" fill="#e0e0e0" rx="2"></rect>
                <rect x="210" y="230" width="120" height="20" fill="#e0e0e0" rx="2"></rect>
                <circle cx="180" cy="110" r="5" fill="red"></circle>
                <circle cx="200" cy="110" r="5" fill="yellow"></circle>
                <circle cx="220" cy="110" r="5" fill="green"></circle>
                <path d="M240 350 L230 340 L240 330 L250 340 Z" fill="#333"></path>
                <path d="M280 350 L270 340 L280 330 L290 340 Z" fill="#333"></path>
                <path d="M320 350 L310 340 L320 330 L330 340 Z" fill="#333"></path>
                <path d="M360 350 L350 340 L360 330 L370 340 Z" fill="#333"></path>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Our Development Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Enterprise Applications</h3>
                <p className="text-gray-600">Scalable, secure, and feature-rich business applications that integrate seamlessly with your existing systems and workflows.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Mobile Applications</h3>
                <p className="text-gray-600">Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android devices.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Web Development</h3>
                <p className="text-gray-600">Responsive, high-performance websites and web applications using modern frameworks and best practices.</p>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600">Intelligent applications that leverage advanced algorithms to analyze data, make predictions, and automate complex tasks.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Cloud-Native Solutions</h3>
                <p className="text-gray-600">Applications built for cloud environments with microservices architecture, containerization, and serverless computing.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">API Development & Integration</h3>
                <p className="text-gray-600">Robust APIs and integration services that connect systems, applications, and data sources for seamless operations.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Our Development Process</h2>
              <p className="text-lg mb-6">
                We follow a structured yet agile development approach that promotes collaboration, transparency, and continuous improvement:
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">Discovery & Planning</h3>
                    <p className="text-gray-600">Understanding your requirements, defining scope, and creating a detailed project roadmap</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">Design & Architecture</h3>
                    <p className="text-gray-600">Creating optimal user experiences and technical architecture for your solution</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">Development & Testing</h3>
                    <p className="text-gray-600">Iterative development with continuous testing and quality assurance</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">Deployment & Support</h3>
                    <p className="text-gray-600">Smooth rollout of your solution with ongoing maintenance and enhancement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="100" y="50" width="400" height="300" fill="#e0e0e0" rx="10"></rect>
                <line x1="100" y1="100" x2="500" y2="100" stroke="#333" strokeWidth="2"></line>
                <line x1="200" y1="50" x2="200" y2="350" stroke="#333" strokeWidth="2"></line>
                <line x1="300" y1="50" x2="300" y2="350" stroke="#333" strokeWidth="2"></line>
                <line x1="400" y1="50" x2="400" y2="350" stroke="#333" strokeWidth="2"></line>
                <text x="150" y="80" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">Planning</text>
                <text x="250" y="80" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">Design</text>
                <text x="350" y="80" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">Develop</text>
                <text x="450" y="80" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">Deploy</text>
                <rect x="120" y="120" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="120" y="160" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="120" y="200" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="220" y="120" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="220" y="160" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="220" y="200" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="320" y="120" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="320" y="160" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="320" y="200" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="320" y="240" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="320" y="280" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="420" y="120" width="60" height="30" fill="#333" rx="3"></rect>
                <rect x="420" y="160" width="60" height="30" fill="#333" rx="3"></rect>
                <circle cx="150" cy="150" r="5" fill="white"></circle>
                <circle cx="150" cy="190" r="5" fill="white"></circle>
                <circle cx="150" cy="230" r="5" fill="white"></circle>
                <circle cx="250" cy="150" r="5" fill="white"></circle>
                <circle cx="250" cy="190" r="5" fill="white"></circle>
                <circle cx="250" cy="230" r="5" fill="white"></circle>
                <circle cx="350" cy="150" r="5" fill="white"></circle>
                <circle cx="350" cy="190" r="5" fill="white"></circle>
                <circle cx="350" cy="230" r="5" fill="white"></circle>
                <circle cx="350" cy="270" r="5" fill="white"></circle>
                <circle cx="350" cy="310" r="5" fill="white"></circle>
                <circle cx="450" cy="150" r="5" fill="white"></circle>
                <circle cx="450" cy="190" r="5" fill="white"></circle>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Technologies We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-react"></i>
                </div>
                <p className="font-medium">React</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-angular"></i>
                </div>
                <p className="font-medium">Angular</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-node-js"></i>
                </div>
                <p className="font-medium">Node.js</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-python"></i>
                </div>
                <p className="font-medium">Python</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-java"></i>
                </div>
                <p className="font-medium">Java</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-aws"></i>
                </div>
                <p className="font-medium">AWS</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-microsoft"></i>
                </div>
                <p className="font-medium">Azure</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-google"></i>
                </div>
                <p className="font-medium">GCP</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fas fa-database"></i>
                </div>
                <p className="font-medium">SQL/NoSQL</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-android"></i>
                </div>
                <p className="font-medium">Android</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-apple"></i>
                </div>
                <p className="font-medium">iOS</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl text-black mb-2">
                  <i className="fab fa-docker"></i>
                </div>
                <p className="font-medium">Docker</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Why Choose Us for Development</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl text-black mr-4">
                    <i className="fas fa-code-branch"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">Technical Excellence</h3>
                    <p className="text-gray-600">Our developers are experts in their respective technologies and follow industry best practices for clean, maintainable, and efficient code.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl text-black mr-4">
                    <i className="fas fa-users-cog"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">Collaborative Approach</h3>
                    <p className="text-gray-600">We work closely with your team, providing regular updates and incorporating feedback throughout the development process.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl text-black mr-4">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">Our applications are built to grow with your business, accommodating increasing users, data, and functionality without compromise.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl text-black mr-4">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-2">Security-First Mindset</h3>
                    <p className="text-gray-600">Security is integrated throughout our development process, not added as an afterthought, ensuring your applications are protected against threats.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="font-poppins font-semibold text-xl mb-6 text-center">Case Study: Digital Transformation</h3>
                <div className="mb-6">
                  <p className="italic text-gray-600 mb-4">
                    "Bharat Technologies developed a custom ERP solution that integrated our disparate systems and automated key business processes. The results have been transformative—30% improvement in operational efficiency and significant cost savings. Their development team was professional, responsive, and delivered exactly what we needed."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <i className="fas fa-user text-gray-500"></i>
                    </div>
                    <div>
                      <p className="font-medium">Ananya Mehta</p>
                      <p className="text-sm text-gray-500">CIO, Global Manufacturing Ltd.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Timeline:</span>
                    <span>6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Technologies:</span>
                    <span>React, Node.js, PostgreSQL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Services:</span>
                    <span>Custom Software, Integration, Training</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Ready to Build Your Solution?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and how our development expertise can bring your vision to life.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Development;
