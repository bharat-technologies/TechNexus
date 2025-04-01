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
      {/* Background */}
      <rect width="600" height="400" fill="#e8f5e9" />
      
      {/* Field/Farm Background with grid pattern */}
      <g>
        {/* Farm plots with different colors */}
        <rect x="50" y="100" width="500" height="250" fill="#81c784" /> {/* Main field */}
        <rect x="50" y="100" width="150" height="125" fill="#a5d6a7" /> {/* Section 1 */}
        <rect x="200" y="100" width="175" height="125" fill="#66bb6a" /> {/* Section 2 */}
        <rect x="375" y="100" width="175" height="125" fill="#4caf50" /> {/* Section 3 */}
        <rect x="50" y="225" width="200" height="125" fill="#43a047" /> {/* Section 4 */}
        <rect x="250" y="225" width="150" height="125" fill="#388e3c" /> {/* Section 5 */}
        <rect x="400" y="225" width="150" height="125" fill="#2e7d32" /> {/* Section 6 */}
        
        {/* Grid lines (representing precision mapping) */}
        <g stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h-${i}`} x1="50" y1={100 + i * 25} x2="550" y2={100 + i * 25} />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v-${i}`} x1={50 + i * 50} y1="100" x2={50 + i * 50} y2="350" />
          ))}
        </g>
      </g>
      
      {/* Tractor with GPS */}
      <g transform="translate(200, 180) scale(0.7)">
        <rect x="0" y="0" width="80" height="40" fill="#d32f2f" rx="5" ry="5" /> {/* Tractor body */}
        <rect x="70" y="5" width="30" height="30" fill="#b71c1c" rx="3" ry="3" /> {/* Tractor cabin */}
        <circle cx="15" cy="45" r="15" fill="#424242" /> {/* Left wheel */}
        <circle cx="15" cy="45" r="7" fill="#9e9e9e" /> {/* Left wheel center */}
        <circle cx="65" cy="45" r="15" fill="#424242" /> {/* Right wheel */}
        <circle cx="65" cy="45" r="7" fill="#9e9e9e" /> {/* Right wheel center */}
        
        {/* GPS antenna */}
        <rect x="85" y="-15" width="3" height="20" fill="#616161" /> {/* GPS pole */}
        <circle cx="86.5" cy="-20" r="8" fill="#fafafa" /> {/* GPS dome */}
        <circle cx="86.5" cy="-20" r="5" fill="#eeeeee" strokeWidth="1" stroke="#bdbdbd" /> {/* GPS detail */}
        
        {/* Signal waves from GPS (animated) */}
        <g opacity="0.8">
          <circle cx="86.5" cy="-20" r="15" fill="none" stroke="#1976d2" strokeWidth="2" strokeDasharray="3,3">
            <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="86.5" cy="-20" r="15" fill="none" stroke="#1976d2" strokeWidth="2" strokeDasharray="3,3">
            <animate attributeName="r" values="8;30;8" dur="3s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>
        </g>
      </g>
      
      {/* Drone with scanning beam */}
      <g transform="translate(400, 150)">
        <g transform="scale(0.6)">
          {/* Drone body */}
          <circle cx="0" cy="0" r="15" fill="#455a64" />
          <rect x="-25" y="-5" width="50" height="10" fill="#546e7a" rx="3" ry="3" />
          <rect x="-5" y="-25" width="10" height="50" fill="#546e7a" rx="3" ry="3" />
          
          {/* Propellers */}
          <g>
            <circle cx="-25" cy="-25" r="10" fill="#78909c" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="25" cy="-25" r="10" fill="#78909c" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="0.5s" repeatCount="indefinite" begin="0.1s" />
            </circle>
            <circle cx="-25" cy="25" r="10" fill="#78909c" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="0.5s" repeatCount="indefinite" begin="0.2s" />
            </circle>
            <circle cx="25" cy="25" r="10" fill="#78909c" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="0.5s" repeatCount="indefinite" begin="0.3s" />
            </circle>
          </g>
          
          {/* Camera and scanning beam */}
          <circle cx="0" cy="5" r="5" fill="#263238" />
          <path d="M -20 80 L 20 100 L 20 120 L -20 100 Z" fill="#4fc3f7" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
          </path>
        </g>
      </g>
      
      {/* Data points scattered around the field */}
      <g>
        {Array.from({ length: 15 }).map((_, i) => {
          const x = 80 + Math.random() * 450;
          const y = 120 + Math.random() * 210;
          return (
            <g key={`datapoint-${i}`} transform={`translate(${x}, ${y})`}>
              <circle r="3" fill="#f44336" />
              <circle r="6" fill="none" stroke="#f44336" strokeWidth="1" opacity="0.5">
                <animate attributeName="r" values="3;10;3" dur={2 + Math.random() * 3 + 's'} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0;0.7" dur={2 + Math.random() * 3 + 's'} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </g>
      
      {/* Satellite */}
      <g transform="translate(520, 40) scale(0.5) rotate(15)">
        <rect x="-30" y="-10" width="60" height="20" fill="#1a237e" rx="3" ry="3" /> {/* Satellite body */}
        <rect x="-40" y="-5" width="10" height="10" fill="#303f9f" /> {/* Satellite module */}
        <rect x="30" y="-5" width="10" height="10" fill="#303f9f" /> {/* Satellite module */}
        
        {/* Solar panels */}
        <rect x="-80" y="-30" width="50" height="60" fill="#5c6bc0" rx="2" ry="2" />
        <rect x="30" y="-30" width="50" height="60" fill="#5c6bc0" rx="2" ry="2" />
        
        {/* Antenna */}
        <rect x="0" y="-20" width="2" height="20" fill="#e0e0e0" />
        <circle cx="1" cy="-25" r="5" fill="#e0e0e0" />
        
        {/* Signal waves to Earth */}
        <path d="M 0 10 L -100 150 L 100 150 Z" fill="#3f51b5" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
        </path>
      </g>
      
      {/* Data screen overlay */}
      <g transform="translate(50, 40)">
        <rect width="120" height="50" fill="#ffffff" opacity="0.9" rx="5" ry="5" stroke="#2196f3" strokeWidth="2" />
        
        {/* Data screen content */}
        <line x1="10" y1="15" x2="110" y2="15" stroke="#90caf9" strokeWidth="1" />
        <line x1="10" y1="25" x2="90" y2="25" stroke="#bbdefb" strokeWidth="1" />
        <line x1="10" y1="35" x2="100" y2="35" stroke="#e3f2fd" strokeWidth="1" />
        
        {/* Stats indicators */}
        <circle cx="15" cy="15" r="3" fill="#4caf50" />
        <circle cx="15" cy="25" r="3" fill="#2196f3" />
        <circle cx="15" cy="35" r="3" fill="#ff9800" />
      </g>
      
      {/* Title */}
      <text x="300" y="40" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#2e7d32">Precision Farming Technology</text>
    </svg>
  );
};

export default PrecisionFarmingIllustration;