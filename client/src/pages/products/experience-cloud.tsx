import { useEffect } from 'react';

const ExperienceCloud = () => {
  useEffect(() => {
    document.title = 'Experience Cloud - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Experience Cloud</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Create exceptional digital experiences that drive engagement and conversion
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Customer-Centric Digital Experiences</h2>
              <p className="text-lg mb-4">
                Bharat Experience Cloud is a comprehensive platform that enables organizations to create, optimize, and deliver personalized digital experiences across all customer touchpoints.
              </p>
              <p className="text-lg">
                By combining powerful content management, marketing automation, analytics, and personalization tools, our solution helps businesses build meaningful connections with their audiences and drive measurable results.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                  <rect x="150" y="100" width="300" height="200" fill="#e0e0e0" rx="8"></rect>
                  <rect x="170" y="120" width="260" height="160" fill="white" rx="5"></rect>
                  <rect x="190" y="140" width="100" height="120" fill="#f0f0f0" rx="3"></rect>
                  <rect x="310" y="140" width="100" height="60" fill="#f0f0f0" rx="3"></rect>
                  <rect x="310" y="210" width="100" height="50" fill="#f0f0f0" rx="3"></rect>
                  <circle cx="240" cy="170" r="25" fill="#e0e0e0"></circle>
                  <circle cx="240" cy="170" r="15" fill="#fff"></circle>
                  <rect x="195" y="210" width="90" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="195" y="230" width="90" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="195" y="250" width="65" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="320" y="150" width="80" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="320" y="170" width="80" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="320" y="190" width="50" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="320" y="220" width="80" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="320" y="240" width="80" height="10" fill="#e0e0e0" rx="2"></rect>
                  <path d="M100 300 C 200 350, 400 350, 500 300" stroke="#333" strokeWidth="2" fill="none"></path>
                  <path d="M120 270 L 130 290" stroke="#333" strokeWidth="2"></path>
                  <path d="M480 270 L 470 290" stroke="#333" strokeWidth="2"></path>
                  <text x="300" y="330" fill="#333" fontSize="14" textAnchor="middle" fontWeight="bold">Customer Journey</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-palette"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Experience Design</h3>
                <p className="text-gray-600">Intuitive tools for creating responsive, accessible, and visually stunning digital experiences without extensive coding.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Personalization</h3>
                <p className="text-gray-600">AI-powered personalization engine that delivers tailored content, recommendations, and experiences based on user behavior and preferences.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Analytics & Optimization</h3>
                <p className="text-gray-600">Comprehensive analytics suite with A/B testing, user journey mapping, and conversion optimization tools to continuously improve experiences.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Omnichannel Engagement</h2>
              <p className="text-lg mb-4">
                Create consistent, connected experiences across all digital touchpoints:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Web Experiences</h3>
                    <p className="text-gray-600">Responsive websites, microsites, landing pages, and progressive web applications that engage visitors.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Mobile Experiences</h3>
                    <p className="text-gray-600">Native mobile apps and mobile-optimized content that delivers seamless experiences on any device.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Commerce Experiences</h3>
                    <p className="text-gray-600">Integrated e-commerce functionality with personalized product recommendations and streamlined checkout.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Email Marketing</h3>
                  <p className="text-gray-600">Personalized email campaigns with dynamic content</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Conversational Interfaces</h3>
                  <p className="text-gray-600">AI-powered chatbots and messaging</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-share-alt"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Social Media</h3>
                  <p className="text-gray-600">Integrated social publishing and monitoring</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Customer Support</h3>
                  <p className="text-gray-600">Seamless service integration with experience platform</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Customer Experience Lifecycle</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20 bg-blue-100 rounded-full -translate-y-10 -translate-x-10 z-0"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-black mb-4">
                    <i className="fas fa-user-plus"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Acquisition</h3>
                  <p className="text-gray-600">Attract and convert prospects with targeted campaigns and optimized journeys</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20 bg-green-100 rounded-full -translate-y-10 -translate-x-10 z-0"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-black mb-4">
                    <i className="fas fa-user-check"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Onboarding</h3>
                  <p className="text-gray-600">Create seamless welcome experiences that establish lasting relationships</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20 bg-purple-100 rounded-full -translate-y-10 -translate-x-10 z-0"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-black mb-4">
                    <i className="fas fa-user-tag"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Engagement</h3>
                  <p className="text-gray-600">Maintain active engagement with personalized interactions and relevant content</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20 bg-yellow-100 rounded-full -translate-y-10 -translate-x-10 z-0"></div>
                <div className="relative z-10">
                  <div className="text-4xl text-black mb-4">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Retention</h3>
                  <p className="text-gray-600">Nurture loyalty and drive repeat business with targeted retention strategies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Industry Solutions</h2>
              <p className="text-lg mb-4">
                Bharat Experience Cloud offers specialized solutions for key industries:
              </p>
              <div className="space-y-6 mt-6">
                <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-600">
                  <div className="flex items-start">
                    <div className="text-2xl text-black mr-3">
                      <i className="fas fa-shopping-bag"></i>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-xl mb-1">Retail & E-commerce</h3>
                      <p className="text-gray-600">Create immersive shopping experiences with product visualization, personalized recommendations, and seamless checkout flows.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-600">
                  <div className="flex items-start">
                    <div className="text-2xl text-black mr-3">
                      <i className="fas fa-university"></i>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-xl mb-1">Financial Services</h3>
                      <p className="text-gray-600">Deliver secure, personalized banking and insurance experiences that build trust and simplify complex processes.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow border-l-4 border-purple-600">
                  <div className="flex items-start">
                    <div className="text-2xl text-black mr-3">
                      <i className="fas fa-book"></i>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-xl mb-1">Media & Publishing</h3>
                      <p className="text-gray-600">Engage audiences with dynamic content experiences, personalized recommendations, and monetization strategies.</p>
                    </div>
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
                      <h3 className="font-poppins font-semibold text-xl">Conversion Rate</h3>
                      <span className="text-green-400">+35%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Customer Retention</h3>
                      <span className="text-green-400">+42%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Customer Lifetime Value</h3>
                      <span className="text-green-400">+65%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Marketing Efficiency</h3>
                      <span className="text-green-400">+28%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>*Based on average customer results after 12 months of implementation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Experience Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Content management system</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Digital asset management</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Experience fragments</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Multilingual support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Marketing Automation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Customer segmentation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Campaign management</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Journey orchestration</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Marketing calendar</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl text-black mb-4">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Intelligence & Data</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Audience profiles</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>A/B & multivariate testing</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Attribution modeling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Elevate Your Customer Experience</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join leading brands that have transformed their digital experiences with Bharat Experience Cloud. Create memorable interactions that drive engagement, conversion, and loyalty.
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

export default ExperienceCloud;