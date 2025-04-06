import { useState, useEffect, useRef } from 'react';
import { CMSContent } from '@/hooks/use-cms-content';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsBlockProps {
  content: CMSContent[];
  isLoading: boolean;
  getContentByType: (type: string) => CMSContent | undefined;
  getAllContentByType: (type: string) => CMSContent[];
  typePrefix: string; // e.g., 'home-testimonials' or 'client-testimonials'
  backgroundColor?: 'white' | 'light' | 'dark' | 'black';
}

/**
 * A reusable testimonials carousel component for CMS-powered pages
 */
const TestimonialsBlock = ({ 
  getAllContentByType, 
  getContentByType,
  typePrefix,
  backgroundColor = 'light'
}: TestimonialsBlockProps) => {
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [testimonials, setTestimonials] = useState<CMSContent[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Define background and text colors based on background type
  const bgColors = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900',
    black: 'bg-black'
  };
  
  const textColors = {
    white: 'text-black',
    light: 'text-black',
    dark: 'text-white',
    black: 'text-white'
  };
  
  const secTextColors = {
    white: 'text-gray-600',
    light: 'text-gray-600',
    dark: 'text-gray-300',
    black: 'text-gray-300'
  };
  
  // Get content when available
  useEffect(() => {
    // Get heading
    const headingContent = getContentByType(`${typePrefix}-heading`);
    if (headingContent) {
      setHeading(headingContent.title);
    }
    
    // Get subheading
    const subheadingContent = getContentByType(`${typePrefix}-subheading`);
    if (subheadingContent) {
      setSubheading(subheadingContent.title);
    }
    
    // Get testimonials
    const testimonialItems = getAllContentByType(`${typePrefix}-item`);
    if (testimonialItems.length > 0) {
      setTestimonials(testimonialItems);
    }
  }, [getContentByType, getAllContentByType, typePrefix]);
  
  // Auto-rotation effect
  useEffect(() => {
    if (testimonials.length > 1) {
      // Start auto-rotation
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }, 8000); // Rotate every 8 seconds
      
      // Cleanup
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [testimonials]);
  
  // Navigation handlers
  const goToPrev = () => {
    // Reset rotation timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }, 8000);
    }
    
    setActiveIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const goToNext = () => {
    // Reset rotation timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }, 8000);
    }
    
    setActiveIndex(prev => 
      (prev + 1) % testimonials.length
    );
  };
  
  // If no testimonials, render nothing
  if (testimonials.length === 0) {
    return null;
  }
  
  return (
    <section className={`py-16 md:py-24 ${bgColors[backgroundColor]}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${textColors[backgroundColor]}`}>
            {heading}
          </h2>
          
          <h3 className={`text-xl md:text-2xl ${secTextColors[backgroundColor]}`}>
            {subheading}
          </h3>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          {testimonials.length > 1 && (
            <>
              <button 
                onClick={goToPrev}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full ${bgColors[backgroundColor] === 'bg-white' || bgColors[backgroundColor] === 'bg-gray-50' ? 'bg-gray-200' : 'bg-gray-800'} opacity-80 hover:opacity-100 transition-opacity`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className={textColors[backgroundColor]} />
              </button>
              
              <button 
                onClick={goToNext}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full ${bgColors[backgroundColor] === 'bg-white' || bgColors[backgroundColor] === 'bg-gray-50' ? 'bg-gray-200' : 'bg-gray-800'} opacity-80 hover:opacity-100 transition-opacity`}
                aria-label="Next testimonial"
              >
                <ChevronRight className={textColors[backgroundColor]} />
              </button>
            </>
          )}
          
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-10">
                  <div className="flex flex-col items-center text-center">
                    <Quote 
                      className={`w-10 h-10 mb-6 ${secTextColors[backgroundColor]} opacity-50`} 
                    />
                    
                    <p className={`text-xl md:text-2xl italic mb-8 ${textColors[backgroundColor]}`}>
                      {testimonial.content}
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      {testimonial.imageUrl && (
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.imageUrl} 
                            alt={testimonial.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="text-left">
                        <h4 className={`font-semibold ${textColors[backgroundColor]}`}>
                          {testimonial.title}
                        </h4>
                        
                        {/* subtitle could be company name or job title */}
                        {testimonial.subtitle && (
                          <p className={secTextColors[backgroundColor]}>
                            {testimonial.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full transition-colors ${index === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBlock;