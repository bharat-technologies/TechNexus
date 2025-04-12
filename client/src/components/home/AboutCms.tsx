import { useEffect } from 'react';
import { useCmsContent, initializeCmsContent, type CMSContent } from '@/hooks/use-cms-content';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Define feature interface
interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Simple component with no state management, just renders what it gets
const AboutCms = () => {
  const { content, isLoading } = useCmsContent('home');
  const { toast } = useToast();
  
  // Default values - used only when CMS data is not available
  const defaultTitle = 'About Us';
  const defaultDescription = 'We specialize in AI, cloud, cybersecurity, and space technologies to shape a better future.';
  const defaultFeatures: Feature[] = [
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
    },
    {
      icon: 'fas fa-satellite',
      title: 'Space Technology',
      description: 'Advanced solutions for satellite communications and space exploration'
    },
    {
      icon: 'fas fa-sync',
      title: 'Multi-Cloud Integration',
      description: 'Seamless integration across cloud platforms for maximum flexibility and resilience'
    }
  ];
  
  // Handle content initialization if needed
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('create_cms_content') === 'true') {
      const createContent = async () => {
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
            },
            {
              id: 0,
              type: 'home-about-feature',
              pageLocation: 'home',
              name: 'Space Technology Feature',
              title: 'Space Technology',
              content: 'Advanced solutions for satellite communications and space exploration',
              imageUrl: 'fas fa-satellite',
              order: 6,
              isActive: true
            },
            {
              id: 0,
              type: 'home-about-feature',
              pageLocation: 'home',
              name: 'Multi-Cloud Integration Feature',
              title: 'Multi-Cloud Integration',
              content: 'Seamless integration across cloud platforms for maximum flexibility and resilience',
              imageUrl: 'fas fa-sync',
              order: 7,
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
      };
      
      createContent();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Extract data directly without using state
  // This is crucial to prevent infinite update loops
  const findContentByType = (type: string) => content?.find(item => item.type === type);
  const filterContentByType = (typePattern: string) => content?.filter(item => item.type.startsWith(typePattern)) || [];
  
  // Only compute these when we have content and it's not loading
  const titleContent = !isLoading && content ? findContentByType('home-about-title') : null;
  const descriptionContent = !isLoading && content ? findContentByType('home-about-description') : null;
  const featureContents = !isLoading && content ? filterContentByType('home-about-feature') : [];
  
  // Use CMS values if available, otherwise fallback to defaults
  const title = titleContent?.title || defaultTitle;
  const description = descriptionContent?.content || defaultDescription;
  const features: Feature[] = featureContents.length > 0 
    ? featureContents.map((feature: CMSContent): Feature => ({
        icon: feature.imageUrl || 'fas fa-cog',
        title: feature.title,
        description: feature.content || ''
      })) 
    : defaultFeatures;
  
  // Check if we're in the CMS environment
  const isCmsEnvironment = () => {
    return window.location.pathname.includes('/cms') || 
           window.location.search.includes('cms=true') ||
           localStorage.getItem('cms_mode') === 'true';
  };
  
  return (
    <section id="about" className="py-20 bg-gray-50 relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-8" data-aos="fade-up" data-aos-delay="400">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-black rounded-lg mb-6 flex items-center justify-center">
                <i className={`${feature.icon} text-white`} style={{ fontSize: "1.25rem" }}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCms;