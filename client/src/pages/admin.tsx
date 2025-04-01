import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Contact submission interface
interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  createdAt: string;
  isResolved: boolean;
}

// Newsletter subscription interface
interface NewsletterSubscription {
  id: number;
  email: string;
  createdAt: string;
  isActive: boolean;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("contacts");
  
  // Types for API responses
  interface ContactsResponse {
    success: boolean;
    data: ContactSubmission[];
  }
  
  interface SubscriptionsResponse {
    success: boolean;
    data: NewsletterSubscription[];
  }
  
  // Fetch contact submissions
  const { 
    data: contactData, 
    isLoading: contactsLoading, 
    error: contactsError 
  } = useQuery<ContactsResponse>({
    queryKey: ['/api/admin/contacts'],
    enabled: activeTab === "contacts",
  });
  
  // Fetch newsletter subscriptions
  const { 
    data: subscriptionData, 
    isLoading: subscriptionsLoading, 
    error: subscriptionsError 
  } = useQuery<SubscriptionsResponse>({
    queryKey: ['/api/admin/subscriptions'],
    enabled: activeTab === "subscriptions",
  });
  
  // Handle loading states
  const isLoading = 
    (activeTab === "contacts" && contactsLoading) || 
    (activeTab === "subscriptions" && subscriptionsLoading);
  
  // Handle error states
  const hasError = 
    (activeTab === "contacts" && contactsError) || 
    (activeTab === "subscriptions" && subscriptionsError);
  
  return (
    <div className="container py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
          <TabsTrigger value="subscriptions">Newsletter Subscriptions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form Submissions</CardTitle>
              <CardDescription>
                View all contact form submissions from users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="py-8 text-center">Loading submissions...</div>
              ) : hasError ? (
                <div className="py-8 text-center text-red-500">
                  Error loading contact submissions
                </div>
              ) : contactData?.data?.length > 0 ? (
                <Table>
                  <TableCaption>A list of all contact form submissions.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactData.data.map((submission: ContactSubmission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{submission.id}</TableCell>
                        <TableCell>{submission.name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.subject || 'N/A'}</TableCell>
                        <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
                        <TableCell>{formatDate(new Date(submission.createdAt))}</TableCell>
                        <TableCell>
                          <Badge variant={submission.isResolved ? "default" : "outline"}>
                            {submission.isResolved ? "Resolved" : "Pending"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="py-8 text-center">No contact submissions yet.</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="subscriptions">
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Subscriptions</CardTitle>
              <CardDescription>
                View all newsletter subscribers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="py-8 text-center">Loading subscriptions...</div>
              ) : hasError ? (
                <div className="py-8 text-center text-red-500">
                  Error loading newsletter subscriptions
                </div>
              ) : subscriptionData?.data?.length > 0 ? (
                <Table>
                  <TableCaption>A list of all newsletter subscriptions.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Date Subscribed</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptionData.data.map((subscription: NewsletterSubscription) => (
                      <TableRow key={subscription.id}>
                        <TableCell>{subscription.id}</TableCell>
                        <TableCell>{subscription.email}</TableCell>
                        <TableCell>{formatDate(new Date(subscription.createdAt))}</TableCell>
                        <TableCell>
                          <Badge variant={subscription.isActive ? "default" : "outline"}>
                            {subscription.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="py-8 text-center">No newsletter subscribers yet.</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}