import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <Link href="/">
              <a className="flex items-center cursor-pointer group">
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" 
                  className="mr-2 transition-transform duration-500 group-hover:rotate-90">
                  <rect width="50" height="50" rx="10" fill="black"/>
                  <path d="M15 15L35 35M15 35L35 15" stroke="white" strokeWidth="5"/>
                </svg>
                <span className="font-poppins font-semibold text-lg text-primary group-hover:text-black">
                  Bharat Technologies
                </span>
              </a>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6" ref={dropdownRef}>
              {/* Company Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('company')}
                >
                  <span className="relative z-10">The Company</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content company-dropdown ${activeDropdown === 'company' ? 'active' : ''}`}>
                  <Link href="/about-us">
                    <a className="block px-4 py-3">
                      <i className="fas fa-building mr-2"></i>
                      <span>About Us</span>
                    </a>
                  </Link>
                  <Link href="/our-team">
                    <a className="block px-4 py-3">
                      <i className="fas fa-users mr-2"></i>
                      <span>Our Team</span>
                    </a>
                  </Link>
                  <Link href="/careers">
                    <a className="block px-4 py-3">
                      <i className="fas fa-briefcase mr-2"></i>
                      <span>Careers</span>
                    </a>
                  </Link>
                </div>
              </div>
              
              {/* Technology Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('technology')}
                >
                  <span className="relative z-10">Technology</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content technology-dropdown ${activeDropdown === 'technology' ? 'active' : ''}`}>
                  <Link href="/ai-intelligence">
                    <a className="block px-4 py-3">
                      <i className="fas fa-robot mr-2"></i>
                      <span>Artificial Human Intelligence</span>
                    </a>
                  </Link>
                  <Link href="/cloud-stack">
                    <a className="block px-4 py-3">
                      <i className="fas fa-cloud mr-2"></i>
                      <span>Cloud Stack</span>
                    </a>
                  </Link>
                  <Link href="/multi-cloud">
                    <a className="block px-4 py-3">
                      <i className="fas fa-server mr-2"></i>
                      <span>Multi Cloud</span>
                    </a>
                  </Link>
                  <Link href="/cyber-security">
                    <a className="block px-4 py-3">
                      <i className="fas fa-shield-alt mr-2"></i>
                      <span>Cyber Security</span>
                    </a>
                  </Link>
                  <Link href="/defence">
                    <a className="block px-4 py-3">
                      <i className="fas fa-satellite mr-2"></i>
                      <span>Defence</span>
                    </a>
                  </Link>
                  <Link href="/space">
                    <a className="block px-4 py-3">
                      <i className="fas fa-rocket mr-2"></i>
                      <span>Space</span>
                    </a>
                  </Link>
                </div>
              </div>
              
              {/* Products Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('products')}
                >
                  <span className="relative z-10">Products</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content products-dropdown ${activeDropdown === 'products' ? 'active' : ''} p-4`}>
                  <div className="grid grid-cols-4 gap-1">
                    <div className="solution-section">
                      <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Cloud Products</div>
                      <div className="mt-1">
                        <a href="/products/analytics-cloud" className="block px-1 py-1 text-sm">Analytics Cloud</a>
                        <Link href="/products/business-network-cloud">
                          <a className="block px-1 py-1 text-sm">Business Network Cloud</a>
                        </Link>
                        <Link href="/products/content-cloud">
                          <a className="block px-1 py-1 text-sm">Content Cloud</a>
                        </Link>
                        <Link href="/products/cybersecurity-cloud">
                          <a className="block px-1 py-1 text-sm">Cybersecurity Cloud</a>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="solution-section">
                      <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Platform</div>
                      <div className="mt-1">
                        <Link href="/products/devops-cloud">
                          <a className="block px-1 py-1 text-sm">DevOps Cloud</a>
                        </Link>
                        <Link href="/products/experience-cloud">
                          <a className="block px-1 py-1 text-sm">Experience Cloud</a>
                        </Link>
                        <Link href="/products/observability-service-management">
                          <a className="block px-1 py-1 text-sm">Observability and Service Management</a>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="solution-section">
                      <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Solutions</div>
                      <div className="mt-1">
                        <Link href="/products/opentext-thrust">
                          <a className="block px-1 py-1 text-sm">OpenText™ Thrust</a>
                        </Link>
                        <Link href="/products/portfolio">
                          <a className="block px-1 py-1 text-sm">Portfolio</a>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="solution-section">
                      <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Resources</div>
                      <div className="mt-1">
                        <Link href="/products/a-z-listing">
                          <a className="block px-1 py-1 text-sm">A-Z Product Listing</a>
                        </Link>
                        <Link href="/products/name-changes">
                          <a className="block px-1 py-1 text-sm">Product Name Changes</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Solutions Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('solutions')}
                >
                  <span className="relative z-10">Solutions</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content solutions-dropdown ${activeDropdown === 'solutions' ? 'active' : ''} grid grid-cols-4 gap-1 w-max p-4`}>
                  {/* Information Reimagined */}
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Information Reimagined</div>
                    <div className="mt-1">
                      <Link href="/solutions/knowledge-reimagined">
                        <a className="block px-1 py-1 text-sm">Knowledge Reimagined</a>
                      </Link>
                      <Link href="/solutions/cloudops-reimagined">
                        <a className="block px-1 py-1 text-sm">CloudOps Reimagined</a>
                      </Link>
                      <Link href="/solutions/connections-reimagined">
                        <a className="block px-1 py-1 text-sm">Connections Reimagined</a>
                      </Link>
                      <Link href="/solutions/conversations-reimagined">
                        <a className="block px-1 py-1 text-sm">Conversations Reimagined</a>
                      </Link>
                      <Link href="/solutions/decisions-reimagined">
                        <a className="block px-1 py-1 text-sm">Decisions Reimagined</a>
                      </Link>
                      <Link href="/solutions/engineering-reimagined">
                        <a className="block px-1 py-1 text-sm">Engineering Reimagined</a>
                      </Link>
                      <Link href="/solutions/security-reimagined">
                        <a className="block px-1 py-1 text-sm">Security Reimagined</a>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Artificial Intelligence */}
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Artificial Intelligence</div>
                    <div className="mt-1">
                      <Link href="/solutions/service-management-aviator">
                        <a className="block px-1 py-1 text-sm">Service Management Aviator</a>
                      </Link>
                      <Link href="/solutions/devops-aviator">
                        <a className="block px-1 py-1 text-sm">DevOps Aviator</a>
                      </Link>
                      <Link href="/solutions/experience-aviator">
                        <a className="block px-1 py-1 text-sm">Experience Aviator</a>
                      </Link>
                      <Link href="/solutions/content-aviator">
                        <a className="block px-1 py-1 text-sm">Content Aviator</a>
                      </Link>
                      <Link href="/solutions/business-network-aviator">
                        <a className="block px-1 py-1 text-sm">Business Network Aviator</a>
                      </Link>
                      <Link href="/solutions/cybersecurity-aviator">
                        <a className="block px-1 py-1 text-sm">Cybersecurity Aviator</a>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Industry */}
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Industry</div>
                    <div className="mt-1">
                      <Link href="/solutions/banking">
                        <a className="block px-1 py-1 text-sm">Banking</a>
                      </Link>
                      <Link href="/solutions/insurance">
                        <a className="block px-1 py-1 text-sm">Insurance</a>
                      </Link>
                      <Link href="/solutions/healthcare">
                        <a className="block px-1 py-1 text-sm">Healthcare</a>
                      </Link>
                      <Link href="/solutions/oil-gas">
                        <a className="block px-1 py-1 text-sm">Oil & Gas</a>
                      </Link>
                      <Link href="/solutions/industrial-manufacturing">
                        <a className="block px-1 py-1 text-sm">Industrial Manufacturing</a>
                      </Link>
                      <Link href="/solutions/public-sector">
                        <a className="block px-1 py-1 text-sm">Public Sector</a>
                      </Link>
                      <Link href="/solutions/utilities">
                        <a className="block px-1 py-1 text-sm">Utilities</a>
                      </Link>
                      <Link href="/solutions/all-industries">
                        <a className="block px-1 py-1 text-sm">View All Industries</a>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Enterprise Applications */}
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Enterprise Applications</div>
                    <div className="mt-1">
                      <Link href="/solutions/sap">
                        <a className="block px-1 py-1 text-sm">SAP®</a>
                      </Link>
                      <Link href="/solutions/microsoft">
                        <a className="block px-1 py-1 text-sm">Microsoft®</a>
                      </Link>
                      <Link href="/solutions/salesforce">
                        <a className="block px-1 py-1 text-sm">Salesforce®</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Support & Services Dropdown */}
              <div className="dropdown relative group">
                <button 
                  className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden"
                  onClick={() => toggleDropdown('services')}
                >
                  <span className="relative z-10">Support & Services</span>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className={`dropdown-content services-dropdown ${activeDropdown === 'services' ? 'active' : ''} p-4`}>
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Support & Services</div>
                    <div className="mt-1">
                      <Link href="/consulting">
                        <a className="block px-1 py-1 text-sm">Consulting</a>
                      </Link>
                      <Link href="/development">
                        <a className="block px-1 py-1 text-sm">Development</a>
                      </Link>
                      <Link href="/support">
                        <a className="block px-1 py-1 text-sm">Support</a>
                      </Link>
                    </div>
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
                <div className={`dropdown-content contact-dropdown ${activeDropdown === 'contact' ? 'active' : ''} right-0 p-4`}>
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-1 pb-1 border-b border-gray-200">Get in Touch</div>
                    <div className="mt-1">
                      <a href="tel:+1234567890" className="block px-1 py-1 text-sm">Call Us</a>
                      <a href="mailto:contact@bharattechnologies.com" className="block px-1 py-1 text-sm">Email Us</a>
                      <Link href="/ai-chat">
                        <a className="block px-1 py-1 text-sm">AI Assistant</a>
                      </Link>
                    </div>
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
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};

export default Navbar;
