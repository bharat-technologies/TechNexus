import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle, Edit, Trash2, Plus, Home, Image, Navigation, FileText, LayoutGrid, Globe, LayoutDashboard } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// Main CMS Dashboard Page
export default function CMSDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const { toast } = useToast();

  // Check authentication status
  useEffect(() => {
    // For demo purposes, we'll simulate being logged in
    // In a real implementation, you would check session status
    setIsAuthenticated(true);
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return <LoginForm onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <main className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="font-poppins text-3xl font-bold">Content Management System</h1>
          <p className="text-gray-600 mt-1">Manage website content, navigation, and more</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              View Website
            </Link>
          </Button>
          <Button onClick={() => setIsAuthenticated(false)} variant="ghost" size="sm">
            Sign Out
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="hero">Hero Sections</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">CMS Management</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StatCard 
                title="Website Content" 
                description="Manage and edit live website content"
                icon={<Globe className="h-8 w-8" />}
                linkTo="/cms/website-content"
              />
              <StatCard 
                title="Content Sections" 
                description="Manage content sections and items"
                icon={<FileText className="h-8 w-8" />}
                linkTo="/cms/content"
              />
              <StatCard 
                title="Navigation" 
                description="Edit website navigation menus"
                icon={<Navigation className="h-8 w-8" />}
                linkTo="/cms/navigation" 
              />
              <StatCard 
                title="Hero Sections" 
                description="Manage hero banners and sections"
                icon={<LayoutGrid className="h-8 w-8" />}
                linkTo="/cms/hero-sections" 
              />
              <StatCard 
                title="Gallery" 
                description="Manage image gallery items"
                icon={<Image className="h-8 w-8" />}
                linkTo="/cms/gallery" 
              />
              <StatCard 
                title="User Submissions" 
                description="View contact form submissions"
                icon={<FileText className="h-8 w-8" />}
                linkTo="/admin" 
              />
              <StatCard 
                title="Settings" 
                description="Manage CMS settings"
                icon={<LayoutDashboard className="h-8 w-8" />}
                linkTo="/cms/settings" 
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Edit Pages</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StatCard 
                title="Edit Home Page" 
                description="Edit the main landing page content"
                icon={<Home className="h-8 w-8" />}
                linkTo="/?cms=true" 
              />
              <StatCard 
                title="Edit About Us" 
                description="Edit the About Us page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/about-us?cms=true" 
              />
              <StatCard 
                title="Edit Products" 
                description="Edit product pages content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/cms/website-content?filter=products" 
              />
              <StatCard 
                title="Edit Services" 
                description="Edit services pages content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/cms/website-content?filter=services" 
              />
              <StatCard 
                title="Edit Technology" 
                description="Edit technology pages content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/cms/website-content?filter=technology" 
              />
              <StatCard 
                title="Edit Solutions" 
                description="Edit solutions pages content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/cms/website-content?filter=solutions" 
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="content">
          <ContentSections />
        </TabsContent>
        
        <TabsContent value="navigation">
          <NavigationManager />
        </TabsContent>
        
        <TabsContent value="hero">
          <HeroSectionManager />
        </TabsContent>
        
        <TabsContent value="gallery">
          <GalleryManager />
        </TabsContent>
      </Tabs>
    </main>
  );
}

// Login Form Component
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      
      // Very simple auth for demo purposes
      if (username === "admin" && password === "password") {
        onLogin();
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password",
          variant: "destructive"
        });
      }
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>CMS Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the content management system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// Stat Card Component
function StatCard({ 
  title, 
  description, 
  icon, 
  linkTo 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  linkTo: string;
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={linkTo}>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <div className="text-black">{icon}</div>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
          <div className="mt-4">
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

// Content Sections Component 
function ContentSections() {
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");
  const [newSectionDescription, setNewSectionDescription] = useState("");
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

  const handleAddSection = async () => {
    if (!newSectionName.trim()) {
      toast({
        title: "Validation Error",
        description: "Section name cannot be empty",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch('/api/cms/content-sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: newSectionName,
          description: newSectionDescription || undefined
        })
      });

      const result = await response.json();
      
      if (result.success) {
        // Invalidate the query to refetch data
        queryClient.invalidateQueries({ queryKey: ['/api/cms/content-sections'] });
        
        setIsAddDialogOpen(false);
        setNewSectionName("");
        setNewSectionDescription("");

        toast({
          title: "Section Added",
          description: `"${newSectionName}" has been added successfully.`,
          variant: "default"
        });
      } else {
        throw new Error(result.message || 'Failed to add section');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while adding the section",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-8 h-8 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Content Sections</h2>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Section
        </Button>
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
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
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
              <label className="text-sm font-medium" htmlFor="section-name">
                Section Name
              </label>
              <input
                id="section-name"
                value={newSectionName}
                onChange={(e) => setNewSectionName(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="E.g., Home Page, About Us, Services"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="section-description">
                Description (Optional)
              </label>
              <textarea
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
    </div>
  );
}

// Navigation Manager
function NavigationManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Navigation Management</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Menu Item
        </Button>
      </div>
      <p className="text-gray-500">This feature will be implemented soon. Here you'll be able to manage website navigation items.</p>
    </div>
  );
}

// Hero Section Manager
function HeroSectionManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Hero Sections</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Hero Section
        </Button>
      </div>
      <p className="text-gray-500">This feature will be implemented soon. Here you'll be able to manage hero sections for different pages.</p>
    </div>
  );
}

// Gallery Manager
function GalleryManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Gallery Management</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Gallery Item
        </Button>
      </div>
      <p className="text-gray-500">This feature will be implemented soon. Here you'll be able to manage gallery images and categories.</p>
    </div>
  );
}