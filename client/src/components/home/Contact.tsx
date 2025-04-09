import { useAgentAI } from '@/contexts/AgentAIContext';
import { useContact } from '@/contexts/ContactContext';

const Contact = () => {
  const { setIsOpen, setIsMinimized } = useAgentAI();
  const { openContactModal } = useContact();

  const handleOpenContactModal = (type: 'email' | 'call' | 'ai' | null) => {
    if (type === 'ai') {
      // Use the global AgentAI instead of the local dialog
      // Ensure it opens as a full dialog (not minimized)
      setIsOpen(true);
      setIsMinimized(false); // Make sure it's not minimized
    } else {
      openContactModal(type);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-12" data-aos="fade-up">Get in Touch</h2>
          
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            {/* Contact Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Option */}
              <div 
                className="bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-lg p-8 text-center transition-all duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => handleOpenContactModal('email')}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-envelope text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Email Us</h3>
                <p className="text-gray-600 mb-4 flex-grow text-center">Send us a detailed message and we'll respond promptly</p>
                <div className="mt-auto pt-4 text-center">
                  <button className="w-full bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                    <span className="mx-auto">contact@bharattechnologies.com</span>
                  </button>
                </div>
              </div>
              
              {/* Call Option */}
              <div 
                className="bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-lg p-8 text-center transition-all duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => handleOpenContactModal('call')}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-phone text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Call Us</h3>
                <p className="text-gray-600 mb-4 flex-grow text-center">Speak directly with our specialists during business hours</p>
                <div className="mt-auto pt-4 text-center">
                  <button className="w-full bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                    <span className="mx-auto">+123 456 7890</span>
                  </button>
                </div>
              </div>
              
              {/* Agent AI Option */}
              <div 
                className="bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md rounded-lg p-8 text-center transition-all duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => handleOpenContactModal('ai')}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-robot text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Agent AI</h3>
                <p className="text-gray-600 mb-4 flex-grow text-center">Get immediate answers from our AI-powered assistant</p>
                <div className="mt-auto pt-4 text-center">
                  <button className="w-full bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                    <span className="mx-auto">Chat Now</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Additional Contact Info */}
            <div className="mt-12 bg-black text-white p-8 rounded-lg">
              <div className="flex items-start mb-6">
                <div className="text-2xl mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-gray-300">123 Tech Street, Innovation City</p>
                </div>
              </div>
              <p className="text-gray-300">
                Whether you need consulting services, tech support, or want to discuss how our solutions can help your business,
                we're ready to assist. Choose the contact method that works best for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
