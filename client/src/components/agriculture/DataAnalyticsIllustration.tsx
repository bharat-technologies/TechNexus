import React from 'react';

const DataAnalyticsIllustration = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 600 400"
      className="rounded-lg overflow-hidden"
    >
      {/* Background */}
      <rect width="600" height="400" fill="#e8f3fa" />
      
      {/* Dashboard interface */}
      <g transform="translate(50, 50)">
        {/* Main dashboard container */}
        <rect width="500" height="300" rx="10" ry="10" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2" />
        
        {/* Dashboard header */}
        <rect width="500" height="40" rx="10" ry="10" fill="#1565c0" />
        <text x="20" y="25" fontSize="16" fill="#ffffff" fontWeight="bold">Farm Analytics Dashboard</text>
        
        {/* Navigation sidebar */}
        <rect x="0" y="40" width="80" height="260" fill="#f5f5f5" />
        
        {/* Sidebar menu items */}
        <g>
          <rect x="10" y="60" width="60" height="30" rx="5" ry="5" fill="#1976d2" />
          <text x="40" y="78" fontSize="12" fill="#ffffff" textAnchor="middle">Overview</text>
          
          <rect x="10" y="100" width="60" height="30" rx="5" ry="5" fill="#bbdefb" />
          <text x="40" y="118" fontSize="12" fill="#1565c0" textAnchor="middle">Crops</text>
          
          <rect x="10" y="140" width="60" height="30" rx="5" ry="5" fill="#bbdefb" />
          <text x="40" y="158" fontSize="12" fill="#1565c0" textAnchor="middle">Soil Data</text>
          
          <rect x="10" y="180" width="60" height="30" rx="5" ry="5" fill="#bbdefb" />
          <text x="40" y="198" fontSize="12" fill="#1565c0" textAnchor="middle">Weather</text>
          
          <rect x="10" y="220" width="60" height="30" rx="5" ry="5" fill="#bbdefb" />
          <text x="40" y="238" fontSize="12" fill="#1565c0" textAnchor="middle">Equipment</text>
          
          <rect x="10" y="260" width="60" height="30" rx="5" ry="5" fill="#bbdefb" />
          <text x="40" y="278" fontSize="12" fill="#1565c0" textAnchor="middle">Reports</text>
        </g>
        
        {/* Content area with graphs and data */}
        <g transform="translate(90, 50)">
          {/* Section title */}
          <text x="0" y="15" fontSize="16" fontWeight="bold" fill="#212121">Farm Performance Metrics</text>
          
          {/* Time period selector */}
          <rect x="300" y="5" width="100" height="20" rx="5" ry="5" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />
          <text x="350" y="20" fontSize="12" fill="#616161" textAnchor="middle">Last 30 days</text>
          <path d="M 385 15 L 390 10 L 395 15" fill="none" stroke="#616161" strokeWidth="1" />
          
          {/* Farm productivity gauge */}
          <g transform="translate(20, 50)">
            <rect width="100" height="90" rx="5" ry="5" fill="#f9fbe7" stroke="#dce775" strokeWidth="1" />
            <text x="50" y="20" fontSize="12" fill="#827717" textAnchor="middle">Crop Yields</text>
            
            {/* Gauge visualization */}
            <path d="M 50 60 A 30 30 0 0 1 75 40" fill="none" stroke="#dce775" strokeWidth="12" />
            <path d="M 50 60 A 30 30 0 0 1 80 60" fill="none" stroke="#aed581" strokeWidth="12" />
            <circle cx="50" cy="60" r="5" fill="#33691e" />
            <text x="50" y="80" fontSize="14" fill="#33691e" textAnchor="middle" fontWeight="bold">92%</text>
          </g>
          
          {/* Soil moisture chart */}
          <g transform="translate(130, 50)">
            <rect width="100" height="90" rx="5" ry="5" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1" />
            <text x="50" y="20" fontSize="12" fill="#0d47a1" textAnchor="middle">Soil Moisture</text>
            
            {/* Line chart */}
            <polyline points="10,70 20,50 30,60 40,45 50,40 60,50 70,30 80,35 90,40" 
                     fill="none" stroke="#1e88e5" strokeWidth="2" />
                     
            {/* Axis lines */}
            <line x1="10" y1="75" x2="90" y2="75" stroke="#90caf9" strokeWidth="1" />
            <line x1="10" y1="75" x2="10" y2="25" stroke="#90caf9" strokeWidth="1" />
          </g>
          
          {/* Pest detection */}
          <g transform="translate(240, 50)">
            <rect width="100" height="90" rx="5" ry="5" fill="#fff3e0" stroke="#ffcc80" strokeWidth="1" />
            <text x="50" y="20" fontSize="12" fill="#e65100" textAnchor="middle">Pest Alerts</text>
            
            {/* Alert visualization */}
            <g transform="translate(35, 40)">
              <polygon points="15,0 30,30 0,30" fill="#ffb74d" />
              <rect x="14" y="10" width="2" height="12" fill="#ffffff" />
              <circle cx="15" cy="25" r="1.5" fill="#ffffff" />
            </g>
            <text x="50" y="80" fontSize="14" fill="#e65100" textAnchor="middle" fontWeight="bold">3 Alerts</text>
          </g>
          
          {/* Weather forecast */}
          <g transform="translate(20, 150)">
            <rect width="320" height="80" rx="5" ry="5" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1" />
            <text x="20" y="20" fontSize="12" fill="#616161" fontWeight="bold">Weekly Weather Forecast</text>
            
            {/* Weather icons and days */}
            <g transform="translate(20, 40)">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <g key={`day-${i}`} transform={`translate(${i * 40}, 0)`}>
                  <circle cx="15" cy="15" r="10" fill="#bbdefb" />
                  <text x="15" y="40" fontSize="10" fill="#616161" textAnchor="middle">{day}</text>
                  {/* Weather symbol - could be sun, cloud, rain, etc. */}
                  <circle cx="15" cy="15" r="6" fill="#ffeb3b" stroke="#fdd835" strokeWidth="1" />
                  {/* Temperature indicator */}
                  <text x="15" y="55" fontSize="10" fill="#616161" textAnchor="middle">{`${18 + Math.floor(Math.random() * 10)}°C`}</text>
                </g>
              ))}
            </g>
          </g>
          
          {/* Animated data processing indicator */}
          <g transform="translate(340, 150)">
            <rect width="50" height="80" rx="5" ry="5" fill="#e8f5e9" stroke="#a5d6a7" strokeWidth="1" />
            <text x="25" y="20" fontSize="10" fill="#2e7d32" textAnchor="middle">Live Data</text>
            
            <g transform="translate(15, 40)">
              {/* Pulsing data indicator */}
              <circle cx="10" cy="10" r="5" fill="#4caf50">
                <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                <animate attributeName="fill-opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Streaming data lines */}
              <g>
                <line x1="0" y1="25" x2="20" y2="25" stroke="#81c784" strokeWidth="2" strokeDasharray="2,2">
                  <animate attributeName="stroke-dashoffset" values="0;4" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="30" x2="20" y2="30" stroke="#81c784" strokeWidth="2" strokeDasharray="2,2">
                  <animate attributeName="stroke-dashoffset" values="0;4" dur="1s" repeatCount="indefinite" begin="0.3s" />
                </line>
                <line x1="0" y1="35" x2="20" y2="35" stroke="#81c784" strokeWidth="2" strokeDasharray="2,2">
                  <animate attributeName="stroke-dashoffset" values="0;4" dur="1s" repeatCount="indefinite" begin="0.6s" />
                </line>
              </g>
            </g>
          </g>
        </g>
      </g>
      
      {/* Decorative elements */}
      <g transform="translate(20, 360)">
        <circle cx="10" cy="10" r="5" fill="#1976d2" />
        <circle cx="25" cy="10" r="5" fill="#4caf50" />
        <circle cx="40" cy="10" r="5" fill="#f57c00" />
      </g>
      
      <g transform="translate(550, 360)">
        <text x="0" y="10" fontSize="10" fill="#757575" textAnchor="end">© Bharat Technologies</text>
      </g>
      
      {/* Animated loading spinner */}
      <g transform="translate(520, 80)">
        <circle cx="15" cy="15" r="10" fill="none" stroke="#2196f3" strokeWidth="3" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="1,60;40,60;1,60" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-dashoffset" values="0;-30;-60" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default DataAnalyticsIllustration;