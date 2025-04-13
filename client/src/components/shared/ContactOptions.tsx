import React from 'react';
import { useAgentAI } from '@/contexts/AgentAIContext';
import { useContact } from '@/contexts/ContactContext';

interface ContactOptionsProps {
  onOptionClick?: (option: 'email' | 'call' | 'ai' | 'callback') => void;
  className?: string;
  inModal?: boolean;
}

/**
 * Reusable component for displaying contact options (Email, Call, Agent AI)
 * Can be used both in the home page and in the contact modal
 */
const ContactOptions: React.FC<ContactOptionsProps> = ({ 
  onOptionClick, 
  className = "",
  inModal = false
}) => {
  const { setIsOpen: setIsAgentAIOpen, setIsMinimized } = useAgentAI();
  const { openContactModal } = useContact();
  
  const handleEmailClick = () => {
    if (onOptionClick) {
      onOptionClick('email');
    } else if (!inModal) {
      openContactModal('email');
    }
  };
  
  const handleCallClick = () => {
    if (onOptionClick) {
      onOptionClick('call');
    } else if (!inModal) {
      openContactModal('call');
    }
  };
  
  const handleCallbackClick = () => {
    if (onOptionClick) {
      onOptionClick('callback');
    } else if (!inModal) {
      openContactModal('callback');
    }
  };
  
  const handleAgentClick = () => {
    if (onOptionClick) {
      onOptionClick('ai');
    } else {
      setIsAgentAIOpen(true);
      setIsMinimized(false);
    }
  };
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${className}`}>
      {/* Email Option */}
      <div 
        className="bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-lg p-6 text-center transition-all duration-300 cursor-pointer flex flex-col h-full"
        onClick={handleEmailClick}
      >
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-envelope text-2xl text-blue-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">Email Us</h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm md:text-base">
          Send us a detailed message and we'll respond promptly
        </p>
        <div className="mt-auto">
          <button className="w-full bg-black text-white px-3 py-2 rounded-full text-xs md:text-sm hover:bg-gray-800 transition-colors duration-300 truncate">
            contact@bharattechnologies.com
          </button>
        </div>
      </div>
      
      {/* Call Option */}
      <div 
        className="bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-lg p-6 text-center transition-all duration-300 cursor-pointer flex flex-col h-full"
        onClick={handleCallClick}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-phone text-2xl text-green-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">Call Us</h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm md:text-base">
          Speak directly with our specialists during business hours
        </p>
        <div className="mt-auto">
          <button className="w-full bg-black text-white px-3 py-2 rounded-full text-xs md:text-sm hover:bg-gray-800 transition-colors duration-300">
            +123 456 7890
          </button>
        </div>
      </div>
      
      {/* Request Call Back Option */}
      <div 
        className="bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-lg p-6 text-center transition-all duration-300 cursor-pointer flex flex-col h-full"
        onClick={handleCallbackClick}
      >
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-phone-volume text-2xl text-yellow-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">Request Call Back</h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm md:text-base">
          Leave your details and we'll call you at your convenience
        </p>
        <div className="mt-auto">
          <button className="w-full bg-black text-white px-3 py-2 rounded-full text-xs md:text-sm hover:bg-gray-800 transition-colors duration-300">
            Schedule Now
          </button>
        </div>
      </div>
      
      {/* Agent AI Option */}
      <div 
        className="bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-lg p-6 text-center transition-all duration-300 cursor-pointer flex flex-col h-full"
        onClick={handleAgentClick}
      >
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-robot text-2xl text-purple-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">Agent AI</h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm md:text-base">
          Get immediate answers from our AI-powered assistant
        </p>
        <div className="mt-auto">
          <button className="w-full bg-black text-white px-3 py-2 rounded-full text-xs md:text-sm hover:bg-gray-800 transition-colors duration-300">
            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;