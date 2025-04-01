import React from 'react';

interface TechIconProps {
  className?: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ className = '', size = 300 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 800 800" 
      className={className}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="techGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4158D0" />
          <stop offset="50%" stopColor="#C850C0" />
          <stop offset="100%" stopColor="#FFCC70" />
        </linearGradient>
        <linearGradient id="techGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0093E9" />
          <stop offset="100%" stopColor="#80D0C7" />
        </linearGradient>
        <linearGradient id="humanGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#6a11cb" />
          <stop offset="100%" stopColor="#2575fc" />
        </linearGradient>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF416C" />
          <stop offset="100%" stopColor="#FF4B2B" />
        </linearGradient>
        <radialGradient id="glowEffect" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Circle */}
      <circle cx="400" cy="400" r="380" fill="#141414" />
      
      {/* Animated Pulse Effects */}
      <g>
        <circle cx="400" cy="400" r="250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2">
          <animate attributeName="r" from="250" to="300" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Digital Circuit Background */}
      <g opacity="0.7">
        <path d="M200,180 L600,180" stroke="url(#circuitGradient)" strokeWidth="3" strokeDasharray="15,10" />
        <path d="M200,620 L600,620" stroke="url(#circuitGradient)" strokeWidth="3" strokeDasharray="15,10" />
        <path d="M200,180 L200,620" stroke="url(#circuitGradient)" strokeWidth="3" strokeDasharray="15,10" />
        <path d="M600,180 L600,620" stroke="url(#circuitGradient)" strokeWidth="3" strokeDasharray="15,10" />
        <circle cx="200" cy="180" r="10" fill="#FF416C" />
        <circle cx="600" cy="180" r="10" fill="#FF416C" />
        <circle cx="200" cy="620" r="10" fill="#FF416C" />
        <circle cx="600" cy="620" r="10" fill="#FF416C" />
      </g>
      
      {/* Human Silhouette */}
      <g filter="url(#shadow)">
        {/* Head */}
        <circle cx="400" cy="300" r="100" fill="url(#humanGradient)" />
        
        {/* Body */}
        <path d="M320,380 L320,500 Q400,540 480,500 L480,380 Q400,420 320,380 Z" fill="url(#humanGradient)" />
        
        {/* Brain Circuits */}
        <path d="M350,270 L450,270" stroke="white" strokeWidth="3" opacity="0.8" />
        <path d="M350,300 L450,300" stroke="white" strokeWidth="3" opacity="0.8" />
        <path d="M350,330 L450,330" stroke="white" strokeWidth="3" opacity="0.8" />
        <circle cx="350" cy="270" r="5" fill="#FFCC70" />
        <circle cx="450" cy="270" r="5" fill="#FFCC70" />
        <circle cx="350" cy="300" r="5" fill="#FFCC70" />
        <circle cx="450" cy="300" r="5" fill="#FFCC70" />
        <circle cx="350" cy="330" r="5" fill="#FFCC70" />
        <circle cx="450" cy="330" r="5" fill="#FFCC70" />
        
        {/* Digital Connection Lines */}
        <path d="M250,500 C300,540 500,540 550,500" stroke="url(#techGradient1)" strokeWidth="4" fill="none" />
        <path d="M250,530 C300,570 500,570 550,530" stroke="url(#techGradient2)" strokeWidth="4" fill="none" />
        
        {/* Digital Nodes */}
        <circle cx="250" cy="500" r="10" fill="#4158D0" />
        <circle cx="550" cy="500" r="10" fill="#C850C0" />
        <circle cx="250" cy="530" r="10" fill="#00DBDE" />
        <circle cx="550" cy="530" r="10" fill="#FC00FF" />
        
        {/* Light Beams */}
        <g opacity="0.6">
          <path d="M300,250 L250,200" stroke="#80D0C7" strokeWidth="2" />
          <path d="M340,220 L300,150" stroke="#80D0C7" strokeWidth="2" />
          <path d="M400,200 L400,130" stroke="#80D0C7" strokeWidth="2" />
          <path d="M460,220 L500,150" stroke="#80D0C7" strokeWidth="2" />
          <path d="M500,250 L550,200" stroke="#80D0C7" strokeWidth="2" />
          
          <circle cx="250" cy="200" r="6" fill="#80D0C7" />
          <circle cx="300" cy="150" r="6" fill="#80D0C7" />
          <circle cx="400" cy="130" r="6" fill="#80D0C7" />
          <circle cx="500" cy="150" r="6" fill="#80D0C7" />
          <circle cx="550" cy="200" r="6" fill="#80D0C7" />
        </g>
        
        {/* AI Core in the center of the head */}
        <circle cx="400" cy="300" r="30" fill="#141414" />
        <path d="M380,280 L420,280 L420,320 L380,320 Z" fill="none" stroke="url(#techGradient1)" strokeWidth="3" />
        <circle cx="400" cy="300" r="15" fill="url(#techGradient1)">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default TechIcon;