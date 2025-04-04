import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Key, Lock, User, Settings as SettingsIcon, Database } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully.",
    });
  };

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
            <h1 className="font-poppins text-3xl font-bold">CMS Settings</h1>
            <p className="text-gray-600 mt-1">Manage system settings and user accounts</p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8 lg:w-[600px]">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage general CMS settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input 
                  id="site-name" 
                  defaultValue="Bharat Technologies" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-url">Site URL</Label>
                <Input 
                  id="site-url" 
                  defaultValue="https://bharattechnologies.com" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input 
                  id="admin-email" 
                  defaultValue="admin@bharattechnologies.com" 
                  type="email"
                />
              </div>
              <div className="pt-4">
                <Button onClick={handleSaveSettings}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  defaultValue="admin" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  defaultValue="admin@bharattechnologies.com" 
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input 
                  id="first-name" 
                  defaultValue="Admin" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input 
                  id="last-name" 
                  defaultValue="User" 
                />
              </div>
              <div className="pt-4">
                <Button onClick={handleSaveSettings}>
                  <User className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input 
                  id="current-password" 
                  type="password"
                  placeholder="Enter your current password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input 
                  id="new-password" 
                  type="password"
                  placeholder="Enter your new password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password"
                  placeholder="Confirm your new password"
                />
              </div>
              <div className="pt-4">
                <Button onClick={handleSaveSettings}>
                  <Lock className="h-4 w-4 mr-2" />
                  Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Manage advanced CMS settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex">
                  <Input 
                    id="api-key" 
                    defaultValue="sk_live_******************************" 
                    type="password"
                    className="rounded-r-none"
                  />
                  <Button 
                    variant="outline"
                    className="rounded-l-none"
                    onClick={() => {
                      toast({
                        title: "API Key Generated",
                        description: "A new API key has been generated successfully.",
                      });
                    }}
                  >
                    <Key className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cache-ttl">Cache TTL (seconds)</Label>
                <Input 
                  id="cache-ttl" 
                  defaultValue="3600" 
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="debug-mode">Debug Mode</Label>
                <select 
                  id="debug-mode" 
                  className="w-full p-2 border rounded-md"
                  defaultValue="false"
                >
                  <option value="true">Enabled</option>
                  <option value="false">Disabled</option>
                </select>
              </div>
              <div className="pt-4 flex space-x-2">
                <Button onClick={handleSaveSettings}>
                  <SettingsIcon className="h-4 w-4 mr-2" />
                  Save Settings
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Cache Cleared",
                      description: "The system cache has been cleared successfully.",
                    });
                  }}
                >
                  <Database className="h-4 w-4 mr-2" />
                  Clear Cache
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}