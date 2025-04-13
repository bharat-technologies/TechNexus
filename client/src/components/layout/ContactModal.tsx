import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import React, { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAgentAI } from '@/contexts/AgentAIContext';
import { useContact } from '@/contexts/ContactContext';
import ContactOptions from '@/components/shared/ContactOptions';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  callbackDate: z.date().optional(),
  callbackTime: z.string().optional(),
  timezone: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Main ContactModal component
const ContactModal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { contactModal, closeContactModal, openContactModal } = useContact();
  const { toast } = useToast();
  const { setIsOpen, setIsMinimized } = useAgentAI();
  const [selectedOption, setSelectedOption] = useState<'main' | 'email-form' | 'call-details' | 'callback-form'>('main');
  const [callbackDate, setCallbackDate] = useState<Date | undefined>(undefined);
  
  // Reset the selection when the modal closes
  useEffect(() => {
    if (!contactModal) {
      // Reset to default view after modal closes
      setTimeout(() => setSelectedOption('main'), 300);
    }
  }, [contactModal]);
  
  const [selectedTime, setSelectedTime] = useState<string>("09:00");
  const [selectedTimezone, setSelectedTimezone] = useState<string>("IST");

  // Add refs for calendar functionality
  const calendarRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  // Function to close the calendar popover
  const closeCalendarPopover = () => {
    if (calendarRef.current) {
      // Create and dispatch a click event outside the calendar to close it
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      document.body.dispatchEvent(clickEvent);
    }
  };

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
      // If it's a callback form submission, include the date, time and timezone
      if (selectedOption === 'callback-form') {
        const callbackData = {
          ...data,
          callbackDate: callbackDate,
          callbackTime: selectedTime,
          timezone: selectedTimezone,
          // Change the message to include the callback details
          message: `Callback requested for ${callbackDate ? format(callbackDate, 'PPP') : 'Not specified'} at ${selectedTime} ${selectedTimezone}.\n\nDetails: ${data.message}`
        };
        await apiRequest('POST', '/api/contact', callbackData);
        toast({
          title: 'Call back requested!',
          description: 'We will call you at your preferred time.',
          variant: 'default',
        });
      } else {
        // Regular form submission
        await apiRequest('POST', '/api/contact', data);
        toast({
          title: 'Message sent!',
          description: 'We will get back to you soon.',
          variant: 'default',
        });
      }
      reset();
      setCallbackDate(undefined);
      setSelectedTime("09:00");
      setSelectedTimezone("IST");
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
      <DialogContent className="sm:max-w-[700px] lg:max-w-[750px] p-6">
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
            <DialogHeader className="mt-6 pl-4 mb-3">
              <DialogTitle className="text-left">Request Call Back</DialogTitle>
              <DialogDescription className="text-left">
                Fill out the form below and our team will call you at your preferred time.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 px-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="John Doe"
                  {...register('name')}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="john@example.com"
                  {...register('email')}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
                  placeholder="+91 98765 43210"
                  {...register('subject')}
                />
              </div>
              {/* Date Picker */}
              <div className="space-y-1">
                <label className="block mb-1 font-medium">Preferred Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-black ${!callbackDate && 'text-gray-500'}`}
                    >
                      {callbackDate ? format(callbackDate, 'PPP') : "Select date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <div 
                      ref={calendarRef}
                      onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.key === 'Enter' && callbackDate) {
                          e.preventDefault();
                          // Close the popover on Enter key
                          closeCalendarPopover();
                        }
                      }}
                      onDoubleClick={() => {
                        if (callbackDate) {
                          // Close the popover on double click
                          closeCalendarPopover();
                        }
                      }}
                    >
                      <Calendar
                        mode="single"
                        selected={callbackDate}
                        onSelect={(date: Date | undefined) => {
                          setCallbackDate(date);
                          // We don't auto-close on single click, only on double click or Enter
                        }}
                        disabled={(date: Date) => 
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selector */}
              <div className="space-y-1">
                <label className="block mb-1 font-medium">Preferred Time</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Timezone Selector */}
              <div className="space-y-1">
                <label className="block mb-1 font-medium">Timezone</label>
                <Select value={selectedTimezone} onValueChange={setSelectedTimezone}>
                  <SelectTrigger className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IST">Indian Standard Time (IST)</SelectItem>
                    <SelectItem value="EST">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="CST">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="MST">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="PST">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="GMT">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="CET">Central European Time (CET)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Request Details</label>
                <textarea 
                  id="message"
                  rows={3}
                  className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`} 
                  placeholder="Please provide details about what you'd like to discuss..."
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