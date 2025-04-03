import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
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

type ContactModalType = 'email' | 'call' | 'ai' | null;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactModal, setContactModal] = useState<ContactModalType>(null);
  const { toast } = useToast();
  
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
      setContactModal(null);
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

  const openContactModal = (type: ContactModalType) => {
    setContactModal(type);
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
                onClick={() => openContactModal('email')}
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
                onClick={() => openContactModal('call')}
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
                onClick={() => openContactModal('ai')}
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
      
      {/* Email Contact Dialog */}
      <Dialog open={contactModal === 'email'} onOpenChange={() => setContactModal(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Send Us an Email</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        </DialogContent>
      </Dialog>
      
      {/* Call Us Dialog */}
      <Dialog open={contactModal === 'call'} onOpenChange={() => setContactModal(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Call Our Team</DialogTitle>
            <DialogDescription>
              We're available Monday through Friday, 9am to 6pm IST.
            </DialogDescription>
          </DialogHeader>
          <div className="py-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-phone text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">+123 456 7890</h3>
              <p className="text-gray-600 mb-4">
                Our technical support team is ready to assist you with any questions about our products and services.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
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
        </DialogContent>
      </Dialog>
      
      {/* Agent AI Dialog */}
      <Dialog open={contactModal === 'ai'} onOpenChange={() => setContactModal(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Agent AI</DialogTitle>
            <DialogDescription>
              Get immediate answers from our AI-powered virtual assistant.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-100 rounded-lg p-4 h-80 overflow-y-auto mb-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <i className="fas fa-robot text-purple-600 text-sm"></i>
                </div>
                <div className="bg-white p-3 rounded-lg max-w-[80%]">
                  <p className="text-gray-800">Hello! I'm BharatAI, your virtual assistant. How can I help you today?</p>
                  <p className="text-xs text-gray-500 mt-1">Just now</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <i className="fas fa-robot text-purple-600 text-sm"></i>
                </div>
                <div className="bg-white p-3 rounded-lg max-w-[80%]">
                  <p className="text-gray-800">
                    I can answer questions about our products, services, or schedule a call with one of our human experts.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Just now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-4 py-3 rounded-r-lg hover:bg-gray-800 transition-colors duration-300">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            This is a simulated Agent AI. For complex inquiries, please use email or phone options.
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;
