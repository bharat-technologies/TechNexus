import { useEffect } from 'react';
import { Link } from 'wouter';

const ProductListing = () => {
  useEffect(() => {
    document.title = 'A-Z Product Listing - Bharat Technologies';
  }, []);

  // Define product categories and their products
  const productCategories = [
    {
      name: 'Cloud Products',
      products: [
        { name: 'Analytics Cloud', path: '/products/analytics-cloud', description: 'Data analytics and business intelligence platform' },
        { name: 'Business Network Cloud', path: '/products/business-network-cloud', description: 'Secure business-to-business connectivity' },
        { name: 'Content Cloud', path: '/products/content-cloud', description: 'Content management and delivery' },
        { name: 'Cybersecurity Cloud', path: '/products/cybersecurity-cloud', description: 'Advanced threat protection' },
      ]
    },
    {
      name: 'Platform Solutions',
      products: [
        { name: 'DevOps Cloud', path: '/products/devops-cloud', description: 'Development and operations integration' },
        { name: 'Experience Cloud', path: '/products/experience-cloud', description: 'Digital experience management' },
        { name: 'Observability & Service Management', path: '/products/observability-service-management', description: 'Monitoring and IT service management' },
      ]
    },
    {
      name: 'Specialized Solutions',
      products: [
        { name: 'AI Intelligence Platform', path: '/product1', description: 'Enterprise AI and machine learning' },
        { name: 'Quantum Computing Framework', path: '/product2', description: 'Quantum algorithm development' },
        { name: 'Blockchain Enterprise Suite', path: '/product3', description: 'Secure distributed ledger technology' },
      ]
    },
  ];

  // Flatten the products for A-Z listing
  const allProducts = productCategories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      category: category.name
    }))
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">A-Z Product Listing</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive guide to Bharat Technologies' product portfolio
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Product Categories View */}
          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-12">Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="font-poppins font-semibold text-2xl mb-4">{category.name}</h3>
                  <ul className="space-y-3">
                    {category.products.map((product, pIndex) => (
                      <li key={pIndex}>
                        <Link href={product.path}>
                          <a className="text-blue-600 hover:text-blue-800 font-medium">{product.name}</a>
                        </Link>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* A-Z Product Listing */}
          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-12">Alphabetical Product Listing</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts.map((product, index) => (
                  <div key={index} className="border-b pb-4">
                    <Link href={product.path}>
                      <a className="text-blue-600 hover:text-blue-800 font-semibold text-lg">{product.name}</a>
                    </Link>
                    <p className="text-gray-600 text-sm mb-1">{product.description}</p>
                    <p className="text-gray-500 text-xs">Category: {product.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Finder */}
          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Find the Right Solution</h2>
            <p className="text-lg text-center mb-12">
              Not sure which product is right for your needs? Contact our solution experts for a personalized recommendation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-industry"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Industry Solutions</h3>
                <p className="text-gray-600 mb-4">Specialized solutions tailored to your industry's unique challenges and requirements.</p>
                <Link href="/#contact">
                  <a className="inline-block text-blue-600 hover:text-blue-800 font-medium">Learn More</a>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Business Needs</h3>
                <p className="text-gray-600 mb-4">Solutions designed to address specific business challenges and operational requirements.</p>
                <Link href="/#contact">
                  <a className="inline-block text-blue-600 hover:text-blue-800 font-medium">Learn More</a>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Product Bundles</h3>
                <p className="text-gray-600 mb-4">Integrated product packages offering comprehensive solutions at competitive prices.</p>
                <Link href="/#contact">
                  <a className="inline-block text-blue-600 hover:text-blue-800 font-medium">Learn More</a>
                </Link>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Professional Services</h2>
              <p className="text-lg mb-6">
                In addition to our product portfolio, Bharat Technologies offers comprehensive professional services to ensure successful implementation and ongoing optimization:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Implementation Services</h3>
                    <p className="text-gray-600">Expert assistance for smooth deployment and integration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Training & Enablement</h3>
                    <p className="text-gray-600">Comprehensive training programs for users and administrators</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Technical Support</h3>
                    <p className="text-gray-600">24/7 support options to ensure optimal system performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Consulting Services</h3>
                    <p className="text-gray-600">Strategic advice on digital transformation initiatives</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="font-poppins font-bold text-3xl mb-6">Ready to Get Started?</h2>
                <p className="mb-6">
                  Our team of solution experts is ready to help you identify the right products and services for your specific needs.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-headset"></i>
                    </div>
                    <p>Speak with a solution expert</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-file-pdf"></i>
                    </div>
                    <p>Request detailed product information</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-laptop"></i>
                    </div>
                    <p>Schedule a personalized demo</p>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/#contact">
                    <a className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                      Contact Us Today
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Stay Updated</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest product updates, release notes, and technology insights from Bharat Technologies.
            </p>
            <Link href="/#contact">
              <a className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
                Subscribe to Updates
              </a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductListing;