import { Link, useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { 
  AlertCircle, CheckCircle, Edit, Trash2, Plus, Home, Image, 
  Navigation, FileText, LayoutGrid, Globe, LayoutDashboard, Database,
  LogOut, Loader2, User, Settings, ChevronDown
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Main CMS Dashboard Page
export default function CMSDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const { isAuthenticated, isLoading, logout } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
    setLocation('/cms/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const { user } = useAuth();
  
  return (
    <main className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="font-poppins text-3xl font-bold">Content Management System</h1>
          <p className="text-gray-600 mt-1">Manage website content, navigation, and more</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2 items-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              View Website
            </Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-3 w-3 text-primary" />
                </div>
                <span className="hidden sm:inline">{user?.username || 'Admin'}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/cms/profile" className="w-full cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cms/settings" className="w-full cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={handleLogout} 
                disabled={isLoggingOut}
                className="text-destructive focus:text-destructive"
              >
                {isLoggingOut ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Signing Out...</span>
                  </>
                ) : (
                  <>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                title="Database Admin" 
                description="Manage database tables and content"
                icon={<Database className="h-8 w-8" />}
                linkTo="/cms/database-admin" 
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
            <h3 className="text-xl font-semibold mb-4">Main Pages</h3>
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
                title="Edit Our Team" 
                description="Edit the Our Team page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/our-team?cms=true" 
              />
              <StatCard 
                title="Edit Careers" 
                description="Edit the Careers page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/careers?cms=true" 
              />
              <StatCard 
                title="Edit AI Chat" 
                description="Edit the AI Chat interface content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/ai-chat?cms=true" 
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Technology Pages</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StatCard 
                title="Edit AI Intelligence" 
                description="Edit AI Intelligence page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/ai-intelligence?cms=true" 
              />
              <StatCard 
                title="Edit Cloud Stack" 
                description="Edit Cloud Stack page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/cloud-stack?cms=true" 
              />
              <StatCard 
                title="Edit Multi-Cloud" 
                description="Edit Multi-Cloud page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/multi-cloud?cms=true" 
              />
              <StatCard 
                title="Edit Cyber Security" 
                description="Edit Cyber Security page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/cyber-security?cms=true" 
              />
              <StatCard 
                title="Edit Defence" 
                description="Edit Defence page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/defence?cms=true" 
              />
              <StatCard 
                title="Edit Space" 
                description="Edit Space page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/space?cms=true" 
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Products Pages</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StatCard 
                title="Edit Analytics Cloud" 
                description="Edit Analytics Cloud product page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/analytics-cloud?cms=true" 
              />
              <StatCard 
                title="Edit Business Network" 
                description="Edit Business Network Cloud product page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/business-network-cloud?cms=true" 
              />
              <StatCard 
                title="Edit Content Cloud" 
                description="Edit Content Cloud product page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/content-cloud?cms=true" 
              />
              <StatCard 
                title="Edit Cybersecurity Cloud" 
                description="Edit Cybersecurity Cloud product page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/cybersecurity-cloud?cms=true" 
              />
              <StatCard 
                title="Edit DevOps Cloud" 
                description="Edit DevOps Cloud product page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/devops-cloud?cms=true" 
              />
              <StatCard 
                title="Edit Experience Cloud" 
                description="Edit Experience Cloud product page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/experience-cloud?cms=true" 
              />
              <StatCard 
                title="Edit Observability" 
                description="Edit Observability & Service Management page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/observability-service-management?cms=true" 
              />
              <StatCard 
                title="Edit A-Z Products" 
                description="Edit A-Z Products Listing page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/a-z-listing?cms=true" 
              />
              <StatCard 
                title="Edit Name Changes" 
                description="Edit Product Name Changes page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/products/name-changes?cms=true" 
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Solutions Pages</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StatCard 
                title="Edit Space Solutions" 
                description="Edit Space Solutions page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/solutions/space?cms=true" 
              />
              <StatCard 
                title="Edit Banking Solutions" 
                description="Edit Banking Solutions page content"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/solutions/banking?cms=true" 
              />
              <StatCard 
                title="Edit AI Intelligence Solutions" 
                description="Edit AI Intelligence Solutions page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/solutions/ai-intelligence?cms=true" 
              />
              <StatCard 
                title="Edit Cloud Stack Solutions" 
                description="Edit Cloud Stack Solutions page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/solutions/cloud-stack?cms=true" 
              />
              <StatCard 
                title="Edit Cyber Security Solutions" 
                description="Edit Cyber Security Solutions page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/solutions/cyber-security?cms=true" 
              />
              <StatCard 
                title="Edit Defence Solutions" 
                description="Edit Defence Solutions page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/solutions/defence?cms=true" 
              />
              <StatCard 
                title="Edit Multi-Cloud Solutions" 
                description="Edit Multi-Cloud Solutions page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/solutions/multi-cloud?cms=true" 
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Specialized Technology</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StatCard 
                title="Edit Healthcare Technology" 
                description="Edit Healthcare Technology page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/technology/healthcare?cms=true" 
              />
              <StatCard 
                title="Edit Life Support Systems" 
                description="Edit Life Support Systems page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/technology/life-support?cms=true" 
              />
              <StatCard 
                title="Edit Agriculture & Farming" 
                description="Edit Agriculture & Farming Technology page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/technology/agriculture-farming?cms=true" 
              />
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Services Pages</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <StatCard 
                title="Edit Consulting Services" 
                description="Edit Consulting Services page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/consulting?cms=true" 
              />
              <StatCard 
                title="Edit Development Services" 
                description="Edit Development Services page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/development?cms=true" 
              />
              <StatCard 
                title="Edit Support Services" 
                description="Edit Support Services page"
                icon={<Edit className="h-8 w-8" />}
                linkTo="/support?cms=true" 
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