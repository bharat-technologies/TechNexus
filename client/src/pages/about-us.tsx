import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Edit, Plus, Save, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface AboutPageSection {
  title: string;
  content: string;
  order?: number;
}

interface ValueItem {
  title: string;
  description: string;
}

interface ContentItem {
  id: number;
  type: string;
  pageLocation: string;
  name: string;
  title: string;
  content?: string;
  order: number;
  isActive: boolean;
}

const AboutUs = () => {
  const [pageTitle, setPageTitle] = useState('About Us');
  const [sections, setSections] = useState<AboutPageSection[]>([
    {
      title: "Our Story",
      content: "Bharat Technologies was founded in 2015 with a vision to revolutionize the technology landscape in India and beyond. What started as a small team of passionate innovators has now grown into a global technology company with a presence in multiple countries.\n\nOur journey has been defined by our commitment to innovation, excellence, and customer satisfaction. We have consistently pushed the boundaries of what's possible, developing cutting-edge solutions that address complex challenges across industries."
    },
    {
      title: "Our Mission",
      content: "At Bharat Technologies, our mission is to empower organizations through innovative technology solutions that drive growth, efficiency, and competitive advantage. We aim to be at the forefront of technological advancement, creating products and services that shape the future."
    },
    {
      title: "Our Vision",
      content: "To be a global leader in technology innovation, recognized for our excellence, integrity, and the transformative impact of our solutions on businesses and society."
    }
  ]);
  
  const [values, setValues] = useState<ValueItem[]>([
    {
      title: "Innovation",
      description: "We embrace creativity and continuously seek new ways to solve problems and create value."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality in everything we do."
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical standards."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve extraordinary results."
    }
  ]);

  // Helper function to create About Us content if needed
  const createAboutUsContent = async () => {
    // Only do this from CMS mode
    if (!isCmsEnvironment()) return;
    
    // Create the default content if there's none
    const aboutUsContent = [
      {
        id: 0,
        type: 'title',
        pageLocation: 'about-us',
        name: 'About Us Title',
        title: 'About Us',
        order: 0,
        isActive: true
      },
      {
        id: 0,
        type: 'story',
        pageLocation: 'about-us',
        name: 'Our Story',
        title: 'Our Story',
        content: "Bharat Technologies was founded in 2015 with a vision to revolutionize the technology landscape in India and beyond. What started as a small team of passionate innovators has now grown into a global technology company with a presence in multiple countries.\n\nOur journey has been defined by our commitment to innovation, excellence, and customer satisfaction. We have consistently pushed the boundaries of what's possible, developing cutting-edge solutions that address complex challenges across industries.",
        order: 1,
        isActive: true
      },
      {
        id: 0,
        type: 'mission',
        pageLocation: 'about-us',
        name: 'Our Mission',
        title: 'Our Mission',
        content: "At Bharat Technologies, our mission is to empower organizations through innovative technology solutions that drive growth, efficiency, and competitive advantage. We aim to be at the forefront of technological advancement, creating products and services that shape the future.",
        order: 2,
        isActive: true
      },
      {
        id: 0,
        type: 'vision',
        pageLocation: 'about-us',
        name: 'Our Vision',
        title: 'Our Vision',
        content: "To be a global leader in technology innovation, recognized for our excellence, integrity, and the transformative impact of our solutions on businesses and society.",
        order: 3,
        isActive: true
      },
      {
        id: 0,
        type: 'value',
        pageLocation: 'about-us',
        name: 'Innovation Value',
        title: 'Innovation',
        content: "We embrace creativity and continuously seek new ways to solve problems and create value.",
        order: 4,
        isActive: true
      },
      {
        id: 0,
        type: 'value',
        pageLocation: 'about-us',
        name: 'Excellence Value',
        title: 'Excellence',
        content: "We are committed to delivering the highest quality in everything we do.",
        order: 5,
        isActive: true
      },
      {
        id: 0,
        type: 'value',
        pageLocation: 'about-us',
        name: 'Integrity Value',
        title: 'Integrity',
        content: "We conduct our business with honesty, transparency, and ethical standards.",
        order: 6,
        isActive: true
      },
      {
        id: 0,
        type: 'value',
        pageLocation: 'about-us',
        name: 'Collaboration Value',
        title: 'Collaboration',
        content: "We believe in the power of teamwork and partnerships to achieve extraordinary results.",
        order: 7,
        isActive: true
      }
    ];
    
    // Create the content if a specific parameter is provided
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('create_cms_content') === 'true') {
      try {
        for (const content of aboutUsContent) {
          await fetch('/api/cms/website-content', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
          });
        }
        
        // Reload the page without the query parameter
        window.location.href = window.location.pathname;
      } catch (error) {
        console.error("Failed to create About Us content:", error);
      }
    }
  };

  // Fetch content from the CMS
  const { data } = useQuery({
    queryKey: ['/api/cms/website-content'],
    queryFn: async () => {
      const response = await fetch('/api/cms/website-content');
      return response.json();
    }
  });

  useEffect(() => {
    document.title = 'About Us - Bharat Technologies';
    
    // Check if we need to create content in CMS mode
    createAboutUsContent();
    
    // Process CMS data when available
    if (data?.success && data?.data) {
      const aboutContent = data.data.filter((item: any) => 
        item.pageLocation === 'about-us' && item.isActive
      );
      
      if (aboutContent.length > 0) {
        // Extract title if there's a specific title content
        const titleContent = aboutContent.find((item: any) => item.type === 'title');
        if (titleContent) {
          setPageTitle(titleContent.title);
        }
        
        // Extract sections (story, mission, vision)
        const sectionContent = aboutContent.filter((item: any) => 
          ['story', 'mission', 'vision'].includes(item.type)
        );
        
        if (sectionContent.length > 0) {
          const mappedSections = sectionContent.map((section: any) => ({
            title: section.title,
            content: section.content || '',
            order: section.order || 0
          }));
          
          if (mappedSections.length > 0) {
            setSections(mappedSections.sort((a: AboutPageSection, b: AboutPageSection) => (a.order || 0) - (b.order || 0)));
          }
        }
        
        // Extract values
        const valueContent = aboutContent.filter((item: any) => item.type === 'value');
        if (valueContent.length > 0) {
          const mappedValues = valueContent.map((value: any) => ({
            title: value.title,
            description: value.content || ''
          }));
          
          if (mappedValues.length > 0) {
            setValues(mappedValues);
          }
        }
      }
    }
  }, [data]);

  // Helper function to split content into paragraphs
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-lg mb-4">
        {paragraph}
      </p>
    ));
  };

  // Check if we're in the CMS environment
  const isCmsEnvironment = () => {
    return window.location.pathname.includes('/cms') || 
           window.location.search.includes('cms=true') ||
           localStorage.getItem('cms_mode') === 'true';
  };
  
  // Direct edit functionality
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
  const [originalContent, setOriginalContent] = useState<ContentItem[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Save original content data for editing
  useEffect(() => {
    if (data?.success && data?.data) {
      const aboutContent = data.data.filter((item: any) => 
        item.pageLocation === 'about-us'
      );
      setOriginalContent(aboutContent);
    }
  }, [data]);
  
  // Handle direct editing of content
  const handleDirectEdit = (type: string) => {
    const contentToEdit = originalContent.find(item => item.type === type);
    if (contentToEdit) {
      setEditingContent({...contentToEdit});
      setIsEditDialogOpen(true);
    } else {
      toast({
        title: "Content Not Found",
        description: `Cannot find content with type: ${type}`,
        variant: "destructive"
      });
    }
  };
  
  // Update content mutation
  const updateContentMutation = useMutation({
    mutationFn: async (content: ContentItem) => {
      const response = await fetch(`/api/cms/website-content/${content.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update content');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/website-content'] });
      setIsEditDialogOpen(false);
      setEditingContent(null);
      
      toast({
        title: "Content Updated",
        description: "The content has been updated successfully",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update content",
        variant: "destructive"
      });
    }
  });
  
  // Handle saving edited content
  const handleSaveContent = () => {
    if (!editingContent) return;
    updateContentMutation.mutate(editingContent);
  };

  return (
    <>
      <main>
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">{pageTitle}</h1>
            
            {/* Edit button that's only visible when accessed from CMS or with special params */}
            {isCmsEnvironment() && (
              <div className="flex justify-center mt-4 space-x-4">
                <Button asChild variant="outline" className="bg-white text-black border-white hover:bg-gray-200">
                  <Link href="/cms/website-content?filter=about-us">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Page Content
                  </Link>
                </Button>
                
                {/* Initialize content button */}
                <Button 
                  variant="outline" 
                  className="bg-white text-black border-white hover:bg-gray-200"
                  onClick={() => window.location.href = '/about-us?create_cms_content=true&cms=true'}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Initialize Content
                </Button>
              </div>
            )}
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {sections.map((section, index) => (
                <div className="mb-12" data-aos="fade-up" data-aos-delay={index * 100} key={section.title}>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-poppins font-bold text-3xl">{section.title}</h2>
                    {isCmsEnvironment() && (
                      <Button 
                        onClick={() => handleDirectEdit(section.title === 'Our Story' ? 'story' : section.title === 'Our Mission' ? 'mission' : 'vision')}
                        size="sm"
                        variant="outline"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                    )}
                  </div>
                  {renderContent(section.content)}
                </div>
              ))}

              <div data-aos="fade-up" data-aos-delay={300}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-poppins font-bold text-3xl">Our Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div className="bg-gray-100 p-6 rounded-lg relative" key={index}>
                      <div className="flex justify-between mb-3">
                        <h3 className="font-poppins font-semibold text-xl">{value.title}</h3>
                        {isCmsEnvironment() && (
                          <Button 
                            onClick={() => handleDirectEdit(`value-${value.title.toLowerCase()}`)}
                            size="sm"
                            variant="outline"
                            className="h-7 px-2"
                          >
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        )}
                      </div>
                      <p>{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Content Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Content</DialogTitle>
            <DialogDescription>
              Make changes to the content and save when you're done.
            </DialogDescription>
          </DialogHeader>
          {editingContent && (
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={editingContent.title}
                  onChange={(e) => {
                    if (editingContent) {
                      setEditingContent({
                        ...editingContent,
                        title: e.target.value
                      });
                    }
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-content">Content</Label>
                <Textarea
                  id="edit-content"
                  value={editingContent.content || ''}
                  onChange={(e) => {
                    if (editingContent) {
                      setEditingContent({
                        ...editingContent,
                        content: e.target.value
                      });
                    }
                  }}
                  className="min-h-[200px]"
                />
              </div>
            </div>
          )}
          <DialogFooter className="flex gap-2 justify-between sm:justify-between">
            <Button 
              variant="outline" 
              onClick={() => setIsEditDialogOpen(false)}
              className="mt-2 sm:mt-0"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              onClick={handleSaveContent}
              disabled={updateContentMutation.isPending}
              className="mt-2 sm:mt-0"
            >
              {updateContentMutation.isPending ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AboutUs;
