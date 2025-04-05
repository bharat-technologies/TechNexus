import { useQuery } from "@tanstack/react-query";

export interface CMSContent {
  id: number;
  type: string;
  pageLocation: string;
  name: string;
  title: string;
  subtitle?: string;
  content?: string;
  ctaText?: string;
  ctaUrl?: string;
  imageUrl?: string;
  order: number;
  isActive: boolean;
}

interface CMSContentResponse {
  success: boolean;
  data: CMSContent[];
}

/**
 * Hook to fetch CMS content for a specific page location 
 * @param pageLocation - The page location to filter content for (e.g., 'home', 'about-us')
 * @param contentType - Optional specific content type to filter by
 * @returns Object containing the filtered content, loading state, and error
 */
export function useCmsContent(pageLocation: string, contentType?: string) {
  // Fetch all CMS content
  const { data, isLoading, error } = useQuery<CMSContentResponse>({
    queryKey: ['/api/cms/website-content'],
    queryFn: async () => {
      const response = await fetch('/api/cms/website-content');
      return response.json();
    }
  });

  // Get all content for this page location
  let pageContent: CMSContent[] = [];
  if (data?.success && data?.data) {
    // Filter by page location
    pageContent = data.data.filter(item => 
      (item.pageLocation === pageLocation) && item.isActive
    );

    // Further filter by content type if specified
    if (contentType) {
      pageContent = pageContent.filter(item => item.type === contentType);
    }

    // Group items by type and name to handle duplicates
    const groupedContent: Record<string, CMSContent[]> = {};
    pageContent.forEach(item => {
      const key = `${item.type}-${item.name}`;
      if (!groupedContent[key]) {
        groupedContent[key] = [];
      }
      groupedContent[key].push(item);
    });

    // Get only the latest version of each content item (highest ID)
    pageContent = Object.values(groupedContent).map(items => {
      return items.reduce((latest, current) => 
        current.id > latest.id ? current : latest, items[0]
      );
    });

    // Sort by order field
    pageContent.sort((a, b) => a.order - b.order);
  }

  // Get a specific content item by type
  const getContentByType = (type: string): CMSContent | undefined => {
    return pageContent.find(item => item.type === type);
  };

  // Get all content items matching a certain type pattern (e.g., 'feature-*')
  const getAllContentByType = (typePattern: string): CMSContent[] => {
    return pageContent.filter(item => item.type.startsWith(typePattern));
  };

  return {
    content: pageContent,
    isLoading,
    error,
    getContentByType,
    getAllContentByType
  };
}

/**
 * Helper function to initialize CMS content for a page
 * @param pageLocation - Page identifier (e.g., 'home', 'about-us')
 * @param defaultContent - Array of default content items to create
 */
export async function initializeCmsContent(
  pageLocation: string, 
  defaultContent: Omit<CMSContent, 'id'>[]
): Promise<boolean> {
  try {
    let successCount = 0;
    
    for (const content of defaultContent) {
      const response = await fetch('/api/cms/website-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...content,
          pageLocation
        })
      });
      
      if (response.ok) {
        successCount++;
      }
    }
    
    return successCount > 0;
  } catch (error) {
    console.error('Error initializing CMS content:', error);
    return false;
  }
}