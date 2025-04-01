import { motion } from 'framer-motion';

const Gallery = () => {
  // Define theme gradients for each card
  const gradients = {
    agriculture: {
      background: "linear-gradient(135deg, #43a047 0%, #1de9b6 100%)",
      text: "#e8f5e9"
    },
    smart: {
      background: "linear-gradient(135deg, #2962ff 0%, #00b0ff 100%)",
      text: "#e3f2fd"
    },
    future: {
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", 
      text: "#e0f7fa"
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16" data-aos="fade-up">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          
          {/* AI in Agriculture Card */}
          <motion.div 
            className="gallery-item overflow-hidden rounded-lg shadow-lg relative group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="w-full h-80 relative">
              <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="agricultureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#43a047" />
                    <stop offset="100%" stopColor="#1de9b6" />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect width="400" height="300" fill="url(#agricultureGradient)" />
                
                {/* AI Icon */}
                <circle cx="200" cy="150" r="80" fill="#ffffff" fillOpacity="0.2"/>
                <circle cx="200" cy="150" r="70" fill="#ffffff" fillOpacity="0.1"/>
                
                {/* Face features */}
                <path d="M160 180C180 200 220 200 240 180" stroke="#ffffff" strokeWidth="3"/>
                <circle cx="160" cy="120" r="10" fill="#ffffff"/>
                <circle cx="240" cy="120" r="10" fill="#ffffff"/>
                
                {/* Additional details */}
                <path d="M140 220C160 240 240 240 260 220" stroke="#ffffff" strokeWidth="3" opacity="0.8"/>
                <path d="M120 100L160 120M280 100L240 120" stroke="#ffffff" strokeWidth="2" opacity="0.8"/>
                <rect x="150" y="60" width="100" height="30" rx="5" fill="#ffffff" fillOpacity="0.3"/>
                <rect x="170" y="30" width="60" height="30" rx="5" fill="#ffffff" fillOpacity="0.3"/>
                
                {/* Circuit elements */}
                <circle cx="120" cy="80" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="280" cy="80" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="140" cy="240" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="260" cy="240" r="5" fill="#ffffff" opacity="0.8"/>
                <path d="M120 80L90 80M280 80L310 80" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                <path d="M140 240L110 240M260 240L290 240" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
              </svg>
              
              {/* Animated particle effects */}
              <motion.div 
                className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-white"
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
                className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-white"
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
            
            <div className="gallery-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="font-poppins font-semibold text-xl mb-2">AI in Agriculture</h3>
              <p className="text-center">Revolutionizing farming with AI technology</p>
              <div className="mt-4 pt-2 border-t border-white border-opacity-20 w-16"></div>
              <p className="mt-2 text-sm opacity-80">Explore Solutions →</p>
            </div>
          </motion.div>
          
          {/* Smart Solutions Card */}
          <motion.div 
            className="gallery-item overflow-hidden rounded-lg shadow-lg relative group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="w-full h-80 relative">
              <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="smartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2962ff" />
                    <stop offset="100%" stopColor="#00b0ff" />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect width="400" height="300" fill="url(#smartGradient)" />
                
                {/* Computer/Device */}
                <rect x="100" y="80" width="200" height="140" rx="10" fill="#ffffff" fillOpacity="0.2"/>
                <rect x="120" y="100" width="160" height="100" rx="5" fill="#ffffff" fillOpacity="0.3"/>
                
                {/* Base/Stand */}
                <circle cx="200" cy="240" r="10" fill="#ffffff" fillOpacity="0.4"/>
                <rect x="195" y="230" width="10" height="20" fill="#ffffff" fillOpacity="0.4"/>
                
                {/* Code/UI Elements */}
                <path d="M140 120L160 140L140 160" stroke="#ffffff" strokeWidth="3"/>
                <path d="M180 140H220" stroke="#ffffff" strokeWidth="3"/>
                <path d="M260 120L240 140L260 160" stroke="#ffffff" strokeWidth="3"/>
                
                {/* Circuit elements */}
                <circle cx="90" cy="100" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="310" cy="100" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="90" cy="200" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="310" cy="200" r="5" fill="#ffffff" opacity="0.8"/>
                <path d="M90 100L90 200" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                <path d="M310 100L310 200" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                <path d="M90 100L60 100M310 100L340 100" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                <path d="M90 200L60 200M310 200L340 200" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
              </svg>
              
              {/* Animated particle effects */}
              <motion.div 
                className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white"
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
                className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-white"
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
            
            <div className="gallery-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="font-poppins font-semibold text-xl mb-2">Smart Solutions</h3>
              <p className="text-center">Intelligent systems for modern businesses</p>
              <div className="mt-4 pt-2 border-t border-white border-opacity-20 w-16"></div>
              <p className="mt-2 text-sm opacity-80">Explore Solutions →</p>
            </div>
          </motion.div>
          
          {/* Future Tech Card */}
          <motion.div 
            className="gallery-item overflow-hidden rounded-lg shadow-lg relative group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="w-full h-80 relative">
              <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="futureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6a11cb" />
                    <stop offset="100%" stopColor="#2575fc" />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect width="400" height="300" fill="url(#futureGradient)" />
                
                {/* Core elements */}
                <path d="M200 50V250" stroke="#ffffff" strokeWidth="4"/>
                <path d="M150 70L200 50L250 70" stroke="#ffffff" strokeWidth="3"/>
                <path d="M150 230L200 250L250 230" stroke="#ffffff" strokeWidth="3"/>
                
                {/* Central circle */}
                <circle cx="200" cy="150" r="60" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeWidth="3"/>
                <circle cx="200" cy="150" r="50" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeWidth="1"/>
                
                {/* Inner details */}
                <path d="M180 130L200 150L220 130" stroke="#ffffff" strokeWidth="3"/>
                <path d="M180 170L200 150L220 170" stroke="#ffffff" strokeWidth="3"/>
                
                {/* Outer circuit */}
                <path d="M140 150C140 122.386 162.386 100 190 100H210C237.614 100 260 122.386 260 150C260 177.614 237.614 200 210 200H190C162.386 200 140 177.614 140 150Z" 
                      stroke="#ffffff" strokeWidth="2" fill="none" strokeDasharray="8 4"/>
                      
                {/* Connection points */}
                <circle cx="140" cy="150" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="260" cy="150" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="200" cy="50" r="5" fill="#ffffff" opacity="0.8"/>
                <circle cx="200" cy="250" r="5" fill="#ffffff" opacity="0.8"/>
                
                {/* Additional connectors */}
                <path d="M140 150L100 150" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                <path d="M260 150L300 150" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                <path d="M200 50L200 30" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
                <path d="M200 250L200 270" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
              </svg>
              
              {/* Animated particle effects */}
              <motion.div 
                className="absolute top-2/3 right-1/5 w-2 h-2 rounded-full bg-white"
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
                className="absolute top-1/5 left-1/5 w-3 h-3 rounded-full bg-white"
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
                className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
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
            
            <div className="gallery-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="font-poppins font-semibold text-xl mb-2">Future Tech</h3>
              <p className="text-center">Pioneering the future of technology</p>
              <div className="mt-4 pt-2 border-t border-white border-opacity-20 w-16"></div>
              <p className="mt-2 text-sm opacity-80">Explore Solutions →</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;
