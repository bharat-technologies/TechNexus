import { useState, useEffect } from 'react';
import { CMSContent } from '@/hooks/use-cms-content';
import { motion } from 'framer-motion';

interface FeaturesBlockProps {
  content: CMSContent[];
  isLoading: boolean;
  getContentByType: (type: string) => CMSContent | undefined;
  getAllContentByType: (type: string) => CMSContent[];
  typePrefix: string; // e.g., 'home-features' or 'ai-features'
  backgroundColor?: 'white' | 'light' | 'dark' | 'black';
}

/**
 * A reusable features section component for CMS-powered pages
 */
const FeaturesBlock = ({ 
  getAllContentByType, 
  getContentByType,
  typePrefix,
  backgroundColor = 'white'
}: FeaturesBlockProps) => {
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState<CMSContent[]>([]);
  
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
    if (descriptionContent) {
      setDescription(descriptionContent.content || '');
    }
    
    // Get features
    const featureItems = getAllContentByType(`${typePrefix}-item`);
    if (featureItems.length > 0) {
      setFeatures(featureItems);
    }
  }, [getContentByType, getAllContentByType, typePrefix]);
  
  return (
    <section className={`py-16 md:py-24 ${bgColors[backgroundColor]}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${textColors[backgroundColor]}`}>{heading}</h2>
          <h3 className={`text-xl md:text-2xl mb-4 ${secTextColors[backgroundColor]}`}>{subheading}</h3>
          <p className={`max-w-3xl mx-auto ${secTextColors[backgroundColor]}`}>{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className={`p-6 border ${backgroundColor === 'dark' || backgroundColor === 'black' ? 'border-gray-700' : 'border-gray-200'} rounded-lg transition-all hover:shadow-lg ${backgroundColor === 'dark' || backgroundColor === 'black' ? 'bg-gray-800' : 'bg-white'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className={`mb-4 ${textColors[backgroundColor]}`}>
                {/* Here we would render an icon based on feature content */}
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill={backgroundColor === 'dark' || backgroundColor === 'black' ? '#333' : '#f0f0f0'} />
                  <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${textColors[backgroundColor]}`}>{feature.title}</h3>
              <p className={secTextColors[backgroundColor]}>{feature.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlock;