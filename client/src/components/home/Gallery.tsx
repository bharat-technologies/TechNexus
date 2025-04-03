import farmerTechImage from '../../assets/farmer_tech.png';
import smartSolutionsImage from '../../assets/Smart_Solutions_01.png';

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16" data-aos="fade-up">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="200">
          
          {/* AI in Agriculture Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-80 px-0 py-0 bg-cyan-50 overflow-hidden">
              <img src={farmerTechImage} alt="Farmer using technology in a field" className="w-full h-full object-cover" style={{ objectPosition: '50% 20%', transform: 'scale(1.1)' }} />
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
            <div className="w-full h-80 px-0 py-0 bg-blue-50 overflow-hidden">
              <img src={smartSolutionsImage} alt="Business professional using smart solutions" className="w-full h-full object-cover" />
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
