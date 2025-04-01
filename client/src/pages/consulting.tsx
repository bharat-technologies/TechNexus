import { useEffect } from 'react';

const Consulting = () => {
  useEffect(() => {
    document.title = 'Consulting Services - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Consulting Services</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Expert guidance to navigate complex technological challenges
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Strategic Technology Consulting</h2>
              <p className="text-lg mb-4">
                At Bharat Technologies, our consulting services combine deep technological expertise with strategic business insights to help organizations navigate digital transformation, optimize operations, and drive innovation.
              </p>
              <p className="text-lg">
                Our team of experienced consultants works closely with clients to understand their unique challenges and objectives, developing tailored solutions that deliver measurable results and sustainable competitive advantage.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="150" y="100" width="300" height="200" fill="#e0e0e0" rx="5"></rect>
                <rect x="170" y="120" width="260" height="160" fill="white" rx="5"></rect>
                <line x1="200" y1="150" x2="400" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="200" y1="180" x2="400" y2="180" stroke="#333" strokeWidth="2"></line>
                <line x1="200" y1="210" x2="400" y2="210" stroke="#333" strokeWidth="2"></line>
                <line x1="200" y1="240" x2="350" y2="240" stroke="#333" strokeWidth="2"></line>
                <circle cx="230" cy="150" r="8" fill="#333"></circle>
                <circle cx="230" cy="180" r="8" fill="#333"></circle>
                <circle cx="230" cy="210" r="8" fill="#333"></circle>
                <circle cx="230" cy="240" r="8" fill="#333"></circle>
                <path d="M270 320 L280 340 L290 310 L300 330 L310 300 L320 320 L330 290" stroke="#333" strokeWidth="2" fill="none"></path>
                <circle cx="120" cy="150" r="20" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="120" cy="250" r="20" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="480" cy="150" r="20" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <circle cx="480" cy="250" r="20" fill="#e0e0e0" stroke="#333" strokeWidth="2"></circle>
                <line x1="120" y1="170" x2="120" y2="230" stroke="#333" strokeWidth="2"></line>
                <line x1="480" y1="170" x2="480" y2="230" stroke="#333" strokeWidth="2"></line>
                <line x1="140" y1="150" x2="150" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="140" y1="250" x2="150" y2="250" stroke="#333" strokeWidth="2"></line>
                <line x1="450" y1="150" x2="460" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="450" y1="250" x2="460" y2="250" stroke="#333" strokeWidth="2"></line>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Our Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Digital Strategy</h3>
                <p className="text-gray-600">Develop comprehensive digital roadmaps that align technology initiatives with business objectives and market opportunities.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Cloud Transformation</h3>
                <p className="text-gray-600">Navigate the complexities of cloud migration and optimization with expert guidance on architecture, security, and operations.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">AI & Analytics</h3>
                <p className="text-gray-600">Harness the power of artificial intelligence and data analytics to uncover insights, automate processes, and enable data-driven decisions.</p>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Cybersecurity</h3>
                <p className="text-gray-600">Protect your digital assets with strategic security assessments, risk management, and compliance frameworks tailored to your industry.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Digital Transformation</h3>
                <p className="text-gray-600">Reimagine your business models, customer experiences, and operational processes through strategic technology adoption.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">IT Strategy & Governance</h3>
                <p className="text-gray-600">Establish effective IT governance frameworks, policies, and processes that maximize technology investments and minimize risks.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Our Consulting Approach</h2>
              <p className="text-lg mb-6">
                We believe effective consulting goes beyond recommendations—it's about partnering with clients to implement practical solutions that deliver lasting results. Our structured yet flexible approach ensures we address your unique needs:
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">Discover</h3>
                    <p className="text-gray-600">Comprehensive assessment of your current state, challenges, and objectives</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">Strategize</h3>
                    <p className="text-gray-600">Developing tailored recommendations and roadmaps aligned with your business goals</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">Implement</h3>
                    <p className="text-gray-600">Hands-on support to execute initiatives and drive change management</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl mb-1">Measure & Optimize</h3>
                    <p className="text-gray-600">Continuous assessment of outcomes and refinement of approaches to maximize results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <circle cx="300" cy="200" r="150" fill="#e0e0e0"></circle>
                <path d="M300 50 C 450 50, 450 350, 300 350 C 150 350, 150 50, 300 50" fill="none" stroke="#333" strokeWidth="2"></path>
                <circle cx="300" cy="80" r="20" fill="white" stroke="#333" strokeWidth="2"></circle>
                <text x="300" y="85" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">1</text>
                <circle cx="425" cy="200" r="20" fill="white" stroke="#333" strokeWidth="2"></circle>
                <text x="425" y="205" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">2</text>
                <circle cx="300" cy="320" r="20" fill="white" stroke="#333" strokeWidth="2"></circle>
                <text x="300" y="325" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">3</text>
                <circle cx="175" cy="200" r="20" fill="white" stroke="#333" strokeWidth="2"></circle>
                <text x="175" y="205" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">4</text>
                <circle cx="300" cy="200" r="40" fill="white" stroke="#333" strokeWidth="2"></circle>
                <path d="M280 190 L320 210" stroke="#333" strokeWidth="2"></path>
                <path d="M280 210 L320 190" stroke="#333" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Industry Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-university"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Financial Services</h3>
                <p className="text-sm text-gray-600">Fintech innovation, regulatory compliance, and digital banking transformation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">Digital health solutions, patient experience, and healthcare IT modernization</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-industry"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Manufacturing</h3>
                <p className="text-sm text-gray-600">Industry 4.0, IoT integration, and supply chain optimization</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Retail</h3>
                <p className="text-sm text-gray-600">Omnichannel strategy, customer analytics, and digital commerce</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Client Success Stories</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Major Insurance Provider</h3>
                  <p className="text-gray-600 mb-4">Helped a leading insurance company modernize their legacy systems and implement a cloud-based customer service platform, resulting in 40% faster claim processing and 28% increase in customer satisfaction.</p>
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-tags mr-1"></i> Cloud Migration, Digital Transformation
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Manufacturing Conglomerate</h3>
                  <p className="text-gray-600 mb-4">Designed and implemented an IoT strategy that connected factory floor equipment, enabling real-time monitoring and predictive maintenance that reduced downtime by 35% and maintenance costs by 22%.</p>
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-tags mr-1"></i> IoT, Analytics, Process Optimization
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="font-poppins font-semibold text-xl mb-6 text-center">Why Choose Our Consulting</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl text-black mr-4">
                      <i className="fas fa-brain"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Deep Expertise</h4>
                      <p className="text-gray-600">Our consultants combine industry knowledge with technical mastery to deliver informed insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl text-black mr-4">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Collaborative Approach</h4>
                      <p className="text-gray-600">We work as an extension of your team, ensuring knowledge transfer and sustainable results.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl text-black mr-4">
                      <i className="fas fa-chart-pie"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Results-Focused</h4>
                      <p className="text-gray-600">Our recommendations are practical, actionable, and designed to deliver measurable outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl text-black mr-4">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Innovation Mindset</h4>
                      <p className="text-gray-600">We continuously explore emerging technologies and methodologies to keep clients ahead of the curve.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our consulting team is ready to help you navigate complex challenges and capitalize on new opportunities in the ever-evolving technology landscape.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Consulting;
