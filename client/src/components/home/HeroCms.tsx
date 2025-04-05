import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import aiTechImage from '@/assets/ai-tech-image.png';
import AnimatedHeroImage from './AnimatedHeroImage';
import FloatingElements from './FloatingElements';
import { useCmsContent, initializeCmsContent } from '@/hooks/use-cms-content';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroCms = () => {
  const { content, isLoading, getContentByType } = useCmsContent('home');
  const { toast } = useToast();
  
  // State for hero content
  const [heading, setHeading] = useState('Welcome to');
  const [subheading, setSubheading] = useState('Bharat Technologies');
  const [description, setDescription] = useState('Innovating the future with cutting-edge technology solutions.');
  const [primaryButtonText, setPrimaryButtonText] = useState('Learn More');
  const [primaryButtonUrl, setPrimaryButtonUrl] = useState('/about-us');
  const [secondaryButtonText, setSecondaryButtonText] = useState('Get Started');
  const [secondaryButtonUrl, setSecondaryButtonUrl] = useState('/#contact');
  const [heroImageUrl, setHeroImageUrl] = useState(aiTechImage);
  const [heroImageAlt, setHeroImageAlt] = useState('AI and Technologies illustration showing human and robot shaking hands');
  
  // Check if we're in the CMS environment
  const isCmsEnvironment = () => {
    return window.location.pathname.includes('/cms') || 
           window.location.search.includes('cms=true') ||
           localStorage.getItem('cms_mode') === 'true';
  };
  
  // Initialize CMS content if requested
  const createHeroContent = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('create_cms_content') === 'true') {
      try {
        const defaultContent = [
          {
            id: 0,
            type: 'home-hero-heading',
            pageLocation: 'home',
            name: 'Hero Heading',
            title: 'Welcome to',
            content: 'Welcome message for the home page hero section',
            order: 1,
            isActive: true
          },
          {
            id: 0,
            type: 'home-hero-subheading',
            pageLocation: 'home',
            name: 'Hero Subheading',
            title: 'Bharat Technologies',
            content: 'Company name displayed in the hero section',
            order: 2,
            isActive: true
          },
          {
            id: 0,
            type: 'home-hero-description',
            pageLocation: 'home',
            name: 'Hero Description',
            title: 'Hero Description',
            content: 'Innovating the future with cutting-edge technology solutions.',
            order: 3,
            isActive: true
          },
          {
            id: 0,
            type: 'home-hero-primary-button',
            pageLocation: 'home',
            name: 'Primary Button',
            title: 'Learn More',
            content: 'Primary action button in hero section',
            ctaUrl: '/about-us',
            order: 4,
            isActive: true
          },
          {
            id: 0,
            type: 'home-hero-secondary-button',
            pageLocation: 'home',
            name: 'Secondary Button',
            title: 'Get Started',
            content: 'Secondary action button in hero section',
            ctaUrl: '/#contact',
            order: 5,
            isActive: true
          },
          {
            id: 0,
            type: 'home-hero-image',
            pageLocation: 'home',
            name: 'Hero Image',
            title: 'Hero Image',
            content: 'AI and Technologies illustration showing human and robot shaking hands',
            imageUrl: '',  // We can't actually store the image in CMS without a file upload system
            order: 6,
            isActive: true
          }
        ];
        
        await initializeCmsContent('home', defaultContent);
      } catch (error) {
        console.error("Error creating Hero CMS content:", error);
      }
    }
  };
  
  // Process CMS data when available
  useEffect(() => {
    createHeroContent();
    
    if (!isLoading && content.length > 0) {
      // Get heading
      const headingContent = getContentByType('home-hero-heading');
      if (headingContent) {
        setHeading(headingContent.title);
      }
      
      // Get subheading
      const subheadingContent = getContentByType('home-hero-subheading');
      if (subheadingContent) {
        setSubheading(subheadingContent.title);
      }
      
      // Get description
      const descriptionContent = getContentByType('home-hero-description');
      if (descriptionContent) {
        setDescription(descriptionContent.content || '');
      }
      
      // Get primary button
      const primaryButtonContent = getContentByType('home-hero-primary-button');
      if (primaryButtonContent) {
        setPrimaryButtonText(primaryButtonContent.title);
        if (primaryButtonContent.ctaUrl) {
          setPrimaryButtonUrl(primaryButtonContent.ctaUrl);
        }
      }
      
      // Get secondary button
      const secondaryButtonContent = getContentByType('home-hero-secondary-button');
      if (secondaryButtonContent) {
        setSecondaryButtonText(secondaryButtonContent.title);
        if (secondaryButtonContent.ctaUrl) {
          setSecondaryButtonUrl(secondaryButtonContent.ctaUrl);
        }
      }
      
      // Get image alt text (we can't change the actual image without a file upload system)
      const imageContent = getContentByType('home-hero-image');
      if (imageContent && imageContent.content) {
        setHeroImageAlt(imageContent.content);
      }
    }
  }, [content, isLoading, getContentByType]);
  
  return (
    <header className="bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <FloatingElements />
      
      {isCmsEnvironment() && (
        <div className="absolute top-4 right-4 z-50">
          <Button asChild size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30">
            <Link href="/cms/website-content?filter=home">
              <Edit className="h-4 w-4 mr-2" />
              Edit Hero
            </Link>
          </Button>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-up">
            <motion.h1 
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {heading}<br/>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {subheading}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link href={primaryButtonUrl}>
                <a className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">{primaryButtonText}</a>
              </Link>
              <Link href={secondaryButtonUrl}>
                <a className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300">{secondaryButtonText}</a>
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
                  imageSrc={heroImageUrl}
                  altText={heroImageAlt}
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

export default HeroCms;