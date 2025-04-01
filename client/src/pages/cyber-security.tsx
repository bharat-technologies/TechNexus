import { useEffect } from 'react';

const CyberSecurity = () => {
  useEffect(() => {
    document.title = 'Cyber Security - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Cyber Security</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Advanced protection for your critical digital assets
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Comprehensive Security Solutions</h2>
              <p className="text-lg mb-4">
                In today's digital landscape, cyber threats are constantly evolving. Bharat Technologies offers end-to-end cybersecurity solutions designed to protect your organization from sophisticated attacks while enabling your business to thrive securely.
              </p>
              <p className="text-lg">
                Our approach combines cutting-edge technology with expert human analysis to create a robust security posture that adapts to emerging threats and compliance requirements.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <path d="M300 100 L200 200 L300 300 L400 200 Z" fill="#e0e0e0" stroke="#333" strokeWidth="3"></path>
                <circle cx="300" cy="200" r="50" fill="white" stroke="#333" strokeWidth="3"></circle>
                <path d="M300 170 L300 230" stroke="#333" strokeWidth="5"></path>
                <path d="M285 185 L315 215" stroke="#333" strokeWidth="5"></path>
                <path d="M285 215 L315 185" stroke="#333" strokeWidth="5"></path>
                <circle cx="300" cy="200" r="75" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="5,5"></circle>
                <circle cx="300" cy="200" r="100" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="5,5"></circle>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Our Security Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Threat Detection & Response</h3>
                <p className="text-gray-600">24/7 monitoring and rapid response to security incidents using advanced analytics and expert intervention.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-lock"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Data Protection</h3>
                <p className="text-gray-600">Comprehensive solutions to secure sensitive data at rest, in motion, and in use across all environments.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-shield-virus"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Network Security</h3>
                <p className="text-gray-600">Multi-layered protection for your network infrastructure against unauthorized access and attacks.</p>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Cloud Security</h3>
                <p className="text-gray-600">Specialized security controls designed for cloud environments to ensure protection across all deployment models.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-bug"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Vulnerability Management</h3>
                <p className="text-gray-600">Continuous identification and remediation of security weaknesses before they can be exploited.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-id-card"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Identity & Access Management</h3>
                <p className="text-gray-600">Ensure the right individuals have appropriate access to resources with robust authentication and authorization.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Security Operations Center (SOC)</h2>
              <p className="text-lg mb-4">
                Our state-of-the-art Security Operations Center provides 24/7 monitoring, detection, and response to cyber threats. Staffed by expert security analysts, our SOC uses advanced threat intelligence and analytics to identify suspicious activities and respond to incidents before they impact your business.
              </p>
              <p className="text-lg">
                With a focus on continuous improvement, our SOC evolves with the threat landscape to provide comprehensive protection against both known and emerging security risks.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="100" y="100" width="400" height="200" fill="#e0e0e0" rx="5"></rect>
                <rect x="120" y="120" width="360" height="160" fill="#333" rx="5"></rect>
                <rect x="140" y="140" width="100" height="60" fill="#e0e0e0" rx="2"></rect>
                <rect x="250" y="140" width="100" height="60" fill="#e0e0e0" rx="2"></rect>
                <rect x="360" y="140" width="100" height="60" fill="#e0e0e0" rx="2"></rect>
                <rect x="140" y="210" width="320" height="30" fill="#e0e0e0" rx="2"></rect>
                <circle cx="150" cy="150" r="5" fill="red"></circle>
                <circle cx="170" cy="150" r="5" fill="yellow"></circle>
                <circle cx="190" cy="150" r="5" fill="green"></circle>
              </svg>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">The Cyber Security Lifecycle</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Identify</h3>
                <p className="text-sm">Security assessment and risk analysis</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Protect</h3>
                <p className="text-sm">Implement security controls and safeguards</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-eye text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Detect</h3>
                <p className="text-sm">Continuous monitoring and threat hunting</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bolt text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Respond</h3>
                <p className="text-sm">Incident response and containment</p>
              </div>
              <div className="p-4">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-sync-alt text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold mb-2">Recover</h3>
                <p className="text-sm">Restore systems and improve security posture</p>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Secure Your Digital Assets Today</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Don't wait for a breach to occur. Proactively protect your organization with our comprehensive cybersecurity solutions.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Request Security Assessment
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CyberSecurity;
