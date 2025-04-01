import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <div className="hidden md:flex items-center space-x-6">
              {/* Company Dropdown */}
              <div className="dropdown relative group">
                <button className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden group-hover:font-semibold">
                  <span className="relative z-10">The Company</span>
                  <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className="dropdown-content mt-1">
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
                <button className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden group-hover:font-semibold">
                  <span className="relative z-10">Technology</span>
                  <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className="dropdown-content mt-1">
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
                <button className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden group-hover:font-semibold">
                  <span className="relative z-10">Products</span>
                  <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className="dropdown-content mt-1">
                  <Link href="/product1">
                    <a className="block px-4 py-3">
                      <i className="fas fa-box mr-2"></i>
                      <span>Product 1</span>
                    </a>
                  </Link>
                  <Link href="/product2">
                    <a className="block px-4 py-3">
                      <i className="fas fa-box mr-2"></i>
                      <span>Product 2</span>
                    </a>
                  </Link>
                  <Link href="/product3">
                    <a className="block px-4 py-3">
                      <i className="fas fa-box mr-2"></i>
                      <span>Product 3</span>
                    </a>
                  </Link>
                </div>
              </div>
              
              {/* Services Dropdown */}
              <div className="dropdown relative group">
                <button className="font-inter font-medium text-gray-800 hover:text-black transition-all duration-300 flex items-center relative px-2 py-1 overflow-hidden group-hover:font-semibold">
                  <span className="relative z-10">Services</span>
                  <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                  <span className="absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300"></span>
                </button>
                <div className="dropdown-content mt-1">
                  <Link href="/consulting">
                    <a className="block px-4 py-3">
                      <i className="fas fa-comments mr-2"></i>
                      <span>Consulting</span>
                    </a>
                  </Link>
                  <Link href="/development">
                    <a className="block px-4 py-3">
                      <i className="fas fa-code mr-2"></i>
                      <span>Development</span>
                    </a>
                  </Link>
                  <Link href="/support">
                    <a className="block px-4 py-3">
                      <i className="fas fa-headset mr-2"></i>
                      <span>Support</span>
                    </a>
                  </Link>
                </div>
              </div>
              
              {/* Contact Dropdown */}
              <div className="dropdown relative group">
                <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center shadow-sm hover:shadow-md relative group-hover:font-semibold">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-white z-0 opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-300"></span>
                </button>
                <div className="dropdown-content mt-1 right-0">
                  <a href="tel:+1234567890" className="block px-4 py-3">
                    <i className="fas fa-phone mr-2"></i>
                    <span>Call Us</span>
                  </a>
                  <a href="mailto:contact@bharattechnologies.com" className="block px-4 py-3">
                    <i className="fas fa-envelope mr-2"></i>
                    <span>Email Us</span>
                  </a>
                  <Link href="/ai-chat">
                    <a className="block px-4 py-3">
                      <i className="fas fa-robot mr-2"></i>
                      <span>AI Assistant</span>
                    </a>
                  </Link>
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
