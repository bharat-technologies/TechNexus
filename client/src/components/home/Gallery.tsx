import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16" data-aos="fade-up">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          
          {/* AI in Agriculture Card */}
          <motion.div 
            className="gallery-item overflow-hidden rounded-lg shadow-lg relative group bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="w-full h-80 relative">
              <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background with subtle pattern */}
                <rect width="400" height="300" fill="#f8faf7" />
                <pattern id="agriculturePattern" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(45)">
                  <rect width="30" height="30" fill="#f8faf7"/>
                  <path d="M0,15 L30,15" stroke="#e8f5e9" strokeWidth="2"/>
                  <path d="M15,0 L15,30" stroke="#e8f5e9" strokeWidth="2"/>
                </pattern>
                <rect width="400" height="300" fill="url(#agriculturePattern)" opacity="0.4"/>
                
                {/* AI Icon with multi-color elements */}
                <circle cx="200" cy="150" r="80" fill="#f0f9f0" stroke="#a5d6a7" strokeWidth="2"/>
                
                {/* Face features - multi-color */}
                <path d="M160 180C180 200 220 200 240 180" stroke="#43a047" strokeWidth="3"/>
                <circle cx="160" cy="120" r="10" fill="#00bfa5"/>
                <circle cx="240" cy="120" r="10" fill="#4caf50"/>
                
                {/* Additional details - multi-color */}
                <path d="M140 220C160 240 240 240 260 220" stroke="#00796b" strokeWidth="3"/>
                <path d="M120 100L160 120" stroke="#26a69a" strokeWidth="2"/>
                <path d="M280 100L240 120" stroke="#26a69a" strokeWidth="2"/>
                <rect x="150" y="60" width="100" height="30" rx="5" fill="#81c784" fillOpacity="0.7"/>
                <rect x="170" y="30" width="60" height="30" rx="5" fill="#66bb6a" fillOpacity="0.8"/>
                
                {/* Circuit elements - lighter colors */}
                <circle cx="120" cy="80" r="5" fill="#9ccc65"/>
                <circle cx="280" cy="80" r="5" fill="#9ccc65"/>
                <circle cx="140" cy="240" r="5" fill="#26a69a"/>
                <circle cx="260" cy="240" r="5" fill="#26a69a"/>
                <path d="M120 80L90 80" stroke="#81c784" strokeWidth="1.5"/>
                <path d="M280 80L310 80" stroke="#81c784" strokeWidth="1.5"/>
                <path d="M140 240L110 240" stroke="#26a69a" strokeWidth="1.5"/>
                <path d="M260 240L290 240" stroke="#26a69a" strokeWidth="1.5"/>
                
                {/* Plant elements */}
                <path d="M100 260C120 240 120 220 100 200" stroke="#7cb342" strokeWidth="2" fill="none"/>
                <path d="M90 230C110 220 120 210 120 190" stroke="#7cb342" strokeWidth="2" fill="none"/>
                <circle cx="90" cy="190" r="5" fill="#aed581"/>
                <circle cx="100" cy="200" r="4" fill="#aed581"/>
                <path d="M300 260C280 240 280 220 300 200" stroke="#7cb342" strokeWidth="2" fill="none"/>
                <path d="M310 230C290 220 280 210 280 190" stroke="#7cb342" strokeWidth="2" fill="none"/>
                <circle cx="310" cy="190" r="5" fill="#aed581"/>
                <circle cx="300" cy="200" r="4" fill="#aed581"/>
              </svg>
              
              {/* Animated particle effects */}
              <motion.div 
                className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-green-500"
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <motion.div 
                className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-teal-500"
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
            </div>
            
            <div className="gallery-overlay absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-green-100/50 flex flex-col justify-center items-center text-gray-800 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
              <div className="bg-white/80 px-6 py-4 rounded-lg shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-2 text-green-800">AI in Agriculture</h3>
                <p className="text-center text-gray-700">Revolutionizing farming with AI technology</p>
                <div className="mt-4 pt-2 border-t border-green-200 w-16 mx-auto"></div>
                <p className="mt-2 text-sm text-green-600 font-medium">Explore Solutions →</p>
              </div>
            </div>
          </motion.div>
          
          {/* Smart Solutions Card */}
          <motion.div 
            className="gallery-item overflow-hidden rounded-lg shadow-lg relative group bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
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
              
              {/* Animated particle effects */}
              <motion.div 
                className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-blue-400"
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <motion.div 
                className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-500"
                animate={{ 
                  x: [0, -8, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ 
                  duration: 2.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.7
                }}
              />
            </div>
            
            <div className="gallery-overlay absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-blue-100/50 flex flex-col justify-center items-center text-gray-800 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
              <div className="bg-white/80 px-6 py-4 rounded-lg shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-2 text-blue-800">Smart Solutions</h3>
                <p className="text-center text-gray-700">Intelligent systems for modern businesses</p>
                <div className="mt-4 pt-2 border-t border-blue-200 w-16 mx-auto"></div>
                <p className="mt-2 text-sm text-blue-600 font-medium">Explore Solutions →</p>
              </div>
            </div>
          </motion.div>
          
          {/* Future Tech Card */}
          <motion.div 
            className="gallery-item overflow-hidden rounded-lg shadow-lg relative group bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
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
              
              {/* Animated particle effects */}
              <motion.div 
                className="absolute top-2/3 right-1/5 w-2 h-2 rounded-full bg-purple-500"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <motion.div 
                className="absolute top-1/5 left-1/5 w-3 h-3 rounded-full bg-indigo-400"
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
              
              <motion.div 
                className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
            
            <div className="gallery-overlay absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-purple-100/50 flex flex-col justify-center items-center text-gray-800 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
              <div className="bg-white/80 px-6 py-4 rounded-lg shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-2 text-purple-800">Future Tech</h3>
                <p className="text-center text-gray-700">Pioneering the future of technology</p>
                <div className="mt-4 pt-2 border-t border-purple-200 w-16 mx-auto"></div>
                <p className="mt-2 text-sm text-purple-600 font-medium">Explore Solutions →</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;
