import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Loader2, RotateCcw } from 'lucide-react';

interface ContentVersion {
  id: number;
  entityType: string;
  entityId: number;
  version: number;
  data: any;
  createdAt: string;
  createdBy: string | null;
  comment: string | null;
  isActive: boolean;
}

interface VersionHistoryProps {
  entityType: string;
  entityId: number;
  onVersionReverted?: () => void;
}

export function VersionHistory({ entityType, entityId, onVersionReverted }: VersionHistoryProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/cms/versions', entityType, entityId],
    queryFn: async () => {
      const response = await apiRequest('GET', `/api/cms/versions/${entityType}/${entityId}`);
      return await response.json();
    },
  });

  const revertMutation = useMutation({
    mutationFn: async (versionId: number) => {
      const response = await apiRequest('POST', `/api/cms/versions/revert/${versionId}`);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Successfully reverted to previous version.',
      });
      queryClient.invalidateQueries({ queryKey: [`/api/cms/${entityType}`, entityId] });
      if (onVersionReverted) onVersionReverted();
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: `Failed to revert: ${error.message}`,
        variant: 'destructive',
      });
    },
  });

  const handleRevert = (versionId: number) => {
    if (confirm('Are you sure you want to revert to this version? This action cannot be undone.')) {
      revertMutation.mutate(versionId);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="py-4">
      {isLoading ? (
        <div className="flex justify-center p-4">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      ) : error ? (
        <div className="text-center text-red-500">Error loading versions</div>
      ) : data?.data?.length === 0 ? (
        <div className="text-center text-muted-foreground">No version history found</div>
      ) : (
        <ScrollArea className="h-[400px] rounded-md border p-4">
          {data?.data?.map((version: ContentVersion) => (
            <div key={version.id} className="mb-4 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium">Version {version.version}</div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleRevert(version.id)}
                  disabled={revertMutation.isPending}
                >
                  {revertMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Revert
                    </>
                  )}
                </Button>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {formatDate(version.createdAt)}
              </div>
              {version.comment && (
                <div className="mt-2 text-sm">
                  Comment: {version.comment}
                </div>
              )}
              {version.createdBy && (
                <div className="mt-1 text-sm">
                  By: {version.createdBy}
                </div>
              )}
            </div>
          ))}
        </ScrollArea>
      )}
    </div>
  );
}