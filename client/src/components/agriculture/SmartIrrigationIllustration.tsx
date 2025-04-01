import React from 'react';

const SmartIrrigationIllustration = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 600 400"
      className="rounded-lg overflow-hidden"
    >
      {/* Background with sky and ground */}
      <rect width="600" height="250" fill="#bbdefb" /> {/* Sky */}
      <rect y="250" width="600" height="150" fill="#8d6e63" /> {/* Ground */}
      
      {/* Sun */}
      <g transform="translate(520, 70)">
        <circle cx="0" cy="0" r="30" fill="#ffeb3b">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="5s" repeatCount="indefinite" />
        </circle>
        {/* Sun rays */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`ray-${i}`}
            x1="0"
            y1="0"
            x2={Math.cos((i * 30 * Math.PI) / 180) * 45}
            y2={Math.sin((i * 30 * Math.PI) / 180) * 45}
            stroke="#ffeb3b"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
        ))}
      </g>
      
      {/* Clouds */}
      <g transform="translate(120, 60)" opacity="0.9">
        <ellipse cx="0" cy="0" rx="20" ry="15" fill="#ffffff" />
        <ellipse cx="15" cy="0" rx="20" ry="18" fill="#ffffff" />
        <ellipse cx="-15" cy="5" rx="18" ry="13" fill="#ffffff" />
        <ellipse cx="0" cy="8" rx="20" ry="12" fill="#ffffff" />
      </g>
      
      <g transform="translate(350, 40)" opacity="0.7">
        <ellipse cx="0" cy="0" rx="15" ry="10" fill="#ffffff" />
        <ellipse cx="10" cy="0" rx="15" ry="12" fill="#ffffff" />
        <ellipse cx="-10" cy="3" rx="13" ry="8" fill="#ffffff" />
        <ellipse cx="0" cy="5" rx="15" ry="8" fill="#ffffff" />
      </g>
      
      {/* Farm field with rows of crops */}
      <g>
        {/* Field sections */}
        <rect x="50" y="250" width="500" height="100" fill="#6d4c41" /> {/* Tilled soil */}
        
        {/* Crop rows */}
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={`row-${i}`}
            x="50"
            y={260 + i * 12}
            width="500"
            height="2"
            fill="#5d4037"
          />
        ))}
        
        {/* Plants in rows */}
        {Array.from({ length: 12 }).map((_, col) => (
          Array.from({ length: 5 }).map((_, row) => (
            <g key={`plant-${col}-${row}`} transform={`translate(${80 + col * 40}, ${275 + row * 15})`}>
              <rect x="-1" y="-5" width="2" height="5" fill="#33691e" /> {/* Plant stem */}
              <ellipse cx="0" cy="-8" rx="4" ry="3" fill="#66bb6a" /> {/* Leaves */}
              <ellipse cx="-2" cy="-5" rx="3" ry="2" fill="#66bb6a" transform="rotate(-20)" /> {/* Leaf left */}
              <ellipse cx="2" cy="-5" rx="3" ry="2" fill="#66bb6a" transform="rotate(20)" /> {/* Leaf right */}
            </g>
          ))
        ))}
      </g>
      
      {/* Smart Irrigation System Components */}
      
      {/* Central control system / Weather station */}
      <g transform="translate(50, 180)">
        <rect x="0" y="0" width="30" height="70" fill="#616161" /> {/* Pole */}
        <rect x="-15" y="-40" width="60" height="40" fill="#9e9e9e" rx="5" ry="5" /> {/* Control box */}
        <rect x="-5" y="-50" width="10" height="10" fill="#e0e0e0" /> {/* Antenna */}
        <circle cx="0" cy="-65" r="5" fill="#e0e0e0" /> {/* Antenna top */}
        
        {/* Signal animation */}
        <circle cx="0" cy="-65" r="10" fill="none" stroke="#29b6f6" strokeWidth="2" opacity="0.7" strokeDasharray="3,3">
          <animate attributeName="r" values="5;25;5" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Solar panel */}
        <rect x="-10" y="-30" width="20" height="15" fill="#1e88e5" />
        <line x1="-10" y1="-22.5" x2="10" y2="-22.5" stroke="#0d47a1" strokeWidth="1" />
        <line x1="0" y1="-30" x2="0" y2="-15" stroke="#0d47a1" strokeWidth="1" />
        
        {/* Display screen */}
        <rect x="-8" y="-10" width="16" height="8" fill="#4fc3f7" />
        <text x="0" y="-4" fontSize="6" textAnchor="middle" fill="#01579b">ON</text>
      </g>
      
      {/* Irrigation pipes */}
      <g>
        {/* Main pipe */}
        <rect x="80" y="245" width="450" height="5" fill="#546e7a" rx="2" ry="2" />
        
        {/* Connectors to sprinklers */}
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={`connector-${i}`}
            x={120 + i * 70}
            y="220"
            width="5"
            height="25"
            fill="#546e7a"
          />
        ))}
      </g>
      
      {/* Sprinklers with water animation */}
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={`sprinkler-${i}`} transform={`translate(${122.5 + i * 70}, 220)`}>
          <circle cx="0" cy="0" r="5" fill="#37474f" />
          <circle cx="0" cy="0" r="2" fill="#263238" />
          
          {/* Water spray animation */}
          <g opacity={i % 2 === 0 ? "0.8" : "0"}> {/* Every other sprinkler is active */}
            {Array.from({ length: 8 }).map((_, j) => (
              <path
                key={`water-${i}-${j}`}
                d={`M 0 0 Q ${Math.cos((j * 45 * Math.PI) / 180) * 10} ${Math.sin((j * 45 * Math.PI) / 180) * 5 - 15} ${Math.cos((j * 45 * Math.PI) / 180) * 20} ${Math.sin((j * 45 * Math.PI) / 180) * 10 - 25}`}
                fill="none"
                stroke="#29b6f6"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="1,2"
                opacity="0.8"
              >
                <animate attributeName="stroke-dashoffset" values="0;3" dur="1s" repeatCount="indefinite" />
              </path>
            ))}
          </g>
        </g>
      ))}
      
      {/* Soil moisture sensors */}
      {Array.from({ length: 3 }).map((_, i) => (
        <g key={`sensor-${i}`} transform={`translate(${150 + i * 150}, 290)`}>
          <rect x="-5" y="-20" width="10" height="20" fill="#78909c" />
          <rect x="-2" y="-30" width="4" height="10" fill="#607d8b" />
          <circle cx="0" cy="-35" r="5" fill="#26a69a" />
          
          {/* Data signal animation */}
          <circle cx="0" cy="-35" r="8" fill="none" stroke="#26a69a" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" begin={`${i * 1}s`} />
          </circle>
        </g>
      ))}
      
      {/* Underground view - cross section */}
      <g>
        {/* Soil layers */}
        <rect x="50" y="350" width="500" height="50" fill="#5d4037" opacity="0.9" /> {/* Top soil */}
        <rect x="50" y="380" width="500" height="20" fill="#4e342e" opacity="0.9" /> {/* Sub soil */}
        
        {/* Root systems */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={`roots-${i}`} transform={`translate(${120 + i * 100}, 350)`}>
            <path
              d={`M 0 0 
                 L -10 15 
                 L -15 25
                 M -10 15
                 L -5 30
                 M 0 0
                 L 3 20
                 L 0 35
                 M 3 20
                 L 10 25
                 M 0 0
                 L 12 12
                 L 20 18`}
              fill="none"
              stroke="#8d6e63"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        ))}
        
        {/* Underground drip irrigation */}
        <g transform="translate(80, 360)">
          <rect width="450" height="3" fill="#37474f" />
          {Array.from({ length: 15 }).map((_, i) => (
            <g key={`drip-${i}`} transform={`translate(${30 + i * 30}, 0)`}>
              <rect x="-1" y="3" width="2" height="10" fill="#455a64" />
              <circle cx="0" cy="16" r="1.5" fill="#29b6f6">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="4s"
                  begin={`${i * 0.2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="16;30;16"
                  dur="4s"
                  begin={`${i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </g>
      </g>
      
      {/* Water droplets falling from clouds for rain simulation */}
      <g opacity="0.4">
        {Array.from({ length: 15 }).map((_, i) => (
          <g key={`raindrop-${i}`}>
            <path
              d={`M ${80 + i * 30} 100 Q ${78 + i * 30} 105, ${80 + i * 30} 110`}
              fill="none"
              stroke="#29b6f6"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0;0.7;0"
                dur={`${3 + Math.random() * 2}s`}
                begin={`${Math.random() * 5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="d"
                values={`M ${80 + i * 30} 100 Q ${78 + i * 30} 105, ${80 + i * 30} 110; M ${80 + i * 30} 240 Q ${78 + i * 30} 245, ${80 + i * 30} 250; M ${80 + i * 30} 100 Q ${78 + i * 30} 105, ${80 + i * 30} 110;`}
                dur={`${3 + Math.random() * 2}s`}
                begin={`${Math.random() * 5}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
      </g>
      
      {/* Smart device/tablet showing irrigation control system */}
      <g transform="translate(500, 130)">
        <rect x="-40" y="-60" width="80" height="120" rx="10" ry="10" fill="#424242" />
        <rect x="-35" y="-55" width="70" height="110" rx="5" ry="5" fill="#2196f3" />
        
        {/* Device interface details */}
        <g transform="translate(-35, -55) scale(0.7)">
          <rect x="5" y="5" width="90" height="15" fill="#1565c0" />
          <text x="10" y="16" fontSize="10" fill="#ffffff">Irrigation Control</text>
          
          {/* Water level visualization */}
          <rect x="10" y="30" width="80" height="50" fill="#e1f5fe" />
          <rect x="10" y="50" width="80" height="30" fill="#4fc3f7" />
          <text x="50" y="45" fontSize="10" fill="#0277bd" textAnchor="middle">Water Usage</text>
          
          {/* Control buttons */}
          <circle cx="25" cy="100" r="15" fill="#4caf50" />
          <rect x="20" y="95" width="10" height="10" fill="#ffffff" />
          <text x="25" y="120" fontSize="8" fill="#ffffff" textAnchor="middle">ON</text>
          
          <circle cx="65" cy="100" r="15" fill="#f44336" />
          <rect x="60" y="95" width="10" height="10" fill="#ffffff" />
          <text x="65" y="120" fontSize="8" fill="#ffffff" textAnchor="middle">OFF</text>
          
          {/* Data stats */}
          <text x="50" y="145" fontSize="8" fill="#ffffff" textAnchor="middle">30% WATER SAVED</text>
        </g>
      </g>
      
      {/* Title */}
      <text x="300" y="30" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#01579b">Smart Irrigation Systems</text>
      <text x="300" y="60" fontSize="16" textAnchor="middle" fill="#01579b">AI-controlled water management for optimal crop health</text>
    </svg>
  );
};

export default SmartIrrigationIllustration;