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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface GalleryItem {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  order: number;
  isActive: boolean;
}

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch gallery items
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/cms/gallery-items'],
    queryFn: async () => {
      const response = await fetch('/api/cms/gallery-items');
      if (!response.ok) {
        throw new Error('Failed to fetch gallery items');
      }
      return response.json();
    }
  });

  useEffect(() => {
    if (data?.success && data?.data) {
      setGalleryItems(data.data);
      
      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(data.data.map((item: GalleryItem) => item.category).filter(Boolean))
      ) as string[];
      
      setCategories(uniqueCategories);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load gallery items",
        variant: "destructive"
      });
      setLoading(false);
    }
  }, [error, toast]);

  const addItemMutation = useMutation({
    mutationFn: async (newItem: Omit<GalleryItem, 'id'>) => {
      const response = await fetch('/api/cms/gallery-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add gallery item');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/gallery-items'] });
      setIsAddDialogOpen(false);
      setEditingItem(null);
      
      toast({
        title: "Gallery Item Added",
        description: "The item has been added successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add gallery item",
        variant: "destructive"
      });
    }
  });
  
  const updateItemMutation = useMutation({
    mutationFn: async (item: GalleryItem) => {
      const response = await fetch(`/api/cms/gallery-items/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update gallery item');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/gallery-items'] });
      setIsEditDialogOpen(false);
      setEditingItem(null);
      
      toast({
        title: "Gallery Item Updated",
        description: "The item has been updated successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update gallery item",
        variant: "destructive"
      });
    }
  });
  
  const deleteItemMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/cms/gallery-items/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete gallery item');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/gallery-items'] });
      
      toast({
        title: "Gallery Item Deleted",
        description: "The item has been deleted successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete gallery item",
        variant: "destructive"
      });
    }
  });

  const handleAddItem = () => {
    setEditingItem({
      id: 0,
      title: "",
      description: "",
      imageUrl: "",
      category: "",
      order: galleryItems.length + 1,
      isActive: true
    });
    setIsAddDialogOpen(true);
  };

  const handleEditItem = (item: GalleryItem) => {
    setEditingItem({ ...item });
    setIsEditDialogOpen(true);
  };

  const handleSaveNewItem = () => {
    if (!editingItem) return;
    
    if (!editingItem.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Title cannot be empty",
        variant: "destructive"
      });
      return;
    }

    if (!editingItem.imageUrl.trim()) {
      toast({
        title: "Validation Error",
        description: "Image URL cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to add the item
    addItemMutation.mutate({
      title: editingItem.title,
      description: editingItem.description,
      imageUrl: editingItem.imageUrl,
      category: editingItem.category,
      order: editingItem.order,
      isActive: editingItem.isActive
    });
  };

  const handleUpdateItem = () => {
    if (!editingItem) return;
    
    if (!editingItem.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Title cannot be empty",
        variant: "destructive"
      });
      return;
    }

    if (!editingItem.imageUrl.trim()) {
      toast({
        title: "Validation Error",
        description: "Image URL cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to update the item
    updateItemMutation.mutate(editingItem);
  };

  const handleDeleteItem = (id: number) => {
    // Confirm deletion
    if (!window.confirm("Are you sure you want to delete this gallery item? This action cannot be undone.")) {
      return;
    }

    // Call the mutation to delete the item
    deleteItemMutation.mutate(id);
  };

  // Filter gallery items by selected category
  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            <h1 className="font-poppins text-3xl font-bold">Gallery Management</h1>
            <p className="text-gray-600 mt-1">Manage image gallery items and categories</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={handleAddItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Gallery Item
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="category-filter" className="mr-2">Filter by Category:</Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {galleryItems.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No Gallery Items</h3>
          <p className="text-gray-500 mb-4">You haven't added any gallery items yet.</p>
          <Button onClick={handleAddItem}>
            Add Your First Gallery Item
          </Button>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No Items in This Category</h3>
          <p className="text-gray-500 mb-4">There are no gallery items in the selected category.</p>
          <Button onClick={handleAddItem}>
            Add New Gallery Item
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className={`border ${!item.isActive ? 'border-dashed border-gray-300 bg-gray-50' : ''}`}>
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg flex items-center">
                      {item.title}
                      {!item.isActive && (
                        <span className="ml-2 text-xs uppercase bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          Inactive
                        </span>
                      )}
                    </CardTitle>
                    {item.category && (
                      <CardDescription className="mt-1">
                        Category: {item.category}
                      </CardDescription>
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
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {item.description && (
                  <div className="text-sm text-gray-600 mb-2">
                    {item.description.length > 100
                      ? `${item.description.substring(0, 100)}...`
                      : item.description
                    }
                  </div>
                )}
                <div className="text-xs text-gray-500">
                  Order: {item.order}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add Gallery Item Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Gallery Item</DialogTitle>
            <DialogDescription>
              Add a new item to the image gallery
            </DialogDescription>
          </DialogHeader>
          {editingItem && (
            <GalleryItemForm 
              item={editingItem} 
              onChange={setEditingItem}
              categories={categories}
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveNewItem}>
              Add Gallery Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Gallery Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Gallery Item</DialogTitle>
            <DialogDescription>
              Update this gallery item
            </DialogDescription>
          </DialogHeader>
          {editingItem && (
            <GalleryItemForm 
              item={editingItem} 
              onChange={setEditingItem}
              categories={categories}
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateItem}>
              Update Gallery Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

// Gallery Item Form Component
function GalleryItemForm({ 
  item, 
  onChange,
  categories
}: { 
  item: GalleryItem; 
  onChange: (item: GalleryItem) => void;
  categories: string[];
}) {
  const [newCategory, setNewCategory] = useState<string>("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState<boolean>(false);

  const handleCategoryChange = (value: string) => {
    if (value === "add-new") {
      setShowNewCategoryInput(true);
    } else {
      onChange({ ...item, category: value });
    }
  };

  const handleAddNewCategory = () => {
    if (newCategory.trim()) {
      onChange({ ...item, category: newCategory.trim() });
      setShowNewCategoryInput(false);
      setNewCategory("");
    }
  };

  return (
    <div className="space-y-4 py-2">
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
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={item.description || ''}
          onChange={(e) => onChange({ ...item, description: e.target.value })}
          placeholder="Enter a description"
          rows={3}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL <span className="text-red-500">*</span></Label>
        <Input
          id="imageUrl"
          value={item.imageUrl}
          onChange={(e) => onChange({ ...item, imageUrl: e.target.value })}
          placeholder="https://example.com/image.jpg"
          required
        />
        <p className="text-xs text-gray-500">Full URL to the image file (JPG, PNG, etc.)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          {showNewCategoryInput ? (
            <div className="flex space-x-2">
              <Input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter new category"
              />
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={handleAddNewCategory}
              >
                Add
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setShowNewCategoryInput(false);
                  setNewCategory("");
                }}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Select 
              value={item.category || ""} 
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">None</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
                <SelectItem value="add-new">+ Add New Category</SelectItem>
              </SelectContent>
            </Select>
          )}
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