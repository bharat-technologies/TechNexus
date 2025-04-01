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
                    <a href="/about-us" className="block py-1">
                      <i className="fas fa-building mr-2"></i>
                      <span>Company Overview</span>
                    </a>
                    <a href="/our-team" className="block py-1">
                      <i className="fas fa-users mr-2"></i>
                      <span>Our Team</span>
                    </a>
                    <a href="/careers" className="block py-1">
                      <i className="fas fa-briefcase mr-2"></i>
                      <span>Careers</span>
                    </a>
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
                    <a href="/ai-intelligence" className="block py-1">
                      <i className="fas fa-robot mr-2"></i>
                      <span>Artificial Intelligence</span>
                    </a>
                    <a href="/cloud-stack" className="block py-1">
                      <i className="fas fa-cloud mr-2"></i>
                      <span>Cloud Stack</span>
                    </a>
                    <a href="/multi-cloud" className="block py-1">
                      <i className="fas fa-server mr-2"></i>
                      <span>Multi Cloud</span>
                    </a>
                  </div>
                  
                  <div className="solution-section mt-2">
                    <div className="font-bold mb-1">Security & Defense</div>
                    <a href="/cyber-security" className="block py-1">
                      <i className="fas fa-shield-alt mr-2"></i>
                      <span>Cyber Security</span>
                    </a>
                    <a href="/defence" className="block py-1">
                      <i className="fas fa-satellite mr-2"></i>
                      <span>Defence</span>
                    </a>
                    <a href="/space" className="block py-1">
                      <i className="fas fa-rocket mr-2"></i>
                      <span>Space</span>
                    </a>
                  </div>

                  <div className="solution-section mt-2">
                    <div className="font-bold mb-1">Specialized Technologies</div>
                    <a href="/technology/agriculture-farming" className="block py-1">
                      <i className="fas fa-leaf mr-2"></i>
                      <span>Agriculture & Farming</span>
                    </a>
                    <a href="/technology/healthcare" className="block py-1">
                      <i className="fas fa-heartbeat mr-2"></i>
                      <span>Health Care</span>
                    </a>
                    <a href="/technology/life-support" className="block py-1">
                      <i className="fas fa-user-shield mr-2"></i>
                      <span>Life Support</span>
                    </a>
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
                    <a href="/products/analytics-cloud" className="block py-1">Analytics Cloud</a>
                    <a href="/products/business-network-cloud" className="block py-1">Business Network Cloud</a>
                    <a href="/products/content-cloud" className="block py-1">Content Cloud</a>
                    <a href="/products/cybersecurity-cloud" className="block py-1">Cybersecurity Cloud</a>
                  </div>
                  
                  <div className="solution-section mt-2">
                    <div className="font-bold mb-1">Platform</div>
                    <a href="/products/devops-cloud" className="block py-1">DevOps Cloud</a>
                    <a href="/products/experience-cloud" className="block py-1">Experience Cloud</a>
                    <a href="/products/observability-service-management" className="block py-1">Observability and Service</a>
                  </div>
                  
                  <div className="solution-section mt-2">
                    <div className="font-bold mb-1">Resources</div>
                    <a href="/products/a-z-listing" className="block py-1">A-Z Product Listing</a>
                    <a href="/products/name-changes" className="block py-1">Product Name Changes</a>
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
                    <a href="/solutions/ai-intelligence" className="block py-1">AI Intelligence</a>
                    <a href="/solutions/cloud-stack" className="block py-1">Cloud Stack</a>
                    <a href="/solutions/cyber-security" className="block py-1">Cyber Security</a>
                    <a href="/solutions/defence" className="block py-1">Defence</a>
                    <a href="/solutions/multi-cloud" className="block py-1">Multi-Cloud</a>
                    <a href="/solutions/space" className="block py-1">Space</a>
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
                    <a href="/consulting" className="block py-1">Consulting</a>
                    <a href="/development" className="block py-1">Development</a>
                    <a href="/support" className="block py-1">Support</a>
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
                    <a href="tel:+1234567890" className="block py-1">Call Us</a>
                    <a href="mailto:contact@bharattechnologies.com" className="block py-1">Email Us</a>
                    <a href="/ai-chat" className="block py-1">AI Assistant</a>
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
