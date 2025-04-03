import { useEffect } from 'react';

const CybersecurityCloud = () => {
  useEffect(() => {
    document.title = 'Cybersecurity Cloud - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Cybersecurity Cloud</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive protection for your digital infrastructure and critical assets
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Advanced Threat Protection</h2>
              <p className="text-lg mb-4">
                Bharat Cybersecurity Cloud offers enterprise-grade security that safeguards your organization against sophisticated cyber threats. Our cloud-native platform combines AI-powered threat intelligence, continuous monitoring, and rapid response capabilities to protect your critical assets.
              </p>
              <p className="text-lg">
                With the increasing frequency and complexity of cyber attacks, our solution provides a unified security framework that scales with your business needs while reducing operational complexity and security gaps.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                  <circle cx="300" cy="200" r="150" fill="#e0e0e0"></circle>
                  <circle cx="300" cy="200" r="120" fill="#f0f0f0"></circle>
                  <circle cx="300" cy="200" r="90" fill="#fff"></circle>
                  <path d="M300 110 L300 290 M210 200 L390 200" stroke="#ccc" strokeWidth="1"></path>
                  <path d="M300 140 L340 180 L320 220 L280 220 L260 180 Z" fill="#333" strokeWidth="1"></path>
                  <circle cx="300" cy="200" r="15" fill="#fff"></circle>
                  {/* Radar sweep animation would be here with actual animation */}
                  <path d="M300 200 L380 120" stroke="#333" strokeWidth="2"></path>
                  <circle cx="380" cy="120" r="5" fill="#333"></circle>
                  <path d="M300 200 L220 150" stroke="#333" strokeWidth="2"></path>
                  <circle cx="220" cy="150" r="5" fill="#333"></circle>
                  <path d="M300 200 L350 270" stroke="#333" strokeWidth="2"></path>
                  <circle cx="350" cy="270" r="5" fill="#333"></circle>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Threat Detection & Response</h3>
                <p className="text-gray-600">AI-driven systems that identify and neutralize threats in real-time before they can compromise your infrastructure.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Identity & Access Management</h3>
                <p className="text-gray-600">Secure authentication and authorization with multi-factor authentication, single sign-on, and privileged access management.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-lock"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Data Protection</h3>
                <p className="text-gray-600">End-to-end encryption, data loss prevention, and secure data storage solutions that safeguard sensitive information.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Comprehensive Security Framework</h2>
              <p className="text-lg mb-4">
                Our multilayered security approach ensures protection across your entire digital ecosystem:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-network-wired"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Network Security</h3>
                    <p className="text-gray-600">Advanced firewalls, intrusion prevention systems, and secure web gateways that monitor and control network traffic.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Application Security</h3>
                    <p className="text-gray-600">Vulnerability scanning, patch management, and runtime application self-protection to secure your software assets.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-cloud"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Cloud Security</h3>
                    <p className="text-gray-600">Cloud security posture management, workload protection, and container security for multi-cloud environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Threat Intelligence</h3>
                  <p className="text-gray-600">Global threat database updated in real-time</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Automated Response</h3>
                  <p className="text-gray-600">Intelligent remediation with minimal human intervention</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Security Analytics</h3>
                  <p className="text-gray-600">Advanced behavioral analysis and anomaly detection</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-clipboard-check"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Compliance Management</h3>
                  <p className="text-gray-600">Automated auditing and reporting for regulatory requirements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Security Operations</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">1</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Continuous Monitoring</h3>
                <p className="text-gray-600">24/7 surveillance of your digital environment</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">2</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Threat Detection</h3>
                <p className="text-gray-600">Rapid identification of potential security incidents</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">3</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Incident Response</h3>
                <p className="text-gray-600">Coordinated action to contain and eliminate threats</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">4</div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Recovery & Analysis</h3>
                <p className="text-gray-600">Restore operations and learn from incidents</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Industry-Specific Solutions</h2>
              <p className="text-lg mb-4">
                Our security solutions are tailored to address the unique challenges of different industries:
              </p>
              <div className="space-y-6 mt-6">
                <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-600">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Financial Services</h3>
                  <p className="text-gray-600">Protect financial data, prevent fraud, and maintain compliance with GDPR, PCI DSS, and other regulatory requirements.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-600">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Healthcare</h3>
                  <p className="text-gray-600">Secure patient information, medical devices, and healthcare systems while ensuring HIPAA compliance.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow border-l-4 border-orange-600">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Manufacturing</h3>
                  <p className="text-gray-600">Safeguard operational technology, protect intellectual property, and secure supply chain networks.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow border-l-4 border-purple-600">
                  <h3 className="font-poppins font-semibold text-xl mb-2">Government</h3>
                  <p className="text-gray-600">Defend critical infrastructure, protect classified information, and counter state-sponsored threats.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h2 className="font-poppins font-bold text-3xl mb-6">Security Intelligence Center</h2>
                <p className="mb-6">
                  Our dedicated team of security analysts and threat researchers works around the clock to protect your organization:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-user-secret"></i>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg">Expert Security Team</h3>
                      <p className="text-gray-300">Certified professionals with deep cybersecurity expertise</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-globe"></i>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg">Global Threat Monitoring</h3>
                      <p className="text-gray-300">Continuous surveillance of emerging threats worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg">Security Partnerships</h3>
                      <p className="text-gray-300">Collaboration with global security agencies and organizations</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Threat Response Metrics</h3>
                  <div className="flex justify-between items-center">
                    <span>Average Detection Time</span>
                    <span className="font-semibold text-green-400">4.7 minutes</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span>Average Containment Time</span>
                    <span className="font-semibold text-green-400">18.3 minutes</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span>Threat Intelligence Updates</span>
                    <span className="font-semibold text-green-400">Every 15 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Service Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-poppins font-bold text-2xl mb-4 text-center">Essential</h3>
                <p className="text-center text-gray-600 mb-6">Core protection for small to medium businesses</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Cloud-based endpoint protection</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Basic threat monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Email security</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Security awareness training</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/#contact" className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform md:scale-105 z-10 border-2 border-black">
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl">MOST POPULAR</div>
                <h3 className="font-poppins font-bold text-2xl mb-4 text-center">Advanced</h3>
                <p className="text-center text-gray-600 mb-6">Comprehensive protection for growing organizations</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>All Essential features</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Advanced threat protection</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Cloud access security broker</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Data loss prevention</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>8x5 security operations support</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/#contact" className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-poppins font-bold text-2xl mb-4 text-center">Enterprise</h3>
                <p className="text-center text-gray-600 mb-6">Maximum security for large organizations</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>All Advanced features</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>AI-powered threat hunting</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Custom security policies</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>Advanced security analytics</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                    <span>24/7 dedicated security team</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="/#contact" className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors duration-300">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Secure Your Digital Future</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              In today's threat landscape, robust cybersecurity isn't optional—it's essential. Partner with Bharat Technologies to protect your most valuable digital assets and maintain business continuity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
                Request a Security Assessment
              </a>
              <a href="/cyber-security" className="bg-white text-black border border-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 inline-block">
                Learn About Our Security Approach
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CybersecurityCloud;