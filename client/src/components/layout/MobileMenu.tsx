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
      title: 'About Us',
      links: [
        { path: '/about-us', icon: 'fas fa-building', text: 'Company Overview' },
        { path: '/our-team', icon: 'fas fa-users', text: 'Our Team' },
        { path: '/careers', icon: 'fas fa-briefcase', text: 'Careers' },
      ]
    },
    {
      title: 'Core Technologies',
      links: [
        { path: '/ai-intelligence', icon: 'fas fa-robot', text: 'Artificial Intelligence' },
        { path: '/cloud-stack', icon: 'fas fa-cloud', text: 'Cloud Stack' },
        { path: '/multi-cloud', icon: 'fas fa-server', text: 'Multi Cloud' },
      ]
    },
    {
      title: 'Security & Defense',
      links: [
        { path: '/cyber-security', icon: 'fas fa-shield-alt', text: 'Cyber Security' },
        { path: '/defence', icon: 'fas fa-satellite', text: 'Defence' },
        { path: '/space', icon: 'fas fa-rocket', text: 'Space' },
      ]
    },
    {
      title: 'Specialized Technologies',
      links: [
        { path: '/technology/agriculture-farming', icon: 'fas fa-leaf', text: 'Agriculture & Farming' },
        { path: '/technology/healthcare', icon: 'fas fa-heartbeat', text: 'Health Care' },
        { path: '/technology/life-support', icon: 'fas fa-user-shield', text: 'Life Support' },
      ]
    },
    {
      title: 'Products',
      links: [
        { path: '/products/analytics-cloud', icon: 'fas fa-chart-line', text: 'Analytics Cloud' },
        { path: '/products/business-network-cloud', icon: 'fas fa-network-wired', text: 'Business Network Cloud' },
        { path: '/products/content-cloud', icon: 'fas fa-file-alt', text: 'Content Cloud' },
        { path: '/products/cybersecurity-cloud', icon: 'fas fa-shield-alt', text: 'Cybersecurity Cloud' },
        { path: '/products/devops-cloud', icon: 'fas fa-code-branch', text: 'DevOps Cloud' },
        { path: '/products/experience-cloud', icon: 'fas fa-laptop', text: 'Experience Cloud' },
        { path: '/products/observability-service-management', icon: 'fas fa-eye', text: 'Observability and Service Management Cloud' },
        { path: '/products/opentext-thrust', icon: 'fas fa-rocket', text: 'OpenText™ Thrust' },
        { path: '/products/portfolio', icon: 'fas fa-briefcase', text: 'Portfolio' },
        { path: '/products/a-z-listing', icon: 'fas fa-list-alt', text: 'A-Z Product Listing' },
        { path: '/products/name-changes', icon: 'fas fa-exchange-alt', text: 'Product Name Changes' },
      ]
    },
    {
      title: 'Solutions - Information Reimagined',
      links: [
        { path: '/solutions/knowledge-reimagined', icon: 'fas fa-brain', text: 'Knowledge Reimagined' },
        { path: '/solutions/cloudops-reimagined', icon: 'fas fa-cloud-upload-alt', text: 'CloudOps Reimagined' },
        { path: '/solutions/connections-reimagined', icon: 'fas fa-network-wired', text: 'Connections Reimagined' },
        { path: '/solutions/conversations-reimagined', icon: 'fas fa-comments', text: 'Conversations Reimagined' },
        { path: '/solutions/decisions-reimagined', icon: 'fas fa-balance-scale', text: 'Decisions Reimagined' },
        { path: '/solutions/engineering-reimagined', icon: 'fas fa-cogs', text: 'Engineering Reimagined' },
        { path: '/solutions/security-reimagined', icon: 'fas fa-shield-alt', text: 'Security Reimagined' },
      ]
    },
    {
      title: 'Solutions - Artificial Intelligence',
      links: [
        { path: '/solutions/service-management-aviator', icon: 'fas fa-concierge-bell', text: 'Service Management Aviator' },
        { path: '/solutions/devops-aviator', icon: 'fas fa-code-branch', text: 'DevOps Aviator' },
        { path: '/solutions/experience-aviator', icon: 'fas fa-laptop', text: 'Experience Aviator' },
        { path: '/solutions/content-aviator', icon: 'fas fa-file-alt', text: 'Content Aviator' },
        { path: '/solutions/business-network-aviator', icon: 'fas fa-sitemap', text: 'Business Network Aviator' },
        { path: '/solutions/cybersecurity-aviator', icon: 'fas fa-lock', text: 'Cybersecurity Aviator' },
      ]
    },
    {
      title: 'Solutions - Industry',
      links: [
        { path: '/solutions/banking', icon: 'fas fa-university', text: 'Banking' },
        { path: '/solutions/insurance', icon: 'fas fa-file-contract', text: 'Insurance' },
        { path: '/solutions/healthcare', icon: 'fas fa-heartbeat', text: 'Healthcare' },
        { path: '/solutions/oil-gas', icon: 'fas fa-oil-can', text: 'Oil & Gas' },
        { path: '/solutions/industrial-manufacturing', icon: 'fas fa-industry', text: 'Industrial Manufacturing' },
        { path: '/solutions/public-sector', icon: 'fas fa-landmark', text: 'Public Sector' },
        { path: '/solutions/utilities', icon: 'fas fa-bolt', text: 'Utilities' },
        { path: '/solutions/all-industries', icon: 'fas fa-th-large', text: 'View All Industries' },
      ]
    },
    {
      title: 'Solutions - Enterprise Applications',
      links: [
        { path: '/solutions/sap', icon: 'fas fa-database', text: 'SAP®' },
        { path: '/solutions/microsoft', icon: 'fab fa-microsoft', text: 'Microsoft®' },
        { path: '/solutions/salesforce', icon: 'fab fa-salesforce', text: 'Salesforce®' },
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
                    className={`block py-2 hover:text-gray-300 transition-colors duration-300 mobile-${section.title.toLowerCase().replace('&', '').replace(' ', '')}`}
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
