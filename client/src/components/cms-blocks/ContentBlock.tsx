import { useState, useEffect } from 'react';
import { CMSContent } from '@/hooks/use-cms-content';
import { motion } from 'framer-motion';

interface ContentBlockProps {
  content: CMSContent[];
  isLoading: boolean;
  getContentByType: (type: string) => CMSContent | undefined;
  getAllContentByType: (type: string) => CMSContent[];
  typePrefix: string; // e.g., 'home-content' or 'about-content'
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'white' | 'light' | 'dark' | 'black';
}

/**
 * A reusable content section component for CMS-powered pages
 * Features a heading, text content, and an optional image
 */
const ContentBlock = ({ 
  getContentByType, 
  typePrefix,
  imagePosition = 'right',
  backgroundColor = 'white'
}: ContentBlockProps) => {
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  
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
    
    // Get main content
    const mainContent = getContentByType(`${typePrefix}-content`);
    if (mainContent && mainContent.content) {
      setContent(mainContent.content);
    }
    
    // Get image data
    const imageContent = getContentByType(`${typePrefix}-image`);
    if (imageContent) {
      if (imageContent.imageUrl) {
        setImageUrl(imageContent.imageUrl);
      }
      if (imageContent.content) {
        setImageAlt(imageContent.content);
      }
    }
  }, [getContentByType, typePrefix]);
  
  return (
    <section className={`py-16 md:py-24 ${bgColors[backgroundColor]}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          
          {/* Content side */}
          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${textColors[backgroundColor]}`}>
              {heading}
            </h2>
            
            <h3 className={`text-xl md:text-2xl mb-4 ${secTextColors[backgroundColor]}`}>
              {subheading}
            </h3>
            
            <div 
              className={`prose max-w-none ${secTextColors[backgroundColor]}`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          
          {/* Image side */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: imagePosition === 'left' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={imageAlt || 'Content illustration'}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;