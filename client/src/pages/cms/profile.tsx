import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { 
  User, Key, Mail, AlertCircle, CheckCircle, Loader2, ArrowLeft, Shield,
  Paintbrush, Image, Palette
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("account");
  const { toast } = useToast();

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

  return (
    <main className="container mx-auto p-4 md:p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins text-3xl font-bold">Profile Settings</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/cms">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account Information</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Account Details</CardTitle>
              <CardDescription>
                View and manage your account information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{user?.username || 'Admin User'}</h3>
                  <p className="text-sm text-muted-foreground">{user?.email || 'admin@bharattechnologies.com'}</p>
                  <p className="text-sm mt-1">Last login: {new Date().toLocaleString()}</p>
                </div>
              </div>
              
              <div className="grid gap-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input 
                    id="display-name" 
                    defaultValue={user?.username || 'Admin User'} 
                    disabled
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      className="pl-10"
                      placeholder="Enter your email address"
                      defaultValue={user?.email || 'admin@bharattechnologies.com'}
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <UpdateEmailForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Security Settings</CardTitle>
              <CardDescription>
                Manage your password and account security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-4 rounded-lg flex items-start space-x-4">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Secure your account</h3>
                  <p className="text-sm text-muted-foreground">
                    We recommend changing your password periodically and using a strong, unique password 
                    that you don't use for other services.
                  </p>
                </div>
              </div>
              
              <ChangePasswordForm />
              
              <div className="border-t pt-6">
                <h3 className="font-medium mb-4">Password Reset by Email</h3>
                <ResetPasswordForm />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Profile Appearance</CardTitle>
              <CardDescription>
                Customize your profile background and appearance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileBackgroundCustomizer />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}

function UpdateEmailForm() {
  const [newEmail, setNewEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEmail) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/auth/update-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newEmail }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update email');
      }
      
      toast({
        title: "Email updated successfully",
        description: data.message || "Your email has been updated",
      });
      
      setSuccess(true);
      
      // Refresh user data in auth context after 1 second
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "There was a problem updating your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="new-email">Update Email Address</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="new-email"
            type="email"
            placeholder="Enter new email address"
            className="pl-10"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            disabled={isSubmitting || success}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          We'll send a verification link to this email address.
        </p>
      </div>
      
      {success && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Verification email sent</AlertTitle>
          <AlertDescription className="text-green-700">
            Please check your inbox and follow the link to verify your new email.
          </AlertDescription>
        </Alert>
      )}
      
      <Button 
        type="submit" 
        disabled={!newEmail || isSubmitting || success}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending verification...
          </>
        ) : success ? (
          <>
            <CheckCircle className="mr-2 h-4 w-4" />
            Verification Sent
          </>
        ) : (
          "Update Email"
        )}
      </Button>
    </form>
  );
}

function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }
    
    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update password');
      }
      
      toast({
        title: "Password updated",
        description: data.message || "Your password has been changed successfully",
      });
      
      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "There was a problem updating your password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-medium mb-2">Change Password</h3>
      
      <div className="space-y-2">
        <Label htmlFor="current-password">Current Password</Label>
        <div className="relative">
          <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="current-password"
            type="password"
            className="pl-10"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            disabled={isSubmitting || success}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="new-password">New Password</Label>
        <div className="relative">
          <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="new-password"
            type="password"
            className="pl-10"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={isSubmitting || success}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Password must be at least 6 characters long.
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm New Password</Label>
        <div className="relative">
          <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="confirm-password"
            type="password"
            className="pl-10"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isSubmitting || success}
          />
        </div>
      </div>
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {success && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Password updated</AlertTitle>
          <AlertDescription className="text-green-700">
            Your password has been changed successfully.
          </AlertDescription>
        </Alert>
      )}
      
      <Button 
        type="submit" 
        disabled={isSubmitting || success}
        className="mt-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Updating...
          </>
        ) : success ? (
          <>
            <CheckCircle className="mr-2 h-4 w-4" />
            Password Updated
          </>
        ) : (
          "Change Password"
        )}
      </Button>
    </form>
  );
}

