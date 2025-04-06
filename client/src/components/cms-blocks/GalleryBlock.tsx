import { useState, useEffect, useRef } from 'react';
import { CMSContent } from '@/hooks/use-cms-content';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface GalleryBlockProps {
  content: CMSContent[];
  isLoading: boolean;
  getContentByType: (type: string) => CMSContent | undefined;
  getAllContentByType: (type: string) => CMSContent[];
  typePrefix: string; // e.g., 'products-gallery' or 'team-gallery'
  itemsPerView?: number;
  backgroundColor?: 'white' | 'light' | 'dark' | 'black';
}

/**
 * A reusable gallery/carousel section component for CMS-powered pages
 */
const GalleryBlock = ({ 
  getAllContentByType, 
  getContentByType,
  typePrefix,
  itemsPerView = 3,
  backgroundColor = 'white'
}: GalleryBlockProps) => {
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState<CMSContent[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  
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
    
    // Get description
    const descriptionContent = getContentByType(`${typePrefix}-description`);
    if (descriptionContent && descriptionContent.content) {
      setDescription(descriptionContent.content);
    }
    
    // Get gallery items
    const galleryItems = getAllContentByType(`${typePrefix}-item`);
    if (galleryItems.length > 0) {
      setItems(galleryItems);
    }
  }, [getContentByType, getAllContentByType, typePrefix]);
  
  // Handlers for navigation
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  return (
    <section className={`py-16 md:py-24 ${bgColors[backgroundColor]}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${textColors[backgroundColor]}`}>
            {heading}
          </h2>
          
          <h3 className={`text-xl md:text-2xl mb-4 ${secTextColors[backgroundColor]}`}>
            {subheading}
          </h3>
          
          <p className={`max-w-3xl mx-auto ${secTextColors[backgroundColor]}`}>
            {description}
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full ${bgColors[backgroundColor] === 'bg-white' ? 'bg-gray-100' : 'bg-gray-800'} opacity-80 hover:opacity-100 transition-opacity`}
            aria-label="Scroll left"
          >
            <ArrowLeft className={textColors[backgroundColor]} />
          </button>
          
          <button 
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full ${bgColors[backgroundColor] === 'bg-white' ? 'bg-gray-100' : 'bg-gray-800'} opacity-80 hover:opacity-100 transition-opacity`}
            aria-label="Scroll right"
          >
            <ArrowRight className={textColors[backgroundColor]} />
          </button>
          
          {/* Horizontal scrollable container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`flex-none w-full md:w-1/2 lg:w-1/${itemsPerView} snap-start ${textColors[backgroundColor]}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={50 * index}
              >
                <div className="h-full border border-gray-200 rounded-lg overflow-hidden">
                  {item.imageUrl && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 h-[180px]">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className={`${secTextColors[backgroundColor]} line-clamp-4`}>
                      {item.content}
                    </p>
                  </div>
                  
                  {item.ctaText && item.ctaUrl && (
                    <div className="px-6 pb-4">
                      <a 
                        href={item.ctaUrl}
                        className={`inline-block px-4 py-2 border border-current rounded ${textColors[backgroundColor]} hover:bg-gray-100 hover:text-black transition-colors`}
                      >
                        {item.ctaText}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom styles for hiding scrollbar */}
    </section>
  );
};

export default GalleryBlock;