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
                <div className={`dropdown-content products-dropdown ${activeDropdown === 'products' ? 'active' : ''}`}>
                  <div className="px-3 py-2">
                    <Link href="/products/analytics-cloud">
                      <a className="block px-4 py-3">
                        <i className="fas fa-chart-line mr-2"></i>
                        <span>Analytics Cloud</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/business-network-cloud">
                      <a className="block px-4 py-3">
                        <i className="fas fa-network-wired mr-2"></i>
                        <span>Business Network Cloud</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/content-cloud">
                      <a className="block px-4 py-3">
                        <i className="fas fa-file-alt mr-2"></i>
                        <span>Content Cloud</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/cybersecurity-cloud">
                      <a className="block px-4 py-3">
                        <i className="fas fa-shield-alt mr-2"></i>
                        <span>Cybersecurity Cloud</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/devops-cloud">
                      <a className="block px-4 py-3">
                        <i className="fas fa-code-branch mr-2"></i>
                        <span>DevOps Cloud</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/experience-cloud">
                      <a className="block px-4 py-3">
                        <i className="fas fa-laptop mr-2"></i>
                        <span>Experience Cloud</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/observability-service-management">
                      <a className="block px-4 py-3">
                        <i className="fas fa-eye mr-2"></i>
                        <span>Observability and Service Management Cloud</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/opentext-thrust">
                      <a className="block px-4 py-3">
                        <i className="fas fa-rocket mr-2"></i>
                        <span>OpenText™ Thrust</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/portfolio">
                      <a className="block px-4 py-3">
                        <i className="fas fa-briefcase mr-2"></i>
                        <span>Portfolio</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/a-z-listing">
                      <a className="block px-4 py-3">
                        <i className="fas fa-list-alt mr-2"></i>
                        <span>A-Z Product Listing</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-3 py-2">
                    <Link href="/products/name-changes">
                      <a className="block px-4 py-3">
                        <i className="fas fa-exchange-alt mr-2"></i>
                        <span>Product Name Changes</span>
                      </a>
                    </Link>
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
                <div className={`dropdown-content solutions-dropdown ${activeDropdown === 'solutions' ? 'active' : ''} grid grid-cols-4 gap-4 w-max p-4`}>
                  {/* Information Reimagined */}
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-2 pb-1 border-b border-gray-200">Information Reimagined</div>
                    <Link href="/solutions/knowledge-reimagined">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-brain mr-2"></i>
                        <span>Knowledge Reimagined</span>
                      </a>
                    </Link>
                    <Link href="/solutions/cloudops-reimagined">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-cloud-upload-alt mr-2"></i>
                        <span>CloudOps Reimagined</span>
                      </a>
                    </Link>
                    <Link href="/solutions/connections-reimagined">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-network-wired mr-2"></i>
                        <span>Connections Reimagined</span>
                      </a>
                    </Link>
                    <Link href="/solutions/conversations-reimagined">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-comments mr-2"></i>
                        <span>Conversations Reimagined</span>
                      </a>
                    </Link>
                    <Link href="/solutions/decisions-reimagined">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-balance-scale mr-2"></i>
                        <span>Decisions Reimagined</span>
                      </a>
                    </Link>
                    <Link href="/solutions/engineering-reimagined">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-cogs mr-2"></i>
                        <span>Engineering Reimagined</span>
                      </a>
                    </Link>
                    <Link href="/solutions/security-reimagined">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-shield-alt mr-2"></i>
                        <span>Security Reimagined</span>
                      </a>
                    </Link>
                  </div>
                  
                  {/* Artificial Intelligence */}
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-2 pb-1 border-b border-gray-200">Artificial Intelligence</div>
                    <Link href="/solutions/service-management-aviator">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-concierge-bell mr-2"></i>
                        <span>Service Management Aviator</span>
                      </a>
                    </Link>
                    <Link href="/solutions/devops-aviator">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-code-branch mr-2"></i>
                        <span>DevOps Aviator</span>
                      </a>
                    </Link>
                    <Link href="/solutions/experience-aviator">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-laptop mr-2"></i>
                        <span>Experience Aviator</span>
                      </a>
                    </Link>
                    <Link href="/solutions/content-aviator">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-file-alt mr-2"></i>
                        <span>Content Aviator</span>
                      </a>
                    </Link>
                    <Link href="/solutions/business-network-aviator">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-sitemap mr-2"></i>
                        <span>Business Network Aviator</span>
                      </a>
                    </Link>
                    <Link href="/solutions/cybersecurity-aviator">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-lock mr-2"></i>
                        <span>Cybersecurity Aviator</span>
                      </a>
                    </Link>
                  </div>
                  
                  {/* Industry */}
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-2 pb-1 border-b border-gray-200">Industry</div>
                    <Link href="/solutions/banking">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-university mr-2"></i>
                        <span>Banking</span>
                      </a>
                    </Link>
                    <Link href="/solutions/insurance">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-file-contract mr-2"></i>
                        <span>Insurance</span>
                      </a>
                    </Link>
                    <Link href="/solutions/healthcare">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-heartbeat mr-2"></i>
                        <span>Healthcare</span>
                      </a>
                    </Link>
                    <Link href="/solutions/oil-gas">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-oil-can mr-2"></i>
                        <span>Oil & Gas</span>
                      </a>
                    </Link>
                    <Link href="/solutions/industrial-manufacturing">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-industry mr-2"></i>
                        <span>Industrial Manufacturing</span>
                      </a>
                    </Link>
                    <Link href="/solutions/public-sector">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-landmark mr-2"></i>
                        <span>Public Sector</span>
                      </a>
                    </Link>
                    <Link href="/solutions/utilities">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-bolt mr-2"></i>
                        <span>Utilities</span>
                      </a>
                    </Link>
                    <Link href="/solutions/all-industries">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-th-large mr-2"></i>
                        <span>View All Industries</span>
                      </a>
                    </Link>
                  </div>
                  
                  {/* Enterprise Applications */}
                  <div className="solution-section">
                    <div className="font-bold text-sm mb-2 pb-1 border-b border-gray-200">Enterprise Applications</div>
                    <Link href="/solutions/sap">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fas fa-database mr-2"></i>
                        <span>SAP®</span>
                      </a>
                    </Link>
                    <Link href="/solutions/microsoft">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fab fa-microsoft mr-2"></i>
                        <span>Microsoft®</span>
                      </a>
                    </Link>
                    <Link href="/solutions/salesforce">
                      <a className="block px-3 py-2 text-sm">
                        <i className="fab fa-salesforce mr-2"></i>
                        <span>Salesforce®</span>
                      </a>
                    </Link>
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
                <div className={`dropdown-content services-dropdown ${activeDropdown === 'services' ? 'active' : ''} grid grid-cols-3 gap-2 p-3`}>
                  <div className="px-2 py-1">
                    <Link href="/consulting">
                      <a className="block px-4 py-3">
                        <i className="fas fa-comments mr-2"></i>
                        <span>Consulting</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-2 py-1">
                    <Link href="/development">
                      <a className="block px-4 py-3">
                        <i className="fas fa-code mr-2"></i>
                        <span>Development</span>
                      </a>
                    </Link>
                  </div>
                  <div className="px-2 py-1">
                    <Link href="/support">
                      <a className="block px-4 py-3">
                        <i className="fas fa-headset mr-2"></i>
                        <span>Support</span>
                      </a>
                    </Link>
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
                <div className={`dropdown-content contact-dropdown ${activeDropdown === 'contact' ? 'active' : ''} right-0 grid grid-cols-3 gap-2 p-3`}>
                  <div className="px-2 py-1">
                    <a href="tel:+1234567890" className="block px-4 py-3">
                      <i className="fas fa-phone mr-2"></i>
                      <span>Call Us</span>
                    </a>
                  </div>
                  <div className="px-2 py-1">
                    <a href="mailto:contact@bharattechnologies.com" className="block px-4 py-3">
                      <i className="fas fa-envelope mr-2"></i>
                      <span>Email Us</span>
                    </a>
                  </div>
                  <div className="px-2 py-1">
                    <Link href="/ai-chat">
                      <a className="block px-4 py-3">
                        <i className="fas fa-robot mr-2"></i>
                        <span>AI Assistant</span>
                      </a>
                    </Link>
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
