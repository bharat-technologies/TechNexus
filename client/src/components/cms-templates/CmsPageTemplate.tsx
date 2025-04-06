import { useEffect } from 'react';
import { useCmsContent, initializeCmsContent } from '@/hooks/use-cms-content';
import { useToast } from '@/hooks/use-toast';
import EditPageButton from '@/components/cms-ui/EditPageButton';
import { CMSContent } from '@/hooks/use-cms-content';

interface CmsPageTemplateProps {
  pageLocation: string;
  children: (props: {
    content: CMSContent[];
    isLoading: boolean;
    getContentByType: (type: string) => CMSContent | undefined;
    getAllContentByType: (type: string) => CMSContent[];
  }) => React.ReactNode;
  defaultContent?: CMSContent[];
  editButtonProps?: {
    position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' | 'custom';
    customPositionClass?: string;
    filterQuery?: string;
  };
}

/**
 * A template component to add CMS capabilities to any page
 * 
 * This component:
 * 1. Fetches CMS content for the specified page location
 * 2. Provides a way to initialize default content if needed
 * 3. Renders an edit button in CMS mode
 * 4. Passes content and helper functions to children
 */
const CmsPageTemplate = ({ 
  pageLocation, 
  children, 
  defaultContent = [],
  editButtonProps = {}
}: CmsPageTemplateProps) => {
  const { content, isLoading, getContentByType, getAllContentByType } = useCmsContent(pageLocation);
  const { toast } = useToast();
  
  // Initialize content if requested via URL parameter
  useEffect(() => {
    const checkAndCreateContent = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('create_cms_content') === 'true' && defaultContent.length > 0) {
        try {
          toast({
            title: "Creating Content",
            description: `Initializing ${pageLocation} page content...`,
            variant: "default"
          });
          
          const success = await initializeCmsContent(pageLocation, defaultContent);
          
          if (success) {
            toast({
              title: "Content Created",
              description: `${pageLocation} page content has been initialized. Please refresh the page.`,
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
    
    checkAndCreateContent();
  }, [pageLocation, defaultContent, toast]);
  
  return (
    <div className="relative">
      <EditPageButton 
        pageLocation={pageLocation} 
        position={editButtonProps.position || 'top-right'}
        customPositionClass={editButtonProps.customPositionClass}
        filterQuery={editButtonProps.filterQuery}
      />
      
      {children({
        content,
        isLoading,
        getContentByType,
        getAllContentByType
      })}
    </div>
  );
};

export default CmsPageTemplate;
