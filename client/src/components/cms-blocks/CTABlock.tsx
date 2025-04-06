import { useState, useEffect } from 'react';
import { CMSContent } from '@/hooks/use-cms-content';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface CTABlockProps {
  content: CMSContent[];
  isLoading: boolean;
  getContentByType: (type: string) => CMSContent | undefined;
  getAllContentByType: (type: string) => CMSContent[];
  typePrefix: string; // e.g., 'home-cta' or 'about-cta'
  style?: 'centered' | 'split' | 'minimal';
  backgroundColor?: 'white' | 'light' | 'dark' | 'black';
}

/**
 * A reusable call-to-action section component for CMS-powered pages
 */
const CTABlock = ({ 
  getContentByType, 
  typePrefix,
  style = 'centered',
  backgroundColor = 'black'
}: CTABlockProps) => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [primaryButtonText, setPrimaryButtonText] = useState('');
  const [primaryButtonUrl, setPrimaryButtonUrl] = useState('');
  const [secondaryButtonText, setSecondaryButtonText] = useState('');
  const [secondaryButtonUrl, setSecondaryButtonUrl] = useState('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
  
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
  
  // Get content when available
  useEffect(() => {
    // Get heading
    const headingContent = getContentByType(`${typePrefix}-heading`);
    if (headingContent) {
      setHeading(headingContent.title);
    }
    
    // Get description
    const descriptionContent = getContentByType(`${typePrefix}-description`);
    if (descriptionContent && descriptionContent.content) {
      setDescription(descriptionContent.content);
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
    
    // Get background image
    const backgroundImageContent = getContentByType(`${typePrefix}-background`);
    if (backgroundImageContent && backgroundImageContent.imageUrl) {
      setBackgroundImageUrl(backgroundImageContent.imageUrl);
    }
  }, [getContentByType, typePrefix]);
  
  // Render based on selected style
  if (style === 'centered') {
    return (
      <section 
        className={`${bgColors[backgroundColor]} py-16 md:py-24 relative overflow-hidden`}
        style={backgroundImageUrl ? {
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${textColors[backgroundColor]}`}>
              {heading}
            </h2>
            
            <p className={`text-lg md:text-xl mb-8 ${textColors[backgroundColor]} opacity-90`}>
              {description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {primaryButtonText && (
                <Link href={primaryButtonUrl || '#'}>
                  <a className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                    {primaryButtonText}
                  </a>
                </Link>
              )}
              
              {secondaryButtonText && (
                <Link href={secondaryButtonUrl || '#'}>
                  <a className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300">
                    {secondaryButtonText}
                  </a>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  
  if (style === 'split') {
    return (
      <section className={`${bgColors[backgroundColor]} py-16 md:py-0 relative overflow-hidden`}>
        <div className="md:flex items-stretch">
          {/* Content side */}
          <div className="md:w-1/2 py-12 md:py-24 px-4 md:px-12 lg:px-20 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              data-aos="fade-right"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textColors[backgroundColor]}`}>
                {heading}
              </h2>
              
              <p className={`text-lg mb-8 ${textColors[backgroundColor]} opacity-90`}>
                {description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {primaryButtonText && (
                  <Link href={primaryButtonUrl || '#'}>
                    <a className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                      {primaryButtonText}
                    </a>
                  </Link>
                )}
                
                {secondaryButtonText && (
                  <Link href={secondaryButtonUrl || '#'}>
                    <a className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300">
                      {secondaryButtonText}
                    </a>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Image side */}
          <div 
            className="md:w-1/2 min-h-[300px] md:min-h-full"
            style={{
              backgroundImage: `url(${backgroundImageUrl || '/assets/default-cta-image.jpg'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </section>
    );
  }
  
  // Minimal style (default fallback)
  return (
    <section className={`${bgColors[backgroundColor]} py-10 md:py-12`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between" data-aos="fade-up">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className={`text-2xl md:text-3xl font-bold ${textColors[backgroundColor]}`}>
              {heading}
            </h2>
            
            {description && (
              <p className={`mt-2 ${textColors[backgroundColor]} opacity-90`}>
                {description}
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && (
              <Link href={primaryButtonUrl || '#'}>
                <a className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                  {primaryButtonText}
                </a>
              </Link>
            )}
            
            {secondaryButtonText && (
              <Link href={secondaryButtonUrl || '#'}>
                <a className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300">
                  {secondaryButtonText}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;