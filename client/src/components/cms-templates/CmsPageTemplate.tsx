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
 * 2. Auto-creates content if none exists and defaultContent is provided
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
  
  // Auto-create content if none exists and defaultContent is provided
  useEffect(() => {
    const autoCreateContentIfNeeded = async () => {
      // Only auto-create if we have defaultContent and no existing content
      if (defaultContent.length > 0 && !isLoading && content.length === 0) {
        try {
          console.log(`Auto-creating content for ${pageLocation} page`);
          
          const success = await initializeCmsContent(pageLocation, defaultContent);
          
          if (success) {
            // Use a more subtle notification for auto-creation
            toast({
              title: "Content Ready",
              description: `${pageLocation} content has been initialized and is ready to edit.`,
              variant: "default"
            });
            
            // Refresh the page to show the new content
            window.location.reload();
          }
        } catch (error) {
          console.error("Error auto-creating CMS content:", error);
          // No toast for error during auto-creation to avoid confusing users
        }
      }
    };
    
    autoCreateContentIfNeeded();
  }, [pageLocation, defaultContent, content, isLoading, toast]);
  
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
