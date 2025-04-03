import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

import farmerTechImage from '../../assets/farmer_tech.png';
import smartSolutionsImage from '../../assets/Smart_Solutions_01.png';
import futureTechImage from '../../assets/Future-Tech_01.png';
import cybersecurityImage from '@assets/Cyber-Security_02.png';
import healthcareImage from '../../assets/healthcare.png';
import defenceImage from '../../assets/defence.png';
import bankingTechImage from '@assets/Banking-Tech_02.png';

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Card data for easy mapping
  const cards = [
    {
      image: farmerTechImage,
      alt: "Farmer using technology in a field",
      bgColor: "bg-cyan-50",
      title: "AI in Agriculture",
      titleColor: "text-green-800",
      description: "Revolutionizing farming with AI technology",
      link: "/technology/agriculture-farming",
      linkColor: "text-green-600"
    },
    {
      image: smartSolutionsImage,
      alt: "Business professional using smart solutions",
      bgColor: "bg-blue-50",
      title: "Smart Solutions",
      titleColor: "text-blue-800",
      description: "Intelligent systems for modern businesses",
      link: "/ai-intelligence",
      linkColor: "text-blue-600"
    },
    {
      image: futureTechImage,
      alt: "Future technology with woman in purple blazer",
      bgColor: "bg-purple-50",
      title: "Future Tech",
      titleColor: "text-purple-800",
      description: "Pioneering the future of technology",
      link: "/development",
      linkColor: "text-purple-600"
    },
    {
      image: cybersecurityImage,
      alt: "Cybersecurity professional with shield protecting against threats",
      bgColor: "bg-blue-50",
      title: "Cyber Security",
      titleColor: "text-blue-800",
      description: "Advanced protection for critical data systems and infrastructure",
      link: "/cyber-security",
      linkColor: "text-blue-600"
    },
    {
      image: healthcareImage,
      alt: "Healthcare AI technology with robotic hand",
      bgColor: "bg-indigo-50",
      title: "Healthcare",
      titleColor: "text-indigo-800",
      description: "AI-powered solutions for better patient care and diagnostics",
      link: "/technology/healthcare",
      linkColor: "text-indigo-600"
    },
    {
      image: defenceImage,
      alt: "Defence and Space technology with AI integration",
      bgColor: "bg-gray-50",
      title: "Defence and Space",
      titleColor: "text-gray-800",
      description: "Intelligent systems for national security and space exploration",
      link: "/defence",
      linkColor: "text-gray-600"
    },
    {
      image: bankingTechImage,
      alt: "Mobile banking and UPI payment systems with digital transactions",
      bgColor: "bg-sky-50",
      title: "Banking and Payments",
      titleColor: "text-sky-800",
      description: "Digital solutions for finance and secure payment systems",
      link: "/solutions/banking",
      linkColor: "text-sky-600"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16 mt-4" data-aos="fade-up">Our AI Solutions</h2>
        
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4" 
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onScroll={(e) => {
                // This prevents the parent container from scrolling while this element is being scrolled
                e.stopPropagation();
              }}
            >
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="flex-none w-full md:w-[calc(33.333%-21px)] snap-center"
                >
                  <div className="gallery-item h-full overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105 flex flex-col">
                    <div className={`w-full h-96 px-0 py-0 ${card.bgColor} overflow-hidden`}>
                      <img 
                        src={card.image} 
                        alt={card.alt} 
                        className="w-full h-full object-contain object-center p-4"
                      />
                    </div>
                    
                    <div className="p-6 bg-white flex flex-col h-[180px]">
                      <h3 className={`font-poppins font-semibold text-xl mb-2 ${card.titleColor}`}>{card.title}</h3>
                      <p className="text-gray-700 flex-grow">{card.description}</p>
                      <div className="mt-4">
                        <a href={card.link} className={`${card.linkColor} font-medium text-sm inline-flex items-center`}>
                          Explore Solutions <span className="ml-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={scrollLeft}
            className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full h-12 w-12 shadow-md flex items-center justify-center hover:bg-gray-100 border-2 border-gray-200 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full h-12 w-12 shadow-md flex items-center justify-center hover:bg-gray-100 border-2 border-gray-200 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
