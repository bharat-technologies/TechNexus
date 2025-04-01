import { Link } from 'wouter';
import { motion } from 'framer-motion';
import aiTechImage from '@/assets/ai-tech-image.png';
import AnimatedHeroImage from './AnimatedHeroImage';
import FloatingElements from './FloatingElements';

const Hero = () => {
  return (
    <header className="bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <FloatingElements />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-up">
            <motion.h1 
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to<br/>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Bharat Technologies
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Innovating the future with cutting-edge technology solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link href="/about-us">
                <a className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">Learn More</a>
              </Link>
              <Link href="/#contact">
                <a className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300">Get Started</a>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-full max-w-xl p-4 bg-white rounded-lg shadow relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 rounded-lg opacity-20 blur-lg"></div>
              
              <div className="relative">
                <AnimatedHeroImage 
                  imageSrc={aiTechImage}
                  altText="AI and Technologies illustration showing human and robot shaking hands"
                  className="w-full h-auto"
                />
              </div>
              
              <motion.div 
                className="text-center mt-2 text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <span className="block italic">Hover over the image to explore interactions</span>
              </motion.div>
            </div>
            
            {/* Animated dot decorations */}
            <motion.div 
              className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div 
              className="absolute -top-4 -right-4 w-3 h-3 bg-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
