import { useEffect } from 'react';
import { Link } from 'wouter';

const ProductNameChanges = () => {
  useEffect(() => {
    document.title = 'Product Name Changes - Bharat Technologies';
  }, []);

  // Define product name changes
  const nameChanges = [
    {
      currentName: 'Analytics Cloud',
      previousNames: ['Bharat Insights Platform', 'IntelliView Analytics'],
      year: '2023',
      description: 'Rebranded to better align with our cloud-first product strategy and reflect enhanced capabilities.'
    },
    {
      currentName: 'Business Network Cloud',
      previousNames: ['Enterprise Connect Suite', 'B2B Integration Platform'],
      year: '2022',
      description: 'Renamed to emphasize the secure business network capabilities and cloud deployment options.'
    },
    {
      currentName: 'Cybersecurity Cloud',
      previousNames: ['Bharat Secure Shield', 'Enterprise Defense System'],
      year: '2023',
      description: 'Updated to highlight comprehensive cloud-based security capabilities beyond traditional enterprise boundaries.'
    },
    {
      currentName: 'DevOps Cloud',
      previousNames: ['DevOps Accelerator', 'Continuous Delivery Platform'],
      year: '2022',
      description: 'Consolidated multiple DevOps tools into a unified cloud platform with enhanced integration capabilities.'
    },
    {
      currentName: 'Experience Cloud',
      previousNames: ['Digital Experience Platform', 'Customer Engagement Suite'],
      year: '2023',
      description: 'Rebranded to reflect the comprehensive nature of the platform that spans web, mobile, and omnichannel experiences.'
    },
    {
      currentName: 'Observability & Service Management',
      previousNames: ['IT Operations Platform', 'Service Desk & Monitoring'],
      year: '2023',
      description: 'Renamed to emphasize the unified approach to observability and IT service management.'
    },
    {
      currentName: 'Content Cloud',
      previousNames: ['Enterprise Content Management', 'Digital Asset System'],
      year: '2022',
      description: 'Updated to reflect expanded capabilities in content delivery and management across multiple channels.'
    }
  ];

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Product Name Changes</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Reference guide to product rebranding and name updates
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="font-poppins font-bold text-3xl mb-6">About Product Name Changes</h2>
              <p className="text-lg mb-4">
                As part of our ongoing commitment to innovation and clarity, Bharat Technologies periodically updates our product names to better reflect their capabilities, positioning, and strategic direction.
              </p>
              <p className="text-lg mb-4">
                This page serves as a reference guide to help you understand the relationship between current product names and their previous identities. We maintain full compatibility and support across name transitions, ensuring a seamless experience for our customers.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <div className="text-2xl text-blue-500 mr-3">
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-blue-700">Important Note</h3>
                    <p className="text-blue-800">
                      Product documentation, license agreements, and support resources have been updated to reflect these name changes. If you encounter references to previous product names in any materials, please consider them equivalent to the current product names listed here.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Product Name Reference Guide</h2>
            
            <div className="space-y-6 mb-16">
              {nameChanges.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-4">
                    <div>
                      <h3 className="font-poppins font-bold text-xl text-blue-900">
                        <Link href={`/products/${item.currentName.toLowerCase().replace(/[&\s]+/g, '-')}`}>
                          <a className="hover:text-blue-700 transition-colors">{item.currentName}</a>
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">Current Name (Since {item.year})</p>
                    </div>
                    <div className="mt-3 md:mt-0 flex items-center">
                      <span className="text-3xl text-gray-300 md:block hidden">
                        <i className="fas fa-long-arrow-alt-left"></i>
                      </span>
                      <span className="text-3xl text-gray-300 md:hidden block rotate-90">
                        <i className="fas fa-long-arrow-alt-up"></i>
                      </span>
                    </div>
                    <div className="mt-3 md:mt-0">
                      <div className="space-y-1">
                        {item.previousNames.map((prevName, pIndex) => (
                          <div key={pIndex} className="bg-gray-100 px-3 py-1 rounded">
                            <p className="font-medium text-gray-700">{prevName}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Previous Name(s)</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-8 rounded-lg mb-16" data-aos="fade-up">
              <h2 className="font-poppins font-bold text-2xl mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Why do product names change?</h3>
                  <p className="text-gray-600">
                    Product names evolve to better reflect enhanced capabilities, technology advancements, and strategic positioning. Name changes often coincide with significant updates or consolidation of product offerings.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Do I need to update my license agreements?</h3>
                  <p className="text-gray-600">
                    No. Your existing license agreements remain valid regardless of product name changes. Our license management system automatically recognizes both current and previous product names.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Will my support experience change?</h3>
                  <p className="text-gray-600">
                    Your support experience remains unchanged. Our support teams are trained to recognize both current and previous product names, ensuring continuity in your support experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Where can I find documentation for previous product versions?</h3>
                  <p className="text-gray-600">
                    Documentation for all product versions, including those with previous names, remains available in our documentation portal. You can search by either the current or previous product names.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center" data-aos="fade-up">
              <h2 className="font-poppins font-bold text-3xl mb-6">Need Additional Information?</h2>
              <p className="text-lg mb-8">
                Our customer success team is here to assist you with any questions about product names, capabilities, or licensing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/#contact">
                  <a className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
                    Contact Customer Success
                  </a>
                </Link>
                <Link href="/products/a-z-listing">
                  <a className="bg-white text-black border border-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 inline-block">
                    View Product Catalog
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductNameChanges;