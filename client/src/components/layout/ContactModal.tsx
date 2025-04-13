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

// Add a type for saved user contact information
interface SavedContactInfo {
  name: string;
  email: string;
  phone: string;
  company?: string;
}

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  callbackDate: z.date().optional(),
  callbackTime: z.string().optional(),
  timezone: z.string().optional(),
  company: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Function to save user contact information to localStorage
const saveUserContactInfo = (info: SavedContactInfo) => {
  try {
    localStorage.setItem('userContactInfo', JSON.stringify(info));
    return true;
  } catch (error) {
    console.error('Error saving contact info:', error);
    return false;
  }
};

// Function to retrieve saved user contact information
const getSavedContactInfo = (): SavedContactInfo | null => {
  try {
    const savedInfo = localStorage.getItem('userContactInfo');
    if (savedInfo) {
      return JSON.parse(savedInfo);
    }
    return null;
  } catch (error) {
    console.error('Error retrieving contact info:', error);
    return null;
  }
};

// Common company names for autocomplete suggestions
const commonCompanies = [
  "Tata Consultancy Services",
  "Infosys",
  "Wipro",
  "HCL Technologies",
  "Tech Mahindra",
  "Reliance Industries",
  "Bharti Airtel",
  "Larsen & Toubro",
  "ITC Limited",
  "HDFC Bank"
];

// Main ContactModal component
const ContactModal = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { contactModal, closeContactModal, openContactModal } = useContact();
  const { toast } = useToast();
  const { setIsOpen, setIsMinimized } = useAgentAI();
  const [selectedOption, setSelectedOption] = useState<'main' | 'email-form' | 'call-details' | 'callback-form'>('main');
  // Default date is 24 hours from now
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 1);
  const [callbackDate, setCallbackDate] = useState<Date | undefined>(defaultDate);
  
  // State for autocomplete suggestions
  const [companyOptions, setCompanyOptions] = useState<string[]>([]);
  const [showCompanySuggestions, setShowCompanySuggestions] = useState(false);
  const [savedInfo, setSavedInfo] = useState<SavedContactInfo | null>(null);
  
  // Reset the selection when the modal closes
  useEffect(() => {
    if (!contactModal) {
      // Reset to default view after modal closes
      setTimeout(() => setSelectedOption('main'), 300);
    }
  }, [contactModal]);
  
  // Default time is current time rounded to nearest hour
  const currentHour = new Date().getHours();
  const defaultTime = currentHour < 9 ? "09:00" : 
                     currentHour > 17 ? "09:00" : 
                     `${currentHour < 10 ? '0' + currentHour : currentHour}:00`;
  const [selectedTime, setSelectedTime] = useState<string>(defaultTime);
  // Default timezone based on browser timezone
  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // Map browser timezone to our options (defaulting to IST if no match)
  const getDefaultTimezone = () => {
    if (browserTimezone.includes("Asia/Kolkata")) return "IST";
    if (browserTimezone.includes("Europe/London")) return "BST";
    if (browserTimezone.includes("Europe/Paris") || browserTimezone.includes("Europe/Berlin")) return "CEST";
    if (browserTimezone.includes("America/New_York")) return "EDT";
    if (browserTimezone.includes("America/Chicago")) return "CDT";
    if (browserTimezone.includes("America/Denver")) return "MDT";
    if (browserTimezone.includes("America/Los_Angeles")) return "PDT";
    if (browserTimezone.includes("Asia/Tokyo")) return "JST";
    if (browserTimezone.includes("Australia/Sydney")) return "AEST";
    return "IST"; // Default to IST if no match
  };
  const [selectedTimezone, setSelectedTimezone] = useState<string>(getDefaultTimezone());

  // Add refs for calendar functionality
  const calendarRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  // State to manage calendar popover open state
  const [calendarOpen, setCalendarOpen] = useState(false);
  
  // Function to close the calendar popover
  const closeCalendarPopover = () => {
    setCalendarOpen(false);
    
    // Show a small toast notification to confirm date selection
    if (callbackDate) {
      toast({
        title: "Date selected",
        description: `Selected: ${format(callbackDate, 'PPP')}`,
        variant: "default",
      });
    }
  };

  // Load saved contact info when component mounts
  useEffect(() => {
    const savedContactInfo = getSavedContactInfo();
    if (savedContactInfo) {
      setSavedInfo(savedContactInfo);
    }
  }, []);
  
  // Handle calendar date selection
  const handleCalendarDateSelect = (date: Date | undefined) => {
    setCallbackDate(date);
    
    // Close the calendar after selecting a date
    if (date) {
      setCalendarOpen(false);
    }
  };

  // Form with defaultValues from saved contact info if available
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: savedInfo?.name || '',
      email: savedInfo?.email || '',
      subject: savedInfo?.phone || '',
      message: '',
      company: savedInfo?.company || ''
    }
  });
  
  // Watch form values to update autocomplete
  const companyValue = watch('company');

  // Handle company name autocomplete suggestions
  useEffect(() => {
    if (companyValue && companyValue.length > 2) {
      // Filter company suggestions based on input
      const filteredOptions = commonCompanies.filter(company => 
        company.toLowerCase().includes(companyValue.toLowerCase())
      );
      setCompanyOptions(filteredOptions);
      setShowCompanySuggestions(filteredOptions.length > 0);
    } else {
      setShowCompanySuggestions(false);
    }
  }, [companyValue]);

  // Function to select a company from suggestions
  const selectCompany = (company: string) => {
    setValue('company', company);
    setShowCompanySuggestions(false);
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Save user contact info for future form autocomplete
      const contactInfo: SavedContactInfo = {
        name: data.name,
        email: data.email,
        phone: data.subject || '', // Using subject for phone number
        company: data.company
      };
      saveUserContactInfo(contactInfo);

      // If it's a callback form submission, include the date, time and timezone
      if (selectedOption === 'callback-form') {
        const callbackData = {
          ...data,
          callbackDate: callbackDate,
          callbackTime: selectedTime,
          timezone: selectedTimezone,
          // Change the message to include the callback details
          message: `Callback requested for ${callbackDate ? format(callbackDate, 'PPP') : 'Not specified'} at ${selectedTime} (${selectedTimezone}).\n\nDetails: ${data.message}`
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
      <DialogContent className="sm:max-w-[750px] lg:max-w-[850px] xl:max-w-[900px] p-6">
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
                  autoComplete="name"
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
                  autoComplete="email"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">Company</label>
                <div className="relative">
                  <input 
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your company name"
                    autoComplete="organization"
                    {...register('company')}
                  />
                  {showCompanySuggestions && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {companyOptions.map((company, idx) => (
                        <div 
                          key={idx} 
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => selectCompany(company)}
                        >
                          {company}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
                  autoComplete="name"
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
                  autoComplete="email"
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
                  autoComplete="tel"
                  {...register('subject')}
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-1 font-medium">Company</label>
                <div className="relative">
                  <input 
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your company name"
                    autoComplete="organization"
                    {...register('company')}
                  />
                  {showCompanySuggestions && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {companyOptions.map((company, idx) => (
                        <div 
                          key={idx} 
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => selectCompany(company)}
                        >
                          {company}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Date and Time Selectors in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {/* Date Picker */}
                <div className="space-y-1">
                  <label className="block mb-1 font-medium">Preferred Date</label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={`w-full px-3 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-black ${!callbackDate && 'text-gray-500'} flex items-center h-[40px]`}
                      >
                        <span className="truncate">{callbackDate ? format(callbackDate, 'PPP') : "Select date"}</span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <div ref={calendarRef}>
                        <Calendar
                          mode="single"
                          selected={callbackDate}
                          onSelect={handleCalendarDateSelect}
                          disabled={(date: Date) => 
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                          className="calendar-with-double-click"
                        />
                        <div className="p-2 border-t border-gray-100">
                          <div className="text-xs text-gray-500 text-center">
                            {callbackDate ? `Selected date: ${format(callbackDate, 'PPP')}` : "Select a date"}
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selector */}
                <div className="space-y-1">
                  <label className="block mb-1 font-medium">Preferred Time</label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="w-full px-3 border border-gray-300 rounded-lg h-[40px] flex items-center">
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
              </div>

              {/* Timezone Selector */}
              <div className="space-y-1 mb-4">
                <label className="block mb-1 font-medium">Timezone</label>
                <Select value={selectedTimezone} onValueChange={setSelectedTimezone}>
                  <SelectTrigger className="w-full px-3 border border-gray-300 rounded-lg h-[40px] flex items-center justify-start text-left">
                    <SelectValue placeholder="Select timezone" className="text-left" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className="timezone-select-items">
                      <SelectItem value="IST" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>New Delhi - IST (GMT +5:30)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="BST" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>London - BST (GMT +1:00)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="CEST" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>Paris, Berlin - CEST (GMT +2:00)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="EDT" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>New York - EDT (GMT -4:00)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="CDT" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>Chicago - CDT (GMT -5:00)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="MDT" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>Denver - MDT (GMT -6:00)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="PDT" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>Los Angeles - PDT (GMT -7:00)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="JST" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>Tokyo - JST (GMT +9:00)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="AEST" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>Sydney - AEST (GMT +10:00)</span>
                        </span>
                      </SelectItem>
                      <SelectItem value="GMT" className="timezone-option py-2 px-3">
                        <span className="timezone-content">
                          <span className="check-mark">→</span>
                          <span>London - GMT (GMT +0:00)</span>
                        </span>
                      </SelectItem>
                    </div>
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