function ProfileBackgroundCustomizer() {
  const { user } = useAuth();
  const [backgroundType, setBackgroundType] = useState<string>(user?.profileBackground || 'color');
  const [backgroundColor, setBackgroundColor] = useState<string>(user?.profileBackgroundColor || '#f8fafc');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();
  
  // Preview state
  const [showPreview, setShowPreview] = useState(false);
  
  useEffect(() => {
    if (user) {
      setBackgroundType(user.profileBackground || 'color');
      setBackgroundColor(user.profileBackgroundColor || '#f8fafc');
    }
  }, [user]);

  const handleSaveSettings = async () => {
    setIsLoading(true);
    setSuccess(false);
    
    try {
      const response = await fetch('/api/auth/update-profile-background', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profileBackground: backgroundType,
          profileBackgroundColor: backgroundColor,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile background');
      }
      
      toast({
        title: "Settings saved",
        description: "Your profile background settings have been updated.",
      });
      
      setSuccess(true);
      
      // Refresh after a delay to show the success state
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "There was a problem updating your settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-muted/50 p-4 rounded-lg flex items-start space-x-4">
        <Paintbrush className="h-6 w-6 text-primary mt-1" />
        <div>
          <h3 className="font-medium">Customize your profile background</h3>
          <p className="text-sm text-muted-foreground">
            Choose a background color or style for your dashboard. These settings will be applied to your personal view.
          </p>
        </div>
      </div>
      
      {showPreview && (
        <div className="relative overflow-hidden rounded-lg border h-40 mb-4" style={{
          backgroundColor: backgroundType === 'color' ? backgroundColor : undefined,
          backgroundImage: backgroundType === 'gradient' 
            ? `linear-gradient(to right, ${backgroundColor}, #ffffff)` 
            : undefined
        }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <p className="text-sm font-medium">Background Preview</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="background-type">Background Type</Label>
          <RadioGroup
            value={backgroundType}
            onValueChange={setBackgroundType}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="color" id="color" />
              <Label htmlFor="color" className="cursor-pointer">Solid Color</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gradient" id="gradient" />
              <Label htmlFor="gradient" className="cursor-pointer">Gradient</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pattern" id="pattern" disabled />
              <Label htmlFor="pattern" className="cursor-pointer text-muted-foreground">Pattern (Coming Soon)</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="color-picker">
            {backgroundType === 'gradient' ? 'Gradient Start Color' : 'Background Color'}
          </Label>
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-md border"
              style={{ backgroundColor: backgroundColor }}
            />
            <Input
              id="color-picker"
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-16 h-10 p-1"
            />
            <Input
              type="text"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              placeholder="#hex color"
              className="flex-1"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2 pt-2">
          <Switch
            id="preview-mode"
            checked={showPreview}
            onCheckedChange={setShowPreview}
          />
          <Label htmlFor="preview-mode" className="cursor-pointer">
            Show Preview
          </Label>
        </div>
      </div>
      
      <div className="pt-4">
        <Button
          onClick={handleSaveSettings}
          disabled={isLoading || success}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : success ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Settings Saved
            </>
          ) : (
            <>
              <Palette className="mr-2 h-4 w-4" />
              Save Background Settings
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1 = request, 2 = verify, 3 = success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/auth/request-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to request password reset');
      }
      
      toast({
        title: "Verification code sent",
        description: data.message || "Check your email for the verification code",
      });
      
      // Store the token for the next step (would normally be sent by email)
      if (data.resetToken) {
        setVerificationCode(data.resetToken);
      }
      
      setStep(2);
    } catch (error: any) {
      toast({
        title: "Request failed",
        description: error.message || "There was a problem sending the verification code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!verificationCode || !newPassword) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: verificationCode,
          newPassword
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to reset password');
      }
      
      toast({
        title: "Password reset successful",
        description: data.message || "Your password has been reset successfully",
      });
      
      setStep(3);
    } catch (error: any) {
      toast({
        title: "Reset failed",
        description: error.message || "Invalid verification code or there was a problem resetting your password.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 1) {
    return (
      <form onSubmit={handleRequestCode} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="reset-email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="reset-email"
              type="email"
              className="pl-10"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            We'll send a verification code to reset your password.
          </p>
        </div>
        
        <Button 
          type="submit" 
          variant="outline"
          disabled={!email || isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending code...
            </>
          ) : (
            "Request Verification Code"
          )}
        </Button>
      </form>
    );
  }

  if (step === 2) {
    return (
      <form onSubmit={handleResetPassword} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="verification-code">Verification Code</Label>
          <Input
            id="verification-code"
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="new-reset-password">New Password</Label>
          <div className="relative">
            <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="new-reset-password"
              type="password"
              className="pl-10"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Password must be at least 6 characters long.
          </p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <Button 
            type="submit" 
            disabled={!verificationCode || !newPassword || isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Resetting password...
              </>
            ) : (
              "Reset Password"
            )}
          </Button>
          
          <Button 
            type="button" 
            variant="link" 
            onClick={() => setStep(1)}
            disabled={isSubmitting}
            className="text-sm"
          >
            Back to verification request
          </Button>
        </div>
      </form>
    );
  }

  if (step === 3) {
    return (
      <div className="space-y-4">
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Password reset successful</AlertTitle>
          <AlertDescription className="text-green-700">
            Your password has been reset successfully. You can now log in with your new password.
          </AlertDescription>
        </Alert>
        
        <Button
          type="button"
          variant="outline"
          onClick={() => setStep(1)}
          className="w-full"
        >
          Reset Another Password
        </Button>
      </div>
    );
  }

  return null;
}