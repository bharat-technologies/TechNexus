import React from 'react';

const PrecisionFarmingIllustration = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 600 400"
      className="rounded-lg overflow-hidden"
    >
      {/* Ghibli-inspired sky background with soft gradients */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a6d8ff" />
          <stop offset="100%" stopColor="#e6f7ff" />
        </linearGradient>
        <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b5e48c" />
          <stop offset="100%" stopColor="#76c893" />
        </linearGradient>
        <linearGradient id="fieldGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#99d98c" />
          <stop offset="100%" stopColor="#52b69a" />
        </linearGradient>
        <linearGradient id="fieldGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#76c893" />
          <stop offset="100%" stopColor="#168aad" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ffdd00" />
          <stop offset="100%" stopColor="#ffaa00" stopOpacity="0.6" />
        </radialGradient>
      </defs>
      
      {/* Background with Ghibli-style sky and fields */}
      <rect width="600" height="200" fill="url(#skyGradient)" />
      <rect y="200" width="600" height="200" fill="#84a98c" />

      {/* Fluffy clouds */}
      <g opacity="0.9">
        <ellipse cx="100" cy="80" rx="50" ry="25" fill="white" />
        <ellipse cx="80" cy="70" rx="30" ry="20" fill="white" />
        <ellipse cx="120" cy="65" rx="35" ry="25" fill="white" />
        <ellipse cx="140" cy="75" rx="40" ry="22" fill="white" />
      </g>
      
      <g opacity="0.7">
        <ellipse cx="400" cy="100" rx="60" ry="20" fill="white" />
        <ellipse cx="380" cy="90" rx="35" ry="25" fill="white" />
        <ellipse cx="420" cy="85" rx="40" ry="20" fill="white" />
        <ellipse cx="450" cy="95" rx="35" ry="18" fill="white" />
      </g>
      
      {/* Sun */}
      <circle cx="500" cy="70" r="40" fill="url(#sunGlow)">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="5s" repeatCount="indefinite" />
      </circle>
      
      {/* Rolling hills and fields in Ghibli style */}
      <path d="M 0,200 C 100,170 200,190 300,180 S 500,170 600,200 V 400 H 0 Z" fill="url(#fieldGradient)" />
      <path d="M 0,230 C 150,220 250,240 400,230 S 550,220 600,230 V 400 H 0 Z" fill="url(#fieldGradient2)" />
      <path d="M 0,260 C 200,250 300,270 450,250 S 550,250 600,260 V 400 H 0 Z" fill="url(#fieldGradient3)" />
      
      {/* Field patterns - crop rows */}
      <g stroke="#5c8001" strokeWidth="1" strokeOpacity="0.6">
        {Array.from({ length: 15 }).map((_, i) => (
          <path 
            key={`row-${i}`} 
            d={`M 0,${280 + i * 8} C 150,${275 + i * 8} 300,${285 + i * 8} 600,${280 + i * 8}`} 
            fill="none"
          />
        ))}
      </g>
      
      {/* Farmer 1 - Ghibli-style character */}
      <g transform="translate(120, 240)">
        {/* Body */}
        <ellipse cx="0" cy="20" rx="15" ry="20" fill="#557153" />
        
        {/* Head */}
        <circle cx="0" cy="-10" r="14" fill="#ffdab9" />
        
        {/* Hat */}
        <path d="M -15,-10 C -10,-20 10,-20 15,-10" fill="none" stroke="#d8a47f" strokeWidth="3" />
        <ellipse cx="0" cy="-12" rx="16" ry="7" fill="#d8a47f" />
        
        {/* Face */}
        <ellipse cx="-5" cy="-12" rx="2" ry="3" fill="#333333" /> {/* Left eye */}
        <ellipse cx="5" cy="-12" rx="2" ry="3" fill="#333333" /> {/* Right eye */}
        <path d="M -4,-6 C -2,-4 2,-4 4,-6" fill="none" stroke="#333333" strokeWidth="1.5" /> {/* Smile */}
        <ellipse cx="-8" cy="-15" rx="1" ry="0.5" fill="#e57373" /> {/* Blush */}
        <ellipse cx="8" cy="-15" rx="1" ry="0.5" fill="#e57373" /> {/* Blush */}
        
        {/* Arms */}
        <path d="M -15,15 C -25,10 -30,20 -25,30" fill="none" stroke="#557153" strokeWidth="5" strokeLinecap="round" />
        <path d="M 15,15 C 20,23 25,25 28,18" fill="none" stroke="#557153" strokeWidth="5" strokeLinecap="round" />
        
        {/* Hands */}
        <circle cx="-25" cy="30" r="4" fill="#ffdab9" />
        <circle cx="28" cy="18" r="4" fill="#ffdab9" />
        
        {/* Legs */}
        <path d="M -10,38 L -12,50" fill="none" stroke="#3a5a40" strokeWidth="6" strokeLinecap="round" />
        <path d="M 10,38 L 12,50" fill="none" stroke="#3a5a40" strokeWidth="6" strokeLinecap="round" />
        
        {/* Farming tool - hoe */}
        <path d="M 28,18 L 45,5" fill="none" stroke="#8d6e63" strokeWidth="2" />
        <path d="M 45,5 L 55,10" fill="none" stroke="#5d4037" strokeWidth="3" />
      </g>
      
      {/* Farmer 2 with tablet */}
      <g transform="translate(400, 260)">
        {/* Body */}
        <ellipse cx="0" cy="20" rx="18" ry="22" fill="#adc178" />
        
        {/* Head */}
        <circle cx="0" cy="-15" r="16" fill="#ffe8d6" />
        
        {/* Hair */}
        <path d="M -16,-15 C -16,-30 16,-30 16,-15" fill="#4a2511" />
        <path d="M -16,-15 C -16,-5 -10,-8 -10,-12" fill="#4a2511" />
        <path d="M 16,-15 C 16,-5 10,-8 10,-12" fill="#4a2511" />
        
        {/* Face */}
        <ellipse cx="-6" cy="-15" rx="2" ry="3" fill="#333333" /> {/* Left eye */}
        <ellipse cx="6" cy="-15" rx="2" ry="3" fill="#333333" /> {/* Right eye */}
        <path d="M -4,-8 C -2,-6 2,-6 4,-8" fill="none" stroke="#333333" strokeWidth="1.5" /> {/* Smile */}
        <ellipse cx="-10" cy="-17" rx="2" ry="1" fill="#e57373" /> {/* Blush */}
        <ellipse cx="10" cy="-17" rx="2" ry="1" fill="#e57373" /> {/* Blush */}
        
        {/* Arms */}
        <path d="M -18,15 C -25,20 -30,30 -25,35" fill="none" stroke="#adc178" strokeWidth="6" strokeLinecap="round" />
        <path d="M 18,15 C 25,20 30,30 25,35" fill="none" stroke="#adc178" strokeWidth="6" strokeLinecap="round" />
        
        {/* Tablet - modern element */}
        <rect x="-20" y="10" width="40" height="30" rx="3" ry="3" fill="#424242" />
        <rect x="-17" y="13" width="34" height="24" rx="2" ry="2" fill="#2196f3" />
        
        {/* Screen data visualization */}
        <line x1="-10" y1="20" x2="10" y2="20" stroke="#ffffff" strokeWidth="1" />
        <line x1="-10" y1="25" x2="5" y2="25" stroke="#ffffff" strokeWidth="1" />
        <line x1="-10" y1="30" x2="8" y2="30" stroke="#ffffff" strokeWidth="1" />
        
        {/* Animated data signal from tablet */}
        <circle cx="0" cy="25" r="3" fill="none" stroke="#ffffff" strokeDasharray="2,2">
          <animate attributeName="r" values="3;15;3" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Ghibli-style tractor with farmer */}
      <g transform="translate(220, 300)">
        {/* Tractor body - stylized, rounded shapes */}
        <rect x="0" y="0" width="70" height="30" rx="10" ry="10" fill="#d32f2f" />
        <rect x="50" y="-20" width="30" height="25" rx="5" ry="5" fill="#b71c1c" />
        <circle cx="15" cy="30" r="12" fill="#424242" /> {/* Left wheel */}
        <circle cx="15" cy="30" r="6" fill="#757575" /> {/* Left wheel center */}
        <circle cx="55" cy="30" r="12" fill="#424242" /> {/* Right wheel */}
        <circle cx="55" cy="30" r="6" fill="#757575" /> {/* Right wheel center */}
        
        {/* Exhaust with animated smoke - Ghibli touch */}
        <rect x="10" y="-5" width="5" height="10" fill="#616161" rx="2" ry="2" />
        <g transform="translate(12, -10)">
          <circle r="4" fill="#e0e0e0" opacity="0.8">
            <animate attributeName="cy" values="0;-20" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#e0e0e0" opacity="0.6">
            <animate attributeName="cy" values="0;-15" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" values="0.6;0" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="r" values="1.5;6" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
        </g>
        
        {/* Farmer in tractor */}
        <g transform="translate(65, -10) scale(0.7)">
          {/* Head */}
          <circle cx="0" cy="0" r="10" fill="#f0c8a0" />
          
          {/* Hat */}
          <path d="M -12,0 C -8,-8 8,-8 12,0" fill="none" stroke="#deb887" strokeWidth="2" />
          <ellipse cx="0" cy="-1" rx="12" ry="5" fill="#deb887" />
          
          {/* Face */}
          <ellipse cx="-3" cy="-1" rx="1.5" ry="2" fill="#333333" /> {/* Left eye */}
          <ellipse cx="3" cy="-1" rx="1.5" ry="2" fill="#333333" /> {/* Right eye */}
          <path d="M -3,3 C -1,5 1,5 3,3" fill="none" stroke="#333333" strokeWidth="1" /> {/* Smile */}
          <ellipse cx="-5" cy="-2" rx="1.5" ry="1" fill="#e57373" /> {/* Blush */}
          <ellipse cx="5" cy="-2" rx="1.5" ry="1" fill="#e57373" /> {/* Blush */}
          
          {/* Arms on steering wheel */}
          <path d="M -10,10 C -15,15 -10,20 -5,15" fill="none" stroke="#a1887f" strokeWidth="3" strokeLinecap="round" />
          <path d="M 10,10 C 15,15 10,20 5,15" fill="none" stroke="#a1887f" strokeWidth="3" strokeLinecap="round" />
          
          {/* Steering wheel */}
          <circle cx="0" cy="15" r="6" fill="none" stroke="#795548" strokeWidth="2" />
        </g>
        
        {/* GPS signal in Ghibli style - more magical */}
        <g transform="translate(65, -30)">
          <circle cx="0" cy="0" r="5" fill="#8c9eff" opacity="0.7" />
          <g opacity="0.7">
            <path d="M 0,-10 C 20,-15 20,15 0,10" fill="none" stroke="#8c9eff" strokeWidth="1.5">
              <animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M 0,-15 C 30,-20 30,20 0,15" fill="none" stroke="#8c9eff" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" begin="0.5s" />
            </path>
          </g>
        </g>
      </g>

      {/* Birds in sky - Ghibli signature element */}
      <g>
        <path d="M 250,50 C 255,45 260,50 265,45 C 270,50 275,45 280,50" fill="none" stroke="#333333" strokeWidth="1" />
        <path d="M 350,70 C 355,65 360,70 365,65 C 370,70 375,65 380,70" fill="none" stroke="#333333" strokeWidth="1" />
        <path d="M 150,90 C 155,85 160,90 165,85 C 170,90 175,85 180,90" fill="none" stroke="#333333" strokeWidth="1" />
      </g>
      
      {/* Rice paddy with water reflections - Ghibli-style water */}
      <g transform="translate(50, 320)">
        <rect width="100" height="60" fill="#7ec8e3" opacity="0.7" />
        {/* Water ripples */}
        {Array.from({ length: 5 }).map((_, i) => (
          <ellipse 
            key={`ripple-${i}`} 
            cx={20 + i * 15} 
            cy={20 + i * 8} 
            rx={5 + i * 2} 
            ry={2} 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            opacity="0.6"
          >
            <animate attributeName="rx" values={`${5 + i * 2};${8 + i * 2};${5 + i * 2}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
          </ellipse>
        ))}
      </g>
      
      {/* Title with Ghibli-inspired font styling */}
      <g transform="translate(300, 40)">
        <text 
          textAnchor="middle" 
          fontSize="28" 
          fontWeight="bold" 
          fill="#2c5530"
          letterSpacing="1"
          style={{ fontFamily: 'cursive' }}
        >
          Precision Farming
        </text>
        <text 
          y="30" 
          textAnchor="middle" 
          fontSize="16" 
          fill="#2c5530"
          letterSpacing="0.5"
          style={{ fontFamily: 'cursive' }}
        >
          Where Technology Meets Tradition
        </text>
      </g>
    </svg>
  );
};

export default PrecisionFarmingIllustration;