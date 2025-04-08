import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface SimpleHeroBlockProps {
  title: string;
  subtitle?: string;
  content?: string;
  ctaText?: string;
  ctaUrl?: string;
  imageUrl?: string;
  inEditMode?: boolean;
  onEdit?: () => void;
}

const SimpleHeroBlock: React.FC<SimpleHeroBlockProps> = ({
  title,
  subtitle,
  content,
  ctaText = 'Learn More',
  ctaUrl = '#',
  imageUrl = '/assets/hero-image.png',
  inEditMode = false,
  onEdit
}) => {
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
              {title}<br/>
              {subtitle && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {subtitle}
                </motion.span>
              )}
            </motion.h1>
            
            {content && (
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {content}
              </motion.p>
            )}
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link href={ctaUrl}>
                <a className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
                  {ctaText}
                </a>
              </Link>
              
              {inEditMode && onEdit && (
                <button 
                  onClick={onEdit} 
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Edit
                </button>
              )}
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
                src={imageUrl} 
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHeroBlock;