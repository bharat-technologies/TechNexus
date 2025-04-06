import { useState, useEffect } from 'react';
import { CMSContent } from '@/hooks/use-cms-content';
import { motion } from 'framer-motion';

interface ValuesBlockProps {
  content: CMSContent[];
  isLoading: boolean;
  getContentByType: (type: string) => CMSContent | undefined;
  getAllContentByType: (type: string) => CMSContent[];
  typePrefix: string; // e.g., 'values' or 'about-values'
  layout?: 'grid' | 'list';
  backgroundColor?: 'white' | 'light' | 'dark' | 'black';
}

/**
 * A reusable values section component for CMS-powered pages
 * This component displays company values with optional icons
 */
const ValuesBlock = ({ 
  getContentByType,
  getAllContentByType,
  typePrefix,
  layout = 'grid',
  backgroundColor = 'white'
}: ValuesBlockProps) => {
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [description, setDescription] = useState('');
  const [values, setValues] = useState<CMSContent[]>([]);
  
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
    
    // Get values
    const valueItems = getAllContentByType(`${typePrefix}-item`);
    if (valueItems.length > 0) {
      setValues(valueItems);
    }
  }, [getContentByType, getAllContentByType, typePrefix]);
  
  return (
    <section className={`py-16 md:py-24 ${bgColors[backgroundColor]}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${textColors[backgroundColor]}`}>
            {heading}
          </h2>
          
          {subheading && (
            <h3 className={`text-xl md:text-2xl mb-4 ${secTextColors[backgroundColor]}`}>
              {subheading}
            </h3>
          )}
          
          {description && (
            <p className={`max-w-3xl mx-auto ${secTextColors[backgroundColor]}`}>
              {description}
            </p>
          )}
        </div>
        
        {/* Grid layout */}
        {layout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.id}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <div className={`text-center mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full ${backgroundColor === 'white' || backgroundColor === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
                  {/* Icon would be rendered here based on the value type */}
                  <span className={`text-2xl ${textColors[backgroundColor]}`}>
                    {value.name.substring(0, 1)}
                  </span>
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${textColors[backgroundColor]}`}>
                  {value.title}
                </h3>
                
                <p className={secTextColors[backgroundColor]}>
                  {value.content}
                </p>
              </motion.div>
            ))}
          </div>
        )}
        
        {/* List layout */}
        {layout === 'list' && (
          <div className="max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div 
                key={value.id}
                className={`flex items-start py-8 ${index !== values.length - 1 ? 'border-b border-gray-200' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <div className={`flex-shrink-0 w-12 h-12 mr-6 flex items-center justify-center rounded-full ${backgroundColor === 'white' || backgroundColor === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
                  {/* Icon would be rendered here based on the value type */}
                  <span className={`text-xl ${textColors[backgroundColor]}`}>
                    {value.name.substring(0, 1)}
                  </span>
                </div>
                
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${textColors[backgroundColor]}`}>
                    {value.title}
                  </h3>
                  
                  <p className={secTextColors[backgroundColor]}>
                    {value.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ValuesBlock;