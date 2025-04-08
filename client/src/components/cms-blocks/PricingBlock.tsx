import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Link } from 'wouter';

interface PricingBlockProps {
  title: string;
  subtitle?: string;
  content?: string;
  ctaText?: string;
  ctaUrl?: string;
  featured?: boolean;
  inEditMode?: boolean;
  onEdit?: () => void;
}

const PricingBlock: React.FC<PricingBlockProps> = ({
  title,
  subtitle,
  content,
  ctaText = 'Get Started',
  ctaUrl = '#',
  featured = false,
  inEditMode = false,
  onEdit
}) => {
  // Process content to split into bullet points if it contains <li> tags
  const hasListItems = content && content.includes('<li>');
  
  return (
    <div 
      className={`
        rounded-xl shadow-lg p-8 flex flex-col h-full
        ${featured ? 'border-2 border-black transform scale-105 relative z-10' : 'border border-gray-200'}
      `}
      data-aos="fade-up"
    >
      {featured && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white py-1 px-4 rounded-full text-sm font-medium">
          Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      
      {subtitle && (
        <div className="text-3xl font-bold mb-4">{subtitle}</div>
      )}
      
      <div className="mt-4 mb-6 flex-grow">
        {hasListItems ? (
          <ul className="space-y-3">
            {content?.split('<li>').slice(1).map((item, idx) => {
              const cleanItem = item.replace('</li>', '');
              return (
                <li key={idx} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: cleanItem }} />
                </li>
              );
            })}
          </ul>
        ) : (
          <div 
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: content || '' }}
          />
        )}
      </div>
      
      <div className="mt-auto pt-4">
        <Link href={ctaUrl}>
          <a className={`block w-full py-3 px-4 text-center rounded-lg font-medium transition-colors duration-200 ${featured ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
            {ctaText}
          </a>
        </Link>
        
        {inEditMode && onEdit && (
          <button 
            onClick={onEdit} 
            className="w-full mt-3 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg text-center hover:bg-gray-50 transition-colors"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default PricingBlock;