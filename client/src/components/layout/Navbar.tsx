import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { useAgentAI } from '@/contexts/AgentAIContext';
import { useContact } from '@/contexts/ContactContext';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Use the global Agent AI context
  const { setIsOpen: setIsAgentAIOpen, setIsMinimized } = useAgentAI();
  
  // Use the global Contact context
  const { openContactModal } = useContact();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Close any open dropdowns on scroll
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Only process if there's an active dropdown
      if (!activeDropdown) return;
      
      const target = event.target as HTMLElement;
      
      // Check if the click was outside the dropdown
      if (!target.closest('.dropdown-content') && !target.closest('.dropdown button')) {
        setActiveDropdown(null);
      }
    };

    // Handle route changes
    const handleRouteChange = () => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg' 
        : 'py-4 bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div 
              onClick={() => window.location.href = '/'}
              className="flex items-center cursor-pointer group"
            >
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" 
                  className="mr-2 transition-transform duration-500 group-hover:rotate-90">
                  <rect width="50" height="50" rx="10" fill="black"/>
                  <path d="M15 15L35 35M15 35L35 15" stroke="white" strokeWidth="5"/>
                </svg>
                <span className="font-poppins font-semibold text-lg text-primary group-hover:text-black">
                  Bharat Technologies
                </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3" ref={dropdownRef}>
              {/* Company Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-1 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('company')}
                >
                  <span className="relative z-10">The Company</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content company-dropdown ${activeDropdown === 'company' ? 'active' : ''}`}>
                  <div className="solution-section">
                    <div className="font-bold mb-1">About Us</div>
                    <div onClick={() => window.location.href = '/about-us'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-building mr-2"></i>
                      <span>Company Overview</span>
                    </div>
                    <div onClick={() => window.location.href = '/our-team'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-users mr-2"></i>
                      <span>Our Team</span>
                    </div>
                    <div onClick={() => window.location.href = '/careers'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-briefcase mr-2"></i>
                      <span>Careers</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Technology Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-1 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('technology')}
                >
                  <span className="relative z-10">Technology</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content technology-dropdown ${activeDropdown === 'technology' ? 'active' : ''}`}>
                  <div className="solution-section">
                    <div className="font-bold mb-1">Core Technologies</div>
                    <div onClick={() => window.location.href = '/ai-intelligence'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-robot mr-2"></i>
                      <span>Artificial Intelligence</span>
                    </div>
                    <div onClick={() => window.location.href = '/cloud-stack'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-cloud mr-2"></i>
                      <span>Cloud Stack</span>
                    </div>
                    <div onClick={() => window.location.href = '/multi-cloud'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-server mr-2"></i>
                      <span>Multi Cloud</span>
                    </div>
                  </div>
                  
                  <div className="solution-section mt-2">
                    <div className="font-bold mb-1">Security & Defense</div>
                    <div onClick={() => window.location.href = '/cyber-security'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-shield-alt mr-2"></i>
                      <span>Cyber Security</span>
                    </div>
                    <div onClick={() => window.location.href = '/defence'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-satellite mr-2"></i>
                      <span>Defence</span>
                    </div>
                    <div onClick={() => window.location.href = '/space'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-rocket mr-2"></i>
                      <span>Space</span>
                    </div>
                  </div>

                  <div className="solution-section mt-2">
                    <div className="font-bold mb-1">Specialized Technologies</div>
                    <div onClick={() => window.location.href = '/technology/agriculture-farming'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-leaf mr-2"></i>
                      <span>Agriculture & Farming</span>
                    </div>
                    <div onClick={() => window.location.href = '/technology/healthcare'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-heartbeat mr-2"></i>
                      <span>Health Care</span>
                    </div>
                    <div onClick={() => window.location.href = '/technology/life-support'} className="block py-1 cursor-pointer hover:bg-gray-50">
                      <i className="fas fa-user-shield mr-2"></i>
                      <span>Life Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Products Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-1 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('products')}
                >
                  <span className="relative z-10">Products</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content products-dropdown ${activeDropdown === 'products' ? 'active' : ''}`}>
                  <div className="solution-section">
                    <div className="font-bold mb-1">Cloud Products</div>
                    <div onClick={() => window.location.href = '/products/analytics-cloud'} className="block py-1 cursor-pointer hover:bg-gray-50">Analytics Cloud</div>
                    <div onClick={() => window.location.href = '/products/business-network-cloud'} className="block py-1 cursor-pointer hover:bg-gray-50">Business Network Cloud</div>
                    <div onClick={() => window.location.href = '/products/content-cloud'} className="block py-1 cursor-pointer hover:bg-gray-50">Content Cloud</div>
                    <div onClick={() => window.location.href = '/products/cybersecurity-cloud'} className="block py-1 cursor-pointer hover:bg-gray-50">Cybersecurity Cloud</div>
                  </div>
                  
                  <div className="solution-section mt-2">
                    <div className="font-bold mb-1">Platform</div>
                    <div onClick={() => window.location.href = '/products/devops-cloud'} className="block py-1 cursor-pointer hover:bg-gray-50">DevOps Cloud</div>
                    <div onClick={() => window.location.href = '/products/experience-cloud'} className="block py-1 cursor-pointer hover:bg-gray-50">Experience Cloud</div>
                    <div onClick={() => window.location.href = '/products/observability-service-management'} className="block py-1 cursor-pointer hover:bg-gray-50">Observability and Service</div>
                  </div>
                  
                  <div className="solution-section mt-2">
                    <div className="font-bold mb-1">Resources</div>
                    <div onClick={() => window.location.href = '/products/a-z-listing'} className="block py-1 cursor-pointer hover:bg-gray-50">A-Z Product Listing</div>
                    <div onClick={() => window.location.href = '/products/name-changes'} className="block py-1 cursor-pointer hover:bg-gray-50">Product Name Changes</div>
                  </div>
                </div>
              </div>
              
              {/* Solutions Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-1 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('solutions')}
                >
                  <span className="relative z-10">Solutions</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content solutions-dropdown ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                  <div className="solution-section">
                    <div className="font-bold mb-1">Solutions</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/ai-intelligence';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">AI Intelligence</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/cloud-stack';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Cloud Stack</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/cyber-security';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Cyber Security</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/multi-cloud';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Multi-Cloud</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/defence';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Defence</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/space';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Space</div>
                  </div>
                  
                  <div className="solution-section mt-4">
                    <div className="font-bold mb-1">Artificial Intelligence</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/service-management-aviator';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Service Management Aviator</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/devops-aviator';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">DevOps Aviator</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/experience-aviator';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Experience Aviator</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/content-aviator';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Content Aviator</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/business-network-aviator';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Business Network Aviator</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/cybersecurity-aviator';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Cybersecurity Aviator</div>
                  </div>
                  
                  <div className="solution-section mt-4">
                    <div className="font-bold mb-1">Industry</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/banking';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Banking</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/insurance';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Insurance</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/healthcare';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Healthcare</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/oil-gas';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Oil & Gas</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/industrial-manufacturing';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Industrial Manufacturing</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/public-sector';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Public Sector</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/utilities';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Utilities</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/all-industries';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">View All Industries</div>
                  </div>
                  
                  <div className="solution-section mt-4">
                    <div className="font-bold mb-1">Enterprise Applications</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/sap';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">SAP®</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/microsoft';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Microsoft®</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/solutions/salesforce';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Salesforce®</div>
                  </div>
                </div>
              </div>
              
              {/* Support & Services Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-1 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('services')}
                >
                  <span className="relative z-10">Support & Services</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content services-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
                  <div className="solution-section">
                    <div className="font-bold mb-1">Support & Services</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/consulting';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Consulting</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/development';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Development</div>
                    <div onClick={() => {
                      setActiveDropdown(null);
                      window.location.href = '/support';
                    }} className="block py-1 cursor-pointer hover:bg-gray-50">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Contact Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="bg-primary text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center shadow-sm hover:shadow-md relative"
                  onClick={() => toggleDropdown('contact')}
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-white z-0 opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content contact-dropdown ${activeDropdown === 'contact' ? 'active' : ''} right-0`}>
                  <div className="solution-section">
                    <div className="font-bold mb-1">Get in Touch</div>
                    <div onClick={() => { 
                        setActiveDropdown(null); 
                        openContactModal('main');
                      }} 
                      className="block py-1 cursor-pointer hover:bg-gray-50">Contact Us</div>
                    <div onClick={() => { 
                        setActiveDropdown(null); 
                        openContactModal('call');
                      }} 
                      className="block py-1 cursor-pointer hover:bg-gray-50">Call Us</div>
                    <div onClick={() => { 
                        setActiveDropdown(null); 
                        openContactModal('email');
                      }} 
                      className="block py-1 cursor-pointer hover:bg-gray-50">Email Us</div>
                    <div onClick={() => { 
                        setActiveDropdown(null); 
                        setIsAgentAIOpen(true);
                        setIsMinimized(false); // Make sure it opens as full dialog
                      }} 
                      className="block py-1 cursor-pointer hover:bg-gray-50">Agent AI</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu} 
                className="text-primary text-xl focus:outline-none hover:text-gray-600 transition-colors duration-300 p-2 rounded-full hover:bg-black hover:bg-opacity-5"
                aria-label="Toggle mobile menu"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={toggleMobileMenu} 
        onOpenAgentAI={() => {
          setIsAgentAIOpen(true);
          setIsMinimized(false); // Make sure it opens as full dialog
        }}
        onOpenCallUs={() => openContactModal('call')}
        onOpenEmailUs={() => openContactModal('email')}
        onOpenContactModal={() => openContactModal('main')}
      />
    </>
  );
};

export default Navbar;
