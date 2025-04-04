import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft, Edit, Trash2, Plus, Image, Save } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface HeroSection {
  id: number;
  pageId: string;
  title: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaUrl?: string;
  order: number;
  isActive: boolean;
}

export default function HeroSectionsPage() {
  const [heroSections, setHeroSections] = useState<HeroSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<HeroSection | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch hero sections
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/cms/hero-sections'],
    queryFn: async () => {
      const response = await fetch('/api/cms/hero-sections');
      if (!response.ok) {
        throw new Error('Failed to fetch hero sections');
      }
      return response.json();
    }
  });

  useEffect(() => {
    if (data?.success && data?.data) {
      setHeroSections(data.data);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load hero sections",
        variant: "destructive"
      });
      setLoading(false);
    }
  }, [error, toast]);

  const addSectionMutation = useMutation({
    mutationFn: async (newSection: Omit<HeroSection, 'id'>) => {
      const response = await fetch('/api/cms/hero-sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSection)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add hero section');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/hero-sections'] });
      setIsAddDialogOpen(false);
      setEditingSection(null);
      
      toast({
        title: "Hero Section Added",
        description: "The section has been added successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add hero section",
        variant: "destructive"
      });
    }
  });
  
  const updateSectionMutation = useMutation({
    mutationFn: async (section: HeroSection) => {
      const response = await fetch(`/api/cms/hero-sections/${section.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(section)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update hero section');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/hero-sections'] });
      setIsEditDialogOpen(false);
      setEditingSection(null);
      
      toast({
        title: "Hero Section Updated",
        description: "The section has been updated successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update hero section",
        variant: "destructive"
      });
    }
  });
  
  const deleteSectionMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/cms/hero-sections/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete hero section');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/hero-sections'] });
      
      toast({
        title: "Hero Section Deleted",
        description: "The section has been deleted successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete hero section",
        variant: "destructive"
      });
    }
  });

  const handleAddSection = () => {
    setEditingSection({
      id: 0,
      pageId: "",
      title: "",
      subtitle: "",
      content: "",
      imageUrl: "",
      ctaText: "",
      ctaUrl: "",
      order: heroSections.length + 1,
      isActive: true
    });
    setIsAddDialogOpen(true);
  };

  const handleEditSection = (section: HeroSection) => {
    setEditingSection({ ...section });
    setIsEditDialogOpen(true);
  };

  const handleSaveNewSection = () => {
    if (!editingSection) return;
    
    if (!editingSection.pageId.trim()) {
      toast({
        title: "Validation Error",
        description: "Page ID cannot be empty",
        variant: "destructive"
      });
      return;
    }

    if (!editingSection.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Title cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to add the section
    addSectionMutation.mutate({
      pageId: editingSection.pageId,
      title: editingSection.title,
      subtitle: editingSection.subtitle,
      content: editingSection.content,
      imageUrl: editingSection.imageUrl,
      ctaText: editingSection.ctaText,
      ctaUrl: editingSection.ctaUrl,
      order: editingSection.order,
      isActive: editingSection.isActive
    });
  };

  const handleUpdateSection = () => {
    if (!editingSection) return;
    
    if (!editingSection.pageId.trim()) {
      toast({
        title: "Validation Error",
        description: "Page ID cannot be empty",
        variant: "destructive"
      });
      return;
    }

    if (!editingSection.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Title cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to update the section
    updateSectionMutation.mutate(editingSection);
  };

  const handleDeleteSection = (id: number) => {
    // Confirm deletion
    if (!window.confirm("Are you sure you want to delete this hero section? This action cannot be undone.")) {
      return;
    }

    // Call the mutation to delete the section
    deleteSectionMutation.mutate(id);
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
            <h1 className="font-poppins text-3xl font-bold">Hero Sections</h1>
            <p className="text-gray-600 mt-1">Manage hero banners for different pages of your website</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={handleAddSection}>
              <Plus className="h-4 w-4 mr-2" />
              Add Hero Section
            </Button>
          </div>
        </div>
      </div>

      {heroSections.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No Hero Sections</h3>
          <p className="text-gray-500 mb-4">You haven't created any hero sections yet.</p>
          <Button onClick={handleAddSection}>
            Add Your First Hero Section
          </Button>
        </div>
      ) : (
        <div className="grid gap-6">
          {heroSections.map((section) => (
            <Card key={section.id} className={`border ${!section.isActive ? 'border-dashed border-gray-300 bg-gray-50' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center">
                      {section.title}
                      {!section.isActive && (
                        <span className="ml-2 text-xs uppercase bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          Inactive
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1">Page: {section.pageId}</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleEditSection(section)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDeleteSection(section.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm text-gray-600 mb-4">
                  {section.subtitle}
                </div>
                {section.imageUrl && (
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Image className="h-3 w-3 mr-1" />
                    Image: {section.imageUrl}
                  </div>
                )}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  {section.ctaText && (
                    <div>CTA: {section.ctaText} → {section.ctaUrl}</div>
                  )}
                  <div>Order: {section.order}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add Hero Section Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Hero Section</DialogTitle>
            <DialogDescription>
              Create a new hero banner section for your website
            </DialogDescription>
          </DialogHeader>
          {editingSection && (
            <HeroSectionForm 
              section={editingSection} 
              onChange={setEditingSection}
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveNewSection}>
              Add Hero Section
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Hero Section Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Hero Section</DialogTitle>
            <DialogDescription>
              Update this hero section
            </DialogDescription>
          </DialogHeader>
          {editingSection && (
            <HeroSectionForm 
              section={editingSection} 
              onChange={setEditingSection}
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateSection}>
              Update Hero Section
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

// Hero Section Form Component
function HeroSectionForm({ 
  section, 
  onChange 
}: { 
  section: HeroSection; 
  onChange: (section: HeroSection) => void;
}) {
  return (
    <div className="space-y-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pageId">Page ID <span className="text-red-500">*</span></Label>
          <Input
            id="pageId"
            value={section.pageId}
            onChange={(e) => onChange({ ...section, pageId: e.target.value })}
            placeholder="home, about-us, services, etc."
            required
          />
          <p className="text-xs text-gray-500">Unique identifier for the page where this hero section appears</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="order">Display Order</Label>
          <Input
            id="order"
            type="number"
            value={section.order}
            onChange={(e) => onChange({ ...section, order: parseInt(e.target.value) || 0 })}
            min="1"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
        <Input
          id="title"
          value={section.title}
          onChange={(e) => onChange({ ...section, title: e.target.value })}
          placeholder="Enter a title"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          id="subtitle"
          value={section.subtitle || ''}
          onChange={(e) => onChange({ ...section, subtitle: e.target.value })}
          placeholder="Enter a subtitle"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={section.content || ''}
          onChange={(e) => onChange({ ...section, content: e.target.value })}
          placeholder="Enter content for the hero section"
          rows={4}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          value={section.imageUrl || ''}
          onChange={(e) => onChange({ ...section, imageUrl: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="ctaText">CTA Button Text</Label>
          <Input
            id="ctaText"
            value={section.ctaText || ''}
            onChange={(e) => onChange({ ...section, ctaText: e.target.value })}
            placeholder="Learn More, Get Started, etc."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ctaUrl">CTA Button URL</Label>
          <Input
            id="ctaUrl"
            value={section.ctaUrl || ''}
            onChange={(e) => onChange({ ...section, ctaUrl: e.target.value })}
            placeholder="/services or https://example.com"
          />
        </div>
      </div>
      
      <div className="pt-2 flex items-center space-x-2">
        <Switch 
          id="active-status" 
          checked={section.isActive}
          onCheckedChange={(checked) => onChange({ ...section, isActive: checked })}
        />
        <Label htmlFor="active-status">Active</Label>
      </div>
    </div>
  );
}