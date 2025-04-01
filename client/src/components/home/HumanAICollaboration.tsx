import React from 'react';

interface HumanAICollaborationProps {
  className?: string;
  size?: number;
}

const HumanAICollaboration: React.FC<HumanAICollaborationProps> = ({ className = '', size = 500 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size * 0.75} // Maintain aspect ratio
      viewBox="0 0 1000 750" 
      className={className}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F0F0F" />
          <stop offset="100%" stopColor="#242424" />
        </linearGradient>
        
        <linearGradient id="humanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6A11CB" />
          <stop offset="100%" stopColor="#2575FC" />
        </linearGradient>
        
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF416C" />
          <stop offset="100%" stopColor="#FF4B2B" />
        </linearGradient>
        
        <linearGradient id="techGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4158D0" />
          <stop offset="50%" stopColor="#C850C0" />
          <stop offset="100%" stopColor="#FFCC70" />
        </linearGradient>
        
        <linearGradient id="techGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0093E9" />
          <stop offset="100%" stopColor="#80D0C7" />
        </linearGradient>
        
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F5A0" />
          <stop offset="100%" stopColor="#00D9F5" />
        </linearGradient>
        
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="1000" height="750" fill="url(#bgGradient)" rx="15" />
      
      {/* Digital Grid Lines */}
      <g opacity="0.2" strokeWidth="1">
        {Array.from({ length: 20 }).map((_, i) => (
          <line 
            key={`h-line-${i}`} 
            x1="0" 
            y1={i * 40} 
            x2="1000" 
            y2={i * 40} 
            stroke="white" 
            strokeDasharray="5,5" 
          />
        ))}
        {Array.from({ length: 25 }).map((_, i) => (
          <line 
            key={`v-line-${i}`} 
            x1={i * 40} 
            y1="0" 
            x2={i * 40} 
            y2="750" 
            stroke="white" 
            strokeDasharray="5,5" 
          />
        ))}
      </g>
      
      {/* Central Connection Hub */}
      <circle cx="500" cy="375" r="60" fill="#242424" stroke="white" strokeWidth="2" />
      <circle cx="500" cy="375" r="40" fill="none" stroke="url(#techGradient1)" strokeWidth="3" />
      <circle cx="500" cy="375" r="20" fill="url(#techGradient1)">
        <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Left Side - Human Figure */}
      <g transform="translate(250, 375)">
        {/* Human Silhouette */}
        <circle cx="0" cy="-100" r="50" fill="url(#humanGradient)" />
        <path d="M-30,-60 L-30,60 Q0,100 30,60 L30,-60 Q0,-40 -30,-60 Z" fill="url(#humanGradient)" />
        
        {/* Human to Center Connection */}
        <path d="M50,0 C100,0 150,0 200,0" stroke="url(#techGradient2)" strokeWidth="4" fill="none">
          <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="10s" repeatCount="indefinite" />
        </path>
        
        {/* Interaction points */}
        <circle cx="60" cy="-30" r="10" fill="url(#techGradient2)" />
        <circle cx="60" cy="30" r="10" fill="url(#techGradient2)" />
        <circle cx="150" cy="0" r="8" fill="url(#techGradient2)" opacity="0.8" />
        
        {/* Human Features */}
        <circle cx="-15" cy="-110" r="5" fill="white" />
        <circle cx="15" cy="-110" r="5" fill="white" />
        <path d="M-10,-85 C0,-75 10,-75 20,-85" stroke="white" strokeWidth="2" fill="none" />
      </g>
      
      {/* Right Side - AI Representation */}
      <g transform="translate(750, 375)">
        {/* AI Circuit Board Pattern */}
        <rect x="-60" y="-100" width="120" height="200" rx="10" fill="#242424" stroke="url(#aiGradient)" strokeWidth="3" />
        
        {/* Circuit Lines */}
        <line x1="-40" y1="-80" x2="40" y2="-80" stroke="url(#aiGradient)" strokeWidth="2" />
        <line x1="-40" y1="-40" x2="40" y2="-40" stroke="url(#aiGradient)" strokeWidth="2" />
        <line x1="-40" y1="0" x2="40" y2="0" stroke="url(#aiGradient)" strokeWidth="2" />
        <line x1="-40" y1="40" x2="40" y2="40" stroke="url(#aiGradient)" strokeWidth="2" />
        <line x1="-40" y1="80" x2="40" y2="80" stroke="url(#aiGradient)" strokeWidth="2" />
        
        <line x1="-40" y1="-80" x2="-40" y2="80" stroke="url(#aiGradient)" strokeWidth="2" />
        <line x1="0" y1="-80" x2="0" y2="80" stroke="url(#aiGradient)" strokeWidth="2" />
        <line x1="40" y1="-80" x2="40" y2="80" stroke="url(#aiGradient)" strokeWidth="2" />
        
        {/* Circuit Nodes */}
        <circle cx="-40" cy="-80" r="5" fill="white" />
        <circle cx="0" cy="-80" r="5" fill="white" />
        <circle cx="40" cy="-80" r="5" fill="white" />
        
        <circle cx="-40" cy="-40" r="5" fill="white" />
        <circle cx="0" cy="-40" r="5" fill="white" />
        <circle cx="40" cy="-40" r="5" fill="white" />
        
        <circle cx="-40" cy="0" r="5" fill="white" />
        <circle cx="0" cy="0" r="5" fill="white" />
        <circle cx="40" cy="0" r="5" fill="white" />
        
        <circle cx="-40" cy="40" r="5" fill="white" />
        <circle cx="0" cy="40" r="5" fill="white" />
        <circle cx="40" cy="40" r="5" fill="white" />
        
        <circle cx="-40" cy="80" r="5" fill="white" />
        <circle cx="0" cy="80" r="5" fill="white" />
        <circle cx="40" cy="80" r="5" fill="white" />
        
        {/* AI to Center Connection */}
        <path d="M-80,0 C-130,0 -180,0 -230,0" stroke="url(#aiGradient)" strokeWidth="4" fill="none">
          <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="8s" repeatCount="indefinite" />
        </path>
        
        {/* Interaction points */}
        <circle cx="-90" cy="-30" r="10" fill="url(#aiGradient)" />
        <circle cx="-90" cy="30" r="10" fill="url(#aiGradient)" />
        <circle cx="-150" cy="0" r="8" fill="url(#aiGradient)" opacity="0.8" />
      </g>
      
      {/* Benefit Icons Surrounding */}
      <g>
        {/* Health/Medical */}
        <g transform="translate(300, 150)">
          <circle cx="0" cy="0" r="40" fill="#242424" />
          <path d="M-15,-5 L-5,-5 L-5,-15 L5,-15 L5,-5 L15,-5 L15,5 L5,5 L5,15 L-5,15 L-5,5 L-15,5 Z" 
                fill="url(#greenGradient)" />
          <path d="M0,60 C20,100 60,200 200,225" stroke="url(#greenGradient)" strokeWidth="2" strokeDasharray="5,3" />
        </g>
        
        {/* Education */}
        <g transform="translate(200, 300)">
          <circle cx="0" cy="0" r="40" fill="#242424" />
          <rect x="-20" y="-15" width="40" height="30" fill="url(#humanGradient)" />
          <rect x="-15" y="-25" width="30" height="10" fill="url(#humanGradient)" />
          <path d="M0,60 C20,100 60,140 170,150" stroke="url(#humanGradient)" strokeWidth="2" strokeDasharray="5,3" />
        </g>
        
        {/* Industry/Manufacturing */}
        <g transform="translate(700, 150)">
          <circle cx="0" cy="0" r="40" fill="#242424" />
          <rect x="-20" y="-10" width="10" height="20" fill="url(#aiGradient)" />
          <rect x="-5" y="-20" width="10" height="40" fill="url(#aiGradient)" />
          <rect x="10" y="-15" width="10" height="30" fill="url(#aiGradient)" />
          <path d="M0,60 C-20,100 -60,200 -200,225" stroke="url(#aiGradient)" strokeWidth="2" strokeDasharray="5,3" />
        </g>
        
        {/* Communication */}
        <g transform="translate(800, 300)">
          <circle cx="0" cy="0" r="40" fill="#242424" />
          <path d="M-15,-15 C-15,5 15,5 15,-15 M-15,-5 L15,-5 M-10,5 L-10,15 L10,15 L10,5" 
                fill="none" stroke="url(#techGradient1)" strokeWidth="4" />
          <path d="M0,60 C-20,100 -60,140 -170,150" stroke="url(#techGradient1)" strokeWidth="2" strokeDasharray="5,3" />
        </g>
        
        {/* Security */}
        <g transform="translate(250, 600)">
          <circle cx="0" cy="0" r="40" fill="#242424" />
          <path d="M0,-20 L-20,0 L0,20 L20,0 Z" fill="none" stroke="url(#techGradient2)" strokeWidth="4" />
          <circle cx="0" cy="0" r="10" fill="url(#techGradient2)" />
          <path d="M0,-60 C20,-100 60,-140 170,-150" stroke="url(#techGradient2)" strokeWidth="2" strokeDasharray="5,3" />
        </g>
        
        {/* Environment */}
        <g transform="translate(750, 600)">
          <circle cx="0" cy="0" r="40" fill="#242424" />
          <path d="M0,-20 C-10,-20 -20,-10 -20,0 C-20,10 -10,20 0,20 C10,20 20,10 20,0 C20,-10 10,-20 0,-20" 
                fill="none" stroke="url(#greenGradient)" strokeWidth="4" />
          <path d="M-10,0 L10,0 M0,-10 L0,10" stroke="url(#greenGradient)" strokeWidth="4" />
          <path d="M0,-60 C-20,-100 -60,-140 -170,-150" stroke="url(#greenGradient)" strokeWidth="2" strokeDasharray="5,3" />
        </g>
      </g>
      
      {/* Animated Elements */}
      <g>
        {/* Pulsing Rays from Center */}
        <circle cx="500" cy="375" r="80" fill="none" stroke="white" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" from="80" to="120" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="375" r="100" fill="none" stroke="white" strokeWidth="1" opacity="0.2">
          <animate attributeName="r" from="100" to="150" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.2" to="0" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Floating Data Points */}
        {Array.from({ length: 15 }).map((_, i) => {
          const angle = i * 24;
          const radius = 180 + (i % 3) * 30;
          const cx = 500 + radius * Math.cos(angle * Math.PI / 180);
          const cy = 375 + radius * Math.sin(angle * Math.PI / 180);
          const size = 3 + Math.random() * 4;
          
          return (
            <circle key={`data-point-${i}`} cx={cx} cy={cy} r={size} fill="white" opacity="0.7">
              <animate 
                attributeName="opacity" 
                values="0.7;0.2;0.7" 
                dur={`${2 + Math.random() * 3}s`} 
                repeatCount="indefinite" 
              />
            </circle>
          );
        })}
      </g>
      
      {/* Text Labels */}
      <g>
        <text x="500" y="50" fontSize="30" fontWeight="bold" fill="white" textAnchor="middle">
          Human-AI Collaboration
        </text>
        <text x="500" y="85" fontSize="18" fill="#cccccc" textAnchor="middle">
          Enhancing human potential through technology
        </text>
        
        <text x="250" y="240" fontSize="16" fill="white" textAnchor="middle">Healthcare</text>
        <text x="200" y="390" fontSize="16" fill="white" textAnchor="middle">Education</text>
        <text x="700" y="240" fontSize="16" fill="white" textAnchor="middle">Industry</text>
        <text x="800" y="390" fontSize="16" fill="white" textAnchor="middle">Communication</text>
        <text x="250" y="690" fontSize="16" fill="white" textAnchor="middle">Security</text>
        <text x="750" y="690" fontSize="16" fill="white" textAnchor="middle">Environment</text>
        
        <text x="250" y="440" fontSize="18" fill="white" textAnchor="middle">Human</text>
        <text x="750" y="440" fontSize="18" fill="white" textAnchor="middle">AI</text>
      </g>
    </svg>
  );
};

export default HumanAICollaboration;