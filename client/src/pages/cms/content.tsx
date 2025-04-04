import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft, Edit, Trash2, Plus, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface ContentSection {
  id: number;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function ContentSectionsPage() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");
  const [newSectionDescription, setNewSectionDescription] = useState("");
  const [editingSectionId, setEditingSectionId] = useState<number | null>(null);
  const [editingSectionName, setEditingSectionName] = useState("");
  const [editingSectionDescription, setEditingSectionDescription] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Use React Query to fetch content sections
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/cms/content-sections'],
    queryFn: async () => {
      const response = await fetch('/api/cms/content-sections');
      if (!response.ok) {
        throw new Error('Failed to fetch content sections');
      }
      return response.json();
    }
  });

  useEffect(() => {
    if (data?.success && data?.data) {
      setSections(data.data);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load content sections",
        variant: "destructive"
      });
      setLoading(false);
    }
  }, [error, toast]);

  const addSectionMutation = useMutation({
    mutationFn: async (sectionData: { name: string; description?: string }) => {
      const response = await fetch('/api/cms/content-sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sectionData)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add section');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/content-sections'] });
      setIsAddDialogOpen(false);
      setNewSectionName("");
      setNewSectionDescription("");
      
      toast({
        title: "Section Added",
        description: "The section has been added successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add section",
        variant: "destructive"
      });
    }
  });

  const updateSectionMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: { name: string; description?: string } }) => {
      const response = await fetch(`/api/cms/content-sections/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update section');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/content-sections'] });
      setIsEditDialogOpen(false);
      setEditingSectionId(null);
      setEditingSectionName("");
      setEditingSectionDescription("");
      
      toast({
        title: "Section Updated",
        description: "The section has been updated successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update section",
        variant: "destructive"
      });
    }
  });

  const deleteSectionMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/cms/content-sections/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete section');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/content-sections'] });
      
      toast({
        title: "Section Deleted",
        description: "The section has been deleted successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete section",
        variant: "destructive"
      });
    }
  });

  const handleAddSection = async () => {
    if (!newSectionName.trim()) {
      toast({
        title: "Validation Error",
        description: "Section name cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to add a section
    addSectionMutation.mutate({
      name: newSectionName,
      description: newSectionDescription || undefined
    });
  };

  const handleEditSection = (section: ContentSection) => {
    setEditingSectionId(section.id);
    setEditingSectionName(section.name);
    setEditingSectionDescription(section.description || "");
    setIsEditDialogOpen(true);
  };

  const handleUpdateSection = async () => {
    if (!editingSectionId) return;
    
    if (!editingSectionName.trim()) {
      toast({
        title: "Validation Error",
        description: "Section name cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to update a section
    updateSectionMutation.mutate({
      id: editingSectionId,
      data: {
        name: editingSectionName,
        description: editingSectionDescription || undefined
      }
    });
  };

  const handleDeleteSection = async (id: number) => {
    // Confirm deletion
    if (!window.confirm("Are you sure you want to delete this section? This will also delete all content items in this section. This action cannot be undone.")) {
      return;
    }

    // Call the mutation to delete a section
    deleteSectionMutation.mutate(id);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <Button asChild variant="outline" size="sm" className="mb-4">
          <Link href="/cms">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Content Sections</h2>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </Button>
        </div>
      </div>

      {sections.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500">No content sections found.</p>
          <Button 
            className="mt-4" 
            variant="outline" 
            onClick={() => setIsAddDialogOpen(true)}
          >
            Add Your First Section
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {sections.map((section) => (
            <Card key={section.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{section.name}</CardTitle>
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
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/cms/content/${section.id}`}>
                    Manage Content Items
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Content Section</DialogTitle>
            <DialogDescription>
              Create a new section to organize your content
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="section-name">
                Section Name
              </Label>
              <Input
                id="section-name"
                value={newSectionName}
                onChange={(e) => setNewSectionName(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="E.g., Home Page, About Us, Services"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="section-description">
                Description (Optional)
              </Label>
              <Textarea
                id="section-description"
                value={newSectionDescription}
                onChange={(e) => setNewSectionDescription(e.target.value)}
                className="w-full p-2 border rounded-md h-24"
                placeholder="Brief description of this content section"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddSection}>
              Add Section
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Content Section</DialogTitle>
            <DialogDescription>
              Update this content section
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="edit-section-name">
                Section Name
              </Label>
              <Input
                id="edit-section-name"
                value={editingSectionName}
                onChange={(e) => setEditingSectionName(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="E.g., Home Page, About Us, Services"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="edit-section-description">
                Description (Optional)
              </Label>
              <Textarea
                id="edit-section-description"
                value={editingSectionDescription}
                onChange={(e) => setEditingSectionDescription(e.target.value)}
                className="w-full p-2 border rounded-md h-24"
                placeholder="Brief description of this content section"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateSection}>
              Update Section
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}