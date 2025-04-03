import { useEffect } from 'react';

const ContentCloud = () => {
  useEffect(() => {
    document.title = 'Content Cloud - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Content Cloud</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Streamline content creation, management, and delivery across your enterprise
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Unified Content Management</h2>
              <p className="text-lg mb-4">
                Bharat Content Cloud is a comprehensive platform that centralizes your organization's content assets while enabling seamless creation, management, and distribution across all channels and touchpoints.
              </p>
              <p className="text-lg">
                Our solution helps businesses maintain content consistency, improve team collaboration, and deliver personalized experiences to customers and stakeholders, all while ensuring security and compliance with global standards.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                  <rect x="100" y="80" width="400" height="240" fill="#e0e0e0" rx="8"></rect>
                  <rect x="120" y="100" width="360" height="200" fill="white" rx="5"></rect>
                  <rect x="140" y="120" width="150" height="100" fill="#f0f0f0" rx="3"></rect>
                  <rect x="310" y="120" width="150" height="100" fill="#f0f0f0" rx="3"></rect>
                  <rect x="140" y="240" width="320" height="40" fill="#f0f0f0" rx="3"></rect>
                  <circle cx="215" cy="170" r="30" fill="#e0e0e0"></circle>
                  <path d="M205 170 L215 180 L225 160" stroke="#333" strokeWidth="3" fill="none"></path>
                  <rect x="320" y="140" width="130" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="320" y="160" width="130" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="320" y="180" width="130" height="10" fill="#e0e0e0" rx="2"></rect>
                  <rect x="150" y="250" width="300" height="20" fill="#e0e0e0" rx="2"></rect>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cube"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Centralized Repository</h3>
                <p className="text-gray-600">Store all digital assets in one secure, scalable cloud repository with advanced search capabilities and version control.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-edit"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Collaborative Authoring</h3>
                <p className="text-gray-600">Enable teams to create and edit content simultaneously with real-time collaboration tools and approval workflows.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Omnichannel Delivery</h3>
                <p className="text-gray-600">Publish content seamlessly across websites, mobile apps, social media, and other digital touchpoints from a single source.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Advanced Capabilities</h2>
              <p className="text-lg mb-4">
                Bharat Content Cloud goes beyond basic content management with innovative features designed for modern digital experiences:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-brain"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">AI-Powered Content Intelligence</h3>
                    <p className="text-gray-600">Leverage machine learning for content tagging, categorization, and personalized recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-language"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Multilingual Support</h3>
                    <p className="text-gray-600">Manage and translate content across multiple languages with built-in localization workflows.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Content Analytics</h3>
                    <p className="text-gray-600">Track content performance with comprehensive analytics on engagement, conversion, and audience insights.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Rich Media Support</h3>
                  <p className="text-gray-600">Handle all content types from text to interactive media</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-sitemap"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Flexible Taxonomy</h3>
                  <p className="text-gray-600">Create custom metadata schemas for precise organization</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Responsive Design</h3>
                  <p className="text-gray-600">Optimize content for any device or screen size</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Rights Management</h3>
                  <p className="text-gray-600">Control access and usage of digital assets</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Industry Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Retail & E-commerce</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Product catalog management</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Campaign content coordination</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Personalized product descriptions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-university"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Financial Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Regulatory document management</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Financial advice publishing</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Secure client communications</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-hospital"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Healthcare</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Patient education materials</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>Clinical documentation</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>HIPAA-compliant media sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Integration Ecosystem</h2>
              <p className="text-lg mb-4">
                Bharat Content Cloud seamlessly connects with your existing technology stack, enhancing rather than replacing your current investments:
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Creative Tools</h3>
                    <p className="text-gray-600">Seamless integration with Adobe Creative Cloud, Figma, and other design tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-code"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Development Platforms</h3>
                    <p className="text-gray-600">API-first architecture for easy integration with any web or mobile application</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-database"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Enterprise Systems</h3>
                    <p className="text-gray-600">Ready connectors for CRM, ERP, e-commerce, and marketing automation platforms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-analytics"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Analytics Solutions</h3>
                    <p className="text-gray-600">Built-in connections to Google Analytics, Adobe Analytics, and custom BI tools</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="font-poppins font-bold text-3xl mb-6">Success Metrics</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Content Production Efficiency</h3>
                      <span className="text-green-400">+68%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Content Reuse Rate</h3>
                      <span className="text-green-400">+85%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Time to Market</h3>
                      <span className="text-green-400">-72%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-xl">Customer Engagement</h3>
                      <span className="text-green-400">+47%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '47%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Deployment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Cloud</h3>
                <p className="text-gray-600 mb-4">Fully-managed SaaS solution with automatic updates and scaling.</p>
                <span className="inline-block bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">On-Premises</h3>
                <p className="text-gray-600 mb-4">Deploy within your own infrastructure for maximum control.</p>
                <span className="inline-block bg-gray-100 text-gray-800 py-1 px-3 rounded-full text-sm font-medium">Enterprise Option</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-network-wired"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Hybrid</h3>
                <p className="text-gray-600 mb-4">Flexible architecture combining cloud and on-premises components.</p>
                <span className="inline-block bg-gray-100 text-gray-800 py-1 px-3 rounded-full text-sm font-medium">Custom Solution</span>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Elevate Your Content Strategy Today</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join organizations worldwide that use Bharat Content Cloud to streamline their content operations and deliver exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
                Schedule a Demo
              </a>
              <a href="/products/a-z-listing" className="bg-white text-black border border-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 inline-block">
                View All Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContentCloud;