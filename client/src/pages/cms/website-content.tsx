import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft, Edit, Eye, Plus, Save, Check, X, Trash2, ChevronRight, ChevronDown, Filter } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the content types that appear on the website
interface WebsiteContent {
  id: number;
  uniqueId?: string; // Add the uniqueId field
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

// Define the predefined content types for each page
interface ContentTypeDefinition {
  type: string;
  displayName: string;
  description: string;
}

// Define hierarchical structure matching the website navbar
const CONTENT_CATEGORIES = {
  ABOUT_US: 'About Us',
  CORE_TECHNOLOGIES: 'Core Technologies',
  SECURITY_DEFENSE: 'Security & Defense',
  SPECIALIZED_TECHNOLOGIES: 'Specialized Technologies',
  PRODUCTS: 'Products',
  SOLUTIONS_INDUSTRIES: 'Solutions - Industries',
  SOLUTIONS_ENTERPRISE: 'Solutions - Enterprise Applications',
  SUPPORT_SERVICES: 'Support & Services',
  CONTACT: 'Contact'
};

const PAGE_LOCATIONS = {
  // Home
  HOME: 'home',
  
  // About Us
  ABOUT_US: 'about-us',
  OUR_TEAM: 'our-team',
  CAREERS: 'careers',
  
  // Core Technologies
  AI_INTELLIGENCE: 'ai-intelligence',
  CLOUD_STACK: 'cloud-stack',
  MULTI_CLOUD: 'multi-cloud',
  
  // Security & Defense
  CYBER_SECURITY: 'cyber-security',
  DEFENCE: 'defence',
  SPACE: 'space',
  
  // Specialized Technologies
  AGRICULTURE: 'agriculture-farming',
  HEALTH_CARE: 'health-care',
  LIFE_SUPPORT: 'life-support',
  
  // Products
  ANALYTICS_CLOUD: 'products/analytics-cloud',
  BUSINESS_NETWORK: 'products/business-network-cloud',
  CONTENT_CLOUD: 'products/content-cloud',
  CYBERSECURITY_CLOUD: 'products/cybersecurity-cloud',
  DEVOPS_CLOUD: 'products/devops-cloud',
  EXPERIENCE_CLOUD: 'products/experience-cloud',
  OBSERVABILITY: 'products/observability-service-management',
  PRODUCTS_AZ: 'products/a-z-listing',
  PRODUCT_NAMES: 'products/name-changes',
  
  // Solutions - Industries
  BANKING: 'solutions/banking',
  FINANCIAL_SERVICES: 'solutions/financial-services',
  HEALTHCARE_SOLUTIONS: 'solutions/healthcare',
  OIL_GAS: 'solutions/oil-gas',
  INDUSTRIAL: 'solutions/industrial-manufacturing',
  PUBLIC_SECTOR: 'solutions/public-sector',
  UTILITIES: 'solutions/utilities',
  ALL_INDUSTRIES: 'solutions/all-industries',
  
  // Solutions - Enterprise
  SAP: 'solutions/sap',
  MICROSOFT: 'solutions/microsoft',
  SALESFORCE: 'solutions/salesforce',
  
  // Support & Services
  CONSULTING: 'consulting',
  DEVELOPMENT: 'development',
  SUPPORT: 'support',
  
  // Contact
  CALL_US: 'contact/call',
  EMAIL_US: 'contact/email'
};

// Define hierarchy for filtering
const CONTENT_HIERARCHY = {
  about: {
    name: CONTENT_CATEGORIES.ABOUT_US,
    pages: [
      PAGE_LOCATIONS.ABOUT_US,
      PAGE_LOCATIONS.OUR_TEAM,
      PAGE_LOCATIONS.CAREERS
    ]
  },
  technology: {
    name: 'Technology',
    children: {
      coreTechnologies: {
        name: CONTENT_CATEGORIES.CORE_TECHNOLOGIES,
        pages: [
          PAGE_LOCATIONS.AI_INTELLIGENCE,
          PAGE_LOCATIONS.CLOUD_STACK,
          PAGE_LOCATIONS.MULTI_CLOUD
        ]
      },
      securityDefense: {
        name: CONTENT_CATEGORIES.SECURITY_DEFENSE,
        pages: [
          PAGE_LOCATIONS.CYBER_SECURITY,
          PAGE_LOCATIONS.DEFENCE,
          PAGE_LOCATIONS.SPACE
        ]
      },
      specialized: {
        name: CONTENT_CATEGORIES.SPECIALIZED_TECHNOLOGIES,
        pages: [
          PAGE_LOCATIONS.AGRICULTURE,
          PAGE_LOCATIONS.HEALTH_CARE,
          PAGE_LOCATIONS.LIFE_SUPPORT
        ]
      }
    }
  },
  products: {
    name: CONTENT_CATEGORIES.PRODUCTS,
    children: {
      cloudProducts: {
        name: 'Cloud Products',
        pages: [
          PAGE_LOCATIONS.ANALYTICS_CLOUD,
          PAGE_LOCATIONS.BUSINESS_NETWORK,
          PAGE_LOCATIONS.CONTENT_CLOUD,
          PAGE_LOCATIONS.CYBERSECURITY_CLOUD
        ]
      },
      platform: {
        name: 'Platform',
        pages: [
          PAGE_LOCATIONS.DEVOPS_CLOUD,
          PAGE_LOCATIONS.EXPERIENCE_CLOUD,
          PAGE_LOCATIONS.OBSERVABILITY
        ]
      },
      resources: {
        name: 'Resources',
        pages: [
          PAGE_LOCATIONS.PRODUCTS_AZ,
          PAGE_LOCATIONS.PRODUCT_NAMES
        ]
      }
    }
  },
  solutions: {
    name: 'Solutions',
    children: {
      industries: {
        name: CONTENT_CATEGORIES.SOLUTIONS_INDUSTRIES,
        pages: [
          PAGE_LOCATIONS.BANKING,
          PAGE_LOCATIONS.FINANCIAL_SERVICES,
          PAGE_LOCATIONS.HEALTHCARE_SOLUTIONS,
          PAGE_LOCATIONS.OIL_GAS,
          PAGE_LOCATIONS.INDUSTRIAL,
          PAGE_LOCATIONS.PUBLIC_SECTOR,
          PAGE_LOCATIONS.UTILITIES,
          PAGE_LOCATIONS.ALL_INDUSTRIES
        ]
      },
      enterprise: {
        name: CONTENT_CATEGORIES.SOLUTIONS_ENTERPRISE,
        pages: [
          PAGE_LOCATIONS.SAP,
          PAGE_LOCATIONS.MICROSOFT,
          PAGE_LOCATIONS.SALESFORCE
        ]
      }
    }
  },
  support: {
    name: CONTENT_CATEGORIES.SUPPORT_SERVICES,
    pages: [
      PAGE_LOCATIONS.CONSULTING,
      PAGE_LOCATIONS.DEVELOPMENT,
      PAGE_LOCATIONS.SUPPORT
    ]
  },
  contact: {
    name: CONTENT_CATEGORIES.CONTACT,
    pages: [
      PAGE_LOCATIONS.CALL_US,
      PAGE_LOCATIONS.EMAIL_US
    ]
  },
  home: {
    name: 'Home',
    pages: [
      PAGE_LOCATIONS.HOME
    ]
  }
};

const CONTENT_TYPES: Record<string, ContentTypeDefinition[]> = {
  // Core Technologies
  [PAGE_LOCATIONS.HOME]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main hero banner at the top of the home page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting product benefits' },
    { type: 'testimonial', displayName: 'Testimonial', description: 'Client testimonials and success stories' },
    { type: 'cta', displayName: 'Call to Action', description: 'Call to action sections with buttons' }
  ],
  [PAGE_LOCATIONS.ABOUT_US]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for About Us page' },
    { type: 'story', displayName: 'Our Story', description: 'Company history and background' },
    { type: 'mission', displayName: 'Our Mission', description: 'Company mission statement' },
    { type: 'vision', displayName: 'Our Vision', description: 'Company vision for the future' },
    { type: 'value', displayName: 'Company Value', description: 'Core company values' },
    { type: 'team', displayName: 'Team Member', description: 'Team member profiles' }
  ],
  [PAGE_LOCATIONS.AI_INTELLIGENCE]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for AI Intelligence page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting AI capabilities' },
    { type: 'use-case', displayName: 'Use Case', description: 'Practical applications of AI technology' },
    { type: 'approach', displayName: 'Approach', description: 'Our approach to AI development' }
  ],
  [PAGE_LOCATIONS.CLOUD_STACK]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Cloud Stack page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting cloud capabilities' },
    { type: 'service', displayName: 'Service', description: 'Specific cloud services offered' }
  ],
  [PAGE_LOCATIONS.MULTI_CLOUD]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Multi-Cloud page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting multi-cloud capabilities' },
    { type: 'advantage', displayName: 'Advantage', description: 'Benefits of multi-cloud architecture' }
  ],
  
  // Security & Defense
  [PAGE_LOCATIONS.CYBER_SECURITY]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Cyber Security page' },
    { type: 'threat', displayName: 'Threat Protection', description: 'Information about threat protection services' },
    { type: 'security-solution', displayName: 'Security Solution', description: 'Details about specific security solutions' },
    { type: 'security-service', displayName: 'Security Service', description: 'Ongoing security services offered' }
  ],
  [PAGE_LOCATIONS.DEFENCE]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Defence page' },
    { type: 'defence-solution', displayName: 'Defence Solution', description: 'Defence technology solutions' },
    { type: 'defence-capability', displayName: 'Defence Capability', description: 'Specific defence capabilities' }
  ],
  [PAGE_LOCATIONS.SPACE]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Space page' },
    { type: 'space-technology', displayName: 'Space Technology', description: 'Space technology innovations' },
    { type: 'space-service', displayName: 'Space Service', description: 'Space-related services' }
  ],
  
  // Specialized Technologies
  [PAGE_LOCATIONS.AGRICULTURE]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Agriculture & Farming page' },
    { type: 'farming-solution', displayName: 'Farming Solution', description: 'Agricultural technology solutions' },
    { type: 'case-study', displayName: 'Case Study', description: 'Real-world implementation case studies' }
  ],
  [PAGE_LOCATIONS.HEALTH_CARE]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Health Care page' },
    { type: 'healthcare-solution', displayName: 'Healthcare Solution', description: 'Healthcare technology solutions' },
    { type: 'medical-innovation', displayName: 'Medical Innovation', description: 'Medical technology innovations' }
  ],
  [PAGE_LOCATIONS.LIFE_SUPPORT]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Life Support page' },
    { type: 'life-support-solution', displayName: 'Life Support Solution', description: 'Life support system solutions' },
    { type: 'emergency-system', displayName: 'Emergency System', description: 'Emergency and critical systems' }
  ],
  
  // Products - Cloud Products
  [PAGE_LOCATIONS.ANALYTICS_CLOUD]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Analytics Cloud page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting analytics capabilities' },
    { type: 'use-case', displayName: 'Use Case', description: 'Practical applications of analytics cloud' },
    { type: 'pricing', displayName: 'Pricing Tier', description: 'Pricing information for analytics cloud' }
  ],
  [PAGE_LOCATIONS.BUSINESS_NETWORK]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Business Network Cloud page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting business network capabilities' },
    { type: 'integration', displayName: 'Integration', description: 'Integration options with other systems' },
    { type: 'pricing', displayName: 'Pricing Tier', description: 'Pricing information for business network cloud' }
  ],
  [PAGE_LOCATIONS.CONTENT_CLOUD]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Content Cloud page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting content cloud capabilities' },
    { type: 'content-type', displayName: 'Content Type', description: 'Types of content supported' },
    { type: 'pricing', displayName: 'Pricing Tier', description: 'Pricing information for content cloud' }
  ],
  [PAGE_LOCATIONS.CYBERSECURITY_CLOUD]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Cybersecurity Cloud page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting cybersecurity capabilities' },
    { type: 'security-layer', displayName: 'Security Layer', description: 'Layers of security provided' },
    { type: 'threat-protection', displayName: 'Threat Protection', description: 'Types of threats protected against' },
    { type: 'pricing', displayName: 'Pricing Tier', description: 'Pricing information for cybersecurity cloud' }
  ],
  
  // Products - Platform
  [PAGE_LOCATIONS.DEVOPS_CLOUD]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for DevOps Cloud page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting DevOps capabilities' },
    { type: 'tool', displayName: 'Tool', description: 'DevOps tools provided' },
    { type: 'integration', displayName: 'Integration', description: 'Integration with CI/CD pipelines' },
    { type: 'pricing', displayName: 'Pricing Tier', description: 'Pricing information for DevOps cloud' }
  ],
  [PAGE_LOCATIONS.EXPERIENCE_CLOUD]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Experience Cloud page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting experience cloud capabilities' },
    { type: 'use-case', displayName: 'Use Case', description: 'Practical applications of experience cloud' },
    { type: 'pricing', displayName: 'Pricing Tier', description: 'Pricing information for experience cloud' }
  ],
  [PAGE_LOCATIONS.OBSERVABILITY]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Observability Service Management page' },
    { type: 'feature', displayName: 'Feature', description: 'Feature section highlighting observability capabilities' },
    { type: 'monitoring', displayName: 'Monitoring Tool', description: 'Monitoring tools provided' },
    { type: 'dashboard', displayName: 'Dashboard', description: 'Available dashboards and metrics' },
    { type: 'pricing', displayName: 'Pricing Tier', description: 'Pricing information for observability service' }
  ],
  
  // Products - Resources
  [PAGE_LOCATIONS.PRODUCTS_AZ]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for A-Z Product Listing page' },
    { type: 'category', displayName: 'Product Category', description: 'Category of products' },
    { type: 'product-item', displayName: 'Product Item', description: 'Individual product listing' }
  ],
  [PAGE_LOCATIONS.PRODUCT_NAMES]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Product Name Changes page' },
    { type: 'name-change', displayName: 'Name Change', description: 'Information about product name changes' },
    { type: 'faq', displayName: 'FAQ', description: 'Frequently asked questions about name changes' }
  ],
  
  // Other
  [PAGE_LOCATIONS.CAREERS]: [
    { type: 'hero', displayName: 'Hero Section', description: 'Main banner for Careers page' },
    { type: 'job-listing', displayName: 'Job Listing', description: 'Open position details' },
    { type: 'benefits', displayName: 'Benefits', description: 'Employee benefits information' },
    { type: 'culture', displayName: 'Company Culture', description: 'Information about company culture' }
  ]
};

