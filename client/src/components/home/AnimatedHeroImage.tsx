import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeroImageProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

const AnimatedHeroImage: React.FC<AnimatedHeroImageProps> = ({
  imageSrc,
  altText,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initial animation when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background pulse */}
      <motion.div 
        className="absolute inset-0 bg-blue-100 rounded-lg z-0"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ 
          scale: isLoaded ? 1 : 0.95, 
          opacity: isLoaded ? 0.7 : 0,
        }}
        transition={{ duration: 1 }}
      />
      
      {/* Circuit pattern overlay */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-0 pointer-events-none"
        animate={{ 
          opacity: isHovered ? 0.2 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="circuit-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0,5 L10,5 M5,0 L5,10" stroke="#2962A0" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </motion.div>
      
      {/* Main image with animations */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: isLoaded ? 0 : 20, 
          opacity: isLoaded ? 1 : 0,
          scale: isHovered ? 1.03 : 1
        }}
        transition={{ 
          duration: 0.5,
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 20
          } 
        }}
        className="relative z-20"
      >
        <img 
          src={imageSrc} 
          alt={altText} 
          className="w-full h-auto rounded"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
      
      {/* Hover effects - pulsing dots */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-500 z-30"
        animate={{ 
          scale: isHovered ? [1, 1.5, 1] : 1,
          opacity: isHovered ? [0.7, 1, 0.7] : 0.7
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-500 z-30"
        animate={{ 
          scale: isHovered ? [1, 1.3, 1] : 1,
          opacity: isHovered ? [0.6, 0.9, 0.6] : 0.6
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.3
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-cyan-500 z-30"
        animate={{ 
          scale: isHovered ? [1, 1.4, 1] : 1,
          opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5
        }}
        transition={{ 
          duration: 1.8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.6
        }}
      />
      
      {/* Special hover effect for handshake */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 z-10"
        animate={{ 
          scale: isHovered ? 1.2 : 0,
          opacity: isHovered ? 0.15 : 0
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Interactive tooltip */}
      <motion.div
        className="absolute bottom-4 right-4 bg-white text-black text-xs px-2 py-1 rounded shadow-lg z-40"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10
        }}
        transition={{ duration: 0.3 }}
      >
        Human + AI Collaboration
      </motion.div>
    </div>
  );
};

export default AnimatedHeroImage;