import { useState, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import farmerTechImage from '../../assets/farmer_tech.png';
import smartSolutionsImage from '../../assets/Smart_Solutions_01.png';
import futureTechImage from '../../assets/Future-Tech_01.png';
import cybersecurityImage from '../../assets/cybersecurity.png';
import healthcareImage from '../../assets/healthcare.png';
import defenceImage from '../../assets/defence.png';
import spaceImage from '../../assets/space.png';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalItems = 7; // total number of cards
  const itemsPerPage = 3; // show 3 cards per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      alt: "Cybersecurity technology with robot hand",
      bgColor: "bg-red-50",
      title: "Cyber Security",
      titleColor: "text-red-800",
      description: "Advanced protection for critical data and systems",
      link: "/cyber-security",
      linkColor: "text-red-600"
    },
    {
      image: healthcareImage,
      alt: "Healthcare AI technology with robotic hand",
      bgColor: "bg-indigo-50",
      title: "Healthcare",
      titleColor: "text-indigo-800",
      description: "AI-powered solutions for better patient care",
      link: "/technology/healthcare",
      linkColor: "text-indigo-600"
    },
    {
      image: defenceImage,
      alt: "Defence technology with AI integration",
      bgColor: "bg-gray-50",
      title: "Defence",
      titleColor: "text-gray-800",
      description: "Intelligent systems for national security",
      link: "/defence",
      linkColor: "text-gray-600"
    },
    {
      image: spaceImage,
      alt: "Space technology with data analysis",
      bgColor: "bg-blue-50",
      title: "Space",
      titleColor: "text-blue-800",
      description: "Advanced data analysis for space exploration",
      link: "/solutions/space",
      linkColor: "text-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16 mt-4" data-aos="fade-up">Our AI Solutions</h2>
        
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            ref={carouselRef}
            onSelect={(index) => setCurrentPage(Math.floor(index / itemsPerPage))}
          >
            <CarouselContent className="-ml-4">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3">
                  <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
                    <div className={`w-full h-96 px-0 py-0 ${card.bgColor} overflow-hidden`}>
                      <img src={card.image} alt={card.alt} className="w-full h-full object-fill" />
                    </div>
                    
                    <div className="p-6 bg-white">
                      <h3 className={`font-poppins font-semibold text-xl mb-2 ${card.titleColor}`}>{card.title}</h3>
                      <p className="text-gray-700">{card.description}</p>
                      <div className="mt-4">
                        <a href={card.link} className={`${card.linkColor} font-medium text-sm inline-flex items-center`}>
                          Explore Solutions <span className="ml-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2">
              <CarouselPrevious className="h-12 w-12 border-2 border-gray-300 shadow-md hover:bg-gray-100" />
            </div>
            
            <div className="absolute -right-10 top-1/2 transform -translate-y-1/2">
              <CarouselNext className="h-12 w-12 border-2 border-gray-300 shadow-md hover:bg-gray-100" />
            </div>
          </Carousel>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${currentPage === i ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
