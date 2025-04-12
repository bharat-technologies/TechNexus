import { useEffect } from 'react';
import { useContact } from '@/contexts/ContactContext';

const ServiceManagementAviator = () => {
  const { openContactModal } = useContact();
  
  useEffect(() => {
    document.title = 'Service Management Aviator - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Service Management Aviator</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Accelerate IT service delivery with intelligent automation and integrated workflows
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Enterprise Service Management</h2>
              <p className="text-lg mb-4">
                Bharat Service Management Aviator is a comprehensive platform that streamlines IT and business service delivery across your organization. Our solution helps teams collaborate effectively, automate complex workflows, and deliver exceptional service experiences.
              </p>
              <p className="text-lg">
                By combining intelligent automation, AI-powered insights, and intuitive self-service, we empower service providers to increase efficiency, reduce costs, and transform service management.
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
                  
                  <rect x="90" y="140" width="220" height="170" fill="#f0f0f0" rx="3"></rect>
                  <rect x="105" y="155" width="190" height="15" fill="#e0e0e0" rx="2"></rect>
                  <rect x="105" y="180" width="190" height="15" fill="#e0e0e0" rx="2"></rect>
                  <rect x="105" y="205" width="190" height="15" fill="#e0e0e0" rx="2"></rect>
                  <rect x="105" y="230" width="190" height="15" fill="#e0e0e0" rx="2"></rect>
                  <rect x="105" y="255" width="190" height="15" fill="#e0e0e0" rx="2"></rect>
                  <rect x="105" y="280" width="120" height="15" fill="#e0e0e0" rx="2"></rect>
                  
                  <rect x="330" y="140" width="180" height="170" fill="#f0f0f0" rx="3"></rect>
                  <circle cx="420" cy="210" r="60" fill="#e0e0e0"></circle>
                  <path d="M420 170 L420 210 L450 220" stroke="#333" strokeWidth="2" fill="none"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl">
                <div className="w-14 h-14 bg-black rounded-lg mb-6 flex items-center justify-center transition-colors duration-300 hover-icon-0">
                  <i className="fas fa-sitemap text-white" style={{ fontSize: "1.25rem" }}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrated Service Management</h3>
                <p className="text-gray-600">Unified platform for IT and business service management with consistent processes and workflows.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl">
                <div className="w-14 h-14 bg-black rounded-lg mb-6 flex items-center justify-center transition-colors duration-300 hover-icon-1">
                  <i className="fas fa-robot text-white" style={{ fontSize: "1.25rem" }}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Automation</h3>
                <p className="text-gray-600">AI and machine learning capabilities that automate routine tasks and deliver intelligent insights.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl">
                <div className="w-14 h-14 bg-black rounded-lg mb-6 flex items-center justify-center transition-colors duration-300 hover-icon-2">
                  <i className="fas fa-tools text-white" style={{ fontSize: "1.25rem" }}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Self-Service Portal</h3>
                <p className="text-gray-600">Modern, intuitive portal that makes it easy for users to request services, find information, and resolve issues.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Process Excellence</h2>
              <p className="text-lg mb-4">
                Our platform delivers comprehensive ITIL-aligned processes with the flexibility to adapt to your organization's unique needs:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-exclamation-circle"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Incident Management</h3>
                    <p className="text-gray-600">Quickly restore normal service operations with automated triage, intelligent routing, and guided resolution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-clipboard-check"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Request Fulfillment</h3>
                    <p className="text-gray-600">Streamline service requests with automated approvals, SLA tracking, and end-to-end fulfillment workflows.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl text-black mr-3 mt-1">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl">Change Management</h3>
                    <p className="text-gray-600">Effectively manage changes with risk assessment, impact analysis, and automated approval workflows.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Visual Workflows</h3>
                  <p className="text-gray-600">Drag-and-drop process designer</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Performance Analytics</h3>
                  <p className="text-gray-600">Real-time metrics and trends</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Task Management</h3>
                  <p className="text-gray-600">Structured work assignment</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl text-black mb-3">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">SLA Management</h3>
                  <p className="text-gray-600">Automated tracking and alerts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-100 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8 text-center">Beyond IT: Enterprise-Wide Service Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">HR Service Delivery</h3>
                <p className="text-gray-600">Streamline employee onboarding, transfers, and HR case management</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-building"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Facilities Management</h3>
                <p className="text-gray-600">Optimize workplace services and maintenance requests</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-money-check-alt"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Finance Services</h3>
                <p className="text-gray-600">Automate procurement, vendor management and financial requests</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl text-black mb-4">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Legal Services</h3>
                <p className="text-gray-600">Manage legal inquiries and compliance processes</p>
              </div>
            </div>
          </div>

          <div className="text-center py-12" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-6">Ready to Transform Your Service Delivery?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Discover how Bharat Service Management Aviator can help your organization deliver exceptional service experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={() => openContactModal('call')}
              >
                Request Call Back
              </button>
              <button 
                className="border border-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => openContactModal('email')}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceManagementAviator;