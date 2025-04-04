import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Edit, Trash2, Plus, FileText, Search, Image, Save } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { VersionHistory } from "@/components/cms/VersionHistory";

interface ContentItem {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
  linkUrl?: string;
  linkText?: string;
  order: number;
  isActive: boolean;
}

export default function ContentPage() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [sectionName, setSectionName] = useState<string>("");
  const [sectionDescription, setSectionDescription] = useState<string>("");
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [historyItem, setHistoryItem] = useState<ContentItem | null>(null);
  const [isHistoryDialogOpen, setIsHistoryDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const { toast } = useToast();

  const sectionId = parseInt(params.id);

  useEffect(() => {
    if (isNaN(sectionId)) {
      toast({
        title: "Invalid Section ID",
        description: "The section ID provided is not valid.",
        variant: "destructive"
      });
      setLocation("/cms");
      return;
    }

    // Simulate API call to fetch section details
    setLoading(true);
    setTimeout(() => {
      // Mock data for the section
      setSectionName(sectionId === 1 ? "Home Page Content" : 
                    sectionId === 2 ? "About Us" : 
                    sectionId === 3 ? "Services" : `Section ${sectionId}`);
      
      setSectionDescription(
        sectionId === 1 ? "Main content sections for the home page" : 
        sectionId === 2 ? "Content for the About Us page" : 
        sectionId === 3 ? "Services and solutions content" : "Content section"
      );

      // Mock data for content items
      setContentItems([
        {
          id: 1,
          title: "Welcome Message",
          subtitle: "Introduction to Bharat Technologies",
          content: "Bharat Technologies is a cutting-edge technology company specializing in AI solutions, cloud computing, and digital transformation services.",
          imageUrl: "/images/welcome.jpg",
          order: 1,
          isActive: true
        },
        {
          id: 2,
          title: "Our Mission",
          subtitle: "Driving innovation through technology",
          content: "Our mission is to empower businesses with innovative technology solutions that drive growth and efficiency.",
          linkUrl: "/about-us",
          linkText: "Learn More",
          order: 2,
          isActive: true
        },
        {
          id: 3,
          title: "Featured Services",
          content: "Explore our range of services including artificial intelligence, cloud solutions, and cybersecurity.",
          order: 3,
          isActive: false
        }
      ]);
      
      setLoading(false);
    }, 1000);
  }, [sectionId, setLocation, toast]);

  const handleAddItem = () => {
    setEditingItem({
      id: 0, // This will be set by the server
      title: "",
      subtitle: "",
      content: "",
      imageUrl: "",
      linkUrl: "",
      linkText: "",
      order: contentItems.length + 1,
      isActive: true
    });
    setIsAddDialogOpen(true);
  };

  const handleEditItem = (item: ContentItem) => {
    setEditingItem({ ...item });
    setIsEditDialogOpen(true);
  };

  const handleSaveNewItem = () => {
    if (!editingItem) return;
    
    if (!editingItem.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Item title cannot be empty",
        variant: "destructive"
      });
      return;
    }

    if (!editingItem.content.trim()) {
      toast({
        title: "Validation Error",
        description: "Content cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call to add new item
    const newItem: ContentItem = {
      ...editingItem,
      id: Math.max(0, ...contentItems.map(item => item.id)) + 1
    };

    setContentItems([...contentItems, newItem]);
    setIsAddDialogOpen(false);
    setEditingItem(null);

    toast({
      title: "Content Item Added",
      description: `"${newItem.title}" has been added successfully.`,
      variant: "default"
    });
  };

  const handleUpdateItem = () => {
    if (!editingItem) return;
    
    if (!editingItem.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Item title cannot be empty",
        variant: "destructive"
      });
      return;
    }

    if (!editingItem.content.trim()) {
      toast({
        title: "Validation Error",
        description: "Content cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call to update item
    const updatedItems = contentItems.map(item => 
      item.id === editingItem.id ? editingItem : item
    );

    setContentItems(updatedItems);
    setIsEditDialogOpen(false);
    setEditingItem(null);

    toast({
      title: "Content Item Updated",
      description: `"${editingItem.title}" has been updated successfully.`,
      variant: "default"
    });
  };

  const handleDeleteItem = (id: number) => {
    // Confirm deletion
    if (!window.confirm("Are you sure you want to delete this item? This action cannot be undone.")) {
      return;
    }

    // Simulate API call to delete item
    const updatedItems = contentItems.filter(item => item.id !== id);
    setContentItems(updatedItems);

    toast({
      title: "Content Item Deleted",
      description: "The item has been deleted successfully.",
      variant: "default"
    });
  };
  
  const handleVersionReverted = () => {
    // Refresh content items when a version is reverted
    setLoading(true);
    // In a real implementation, this would refetch from the API
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Version Restored",
        description: "The content has been reverted to the selected version.",
        variant: "default"
      });
    }, 600);
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
            <h1 className="font-poppins text-3xl font-bold">{sectionName}</h1>
            <p className="text-gray-600 mt-1">{sectionDescription}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={handleAddItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Content Item
            </Button>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-8 w-[400px]">
          <TabsTrigger value="content">Content Items</TabsTrigger>
          <TabsTrigger value="settings">Section Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content">
          {contentItems.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">No Content Items</h3>
              <p className="text-gray-500 mb-4">This section doesn't have any content items yet.</p>
              <Button onClick={handleAddItem}>
                Add Your First Content Item
              </Button>
            </div>
          ) : (
            <div className="grid gap-6">
              {contentItems.map((item) => (
                <Card key={item.id} className={`border ${!item.isActive ? 'border-dashed border-gray-300 bg-gray-50' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl flex items-center">
                          {item.title}
                          {!item.isActive && (
                            <span className="ml-2 text-xs uppercase bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                              Inactive
                            </span>
                          )}
                        </CardTitle>
                        {item.subtitle && (
                          <CardDescription className="mt-1">{item.subtitle}</CardDescription>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleEditItem(item)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setHistoryItem(item);
                            setIsHistoryDialogOpen(true);
                          }}
                        >
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 8v4l3 3"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-sm text-gray-600 mb-4 whitespace-pre-wrap">
                      {item.content.substring(0, 200)}
                      {item.content.length > 200 && '...'}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-500">
                      {item.imageUrl && (
                        <div className="flex items-center">
                          <Image className="h-3 w-3 mr-1" />
                          Image: {item.imageUrl}
                        </div>
                      )}
                      {item.linkUrl && (
                        <div className="flex items-center">
                          <Link href={item.linkUrl} className="flex items-center">
                            <Search className="h-3 w-3 mr-1" />
                            {item.linkText || 'Link'}: {item.linkUrl}
                          </Link>
                        </div>
                      )}
                      <div>Order: {item.order}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Section Settings</CardTitle>
              <CardDescription>Manage settings for this content section</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="section-name">Section Name</Label>
                <Input 
                  id="section-name" 
                  value={sectionName} 
                  onChange={(e) => setSectionName(e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="section-description">Description</Label>
                <Textarea 
                  id="section-description" 
                  value={sectionDescription} 
                  onChange={(e) => setSectionDescription(e.target.value)} 
                  rows={3}
                />
              </div>
              <div className="pt-4">
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add Content Item Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Content Item</DialogTitle>
            <DialogDescription>
              Create a new content item for the {sectionName} section
            </DialogDescription>
          </DialogHeader>
          {editingItem && (
            <ContentItemForm 
              item={editingItem} 
              onChange={setEditingItem} 
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveNewItem}>
              Add Content Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Content Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Content Item</DialogTitle>
            <DialogDescription>
              Update this content item
            </DialogDescription>
          </DialogHeader>
          {editingItem && (
            <ContentItemForm 
              item={editingItem} 
              onChange={setEditingItem} 
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateItem}>
              Update Content Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Version History Dialog */}
      <Dialog 
        open={isHistoryDialogOpen} 
        onOpenChange={(open) => {
          setIsHistoryDialogOpen(open);
          if (!open) setHistoryItem(null);
        }}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Version History</DialogTitle>
            <DialogDescription>
              {historyItem && `View and restore previous versions of "${historyItem.title}"`}
            </DialogDescription>
          </DialogHeader>
          
          {historyItem && (
            <VersionHistory 
              entityType="contentItem" 
              entityId={historyItem.id} 
              onVersionReverted={handleVersionReverted}
            />
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsHistoryDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

// Content Item Form Component
function ContentItemForm({ 
  item, 
  onChange 
}: { 
  item: ContentItem; 
  onChange: (item: ContentItem) => void;
}) {
  return (
    <div className="space-y-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
          <Input
            id="title"
            value={item.title}
            onChange={(e) => onChange({ ...item, title: e.target.value })}
            placeholder="Enter a title"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input
            id="subtitle"
            value={item.subtitle || ''}
            onChange={(e) => onChange({ ...item, subtitle: e.target.value })}
            placeholder="Optional subtitle"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Content <span className="text-red-500">*</span></Label>
        <Textarea
          id="content"
          value={item.content}
          onChange={(e) => onChange({ ...item, content: e.target.value })}
          placeholder="Enter content here"
          rows={6}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            value={item.imageUrl || ''}
            onChange={(e) => onChange({ ...item, imageUrl: e.target.value })}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="order">Display Order</Label>
          <Input
            id="order"
            type="number"
            value={item.order}
            onChange={(e) => onChange({ ...item, order: parseInt(e.target.value) || 0 })}
            min="1"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="linkUrl">Link URL</Label>
          <Input
            id="linkUrl"
            value={item.linkUrl || ''}
            onChange={(e) => onChange({ ...item, linkUrl: e.target.value })}
            placeholder="https://example.com or /page"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkText">Link Text</Label>
          <Input
            id="linkText"
            value={item.linkText || ''}
            onChange={(e) => onChange({ ...item, linkText: e.target.value })}
            placeholder="Read More, Learn More, etc."
          />
        </div>
      </div>
      
      <div className="pt-2 flex items-center space-x-2">
        <Switch 
          id="active-status" 
          checked={item.isActive}
          onCheckedChange={(checked) => onChange({ ...item, isActive: checked })}
        />
        <Label htmlFor="active-status">Active</Label>
      </div>
    </div>
  );
}