export default function WebsiteContentPage() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [websiteContent, setWebsiteContent] = useState<WebsiteContent[]>([]);
  const [filteredContent, setFilteredContent] = useState<WebsiteContent[]>([]);
  const [pageTypes, setPageTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingContent, setEditingContent] = useState<WebsiteContent | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  // Parse URL query parameters
  useEffect(() => {
    // Check if there's a filter parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    
    if (filterParam) {
      // Always set the active tab to the filter parameter value
      // This ensures the filter works even if pageTypes aren't loaded yet
      setActiveTab(filterParam);
      
      // Store filter in localStorage for persistence
      localStorage.setItem('cms_content_filter', filterParam);
    }
  }, []);

  // Fetch website content
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/cms/website-content'],
    queryFn: async () => {
      // This is a fallback to use the content-items API if website-content doesn't exist
      try {
        const response = await fetch('/api/cms/website-content');
        if (response.ok) {
          return response.json();
        } else {
          // Fallback to content-items if dedicated endpoint doesn't exist
          const fallbackResponse = await fetch('/api/cms/content-items');
          return fallbackResponse.json();
        }
      } catch (error) {
        const fallbackResponse = await fetch('/api/cms/content-items');
        return fallbackResponse.json();
      }
    }
  });

  useEffect(() => {
    if (data?.success && data?.data) {
      console.log("Website content data:", data.data);
      // First map the data to our WebsiteContent format
      const allContent = data.data.map((item: any) => ({
        id: item.id,
        type: item.type || item.category || 'general',
        pageLocation: item.pageLocation || item.sectionId?.toString() || 'home',
        name: item.name || item.title,
        title: item.title,
        subtitle: item.subtitle || '',
        content: item.content || '',
        ctaText: item.ctaText || item.linkText || '',
        ctaUrl: item.ctaUrl || item.linkUrl || '',
        imageUrl: item.imageUrl || '',
        order: item.order || 0,
        isActive: item.isActive !== undefined ? item.isActive : true
      }));
      
      // Group content by type and pageLocation
      const contentByTypeAndLocation = allContent.reduce((acc: Record<string, WebsiteContent[]>, item: WebsiteContent) => {
        const key = `${item.type}-${item.pageLocation}`;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
        return acc;
      }, {} as Record<string, WebsiteContent[]>);
      
      // For each group, take only the item with the highest ID (latest version)
      const latestContentOnly = Object.values(contentByTypeAndLocation).map((group: unknown) => {
        // Safely cast the group to WebsiteContent[] with typeguard
        const typedGroup = group as WebsiteContent[];
        return typedGroup.sort((a: WebsiteContent, b: WebsiteContent) => b.id - a.id)[0]; // Sort by ID descending and take first
      });
      
      console.log("Latest content versions:", latestContentOnly);
      setWebsiteContent(latestContentOnly);
      
      // Extract unique page locations
      const uniquePageTypes = Array.from(
        new Set(latestContentOnly.map(item => item.pageLocation).filter(Boolean))
      ) as string[];
      
      console.log("Unique page types:", uniquePageTypes);
      setPageTypes(['all', ...uniquePageTypes]);
      
      // Check if we have a filter in URL or localStorage
      const urlParams = new URLSearchParams(window.location.search);
      const filterParam = urlParams.get('filter');
      const storedFilter = localStorage.getItem('cms_content_filter');
      
      // Only set to 'all' if we don't have an existing filter
      if (filterParam) {
        setActiveTab(filterParam);
      } else if (storedFilter && uniquePageTypes.includes(storedFilter)) {
        setActiveTab(storedFilter);
      } else {
        setActiveTab('all'); // Default to show all content
      }
      setLoading(false);
    }
  }, [data]);

  // Helper function to get pages in a category
  const getPagesInCategory = (categoryKey: string, subcategoryKey: string | null = null): string[] => {
    if (categoryKey === 'all') {
      return [];
    }
    
    const categoryData = CONTENT_HIERARCHY[categoryKey as keyof typeof CONTENT_HIERARCHY];
    if (!categoryData) {
      return [];
    }
    
    // Handle categories with subcategories (children)
    if ('children' in categoryData) {
      if (!subcategoryKey) {
        // Return all pages from all subcategories if no specific subcategory selected
        const allPages: string[] = [];
        Object.keys(categoryData.children).forEach(key => {
          // Safely type the subcategory key
          const typedKey = key as keyof typeof categoryData.children;
          const subcat = categoryData.children[typedKey];
          allPages.push(...subcat.pages);
        });
        return allPages;
      } else {
        // Return pages from specific subcategory
        const typedSubcategoryKey = subcategoryKey as keyof typeof categoryData.children;
        return categoryData.children[typedSubcategoryKey]?.pages || [];
      }
    }
    
    // Handle categories without subcategories (direct pages)
    if ('pages' in categoryData) {
      return categoryData.pages;
    }
    
    // If nothing matched, return empty array
    return [];
  };

  // Filter content based on active tab, category, and subcategory
  useEffect(() => {
    if (activeTab === 'all' && activeCategory === 'all') {
      // Show all content
      setFilteredContent(websiteContent);
    } else if (activeCategory !== 'all' && activeSubcategory) {
      // Filter by subcategory
      const pagesInSubcategory = getPagesInCategory(activeCategory, activeSubcategory);
      setFilteredContent(websiteContent.filter(item => 
        pagesInSubcategory.includes(item.pageLocation)
      ));
    } else if (activeCategory !== 'all') {
      // Filter by category
      const allPagesInCategory: string[] = [];
      
      // If the category has subcategories, collect pages from all subcategories
      const category = CONTENT_HIERARCHY[activeCategory as keyof typeof CONTENT_HIERARCHY];
      if (category && 'children' in category) {
        Object.keys(category.children).forEach(subcategoryKey => {
          const subcategory = category.children[subcategoryKey as keyof typeof category.children];
          if (subcategory && subcategory.pages) {
            allPagesInCategory.push(...subcategory.pages);
          }
        });
      } else if (category && 'pages' in category) {
        // Directly get pages from category
        allPagesInCategory.push(...category.pages);
      }
      
      setFilteredContent(websiteContent.filter(item => 
        allPagesInCategory.includes(item.pageLocation)
      ));
    } else if (activeTab !== 'all') {
      // Filter by specific tab (page)
      setFilteredContent(websiteContent.filter(item => 
        item.pageLocation === activeTab || 
        // For numeric IDs (from sectionId), convert to string for comparison
        (Number.isInteger(Number(activeTab)) && item.pageLocation === activeTab)
      ));
    }
  }, [activeTab, activeCategory, activeSubcategory, websiteContent]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load website content",
        variant: "destructive"
      });
      setLoading(false);
    }
  }, [error, toast]);

  const updateContentMutation = useMutation({
    mutationFn: async (content: WebsiteContent) => {
      const isNew = content.id === 0;
      const method = isNew ? 'POST' : 'PUT';
      const endpoint = isNew ? '/api/cms/website-content' : `/api/cms/website-content/${content.id}`;
      const fallbackEndpoint = isNew ? '/api/cms/content-items' : `/api/cms/content-items/${content.id}`;
      
      const contentPayload = {
        title: content.title,
        subtitle: content.subtitle,
        content: content.content,
        imageUrl: content.imageUrl,
        ctaText: content.ctaText,
        ctaUrl: content.ctaUrl,
        type: content.type,
        pageLocation: content.pageLocation,
        order: content.order,
        isActive: content.isActive
      };
      
      const fallbackPayload = {
        title: content.title,
        subtitle: content.subtitle,
        content: content.content,
        imageUrl: content.imageUrl,
        linkText: content.ctaText,
        linkUrl: content.ctaUrl,
        category: content.type,
        order: content.order,
        isActive: content.isActive,
        sectionId: parseInt(content.pageLocation) || null
      };
      
      // Try the website-content endpoint first, fall back to content-items
      try {
        const response = await fetch(endpoint, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contentPayload)
        });
        
        if (response.ok) {
          return response.json();
        } else {
          // Fallback
          const fallbackResponse = await fetch(fallbackEndpoint, {
            method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(fallbackPayload)
          });
          return fallbackResponse.json();
        }
      } catch (error) {
        // Fallback
        const fallbackResponse = await fetch(fallbackEndpoint, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fallbackPayload)
        });
        return fallbackResponse.json();
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/website-content'] });
      queryClient.invalidateQueries({ queryKey: ['/api/cms/content-items'] });
      setIsEditDialogOpen(false);
      setEditingContent(null);
      
      const isNew = variables.id === 0;
      toast({
        title: isNew ? "Content Created" : "Content Updated",
        description: isNew 
          ? "The new content has been created successfully." 
          : "The content has been updated successfully.",
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

  const toggleContentActivation = async (content: WebsiteContent) => {
    const updatedContent = { ...content, isActive: !content.isActive };
    updateContentMutation.mutate(updatedContent);
  };

  const handleEditContent = (content: WebsiteContent) => {
    setEditingContent({ ...content });
    setIsEditDialogOpen(true);
  };

  const handlePreviewContent = (content: WebsiteContent) => {
    setEditingContent({ ...content });
    setIsPreviewDialogOpen(true);
  };
  
  // Handle content deletion 
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [contentToDelete, setContentToDelete] = useState<WebsiteContent | null>(null);
  
  const deleteContentMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/cms/website-content/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete content');
      }
      
      return response.json();
    },
    onSuccess: () => {
      // Refresh the content list
      queryClient.invalidateQueries({ queryKey: ['/api/cms/website-content'] });
      
      toast({
        title: "Content Deleted",
        description: "The content has been permanently deleted",
        variant: "default"
      });
      
      // Close the dialog
      setIsDeleteDialogOpen(false);
      setContentToDelete(null);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete content",
        variant: "destructive"
      });
    }
  });
  
  const handleDeleteContent = (content: WebsiteContent) => {
    setContentToDelete(content);
    setIsDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    if (contentToDelete) {
      deleteContentMutation.mutate(contentToDelete.id);
    }
  };

  const handleUpdateContent = () => {
    if (!editingContent) return;
    
    if (!editingContent.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Title cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to update the content
    updateContentMutation.mutate(editingContent);
  };

  // Helper function to get content type definition
  const getContentTypeDefinition = (type: string, pageLocation: string): ContentTypeDefinition | undefined => {
    const contentTypesForPage = CONTENT_TYPES[pageLocation];
    return contentTypesForPage?.find(item => item.type === type);
  };

  // Helper function to get a friendly page location name
  const getPageLocationName = (location: string): string => {
    // Core Technologies
    if (location === PAGE_LOCATIONS.HOME) return 'Home Page';
    if (location === PAGE_LOCATIONS.ABOUT_US) return 'About Us';
    if (location === PAGE_LOCATIONS.AI_INTELLIGENCE) return 'Artificial Intelligence';
    if (location === PAGE_LOCATIONS.CLOUD_STACK) return 'Cloud Stack';
    if (location === PAGE_LOCATIONS.MULTI_CLOUD) return 'Multi Cloud';
    
    // Security & Defense
    if (location === PAGE_LOCATIONS.CYBER_SECURITY) return 'Cyber Security';
    if (location === PAGE_LOCATIONS.DEFENCE) return 'Defence';
    if (location === PAGE_LOCATIONS.SPACE) return 'Space';
    
    // Specialized Technologies
    if (location === PAGE_LOCATIONS.AGRICULTURE) return 'Agriculture & Farming';
    if (location === PAGE_LOCATIONS.HEALTH_CARE) return 'Health Care';
    if (location === PAGE_LOCATIONS.LIFE_SUPPORT) return 'Life Support';
    
    // Other
    if (location === PAGE_LOCATIONS.CAREERS) return 'Careers';
    
    // Fallback for any other locations
    return location.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Sort content by page location, then by order within each location
  const getSortedContent = (content: WebsiteContent[]): WebsiteContent[] => {
    return [...content].sort((a, b) => {
      if (a.pageLocation !== b.pageLocation) {
        return a.pageLocation.localeCompare(b.pageLocation);
      }
      return a.order - b.order;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <Button asChild variant="outline" size="sm" className="mb-4">
          <Link href="/cms">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="font-poppins text-3xl font-bold">Website Content</h1>
            <p className="text-gray-600 mt-1">Manage content that appears on your website</p>
          </div>
          <Button 
            size="sm"
            className="mt-4 md:mt-0"
            onClick={() => {
              const pageLocation = activeTab === 'all' ? 'home' : activeTab;
              const defaultType = CONTENT_TYPES[pageLocation]?.length > 0 
                ? CONTENT_TYPES[pageLocation][0].type 
                : 'general';
                
              setEditingContent({
                id: 0,
                type: defaultType,
                pageLocation: pageLocation,
                name: '',
                title: '',
                subtitle: '',
                content: '',
                ctaText: '',
                ctaUrl: '',
                imageUrl: '',
                order: 0,
                isActive: true
              });
              setIsEditDialogOpen(true);
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New Content
          </Button>
        </div>
      </div>

      {/* Advanced Filtering Interface */}
      <div className="mb-6 rounded-lg border border-gray-200 p-4 bg-white">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center">
            <Filter className="h-4 w-4 mr-2 text-gray-500" />
            <h3 className="text-sm font-medium">Advanced Filtering</h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <Select
              value={activeCategory}
              onValueChange={(value) => {
                setActiveCategory(value);
                setActiveSubcategory(null);
                if (value === 'all') {
                  setActiveTab('all');
                }
              }}
            >
              <SelectTrigger className="h-8 px-3 text-xs w-[160px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {Object.keys(CONTENT_HIERARCHY).map((categoryKey) => (
                  <SelectItem key={categoryKey} value={categoryKey}>
                    {CONTENT_HIERARCHY[categoryKey as keyof typeof CONTENT_HIERARCHY].name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {activeCategory !== 'all' && 'children' in CONTENT_HIERARCHY[activeCategory as keyof typeof CONTENT_HIERARCHY] && (
              <Select
                value={activeSubcategory || 'all_subcategories'}
                onValueChange={(value) => {
                  setActiveSubcategory(value === 'all_subcategories' ? null : value);
                  // If a subcategory is selected, don't change the tab
                }}
              >
                <SelectTrigger className="h-8 px-3 text-xs w-[180px]">
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_subcategories">All Subcategories</SelectItem>
                  {activeCategory && 'children' in CONTENT_HIERARCHY[activeCategory as keyof typeof CONTENT_HIERARCHY] && 
                    // Type safety: Correctly access children for the active category
                    Object.keys(CONTENT_HIERARCHY[activeCategory as keyof typeof CONTENT_HIERARCHY].children).map((subcategoryKey) => {
                      // Type the category data correctly
                      const categoryData = CONTENT_HIERARCHY[activeCategory as keyof typeof CONTENT_HIERARCHY];
                      // Only proceed if categoryData has children property
                      if ('children' in categoryData) {
                        const subCategoryKey = subcategoryKey as keyof typeof categoryData.children;
                        const subCategory = categoryData.children[subCategoryKey];
                        
                        return (
                          <SelectItem key={subcategoryKey} value={subcategoryKey}>
                            {subCategory.name}
                          </SelectItem>
                        );
                      }
                      return null;
                    })
                  }
                </SelectContent>
              </Select>
            )}
            
            {activeCategory !== 'all' && (activeSubcategory || !('children' in CONTENT_HIERARCHY[activeCategory as keyof typeof CONTENT_HIERARCHY])) && (
              <Select
                value={activeTab}
                onValueChange={(value) => {
                  setActiveTab(value);
                }}
              >
                <SelectTrigger className="h-8 px-3 text-xs w-[180px]">
                  <SelectValue placeholder="Select page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Pages</SelectItem>
                  {activeSubcategory 
                    ? getPagesInCategory(activeCategory, activeSubcategory).map(pageKey => (
                        <SelectItem key={pageKey} value={pageKey}>
                          {getPageLocationName(pageKey)}
                        </SelectItem>
                      ))
                    : (activeCategory && 'pages' in CONTENT_HIERARCHY[activeCategory as keyof typeof CONTENT_HIERARCHY]
                        ? (CONTENT_HIERARCHY[activeCategory as keyof typeof CONTENT_HIERARCHY] as any).pages.map((pageKey: string) => (
                            <SelectItem key={pageKey} value={pageKey}>
                              {getPageLocationName(pageKey)}
                            </SelectItem>
                          ))
                        : []
                      )
                  }
                </SelectContent>
              </Select>
            )}
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 px-3 text-xs"
            onClick={() => {
              setActiveCategory('all');
              setActiveSubcategory(null);
              setActiveTab('all');
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>
      
      {/* Traditional Tab Navigation (kept for backward compatibility) */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 flex flex-wrap">
          <TabsTrigger value="all">All Content</TabsTrigger>
          
          {/* Core Technologies */}
          <div className="flex items-center w-full mt-4">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="px-4 text-sm font-medium text-gray-500">{CONTENT_CATEGORIES.CORE_TECHNOLOGIES}</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          {pageTypes.filter(type => 
            type === PAGE_LOCATIONS.HOME || 
            type === PAGE_LOCATIONS.ABOUT_US || 
            type === PAGE_LOCATIONS.AI_INTELLIGENCE || 
            type === PAGE_LOCATIONS.CLOUD_STACK || 
            type === PAGE_LOCATIONS.MULTI_CLOUD
          ).map(type => (
            <TabsTrigger key={type} value={type}>
              {getPageLocationName(type)}
            </TabsTrigger>
          ))}
          
          {/* Security & Defense */}
          <div className="flex items-center w-full mt-4">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="px-4 text-sm font-medium text-gray-500">{CONTENT_CATEGORIES.SECURITY_DEFENSE}</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          {pageTypes.filter(type => 
            type === PAGE_LOCATIONS.CYBER_SECURITY || 
            type === PAGE_LOCATIONS.DEFENCE || 
            type === PAGE_LOCATIONS.SPACE
          ).map(type => (
            <TabsTrigger key={type} value={type}>
              {getPageLocationName(type)}
            </TabsTrigger>
          ))}
          
          {/* Specialized Technologies */}
          <div className="flex items-center w-full mt-4">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="px-4 text-sm font-medium text-gray-500">{CONTENT_CATEGORIES.SPECIALIZED_TECHNOLOGIES}</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          {pageTypes.filter(type => 
            type === PAGE_LOCATIONS.AGRICULTURE || 
            type === PAGE_LOCATIONS.HEALTH_CARE || 
            type === PAGE_LOCATIONS.LIFE_SUPPORT
          ).map(type => (
            <TabsTrigger key={type} value={type}>
              {getPageLocationName(type)}
            </TabsTrigger>
          ))}
          
          {/* Other Pages */}
          <div className="flex items-center w-full mt-4">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="px-4 text-sm font-medium text-gray-500">Other Pages</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          {pageTypes.filter(type => 
            type !== 'all' &&
            type !== PAGE_LOCATIONS.HOME && 
            type !== PAGE_LOCATIONS.ABOUT_US && 
            type !== PAGE_LOCATIONS.AI_INTELLIGENCE && 
            type !== PAGE_LOCATIONS.CLOUD_STACK && 
            type !== PAGE_LOCATIONS.MULTI_CLOUD &&
            type !== PAGE_LOCATIONS.CYBER_SECURITY && 
            type !== PAGE_LOCATIONS.DEFENCE && 
            type !== PAGE_LOCATIONS.SPACE &&
            type !== PAGE_LOCATIONS.AGRICULTURE && 
            type !== PAGE_LOCATIONS.HEALTH_CARE && 
            type !== PAGE_LOCATIONS.LIFE_SUPPORT
          ).map(type => (
            <TabsTrigger key={type} value={type}>
              {getPageLocationName(type)}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={activeTab}>
          {filteredContent.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">No Content Found</h3>
              <p className="text-gray-500 mb-4">
                {activeTab === 'all' 
                  ? "There's no website content in the system yet." 
                  : `There's no content for the "${getPageLocationName(activeTab)}" page.`}
              </p>
              <Button 
                onClick={() => {
                  const pageLocation = activeTab === 'all' ? 'home' : activeTab;
                  const defaultType = CONTENT_TYPES[pageLocation]?.length > 0 
                    ? CONTENT_TYPES[pageLocation][0].type 
                    : 'general';
                    
                  setEditingContent({
                    id: 0,
                    type: defaultType,
                    pageLocation: pageLocation,
                    name: '',
                    title: '',
                    subtitle: '',
                    content: '',
                    ctaText: '',
                    ctaUrl: '',
                    imageUrl: '',
                    order: 0,
                    isActive: true
                  });
                  setIsEditDialogOpen(true);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Content Item
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {getSortedContent(filteredContent).map((content) => {
                const typeDefinition = getContentTypeDefinition(content.type, content.pageLocation);
                
                return (
                  <Card key={content.id} className={`border h-full flex flex-col shadow-sm hover:shadow-md transition-shadow ${!content.isActive ? 'opacity-60' : ''}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 mr-2">
                          <div className="flex items-center justify-between mb-1.5">
                            <h3 className="font-semibold text-lg">
                              {typeDefinition?.displayName || content.type}
                            </h3>
                            <Switch
                              checked={content.isActive}
                              onCheckedChange={() => toggleContentActivation(content)}
                              className="ml-2 h-5 w-10 data-[state=checked]:bg-neutral-800 data-[state=unchecked]:bg-gray-300 [&>span]:bg-gray-50 [&>span]:shadow-md [&>span]:h-4 [&>span]:w-4"
                            />
                          </div>
                          <div className="text-xs text-gray-500">
                            Type: <span>{content.type}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            ID: <span>{content.uniqueId || content.id}</span>
                          </div>
                          <div className="mt-2 text-gray-700">
                            {content.title}
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" onClick={() => handleEditContent(content)} className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteContent(content)} className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4 pt-0 flex-1">
                      {content.content && (
                        <div className="text-sm text-gray-600 line-clamp-3 mt-2">
                          {content.content}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="pt-3 pb-3 border-t flex items-center justify-between text-xs text-gray-500">
                      <div>Location: {getPageLocationName(content.pageLocation)}</div>
                      <div>Order: {content.order}</div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Edit/Create Content Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingContent && editingContent.id === 0 ? 'Create New Content' : 'Edit Website Content'}</DialogTitle>
            <DialogDescription>
              {editingContent && editingContent.id === 0 
                ? 'Add new content to your website' 
                : 'Update content that appears on your website'}
            </DialogDescription>
          </DialogHeader>
          {editingContent && (
            <div className="space-y-4 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Page Location</Label>
                  <Select 
                    value={editingContent.pageLocation} 
                    onValueChange={(value) => {
                      // When page location changes, automatically set a default content type for that page
                      const defaultType = CONTENT_TYPES[value]?.length > 0 
                        ? CONTENT_TYPES[value][0].type 
                        : editingContent.type;
                        
                      setEditingContent({...editingContent, pageLocation: value, type: defaultType});
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select page location" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Core Technologies */}
                      <SelectGroup>
                        <SelectLabel>{CONTENT_CATEGORIES.CORE_TECHNOLOGIES}</SelectLabel>
                        {pageTypes.filter(type => 
                          type === PAGE_LOCATIONS.HOME || 
                          type === PAGE_LOCATIONS.ABOUT_US || 
                          type === PAGE_LOCATIONS.AI_INTELLIGENCE || 
                          type === PAGE_LOCATIONS.CLOUD_STACK || 
                          type === PAGE_LOCATIONS.MULTI_CLOUD
                        ).map(type => (
                          <SelectItem key={type} value={type}>
                            {getPageLocationName(type)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      
                      {/* Security & Defense */}
                      <SelectGroup>
                        <SelectLabel>{CONTENT_CATEGORIES.SECURITY_DEFENSE}</SelectLabel>
                        {pageTypes.filter(type => 
                          type === PAGE_LOCATIONS.CYBER_SECURITY || 
                          type === PAGE_LOCATIONS.DEFENCE || 
                          type === PAGE_LOCATIONS.SPACE
                        ).map(type => (
                          <SelectItem key={type} value={type}>
                            {getPageLocationName(type)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      
                      {/* Specialized Technologies */}
                      <SelectGroup>
                        <SelectLabel>{CONTENT_CATEGORIES.SPECIALIZED_TECHNOLOGIES}</SelectLabel>
                        {pageTypes.filter(type => 
                          type === PAGE_LOCATIONS.AGRICULTURE || 
                          type === PAGE_LOCATIONS.HEALTH_CARE || 
                          type === PAGE_LOCATIONS.LIFE_SUPPORT
                        ).map(type => (
                          <SelectItem key={type} value={type}>
                            {getPageLocationName(type)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                      
                      {/* Other Pages */}
                      <SelectGroup>
                        <SelectLabel>Other Pages</SelectLabel>
                        {pageTypes.filter(type => 
                          type !== 'all' &&
                          type !== PAGE_LOCATIONS.HOME && 
                          type !== PAGE_LOCATIONS.ABOUT_US && 
                          type !== PAGE_LOCATIONS.AI_INTELLIGENCE && 
                          type !== PAGE_LOCATIONS.CLOUD_STACK && 
                          type !== PAGE_LOCATIONS.MULTI_CLOUD &&
                          type !== PAGE_LOCATIONS.CYBER_SECURITY && 
                          type !== PAGE_LOCATIONS.DEFENCE && 
                          type !== PAGE_LOCATIONS.SPACE &&
                          type !== PAGE_LOCATIONS.AGRICULTURE && 
                          type !== PAGE_LOCATIONS.HEALTH_CARE && 
                          type !== PAGE_LOCATIONS.LIFE_SUPPORT
                        ).map(type => (
                          <SelectItem key={type} value={type}>
                            {getPageLocationName(type)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Content Type</Label>
                  {CONTENT_TYPES[editingContent.pageLocation]?.length > 0 ? (
                    <Select 
                      value={editingContent.type} 
                      onValueChange={(value) => setEditingContent({...editingContent, type: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONTENT_TYPES[editingContent.pageLocation]?.map(contentType => (
                          <SelectItem key={contentType.type} value={contentType.type}>
                            {contentType.displayName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      id="type"
                      value={editingContent.type}
                      onChange={(e) => setEditingContent({...editingContent, type: e.target.value})}
                      placeholder="hero, feature, testimonial, etc."
                    />
                  )}
                  {CONTENT_TYPES[editingContent.pageLocation]?.length > 0 && (
                    <div className="text-xs text-gray-500 mt-1">
                      {CONTENT_TYPES[editingContent.pageLocation].find(t => t.type === editingContent.type)?.description || ''}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                <Input
                  id="title"
                  value={editingContent.title}
                  onChange={(e) => setEditingContent({...editingContent, title: e.target.value})}
                  placeholder="Enter a title"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={editingContent.subtitle || ''}
                  onChange={(e) => setEditingContent({...editingContent, subtitle: e.target.value})}
                  placeholder="Enter a subtitle"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={editingContent.content || ''}
                  onChange={(e) => setEditingContent({...editingContent, content: e.target.value})}
                  placeholder="Enter content"
                  rows={6}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  value={editingContent.imageUrl || ''}
                  onChange={(e) => setEditingContent({...editingContent, imageUrl: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ctaText">CTA Button Text</Label>
                  <Input
                    id="ctaText"
                    value={editingContent.ctaText || ''}
                    onChange={(e) => setEditingContent({...editingContent, ctaText: e.target.value})}
                    placeholder="Learn More, Sign Up, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ctaUrl">CTA Button URL</Label>
                  <Input
                    id="ctaUrl"
                    value={editingContent.ctaUrl || ''}
                    onChange={(e) => setEditingContent({...editingContent, ctaUrl: e.target.value})}
                    placeholder="/page or https://example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="order">Display Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={editingContent.order}
                    onChange={(e) => setEditingContent({...editingContent, order: parseInt(e.target.value) || 0})}
                    min="0"
                  />
                </div>
                <div className="pt-6 flex items-center space-x-2">
                  <div className="relative">
                    <Switch 
                      id="active-status" 
                      checked={editingContent.isActive}
                      onCheckedChange={(checked) => setEditingContent({...editingContent, isActive: checked})}
                      className="h-5 w-10 data-[state=checked]:bg-neutral-800 data-[state=unchecked]:bg-gray-300 [&>span]:bg-gray-50 [&>span]:shadow-md [&>span]:h-4 [&>span]:w-4"
                    />
                    {!editingContent.isActive && (
                      <span className="absolute -bottom-3 left-0 text-[8px] text-gray-400">inactive</span>
                    )}
                  </div>
                  <Label htmlFor="active-status">Active on Website</Label>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateContent}>
              <Save className="h-4 w-4 mr-2" />
              {editingContent && editingContent.id === 0 ? 'Create Content' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Preview Content Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Content Preview</DialogTitle>
            <DialogDescription>
              Preview how content will appear on the website
            </DialogDescription>
          </DialogHeader>
          {editingContent && (
            <div className="py-4">
              <div className="bg-white rounded-lg border p-6">
                {editingContent.imageUrl && (
                  <div className="mb-4">
                    <img 
                      src={editingContent.imageUrl} 
                      alt={editingContent.title} 
                      className="w-full h-auto max-h-64 object-contain rounded-md"
                    />
                  </div>
                )}
                
                <h2 className="text-2xl font-bold mb-2">{editingContent.title}</h2>
                
                {editingContent.subtitle && (
                  <h3 className="text-xl text-gray-700 mb-4">{editingContent.subtitle}</h3>
                )}
                
                {editingContent.content && (
                  <div className="prose max-w-none mb-4 whitespace-pre-wrap">
                    {editingContent.content}
                  </div>
                )}
                
                {editingContent.ctaText && (
                  <div className="mt-4">
                    <Button>
                      {editingContent.ctaText}
                    </Button>
                  </div>
                )}
                
                <div className="mt-6 pt-4 border-t text-xs text-gray-500">
                  <div>Page: {editingContent.pageLocation}</div>
                  <div>Type: {editingContent.type}</div>
                  <div>ID: {editingContent.uniqueId || editingContent.id}</div>
                  <div>Status: {editingContent.isActive ? 'Active' : 'Inactive'}</div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPreviewDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => {
              setIsPreviewDialogOpen(false);
              setIsEditDialogOpen(true);
            }}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Content
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this content? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {contentToDelete && (
            <div className="py-4">
              <div className="p-4 border rounded-md bg-gray-50">
                <h3 className="font-semibold">{contentToDelete.title}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Type: {contentToDelete.type} · Page: {contentToDelete.pageLocation}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  ID: {contentToDelete.uniqueId || contentToDelete.id}
                </p>
              </div>
            </div>
          )}
          <DialogFooter className="gap-2 sm:gap-0">
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={confirmDelete}
              disabled={deleteContentMutation.isPending}
            >
              {deleteContentMutation.isPending ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <X className="h-4 w-4 mr-2" />
              )}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}