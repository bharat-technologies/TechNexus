import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

interface User {
  id: number;
  username: string;
  email: string;
  role?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuthStatus: () => Promise<boolean>;
  updateUserEmail: (email: string) => Promise<boolean>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<boolean>;
  requestPasswordReset: (email: string) => Promise<boolean>;
  resetPassword: (email: string, code: string, newPassword: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  // Check authentication status when component mounts
  useEffect(() => {
    checkAuthStatus().then(() => setIsLoading(false));
  }, []);

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/check');
      const data = await response.json();
      
      setIsAuthenticated(data.authenticated);
      
      if (data.authenticated && data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
      
      return data.authenticated;
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
      setUser(null);
      return false;
    }
  };

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Login Failed",
          description: data.message || "Invalid username or password",
          variant: "destructive",
        });
        return false;
      }

      setIsAuthenticated(true);
      
      // Set user data if available in response
      if (data.user) {
        setUser(data.user);
      } else {
        // Default user if none provided
        setUser({
          id: 1,
          username: username,
          email: 'admin@bharattechnologies.com',
          role: 'admin'
        });
      }
      
      toast({
        title: "Login Successful",
        description: "Welcome to the CMS dashboard",
      });
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login Error",
        description: "An error occurred during login",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        setIsAuthenticated(false);
        setUser(null);
        toast({
          title: "Logged Out",
          description: "You have been successfully logged out",
        });
      } else {
        toast({
          title: "Logout Failed",
          description: "There was a problem logging out",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout Error",
        description: "An error occurred during logout",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserEmail = async (email: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/update-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Email Update Failed",
          description: data.message || "There was a problem updating your email",
          variant: "destructive",
        });
        return false;
      }

      // Update user data with new email
      setUser(prev => prev ? { ...prev, email } : null);
      
      toast({
        title: "Email Updated",
        description: "Your email has been updated successfully",
      });
      return true;
    } catch (error) {
      console.error('Email update error:', error);
      toast({
        title: "Update Error",
        description: "An error occurred while updating your email",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Password Change Failed",
          description: data.message || "There was a problem changing your password",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Password Changed",
        description: "Your password has been changed successfully",
      });
      return true;
    } catch (error) {
      console.error('Password change error:', error);
      toast({
        title: "Change Error",
        description: "An error occurred while changing your password",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const requestPasswordReset = async (email: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/request-password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Request Failed",
          description: data.message || "There was a problem requesting a password reset",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Reset Email Sent",
        description: "Check your email for the password reset verification code",
      });
      return true;
    } catch (error) {
      console.error('Password reset request error:', error);
      toast({
        title: "Request Error",
        description: "An error occurred while requesting a password reset",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string, code: string, newPassword: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Reset Failed",
          description: data.message || "There was a problem resetting your password",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Password Reset",
        description: "Your password has been reset successfully",
      });
      return true;
    } catch (error) {
      console.error('Password reset error:', error);
      toast({
        title: "Reset Error",
        description: "An error occurred while resetting your password",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      isLoading, 
      user,
      login, 
      logout, 
      checkAuthStatus,
      updateUserEmail,
      changePassword,
      requestPasswordReset,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}