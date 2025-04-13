import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAgentAI } from '@/contexts/AgentAIContext';
import { useContact } from '@/contexts/ContactContext';
import ContactOptions from '@/components/shared/ContactOptions';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Main ContactModal component
const ContactModal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { contactModal, closeContactModal, openContactModal } = useContact();
  const { toast } = useToast();
  const { setIsOpen, setIsMinimized } = useAgentAI();
  const [selectedOption, setSelectedOption] = useState<'main' | 'email-form' | 'call-details' | 'callback-form'>('main');
  
  // Reset the selection when the modal closes
  useEffect(() => {
    if (!contactModal) {
      // Reset to default view after modal closes
      setTimeout(() => setSelectedOption('main'), 300);
    }
  }, [contactModal]);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: 'Message sent!',
        description: 'We will get back to you soon.',
        variant: 'default',
      });
      reset();
      closeContactModal();
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: error instanceof Error ? error.message : 'An unexpected error occurred',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAgentAI = () => {
    setIsOpen(true);
    setIsMinimized(false);
    closeContactModal();
  };

  // Set the appropriate option based on the modal type
  useEffect(() => {
    if (contactModal === 'ai') {
      handleAgentAI();
      return;
    }
    
    if (contactModal === 'call') {
      setSelectedOption('call-details');
    } else if (contactModal === 'callback') {
      setSelectedOption('callback-form');
    } else if (contactModal === 'email') {
      setSelectedOption('email-form');
    } else if (contactModal === 'main') {
      setSelectedOption('main');
    }
  }, [contactModal]);
  
  // If the contact modal type is 'ai', don't render the modal
  if (contactModal === 'ai') {
    return null;
  }

  return (
    <Dialog open={contactModal !== null} onOpenChange={() => closeContactModal()}>
      <DialogContent className="sm:max-w-[800px] lg:max-w-[900px] p-6">
        {selectedOption === 'main' && (
          <>
            <DialogHeader className="text-center">
              <DialogTitle className="text-3xl font-bold">Get in Touch</DialogTitle>
            </DialogHeader>
            
            <ContactOptions 
              className="py-6" 
              inModal={true}
              onOptionClick={(option) => {
                if (option === 'email') {
                  setSelectedOption('email-form');
                } else if (option === 'call') {
                  setSelectedOption('call-details');
                } else if (option === 'callback') {
                  setSelectedOption('callback-form');
                } else if (option === 'ai') {
                  handleAgentAI();
                }
              }}
            />
          </>
        )}
        
        {selectedOption === 'email-form' && (
          <>
            <button 
              onClick={() => setSelectedOption('main')}
              className="absolute top-4 left-4 text-gray-500 hover:text-black"
            >
              <i className="fas fa-arrow-left"></i> Back
            </button>
            <DialogHeader className="mt-8 pl-4">
              <DialogTitle className="text-left">Send Us an Email</DialogTitle>
              <DialogDescription className="text-left">
                Fill out the form below and we'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="John Doe"
                  {...register('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="john@example.com"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                  placeholder="How can we help you?"
                  {...register('subject')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="Your message here..."
                  {...register('message')}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              <DialogFooter>
                <button 
                  type="submit" 
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </DialogFooter>
            </form>
          </>
        )}
        
        {selectedOption === 'call-details' && (
          <>
            <button 
              onClick={() => setSelectedOption('main')}
              className="absolute top-4 left-4 text-gray-500 hover:text-black"
            >
              <i className="fas fa-arrow-left"></i> Back
            </button>
            <DialogHeader className="mt-8 pl-4">
              <DialogTitle className="text-left">Call Our Team</DialogTitle>
              <DialogDescription className="text-left">
                We're available Monday through Friday, 9am to 6pm IST.
              </DialogDescription>
            </DialogHeader>
            <div className="py-6 px-4">
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-2xl text-green-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold">+123 456 7890</h3>
                </div>
                <p className="text-gray-600 mb-6 text-left">
                  Our technical support team is ready to assist you with any questions about our products and services.
                </p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="font-medium">Sales</div>
                    <div className="text-sm text-gray-600">Ext. 101</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="font-medium">Support</div>
                    <div className="text-sm text-gray-600">Ext. 102</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="font-medium">Billing</div>
                    <div className="text-sm text-gray-600">Ext. 103</div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="font-medium">Partnerships</div>
                    <div className="text-sm text-gray-600">Ext. 104</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedOption === 'callback-form' && (
          <>
            <button 
              onClick={() => setSelectedOption('main')}
              className="absolute top-4 left-4 text-gray-500 hover:text-black"
            >
              <i className="fas fa-arrow-left"></i> Back
            </button>
            <DialogHeader className="mt-8 pl-4">
              <DialogTitle className="text-left">Request Call Back</DialogTitle>
              <DialogDescription className="text-left">
                Fill out the form below and our team will call you at your preferred time.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="John Doe"
                  {...register('name')}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="john@example.com"
                  {...register('email')}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                  placeholder="+91 98765 43210"
                  {...register('subject')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Preferred Time & Request Details</label>
                <textarea 
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="Please call me back tomorrow between 10 AM and 12 PM. I'm interested in discussing..."
                  {...register('message')}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <DialogFooter className="mt-6">
                <button 
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : 'Request Call Back'}
                </button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;