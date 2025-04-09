import { useAgentAI } from '@/contexts/AgentAIContext';
import { useContact } from '@/contexts/ContactContext';
import ContactOptions from '@/components/shared/ContactOptions';

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
            {/* Contact Options Grid - Using shared component */}
            <ContactOptions 
              onOptionClick={handleOpenContactModal}
            />
            
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
