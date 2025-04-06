import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export interface SimpleHeroBlockProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  isCmsMode?: boolean;
  id?: number;
}

/**
 * A reusable simple hero block with CMS editing capability
 */
const SimpleHeroBlock = ({
  title,
  subtitle = '',
  backgroundColor = 'black',
  textColor = 'white',
  isCmsMode = false,
  id
}: SimpleHeroBlockProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedSubtitle, setEditedSubtitle] = useState(subtitle || '');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleSave = async () => {
    if (!id) return;

    try {
      const response = await fetch(`/api/cms/website-content/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id,
          title: editedTitle,
          subtitle: editedSubtitle,
          backgroundColor,
          textColor
        })
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Hero section updated successfully",
          variant: "default"
        });
        setIsEditing(false);
        queryClient.invalidateQueries({ queryKey: ['/api/cms/website-content'] });
      } else {
        toast({
          title: "Error",
          description: "Failed to update hero section",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while saving",
        variant: "destructive"
      });
    }
  };

  // Dynamic background color classes
  const bgColorClass = backgroundColor === 'black' 
    ? 'bg-black text-white' 
    : backgroundColor === 'dark' 
      ? 'bg-gray-800 text-white'
      : backgroundColor === 'light'
        ? 'bg-gray-100 text-black'
        : 'bg-white text-black';

  const textColorClass = textColor === 'white' ? 'text-white' : 'text-black';

  return (
    <div className={`${bgColorClass} py-16 relative overflow-hidden`}>
      {isCmsMode && !isEditing ? (
        <div className="container mx-auto px-4 mb-4">
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(true)}
            >
              Edit Hero Section
            </Button>
          </div>
        </div>
      ) : null}

      {isCmsMode && isEditing ? (
        <div className="container mx-auto px-4">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Edit Hero Section</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input 
                  value={editedTitle} 
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subtitle</label>
                <Textarea 
                  value={editedSubtitle} 
                  onChange={(e) => setEditedSubtitle(e.target.value)}
                  className="w-full"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <h1 className={`font-poppins font-bold text-4xl md:text-5xl text-center ${textColorClass}`} data-aos="fade-up">
            {editedTitle || title}
          </h1>
          {(editedSubtitle || subtitle) && (
            <p className={`text-lg text-center mt-4 max-w-3xl mx-auto ${textColorClass === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`} 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              {editedSubtitle || subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SimpleHeroBlock;