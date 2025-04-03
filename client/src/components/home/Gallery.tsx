const Gallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16" data-aos="fade-up">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          
          {/* AI in Agriculture Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-80 relative">
              <svg viewBox="0 0 800 800" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Sky */}
                <rect width="800" height="400" fill="#6CBAE5" />
                
                {/* Clouds */}
                <path d="M680,140 Q710,100 750,130 Q790,150 770,190 Q750,220 710,210 Q680,210 670,180 Q660,150 680,140" fill="#F7F7E3" />
                <path d="M580,90 Q620,60 660,90 Q690,110 670,140 Q640,160 610,150 Q580,140 580,110 Q570,80 580,90" fill="#F7F7E3" />
                <path d="M730,70 Q760,40 790,60 Q810,80 800,110 Q780,140 750,120 Q720,110 730,70" fill="#F7F7E3" />
                
                {/* Mountains on horizon */}
                <path d="M0,300 Q100,250 200,280 Q300,240 400,260 Q500,230 600,270 Q700,240 800,300 L800,400 L0,400 Z" fill="#718F94" fillOpacity="0.3" />
                
                {/* Green field */}
                <rect x="0" y="400" width="800" height="400" fill="#64A750" />
                
                {/* Tree */}
                <rect x="80" y="150" width="40" height="250" fill="#8B6242" />
                <ellipse cx="100" cy="150" rx="80" ry="70" fill="#508036" />
                <ellipse cx="140" cy="180" rx="60" ry="50" fill="#508036" />
                <ellipse cx="60" cy="180" rx="60" ry="50" fill="#508036" />
                
                {/* Power line tower */}
                <line x1="200" y1="150" x2="190" y2="300" stroke="#888" strokeWidth="5" />
                <line x1="200" y1="150" x2="210" y2="300" stroke="#888" strokeWidth="5" />
                <line x1="160" y1="180" x2="240" y2="180" stroke="#888" strokeWidth="5" />
                <line x1="170" y1="220" x2="230" y2="220" stroke="#888" strokeWidth="5" />
                <line x1="180" y1="260" x2="220" y2="260" stroke="#888" strokeWidth="5" />
                
                {/* Crops rows */}
                <path d="M0,550 C50,540 100,560 150,550 C200,540 250,560 300,550 C350,540 400,560 450,550 C500,540 550,560 600,550 C650,540 700,560 750,550 L800,550 L800,800 L0,800 Z" fill="#508036" fillOpacity="0.7" />
                
                {/* Small plants - row 1 */}
                <path d="M100,500 C105,490 110,495 115,485 C120,495 125,490 130,500 Z" fill="#3D6D29" />
                <path d="M200,510 C205,500 210,505 215,495 C220,505 225,500 230,510 Z" fill="#3D6D29" />
                <path d="M300,505 C305,495 310,500 315,490 C320,500 325,495 330,505 Z" fill="#3D6D29" />
                <path d="M400,500 C405,490 410,495 415,485 C420,495 425,490 430,500 Z" fill="#3D6D29" />
                <path d="M500,510 C505,500 510,505 515,495 C520,505 525,500 530,510 Z" fill="#3D6D29" />
                <path d="M600,505 C605,495 610,500 615,490 C620,500 625,495 630,505 Z" fill="#3D6D29" />
                
                {/* Small plants - row 2 */}
                <path d="M150,540 C155,530 160,535 165,525 C170,535 175,530 180,540 Z" fill="#3D6D29" />
                <path d="M250,545 C255,535 260,540 265,530 C270,540 275,535 280,545 Z" fill="#3D6D29" />
                <path d="M350,535 C355,525 360,530 365,520 C370,530 375,525 380,535 Z" fill="#3D6D29" />
                <path d="M450,545 C455,535 460,540 465,530 C470,540 475,535 480,545 Z" fill="#3D6D29" />
                <path d="M550,535 C555,525 560,530 565,520 C570,530 575,525 580,535 Z" fill="#3D6D29" />
                <path d="M650,545 C655,535 660,540 665,530 C670,540 675,535 680,545 Z" fill="#3D6D29" />
                
                {/* Farmer */}
                <g transform="translate(400, 500)">
                  {/* Farmer's body - seated position */}
                  <rect x="-60" y="-70" width="120" height="70" rx="10" fill="#FFFFFF" /> {/* White shirt */}
                  <path d="M-60,-30 Q-90,0 -70,40 L10,40 Q30,0 -10,-30 Z" fill="#7F5A38" /> {/* Left leg/shorts */}
                  <path d="M-10,-30 Q10,0 10,40 L70,40 Q90,0 60,-30 Z" fill="#7F5A38" /> {/* Right leg/shorts */}
                  
                  {/* Farmer's head with turban */}
                  <circle cx="0" cy="-110" r="40" fill="#CF9D7C" /> {/* Face */}
                  <path d="M-20,-115 C-10,-120 10,-120 20,-115" stroke="black" strokeWidth="3" fill="none" /> {/* Eyebrows */}
                  <ellipse cx="-15" cy="-105" rx="5" ry="3" fill="black" /> {/* Left eye */}
                  <ellipse cx="15" cy="-105" rx="5" ry="3" fill="black" /> {/* Right eye */}
                  <path d="M0,-95 L-5,-80 L5,-80 Z" fill="black" /> {/* Nose */}
                  <path d="M-15,-80 C-5,-75 5,-75 15,-80" stroke="black" strokeWidth="2" fill="none" /> {/* Mouth */}
                  <path d="M-10,-85 L10,-85 L15,-75 L-15,-75 Z" fill="black" /> {/* Mustache */}
                  
                  {/* Turban */}
                  <path d="M-35,-140 Q-40,-165 -20,-175 Q0,-185 20,-175 Q40,-165 35,-140 Q30,-130 0,-130 Q-30,-130 -35,-140 Z" fill="#FF6B35" />
                  <path d="M-35,-140 Q-30,-150 0,-150 Q30,-150 35,-140" stroke="#DE5A2C" strokeWidth="3" fill="none" />
                  <ellipse cx="0" cy="-140" rx="35" ry="15" fill="#FF6B35" />
                  
                  {/* Arms and hands */}
                  <path d="M-50,-50 Q-70,-20 -40,10" stroke="#CF9D7C" strokeWidth="25" fill="none" /> {/* Left arm */}
                  <path d="M50,-50 Q70,-20 40,10" stroke="#CF9D7C" strokeWidth="25" fill="none" /> {/* Right arm */}
                </g>
                
                {/* Laptop */}
                <g transform="translate(400, 500)">
                  <rect x="-80" y="-10" width="160" height="10" fill="#4A6375" /> {/* Laptop base */}
                  <rect x="-80" y="-80" width="160" height="70" rx="5" fill="#4A6375" /> {/* Laptop screen */}
                  <rect x="-70" y="-70" width="140" height="50" fill="#333333" /> {/* Screen display */}
                  <circle cx="0" cy="-45" r="5" fill="#666" /> {/* Laptop logo */}
                </g>
                
                {/* Solar Panel */}
                <g transform="translate(650, 450)">
                  <rect x="-50" y="-80" width="100" height="80" fill="#2C3E50" /> {/* Panel frame */}
                  <rect x="-45" y="-75" width="90" height="70" fill="#7FB3D5" /> {/* Panel glass */}
                  
                  {/* Grid lines */}
                  <line x1="-45" y1="-55" x2="45" y2="-55" stroke="#2C3E50" strokeWidth="2" />
                  <line x1="-45" y1="-35" x2="45" y2="-35" stroke="#2C3E50" strokeWidth="2" />
                  <line x1="-45" y1="-15" x2="45" y2="-15" stroke="#2C3E50" strokeWidth="2" />
                  <line x1="-15" y1="-75" x2="-15" y2="-5" stroke="#2C3E50" strokeWidth="2" />
                  <line x1="15" y1="-75" x2="15" y2="-5" stroke="#2C3E50" strokeWidth="2" />
                  
                  {/* Panel stand */}
                  <rect x="-5" y="0" width="10" height="50" fill="#7F8C8D" />
                </g>
                
                {/* Water pump and irrigation */}
                <g transform="translate(700, 520)">
                  <rect x="-20" y="-20" width="40" height="20" fill="#7F8C8D" /> {/* Pump base */}
                  <path d="M-10,-20 L-10,-40 Q0,-50 10,-40 L10,-20" fill="#5D6D7E" /> {/* Pump top */}
                  <path d="M-20,-10 L-40,-10 L-40,20 Q-40,40 -20,40 Q0,40 0,20 L0,-10" fill="#5D6D7E" /> {/* Pipe horizontal */}
                  <path d="M-40,20 Q-50,20 -50,10 Q-50,0 -40,0" fill="none" stroke="#5D6D7E" strokeWidth="10" /> {/* Pipe elbow */}
                  
                  {/* Water flow */}
                  <path d="M-50,5 C-70,5 -60,40 -80,40" fill="none" stroke="#6CBAE5" strokeWidth="8" strokeLinecap="round" />
                  <ellipse cx="-80" cy="50" rx="20" ry="10" fill="#6CBAE5" fillOpacity="0.7" />
                  <ellipse cx="-80" cy="50" rx="15" ry="5" fill="#FFFFFF" fillOpacity="0.3" />
                </g>
              </svg>
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-green-800">AI in Agriculture</h3>
              <p className="text-gray-700">Revolutionizing farming with AI technology</p>
              <div className="mt-4">
                <a href="/technology/agriculture-farming" className="text-green-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Smart Solutions Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-80 relative">
              <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background with subtle pattern */}
                <rect width="400" height="300" fill="#f5f9ff" />
                <pattern id="smartPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                  <rect width="20" height="20" fill="#f5f9ff"/>
                  <path d="M0,10 L20,10" stroke="#e3f2fd" strokeWidth="1"/>
                  <path d="M10,0 L10,20" stroke="#e3f2fd" strokeWidth="1"/>
                </pattern>
                <rect width="400" height="300" fill="url(#smartPattern)" opacity="0.4"/>
                
                {/* Computer/Device - multi-color */}
                <rect x="100" y="80" width="200" height="140" rx="10" fill="#e3f2fd" stroke="#64b5f6" strokeWidth="2"/>
                <rect x="120" y="100" width="160" height="100" rx="5" fill="#bbdefb" stroke="#2196f3" strokeWidth="2"/>
                
                {/* Base/Stand */}
                <circle cx="200" cy="240" r="10" fill="#42a5f5"/>
                <rect x="195" y="230" width="10" height="20" fill="#42a5f5"/>
                
                {/* Code/UI Elements - multi-color */}
                <path d="M140 120L160 140L140 160" stroke="#1976d2" strokeWidth="3"/>
                <path d="M180 140H220" stroke="#0d47a1" strokeWidth="3"/>
                <path d="M260 120L240 140L260 160" stroke="#1976d2" strokeWidth="3"/>
                
                {/* Circuit elements - colorful */}
                <circle cx="90" cy="100" r="5" fill="#29b6f6"/>
                <circle cx="310" cy="100" r="5" fill="#29b6f6"/>
                <circle cx="90" cy="200" r="5" fill="#0288d1"/>
                <circle cx="310" cy="200" r="5" fill="#0288d1"/>
                <path d="M90 100L90 200" stroke="#4fc3f7" strokeWidth="1.5"/>
                <path d="M310 100L310 200" stroke="#4fc3f7" strokeWidth="1.5"/>
                <path d="M90 100L60 100" stroke="#4fc3f7" strokeWidth="1.5"/>
                <path d="M310 100L340 100" stroke="#4fc3f7" strokeWidth="1.5"/>
                <path d="M90 200L60 200" stroke="#03a9f4" strokeWidth="1.5"/>
                <path d="M310 200L340 200" stroke="#03a9f4" strokeWidth="1.5"/>
                
                {/* Digital elements */}
                <rect x="60" y="90" width="20" height="20" rx="2" fill="#b3e5fc" stroke="#0277bd" strokeWidth="1"/>
                <rect x="50" y="190" width="20" height="20" rx="2" fill="#b3e5fc" stroke="#0277bd" strokeWidth="1"/>
                <rect x="320" y="90" width="20" height="20" rx="2" fill="#b3e5fc" stroke="#0277bd" strokeWidth="1"/>
                <rect x="320" y="190" width="20" height="20" rx="2" fill="#b3e5fc" stroke="#0277bd" strokeWidth="1"/>
                <path d="M65 100L75 100" stroke="#01579b" strokeWidth="1"/>
                <path d="M70 95L70 105" stroke="#01579b" strokeWidth="1"/>
                <path d="M325 100L335 100" stroke="#01579b" strokeWidth="1"/>
                <path d="M330 95L330 105" stroke="#01579b" strokeWidth="1"/>
                <path d="M55 200L65 200" stroke="#01579b" strokeWidth="1"/>
                <path d="M325 200L335 200" stroke="#01579b" strokeWidth="1"/>
              </svg>
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-blue-800">Smart Solutions</h3>
              <p className="text-gray-700">Intelligent systems for modern businesses</p>
              <div className="mt-4">
                <a href="/ai-intelligence" className="text-blue-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Future Tech Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-80 relative">
              <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background with subtle pattern */}
                <rect width="400" height="300" fill="#f9f5ff" />
                <pattern id="futurePattern" patternUnits="userSpaceOnUse" width="40" height="40">
                  <rect width="40" height="40" fill="#f9f5ff"/>
                  <circle cx="20" cy="20" r="15" stroke="#f3e5f5" strokeWidth="1" fill="none"/>
                </pattern>
                <rect width="400" height="300" fill="url(#futurePattern)" opacity="0.4"/>
                
                {/* Core elements - multi-color */}
                <path d="M200 50V250" stroke="#9575cd" strokeWidth="4"/>
                <path d="M150 70L200 50L250 70" stroke="#7e57c2" strokeWidth="3"/>
                <path d="M150 230L200 250L250 230" stroke="#7e57c2" strokeWidth="3"/>
                
                {/* Central circle - gradient */}
                <circle cx="200" cy="150" r="60" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="3"/>
                <circle cx="200" cy="150" r="50" fill="#f8bbd0" strokeOpacity="0.4" stroke="#e91e63" strokeWidth="1"/>
                
                {/* Inner details - multi-color */}
                <path d="M180 130L200 150L220 130" stroke="#673ab7" strokeWidth="3"/>
                <path d="M180 170L200 150L220 170" stroke="#512da8" strokeWidth="3"/>
                
                {/* Outer circuit - colorful */}
                <path d="M140 150C140 122.386 162.386 100 190 100H210C237.614 100 260 122.386 260 150C260 177.614 237.614 200 210 200H190C162.386 200 140 177.614 140 150Z" 
                      stroke="#ba68c8" strokeWidth="2" fill="none" strokeDasharray="8 4"/>
                      
                {/* Connection points - different colors */}
                <circle cx="140" cy="150" r="5" fill="#d500f9"/>
                <circle cx="260" cy="150" r="5" fill="#d500f9"/>
                <circle cx="200" cy="50" r="5" fill="#aa00ff"/>
                <circle cx="200" cy="250" r="5" fill="#aa00ff"/>
                
                {/* Additional connectors - colorful */}
                <path d="M140 150L100 150" stroke="#ce93d8" strokeWidth="1.5"/>
                <path d="M260 150L300 150" stroke="#ce93d8" strokeWidth="1.5"/>
                <path d="M200 50L200 30" stroke="#e040fb" strokeWidth="1.5"/>
                <path d="M200 250L200 270" stroke="#e040fb" strokeWidth="1.5"/>
                
                {/* Futuristic elements */}
                <circle cx="100" cy="150" r="15" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="1"/>
                <circle cx="300" cy="150" r="15" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="1"/>
                <path d="M95 145L105 155" stroke="#6a1b9a" strokeWidth="1.5"/>
                <path d="M105 145L95 155" stroke="#6a1b9a" strokeWidth="1.5"/>
                <path d="M295 145L305 155" stroke="#6a1b9a" strokeWidth="1.5"/>
                <path d="M305 145L295 155" stroke="#6a1b9a" strokeWidth="1.5"/>
                <circle cx="200" cy="30" r="10" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="1"/>
                <circle cx="200" cy="270" r="10" fill="#f3e5f5" stroke="#9c27b0" strokeWidth="1"/>
                <path d="M195 30H205" stroke="#6a1b9a" strokeWidth="1.5"/>
                <path d="M200 25L200 35" stroke="#6a1b9a" strokeWidth="1.5"/>
                <path d="M195 270H205" stroke="#6a1b9a" strokeWidth="1.5"/>
              </svg>
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-purple-800">Future Tech</h3>
              <p className="text-gray-700">Pioneering the future of technology</p>
              <div className="mt-4">
                <a href="/development" className="text-purple-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;
