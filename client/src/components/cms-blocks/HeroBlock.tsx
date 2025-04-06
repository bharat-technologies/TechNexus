import { useState, useEffect } from 'react';
import { CMSContent } from '@/hooks/use-cms-content';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface HeroBlockProps {
  content: CMSContent[];
  isLoading: boolean;
  getContentByType: (type: string) => CMSContent | undefined;
  getAllContentByType: (type: string) => CMSContent[];
  typePrefix: string; // e.g., 'home-hero' or 'about-hero'
}

/**
 * A reusable hero section component for CMS-powered pages
 */
const HeroBlock = ({ 
  getContentByType, 
  typePrefix 
}: HeroBlockProps) => {
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [description, setDescription] = useState('');
  const [primaryButtonText, setPrimaryButtonText] = useState('Learn More');
  const [primaryButtonUrl, setPrimaryButtonUrl] = useState('/about-us');
  const [secondaryButtonText, setSecondaryButtonText] = useState('Get Started');
  const [secondaryButtonUrl, setSecondaryButtonUrl] = useState('/#contact');
  const [heroImageAlt, setHeroImageAlt] = useState('Bharat Technologies hero image');
  
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
    if (descriptionContent) {
      setDescription(descriptionContent.content || '');
    }
    
    // Get primary button
    const primaryButtonContent = getContentByType(`${typePrefix}-primary-button`);
    if (primaryButtonContent) {
      setPrimaryButtonText(primaryButtonContent.title);
      if (primaryButtonContent.ctaUrl) {
        setPrimaryButtonUrl(primaryButtonContent.ctaUrl);
      }
    }
    
    // Get secondary button
    const secondaryButtonContent = getContentByType(`${typePrefix}-secondary-button`);
    if (secondaryButtonContent) {
      setSecondaryButtonText(secondaryButtonContent.title);
      if (secondaryButtonContent.ctaUrl) {
        setSecondaryButtonUrl(secondaryButtonContent.ctaUrl);
      }
    }
    
    // Get image alt text
    const imageContent = getContentByType(`${typePrefix}-image`);
    if (imageContent && imageContent.content) {
      setHeroImageAlt(imageContent.content);
    }
  }, [getContentByType, typePrefix]);
  
  return (
    <div className="bg-black text-white relative overflow-hidden py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-up">
            <motion.h1 
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {heading}<br/>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {subheading}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link href={primaryButtonUrl}>
                <a className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                  {primaryButtonText}
                </a>
              </Link>
              <Link href={secondaryButtonUrl}>
                <a className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300">
                  {secondaryButtonText}
                </a>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-full max-w-lg relative">
              <img 
                src="/assets/hero-image.png" 
                alt={heroImageAlt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;