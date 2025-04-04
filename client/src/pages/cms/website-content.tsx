import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft, Edit, Eye, Plus, Save, Check, X, Trash2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Define the content types that appear on the website
interface WebsiteContent {
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

export default function WebsiteContentPage() {
  const [activeTab, setActiveTab] = useState<string>("home");
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
      const content = data.data.map((item: any) => ({
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
      
      console.log("Transformed content:", content);
      setWebsiteContent(content);
      
      // Extract unique page locations
      const uniquePageTypes = Array.from(
        new Set(content.map((item: WebsiteContent) => item.pageLocation).filter(Boolean))
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

  // Filter content based on active tab
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredContent(websiteContent);
    } else {
      setFilteredContent(websiteContent.filter(item => 
        item.pageLocation === activeTab || 
        // For numeric IDs (from sectionId), convert to string for comparison
        (Number.isInteger(Number(activeTab)) && item.pageLocation === activeTab)
      ));
    }
  }, [activeTab, websiteContent]);

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
              setEditingContent({
                id: 0,
                type: 'general',
                pageLocation: 'home',
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 flex flex-wrap">
          <TabsTrigger value="all">All Content</TabsTrigger>
          {pageTypes.map(type => (
            <TabsTrigger key={type} value={type}>
              {type === 'home' ? 'Home Page' : 
               isNaN(Number(type)) ? type.charAt(0).toUpperCase() + type.slice(1) : 
               `Section ${type}`}
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
                  : `There's no content for the "${activeTab}" page.`}
              </p>
              <Button 
                onClick={() => {
                  setEditingContent({
                    id: 0,
                    type: 'general',
                    pageLocation: activeTab === 'all' ? 'home' : activeTab,
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
              {filteredContent.map((content) => (
                <Card key={content.id} className={`border h-full flex flex-col ${!content.isActive ? 'border-dashed border-gray-300 bg-gray-50' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <div className="flex-1 mr-2">
                        <CardTitle className="text-lg flex items-center">
                          {content.title}
                          {!content.isActive && (
                            <span className="ml-2 text-xs uppercase bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                              Inactive
                            </span>
                          )}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {content.subtitle || (content.type && `Type: ${content.type}`)}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center justify-center h-8 w-8 mr-1">
                          <Switch 
                            checked={content.isActive}
                            onCheckedChange={() => toggleContentActivation(content)}
                            title={content.isActive ? "Active" : "Inactive"}
                            className="h-5 w-9 data-[state=checked]:bg-neutral-800 data-[state=unchecked]:bg-gray-300 [&>span]:bg-gray-50 [&>span]:shadow-md"
                          />
                          {!content.isActive && (
                            <span className="absolute -bottom-3 left-0 text-[10px] text-gray-500">Inactive</span>
                          )}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handlePreviewContent(content)}
                          title="Preview"
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditContent(content)}
                          title="Edit"
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteContent(content)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                          title="Delete"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1">
                    <div className="text-sm text-gray-600 h-20 overflow-hidden relative mb-4">
                      {content.content && content.content.length > 120 
                        ? content.content.substring(0, 120) + '...' 
                        : content.content}
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    
                    <div className={`${content.imageUrl ? 'h-32' : 'h-0'} mb-2`}>
                      {content.imageUrl && (
                        <img 
                          src={content.imageUrl} 
                          alt={content.title} 
                          className="w-full h-32 object-cover rounded-md"
                        />
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start pt-0 mt-auto">
                    <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                      <div>Location: {content.pageLocation}</div>
                      <div>Order: {content.order}</div>
                      {content.ctaText && (
                        <div className="w-full mt-1">
                          CTA: {content.ctaText} → {content.ctaUrl}
                        </div>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
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
                    onValueChange={(value) => setEditingContent({...editingContent, pageLocation: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select page location" />
                    </SelectTrigger>
                    <SelectContent>
                      {pageTypes.map(type => (
                        <SelectItem key={type} value={type}>
                          {type === 'home' ? 'Home Page' : 
                           isNaN(Number(type)) ? type.charAt(0).toUpperCase() + type.slice(1) : 
                           `Section ${type}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Content Type</Label>
                  <Input
                    id="type"
                    value={editingContent.type}
                    onChange={(e) => setEditingContent({...editingContent, type: e.target.value})}
                    placeholder="hero, feature, testimonial, etc."
                  />
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
                      className="h-5 w-9 data-[state=checked]:bg-neutral-800 data-[state=unchecked]:bg-gray-300 [&>span]:bg-gray-50 [&>span]:shadow-md"
                    />
                    {!editingContent.isActive && (
                      <span className="absolute -bottom-3 left-0 text-[10px] text-gray-500">Inactive</span>
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
                
                <div className="mt-6 pt-4 border-t text-sm text-gray-500">
                  <div>Page: {editingContent.pageLocation}</div>
                  <div>Type: {editingContent.type}</div>
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
                <p className="text-sm text-gray-500 mt-1">
                  {contentToDelete.type} · {contentToDelete.pageLocation}
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