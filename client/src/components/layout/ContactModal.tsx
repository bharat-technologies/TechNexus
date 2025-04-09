import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAgentAI } from '@/contexts/AgentAIContext';
import { useContact } from '@/contexts/ContactContext';
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

const ContactModal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { contactModal, closeContactModal } = useContact();
  const { toast } = useToast();
  const { setIsOpen, setIsMinimized } = useAgentAI();
  
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

  // If the contact modal type is 'ai', handle it by opening the AgentAI
  if (contactModal === 'ai') {
    setIsOpen(true);
    setIsMinimized(false);
    closeContactModal();
    return null;
  }

  return (
    <>
      {/* Email Contact Dialog */}
      <Dialog open={contactModal === 'email'} onOpenChange={() => closeContactModal()}>
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
      <Dialog open={contactModal === 'call'} onOpenChange={() => closeContactModal()}>
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
    </>
  );
};

export default ContactModal;