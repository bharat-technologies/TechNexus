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
        <linearGradient id="techGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#00DBDE" />
          <stop offset="100%" stopColor="#FC00FF" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="400" cy="400" r="380" fill="#141414" />
      
      {/* Grid/Network Lines */}
      <g strokeWidth="8" strokeLinecap="round">
        {/* Horizontal Lines */}
        <path d="M200,340 L600,340" stroke="url(#techGradient1)" />
        <path d="M200,460 L600,460" stroke="url(#techGradient2)" />
        
        {/* Vertical Lines */}
        <path d="M280,200 L280,600" stroke="url(#techGradient3)" />
        <path d="M400,200 L400,600" stroke="url(#techGradient1)" />
        <path d="M520,200 L520,600" stroke="url(#techGradient2)" />
        
        {/* Circular Elements */}
        <path d="M250,250 A200,200 0 0,1 550,250" stroke="url(#techGradient1)" fill="none" />
        <path d="M250,550 A200,200 0 0,0 550,550" stroke="url(#techGradient2)" fill="none" />
      </g>
      
      {/* Connection Nodes */}
      <g>
        {/* Outer glow for nodes */}
        <circle cx="280" cy="340" r="22" fill="url(#nodeGlow)" opacity="0.7" />
        <circle cx="280" cy="460" r="22" fill="url(#nodeGlow)" opacity="0.7" />
        <circle cx="400" cy="340" r="22" fill="url(#nodeGlow)" opacity="0.7" />
        <circle cx="400" cy="460" r="22" fill="url(#nodeGlow)" opacity="0.7" />
        <circle cx="520" cy="340" r="22" fill="url(#nodeGlow)" opacity="0.7" />
        <circle cx="520" cy="460" r="22" fill="url(#nodeGlow)" opacity="0.7" />
        
        {/* Nodes */}
        <circle cx="280" cy="340" r="15" fill="#4158D0" />
        <circle cx="280" cy="460" r="15" fill="#C850C0" />
        <circle cx="400" cy="340" r="15" fill="#FFCC70" />
        <circle cx="400" cy="460" r="15" fill="#0093E9" />
        <circle cx="520" cy="340" r="15" fill="#00DBDE" />
        <circle cx="520" cy="460" r="15" fill="#FC00FF" />
      </g>
      
      {/* Animated Pulse Effects */}
      <g>
        <circle cx="400" cy="400" r="70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3">
          <animate attributeName="r" from="70" to="110" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.8" to="0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="400" r="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2">
          <animate attributeName="r" from="100" to="180" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default TechIcon;