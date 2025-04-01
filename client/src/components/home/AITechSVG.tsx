import React from 'react';

interface AITechSVGProps {
  className?: string;
  width?: number;
  height?: number;
}

const AITechSVG: React.FC<AITechSVGProps> = ({ 
  className = '', 
  width = 800, 
  height = 600 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1200 800"
      width={width}
      height={height}
      className={className}
    >
      {/* Background */}
      <rect width="1200" height="800" fill="#f8f9fa" />
      
      {/* Circuit Board Pattern Background */}
      <g stroke="#e1e8ed" strokeWidth="2">
        {/* Horizontal Lines */}
        <path d="M100,100 L300,100 L320,120 L500,120" />
        <path d="M700,100 L900,100 L920,120 L1100,120" />
        <path d="M50,200 L150,200 L170,220 L400,220" />
        <path d="M750,200 L850,200 L870,220 L1150,220" />
        <path d="M100,300 L300,300 L320,320 L600,320" />
        <path d="M700,300 L900,300 L920,320 L1100,320" />
        <path d="M50,400 L150,400 L170,420 L300,420" />
        <path d="M900,400 L950,400 L970,420 L1150,420" />
        <path d="M100,500 L200,500 L220,520 L400,520" />
        <path d="M800,500 L900,500 L920,520 L1100,520" />
        <path d="M50,600 L150,600 L170,620 L500,620" />
        <path d="M700,600 L850,600 L870,620 L1150,620" />
        <path d="M100,700 L300,700 L320,720 L600,720" />
        <path d="M750,700 L900,700 L920,720 L1100,720" />
        
        {/* Vertical Lines */}
        <path d="M100,50 L100,700" />
        <path d="M200,100 L200,550" />
        <path d="M300,50 L300,750" />
        <path d="M400,150 L400,700" />
        <path d="M500,100 L500,650" />
        <path d="M600,200 L600,750" />
        <path d="M700,50 L700,650" />
        <path d="M800,100 L800,700" />
        <path d="M900,50 L900,750" />
        <path d="M1000,150 L1000,650" />
        <path d="M1100,100 L1100,700" />
        
        {/* Connection Dots */}
        <circle cx="100" cy="100" r="5" fill="#c5d3e0" />
        <circle cx="300" cy="100" r="5" fill="#c5d3e0" />
        <circle cx="500" cy="120" r="5" fill="#c5d3e0" />
        <circle cx="700" cy="100" r="5" fill="#c5d3e0" />
        <circle cx="900" cy="100" r="5" fill="#c5d3e0" />
        <circle cx="1100" cy="120" r="5" fill="#c5d3e0" />
        
        <circle cx="100" cy="300" r="5" fill="#c5d3e0" />
        <circle cx="300" cy="300" r="5" fill="#c5d3e0" />
        <circle cx="600" cy="320" r="5" fill="#c5d3e0" />
        <circle cx="700" cy="300" r="5" fill="#c5d3e0" />
        <circle cx="900" cy="300" r="5" fill="#c5d3e0" />
        <circle cx="1100" cy="320" r="5" fill="#c5d3e0" />
        
        <circle cx="100" cy="500" r="5" fill="#c5d3e0" />
        <circle cx="200" cy="500" r="5" fill="#c5d3e0" />
        <circle cx="400" cy="520" r="5" fill="#c5d3e0" />
        <circle cx="800" cy="500" r="5" fill="#c5d3e0" />
        <circle cx="900" cy="500" r="5" fill="#c5d3e0" />
        <circle cx="1100" cy="520" r="5" fill="#c5d3e0" />
        
        <circle cx="100" cy="700" r="5" fill="#c5d3e0" />
        <circle cx="300" cy="700" r="5" fill="#c5d3e0" />
        <circle cx="600" cy="720" r="5" fill="#c5d3e0" />
        <circle cx="750" cy="700" r="5" fill="#c5d3e0" />
        <circle cx="900" cy="700" r="5" fill="#c5d3e0" />
        <circle cx="1100" cy="720" r="5" fill="#c5d3e0" />
      </g>
      
      {/* Tech Icons */}
      
      {/* Brain Icon */}
      <g transform="translate(150, 100)">
        <circle cx="0" cy="0" r="60" fill="#4682B4" />
        <g fill="none" stroke="white" strokeWidth="4">
          <path d="M-25,-10 L-15,0 L-25,10" />
          <path d="M25,-10 L15,0 L25,10" />
          <path d="M-15,-25 L0,-15 L15,-25" />
          <path d="M-15,25 L0,15 L15,25" />
          <circle cx="-20" cy="-20" r="5" />
          <circle cx="20" cy="-20" r="5" />
          <circle cx="-20" cy="20" r="5" />
          <circle cx="20" cy="20" r="5" />
          <circle cx="0" cy="0" r="10" />
        </g>
      </g>
      
      {/* AI Box */}
      <g transform="translate(350, 100)">
        <rect width="100" height="100" rx="15" fill="#2962A0" />
        <text x="50" y="65" fontSize="50" fontWeight="bold" fill="white" textAnchor="middle">AI</text>
      </g>
      
      {/* Text "and" */}
      <text x="510" y="150" fontSize="70" fontWeight="bold" fill="#0F2A4C" textAnchor="middle">and</text>
      
      {/* Processor/Chip */}
      <g transform="translate(800, 100)">
        <rect width="70" height="70" fill="#A9CCE3" stroke="#2962A0" strokeWidth="4" />
        <rect x="20" y="20" width="30" height="30" fill="#2962A0" />
        <line x1="35" y1="0" x2="35" y2="-15" stroke="#2962A0" strokeWidth="3" />
        <line x1="45" y1="0" x2="45" y2="-15" stroke="#2962A0" strokeWidth="3" />
        <line x1="25" y1="0" x2="25" y2="-15" stroke="#2962A0" strokeWidth="3" />
        <line x1="35" y1="70" x2="35" y2="85" stroke="#2962A0" strokeWidth="3" />
        <line x1="45" y1="70" x2="45" y2="85" stroke="#2962A0" strokeWidth="3" />
        <line x1="25" y1="70" x2="25" y2="85" stroke="#2962A0" strokeWidth="3" />
        <line x1="0" y1="35" x2="-15" y2="35" stroke="#2962A0" strokeWidth="3" />
        <line x1="0" y1="25" x2="-15" y2="25" stroke="#2962A0" strokeWidth="3" />
        <line x1="0" y1="45" x2="-15" y2="45" stroke="#2962A0" strokeWidth="3" />
        <line x1="70" y1="35" x2="85" y2="35" stroke="#2962A0" strokeWidth="3" />
        <line x1="70" y1="25" x2="85" y2="25" stroke="#2962A0" strokeWidth="3" />
        <line x1="70" y1="45" x2="85" y2="45" stroke="#2962A0" strokeWidth="3" />
      </g>
      
      {/* Graph/Analytics */}
      <g transform="translate(950, 100)">
        <circle cx="30" cy="30" r="6" fill="#2962A0" />
        <circle cx="50" cy="10" r="6" fill="#2962A0" />
        <circle cx="70" cy="40" r="6" fill="#2962A0" />
        <path d="M30,30 L50,10 L70,40" stroke="#2962A0" strokeWidth="3" fill="none" />
      </g>
      
      {/* Gear */}
      <g transform="translate(150, 250)">
        <circle cx="0" cy="0" r="25" fill="#A9CCE3" stroke="#2962A0" strokeWidth="3" />
        <circle cx="0" cy="0" r="10" fill="#2962A0" />
        <g stroke="#2962A0" strokeWidth="4">
          <line x1="0" y1="-25" x2="0" y2="-35" />
          <line x1="17.5" y1="-17.5" x2="24.5" y2="-24.5" />
          <line x1="25" y1="0" x2="35" y2="0" />
          <line x1="17.5" y1="17.5" x2="24.5" y2="24.5" />
          <line x1="0" y1="25" x2="0" y2="35" />
          <line x1="-17.5" y1="17.5" x2="-24.5" y2="24.5" />
          <line x1="-25" y1="0" x2="-35" y2="0" />
          <line x1="-17.5" y1="-17.5" x2="-24.5" y2="-24.5" />
        </g>
      </g>
      
      {/* WiFi Icon */}
      <g transform="translate(640, 270)">
        <path d="M0,20 C-30,10 -60,10 -90,20" stroke="#4682B4" strokeWidth="8" fill="none" />
        <path d="M0,0 C-40,-15 -80,-15 -120,0" stroke="#4682B4" strokeWidth="8" fill="none" />
        <path d="M0,40 C-20,35 -40,35 -60,40" stroke="#4682B4" strokeWidth="8" fill="none" />
      </g>
      
      {/* TECHNOLOGIES Text */}
      <text x="600" y="230" fontSize="90" fontWeight="bold" fill="#0F2A4C" textAnchor="middle">TECHNOLOGIES</text>
      
      {/* Human Figure */}
      <g transform="translate(350, 450)">
        {/* Head */}
        <path d="M0,0 C-10,0 -20,10 -20,25 C-20,45 -10,55 0,55 L5,55 L5,70 L-5,70 L-5,85 L5,85 L5,95 L-25,120 L55,120 L35,95 L35,85 L45,85 L45,70 L35,70 L35,55 L40,55 C50,55 60,45 60,25 C60,10 50,0 40,0 Z" fill="#4682B4" />
        
        {/* Face */}
        <circle cx="15" cy="30" r="5" fill="#0F2A4C" /> {/* Eye */}
        <circle cx="45" cy="30" r="5" fill="#0F2A4C" /> {/* Eye */}
        <path d="M20,45 C25,50 35,50 40,45" stroke="#0F2A4C" strokeWidth="3" fill="none" /> {/* Smile */}
        
        {/* Hair */}
        <path d="M0,0 C-10,0 -20,10 -20,25 L-20,15 C-20,5 -10,-5 0,-5 L40,-5 C50,-5 60,5 60,15 L60,25 C60,10 50,0 40,0 Z" fill="#0F2A4C" />
        
        {/* Body */}
        <rect x="5" y="120" width="50" height="150" fill="#4682B4" />
        
        {/* Collar */}
        <path d="M30,120 L20,140 L40,140 Z" fill="#0F2A4C" />
        
        {/* Buttons */}
        <circle cx="30" cy="160" r="3" fill="#0F2A4C" />
        <circle cx="30" cy="180" r="3" fill="#0F2A4C" />
        <circle cx="30" cy="200" r="3" fill="#0F2A4C" />
        
        {/* Arms */}
        <rect x="-40" y="120" width="45" height="20" rx="10" fill="#4682B4" />
        <rect x="-75" y="130" width="45" height="15" rx="7" fill="#4682B4" transform="rotate(-20, -75, 130)" />
        
        <rect x="55" y="120" width="45" height="20" rx="10" fill="#4682B4" />
        <rect x="100" y="120" width="45" height="15" rx="7" fill="#4682B4" transform="rotate(20, 100, 120)" />
        
        {/* Hand */}
        <rect x="135" y="110" width="25" height="20" rx="10" fill="#f5d0a9" />
        <rect x="140" y="100" width="8" height="15" rx="4" fill="#f5d0a9" />
        <rect x="150" y="100" width="8" height="15" rx="4" fill="#f5d0a9" />
      </g>
      
      {/* Robot Figure */}
      <g transform="translate(700, 450)">
        {/* Head */}
        <rect x="-40" y="-20" width="80" height="100" rx="20" fill="#A9CCE3" stroke="#2962A0" strokeWidth="4" />
        
        {/* Face Details */}
        <circle cx="-15" cy="25" r="10" fill="#2962A0" /> {/* Eye */}
        <circle cx="15" cy="25" r="10" fill="#2962A0" /> {/* Eye */}
        <circle cx="-15" cy="25" r="5" fill="#A9CCE3" /> {/* Eye detail */}
        <circle cx="15" cy="25" r="5" fill="#A9CCE3" /> {/* Eye detail */}
        
        <path d="M-10,50 L10,50" stroke="#2962A0" strokeWidth="4" /> {/* Mouth */}
        
        {/* Head Details */}
        <rect x="-20" y="-30" width="40" height="10" rx="5" fill="#2962A0" />
        <rect x="-25" y="-15" width="10" height="30" rx="5" fill="#2962A0" />
        
        {/* Ear/Antenna */}
        <rect x="-50" y="0" width="10" height="30" rx="5" fill="#2962A0" />
        <circle cx="-45" cy="0" r="8" fill="#2962A0" />
        
        {/* Neck */}
        <rect x="-15" y="80" width="30" height="20" fill="#A9CCE3" stroke="#2962A0" strokeWidth="3" />
        
        {/* Body */}
        <rect x="-50" y="100" width="100" height="150" rx="20" fill="#A9CCE3" stroke="#2962A0" strokeWidth="4" />
        
        {/* Body Details */}
        <circle cx="0" cy="130" r="20" fill="#2962A0" />
        <circle cx="0" cy="130" r="15" fill="#A9CCE3" />
        <circle cx="0" cy="130" r="10" fill="#2962A0" />
        
        <rect x="-40" y="170" width="80" height="20" rx="5" fill="#2962A0" />
        
        {/* Arms */}
        <rect x="-80" y="110" width="30" height="80" rx="10" fill="#A9CCE3" stroke="#2962A0" strokeWidth="3" />
        <rect x="-90" y="130" width="15" height="40" fill="#2962A0" />
        <rect x="-130" y="110" width="50" height="25" rx="10" fill="#A9CCE3" stroke="#2962A0" strokeWidth="3" />
        
        <rect x="50" y="110" width="30" height="80" rx="10" fill="#A9CCE3" stroke="#2962A0" strokeWidth="3" />
        <rect x="75" y="130" width="15" height="40" fill="#2962A0" />
        <rect x="80" y="110" width="50" height="25" rx="10" fill="#A9CCE3" stroke="#2962A0" strokeWidth="3" />
        
        {/* Hand */}
        <rect x="-130" y="120" width="25" height="15" rx="7" fill="#A9CCE3" stroke="#2962A0" strokeWidth="2" />
      </g>
      
      {/* Handshake */}
      <g transform="translate(530, 570)">
        <rect x="0" y="0" width="40" height="20" rx="10" fill="#f5d0a9" /> {/* Human hand */}
        <rect x="40" y="0" width="40" height="20" rx="10" fill="#A9CCE3" stroke="#2962A0" strokeWidth="2" /> {/* Robot hand */}
      </g>
    </svg>
  );
};

export default AITechSVG;