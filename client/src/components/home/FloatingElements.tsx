import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating gear */}
      <motion.div 
        className="absolute top-[10%] left-[5%] text-blue-400 opacity-40"
        animate={{ 
          rotate: 360,
          y: [0, 10, 0]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,1L8.6,8.8L1,9.2L7.9,14.8L5.9,22.6L12,18L18.1,22.6L16.1,14.8L23,9.2L15.4,8.8L12,1Z" />
        </svg>
      </motion.div>
      
      {/* Floating data nodes */}
      <motion.div 
        className="absolute top-[30%] right-[8%] w-3 h-3 rounded-full bg-purple-500 opacity-60"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -15, 0]
        }}
        transition={{ 
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
          y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-cyan-500 opacity-70"
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, 20, 0]
        }}
        transition={{ 
          scale: { duration: 3, repeat: Infinity, repeatType: "reverse" },
          x: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      />
      
      {/* Floating code brackets */}
      <motion.div 
        className="absolute bottom-[15%] right-[20%] text-green-400 opacity-40"
        animate={{ 
          rotate: [-10, 10, -10],
          x: [0, -10, 0]
        }}
        transition={{ 
          rotate: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          x: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" />
        </svg>
      </motion.div>
      
      {/* Connections */}
      <motion.div 
        className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0"
        animate={{ 
          opacity: [0, 0.3, 0],
          scaleY: [1, 1.5, 1],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute right-0 top-1/3 w-[1px] h-1/3 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-0"
        animate={{ 
          opacity: [0, 0.3, 0],
          scaleX: [1, 1.5, 1],
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      {/* Binary code particle */}
      <motion.div 
        className="absolute top-[45%] right-[30%] text-xs font-mono text-cyan-500 opacity-50"
        animate={{ 
          y: [0, 30],
          opacity: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        10101
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[40%] left-[25%] text-xs font-mono text-green-500 opacity-50"
        animate={{ 
          y: [0, -20],
          opacity: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: 1.5
        }}
      >
        01011
      </motion.div>
    </div>
  );
};

export default FloatingElements;