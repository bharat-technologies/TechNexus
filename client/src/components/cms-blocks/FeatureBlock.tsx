import React from 'react';

interface FeatureBlockProps {
  title: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  inEditMode?: boolean;
  onEdit?: () => void;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  subtitle,
  content,
  imageUrl,
  inEditMode = false,
  onEdit
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full" data-aos="fade-up">
      {imageUrl && (
        <div className="mb-4 flex justify-center">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-32 w-auto object-contain"
          />
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      {subtitle && (
        <p className="text-gray-600 text-sm mb-2">{subtitle}</p>
      )}
      
      {content && (
        <div 
          className="text-gray-700 flex-grow mt-2"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      
      {inEditMode && onEdit && (
        <button 
          onClick={onEdit} 
          className="mt-4 px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default FeatureBlock;