import { useState } from 'react';
import { Link } from 'wouter';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DropdownSection {
  title: string;
  links: {
    path: string;
    icon: string;
    text: string;
  }[];
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuSections: DropdownSection[] = [
    {
      title: 'The Company',
      links: [
        { path: '/about-us', icon: 'fas fa-building', text: 'About Us' },
        { path: '/our-team', icon: 'fas fa-users', text: 'Our Team' },
        { path: '/careers', icon: 'fas fa-briefcase', text: 'Careers' },
      ]
    },
    {
      title: 'Technology',
      links: [
        { path: '/ai-intelligence', icon: 'fas fa-robot', text: 'Artificial Human Intelligence' },
        { path: '/cloud-stack', icon: 'fas fa-cloud', text: 'Cloud Stack' },
        { path: '/multi-cloud', icon: 'fas fa-server', text: 'Multi Cloud' },
        { path: '/cyber-security', icon: 'fas fa-shield-alt', text: 'Cyber Security' },
        { path: '/defence', icon: 'fas fa-satellite', text: 'Defence' },
        { path: '/space', icon: 'fas fa-rocket', text: 'Space' },
      ]
    },
    {
      title: 'Products',
      links: [
        { path: '/product1', icon: 'fas fa-box', text: 'Product 1' },
        { path: '/product2', icon: 'fas fa-box', text: 'Product 2' },
        { path: '/product3', icon: 'fas fa-box', text: 'Product 3' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { path: '/enterprise-solutions', icon: 'fas fa-building', text: 'Enterprise Solutions' },
        { path: '/cloud-solutions', icon: 'fas fa-cloud', text: 'Cloud Solutions' },
        { path: '/security-solutions', icon: 'fas fa-shield-alt', text: 'Security Solutions' },
      ]
    },
    {
      title: 'Support & Services',
      links: [
        { path: '/consulting', icon: 'fas fa-comments', text: 'Consulting' },
        { path: '/development', icon: 'fas fa-code', text: 'Development' },
        { path: '/support', icon: 'fas fa-headset', text: 'Support' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { path: 'tel:+1234567890', icon: 'fas fa-phone', text: 'Call Us' },
        { path: 'mailto:contact@bharattechnologies.com', icon: 'fas fa-envelope', text: 'Email Us' },
        { path: '/ai-chat', icon: 'fas fa-robot', text: 'AI Assistant' },
      ]
    }
  ];

  const handleLinkClick = () => {
    onClose();
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="mr-2">
            <rect width="50" height="50" rx="10" fill="black"/>
            <path d="M15 15L35 35M15 35L35 15" stroke="white" strokeWidth="5"/>
          </svg>
          <span className="font-poppins font-semibold text-lg text-white">Bharat Technologies</span>
        </div>
        <button onClick={onClose} className="text-white text-xl">
          <i className="fa-solid fa-times"></i>
        </button>
      </div>
      
      {/* Mobile Menu Items */}
      <div className="flex flex-col text-white space-y-4">
        {menuSections.map((section, index) => (
          <div key={index} className="py-2 border-b border-gray-700">
            <div 
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection(section.title)}
            >
              <span className="font-medium text-lg">{section.title}</span>
              <i className={`fas ${expandedSections[section.title] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            <div 
              className="pl-4 space-y-2 mt-2"
              style={{ display: expandedSections[section.title] ? 'block' : 'none' }}
            >
              {section.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.path}>
                  <a 
                    className="block py-2 hover:text-gray-300 transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    <i className={`${link.icon} mr-2`}></i>
                    <span>{link.text}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
