import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft, Edit, Trash2, Plus, Save } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface NavigationItem {
  id: number;
  title: string;
  url: string;
  parentId: number | null;
  order: number;
  isActive: boolean;
}

export default function NavigationPage() {
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NavigationItem | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch navigation items
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/cms/navigation-items'],
    queryFn: async () => {
      const response = await fetch('/api/cms/navigation-items');
      if (!response.ok) {
        throw new Error('Failed to fetch navigation items');
      }
      return response.json();
    }
  });

  useEffect(() => {
    if (data?.success && data?.data) {
      setNavigationItems(data.data);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load navigation items",
        variant: "destructive"
      });
      setLoading(false);
    }
  }, [error, toast]);

  const addItemMutation = useMutation({
    mutationFn: async (newItem: Omit<NavigationItem, 'id'>) => {
      const response = await fetch('/api/cms/navigation-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add navigation item');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/navigation-items'] });
      setIsAddDialogOpen(false);
      setEditingItem(null);
      
      toast({
        title: "Navigation Item Added",
        description: "The item has been added successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add navigation item",
        variant: "destructive"
      });
    }
  });
  
  const updateItemMutation = useMutation({
    mutationFn: async (item: NavigationItem) => {
      const response = await fetch(`/api/cms/navigation-items/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update navigation item');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/navigation-items'] });
      setIsEditDialogOpen(false);
      setEditingItem(null);
      
      toast({
        title: "Navigation Item Updated",
        description: "The item has been updated successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update navigation item",
        variant: "destructive"
      });
    }
  });
  
  const deleteItemMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/cms/navigation-items/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete navigation item');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/cms/navigation-items'] });
      
      toast({
        title: "Navigation Item Deleted",
        description: "The item has been deleted successfully.",
        variant: "default"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete navigation item",
        variant: "destructive"
      });
    }
  });

  const handleAddItem = () => {
    setEditingItem({
      id: 0,
      title: "",
      url: "",
      parentId: null,
      order: navigationItems.length + 1,
      isActive: true
    });
    setIsAddDialogOpen(true);
  };

  const handleEditItem = (item: NavigationItem) => {
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

    if (!editingItem.url.trim()) {
      toast({
        title: "Validation Error",
        description: "URL cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to add the item
    addItemMutation.mutate({
      title: editingItem.title,
      url: editingItem.url,
      parentId: editingItem.parentId,
      order: editingItem.order,
      isActive: editingItem.isActive
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

    if (!editingItem.url.trim()) {
      toast({
        title: "Validation Error",
        description: "URL cannot be empty",
        variant: "destructive"
      });
      return;
    }

    // Call the mutation to update the item
    updateItemMutation.mutate(editingItem);
  };

  const handleDeleteItem = (id: number) => {
    // Confirm deletion
    if (!window.confirm("Are you sure you want to delete this item? This action cannot be undone.")) {
      return;
    }

    // Call the mutation to delete the item
    deleteItemMutation.mutate(id);
  };

  const getParentTitle = (parentId: number | null) => {
    if (parentId === null) return "None";
    const parent = navigationItems.find(item => item.id === parentId);
    return parent ? parent.title : "Unknown";
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
            <h1 className="font-poppins text-3xl font-bold">Navigation Management</h1>
            <p className="text-gray-600 mt-1">Edit website navigation menus and structure</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={handleAddItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Navigation Item
            </Button>
          </div>
        </div>
      </div>

      {navigationItems.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No Navigation Items</h3>
          <p className="text-gray-500 mb-4">You haven't created any navigation items yet.</p>
          <Button onClick={handleAddItem}>
            Add Your First Navigation Item
          </Button>
        </div>
      ) : (
        <div className="grid gap-6">
          {navigationItems.map((item) => (
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
                    <CardDescription className="mt-1">URL: {item.url}</CardDescription>
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
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  <div>Parent: {getParentTitle(item.parentId)}</div>
                  <div>Order: {item.order}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add Navigation Item Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Navigation Item</DialogTitle>
            <DialogDescription>
              Create a new navigation menu item
            </DialogDescription>
          </DialogHeader>
          {editingItem && (
            <NavigationItemForm 
              item={editingItem} 
              onChange={setEditingItem}
              navigationItems={navigationItems}
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveNewItem}>
              Add Navigation Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Navigation Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Navigation Item</DialogTitle>
            <DialogDescription>
              Update this navigation menu item
            </DialogDescription>
          </DialogHeader>
          {editingItem && (
            <NavigationItemForm 
              item={editingItem} 
              onChange={setEditingItem}
              navigationItems={navigationItems}
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateItem}>
              Update Navigation Item
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}

// Navigation Item Form Component
function NavigationItemForm({ 
  item, 
  onChange,
  navigationItems
}: { 
  item: NavigationItem; 
  onChange: (item: NavigationItem) => void;
  navigationItems: NavigationItem[];
}) {
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
        <Label htmlFor="url">URL <span className="text-red-500">*</span></Label>
        <Input
          id="url"
          value={item.url}
          onChange={(e) => onChange({ ...item, url: e.target.value })}
          placeholder="/about-us or https://example.com"
          required
        />
        <p className="text-xs text-gray-500">Use relative paths like '/about-us' for internal pages, or full URLs for external links.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="parent">Parent Item</Label>
          <Select 
            value={item.parentId?.toString() || ""} 
            onValueChange={(value) => onChange({ ...item, parentId: value ? parseInt(value) : null })}
          >
            <SelectTrigger>
              <SelectValue placeholder="None (Top-level item)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">None (Top-level item)</SelectItem>
              {navigationItems
                .filter(navItem => navItem.id !== item.id) // Filter out the current item to prevent circular reference
                .map(navItem => (
                  <SelectItem key={navItem.id} value={navItem.id.toString()}>
                    {navItem.title}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
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