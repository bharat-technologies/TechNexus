import { useEffect, useState, useRef } from 'react';
import { useCmsContent, initializeCmsContent } from '@/hooks/use-cms-content';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';

const AboutCms = () => {
  const { content, isLoading, getContentByType, getAllContentByType } = useCmsContent('home');
  const { toast } = useToast();
  
  // State for section content
  const [title, setTitle] = useState('About Us');
  const [description, setDescription] = useState('We specialize in AI, cloud, cybersecurity, and space technologies to shape a better future.');
  const [features, setFeatures] = useState([
    {
      icon: 'fas fa-robot',
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for modern businesses'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cyber Security',
      description: 'Protecting your digital assets with cutting-edge security'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for growing enterprises'
    }
  ]);
  
  // Check if we're in the CMS environment
  const isCmsEnvironment = () => {
    return window.location.pathname.includes('/cms') || 
           window.location.search.includes('cms=true') ||
           localStorage.getItem('cms_mode') === 'true';
  };
  
  // Initialize CMS content if requested
  const createHomeAboutContent = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('create_cms_content') === 'true') {
      try {
        toast({
          title: "Creating Content",
          description: "Initializing Home page About section content...",
          variant: "default"
        });
        
        const defaultContent = [
          {
            id: 0,
            type: 'home-about-title',
            pageLocation: 'home',
            name: 'Home About Title',
            title: 'About Us',
            content: 'About section title on the home page',
            order: 1,
            isActive: true
          },
          {
            id: 0,
            type: 'home-about-description',
            pageLocation: 'home',
            name: 'Home About Description',
            title: 'About Description',
            content: 'We specialize in AI, cloud, cybersecurity, and space technologies to shape a better future.',
            order: 2,
            isActive: true
          },
          {
            id: 0,
            type: 'home-about-feature',
            pageLocation: 'home',
            name: 'AI Solutions Feature',
            title: 'AI Solutions',
            content: 'Advanced artificial intelligence solutions for modern businesses',
            imageUrl: 'fas fa-robot',
            order: 3,
            isActive: true
          },
          {
            id: 0,
            type: 'home-about-feature',
            pageLocation: 'home',
            name: 'Cyber Security Feature',
            title: 'Cyber Security',
            content: 'Protecting your digital assets with cutting-edge security',
            imageUrl: 'fas fa-shield-alt',
            order: 4,
            isActive: true
          },
          {
            id: 0,
            type: 'home-about-feature',
            pageLocation: 'home',
            name: 'Cloud Services Feature',
            title: 'Cloud Services',
            content: 'Scalable cloud solutions for growing enterprises',
            imageUrl: 'fas fa-cloud',
            order: 5,
            isActive: true
          }
        ];
        
        const success = await initializeCmsContent('home', defaultContent);
        
        if (success) {
          toast({
            title: "Content Created",
            description: "Home page About section content has been initialized. Please refresh the page.",
            variant: "default"
          });
          
          // Refresh the page without the create_cms_content parameter
          const url = new URL(window.location.href);
          url.searchParams.delete('create_cms_content');
          window.location.href = url.toString();
        } else {
          toast({
            title: "Error",
            description: "Failed to initialize content. Please try again.",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error("Error creating CMS content:", error);
        toast({
          title: "Error",
          description: "An error occurred while creating content.",
          variant: "destructive"
        });
      }
    }
  };
  
  // Process CMS data when available
  useEffect(() => {
    // Only run createHomeAboutContent once when component mounts
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('create_cms_content') === 'true') {
      createHomeAboutContent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Store content accessors in refs to prevent dependency changes
  const getContentByTypeRef = useRef(getContentByType);
  const getAllContentByTypeRef = useRef(getAllContentByType);
  
  // Separate effect for updating content states
  useEffect(() => {
    if (!isLoading && content.length > 0) {
      // Get title
      const titleContent = getContentByTypeRef.current('home-about-title');
      if (titleContent) {
        setTitle(titleContent.title);
      }
      
      // Get description
      const descriptionContent = getContentByTypeRef.current('home-about-description');
      if (descriptionContent) {
        setDescription(descriptionContent.content || '');
      }
      
      // Get features
      const featureContents = getAllContentByTypeRef.current('home-about-feature');
      if (featureContents.length > 0) {
        const mappedFeatures = featureContents.map(feature => ({
          icon: feature.imageUrl || 'fas fa-cog',
          title: feature.title,
          description: feature.content || ''
        }));
        setFeatures(mappedFeatures);
      }
    }
  }, [content, isLoading]);
  
  return (
    <section id="about" className="py-20 bg-white relative">
      {isCmsEnvironment() && (
        <div className="absolute top-4 right-4">
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => window.location.href = '/cms/website-content?filter=home'}
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Content
          </Button>
        </div>
      )}
    
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16" data-aos="fade-up">{title}</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="200">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" data-aos="fade-up" data-aos-delay="400">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl text-black mb-6">
                <i className={feature.icon}></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCms;