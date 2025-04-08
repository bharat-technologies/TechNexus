import React from 'react';

interface SimpleContentBlockProps {
  title: string;
  content: string;
  imageUrl?: string;
  reverse?: boolean;
  inEditMode?: boolean;
  onEdit?: () => void;
}

const SimpleContentBlock: React.FC<SimpleContentBlockProps> = ({
  title,
  content,
  imageUrl,
  reverse = false,
  inEditMode = false,
  onEdit
}) => {
  return (
    <div className="py-12">
      <div className={`container mx-auto px-4 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
        <div className="md:w-1/2" data-aos={reverse ? "fade-left" : "fade-right"}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          )}
        </div>
        
        <div className="md:w-1/2" data-aos={reverse ? "fade-right" : "fade-left"}>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div 
            className="prose lg:prose-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          {inEditMode && onEdit && (
            <button 
              onClick={onEdit} 
              className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleContentBlock;