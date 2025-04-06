import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export interface CTABlockProps {
  title: string;
  ctaText: string;
  ctaUrl: string;
  backgroundColor?: string;
  textColor?: string;
  isCmsMode?: boolean;
  id?: number;
}

/**
 * A reusable call-to-action block with CMS editing capability
 */
const CTABlock = ({
  title,
  ctaText,
  ctaUrl,
  backgroundColor = 'white',
  textColor = 'black',
  isCmsMode = false,
  id
}: CTABlockProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedCtaText, setEditedCtaText] = useState(ctaText);
  const [editedCtaUrl, setEditedCtaUrl] = useState(ctaUrl);
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
          ctaText: editedCtaText,
          ctaUrl: editedCtaUrl,
          backgroundColor,
          textColor
        })
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "CTA section updated successfully",
          variant: "default"
        });
        setIsEditing(false);
        queryClient.invalidateQueries({ queryKey: ['/api/cms/website-content'] });
      } else {
        toast({
          title: "Error",
          description: "Failed to update CTA section",
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
  const buttonClass = textColor === 'white' 
    ? 'bg-white text-black hover:bg-gray-200' 
    : 'bg-black text-white hover:bg-gray-800';

  return (
    <section className={`py-16 ${bgColorClass}`}>
      <div className="container mx-auto px-4">
        {isCmsMode && !isEditing ? (
          <div className="flex justify-end mb-4">
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(true)}
              className="mb-4"
            >
              Edit CTA Section
            </Button>
          </div>
        ) : null}

        {isCmsMode && isEditing ? (
          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Edit Call-to-Action Section</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <Input 
                  value={editedTitle} 
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Button Text</label>
                <Input 
                  value={editedCtaText} 
                  onChange={(e) => setEditedCtaText(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Button Link</label>
                <Input 
                  value={editedCtaUrl} 
                  onChange={(e) => setEditedCtaUrl(e.target.value)}
                  className="w-full"
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
        ) : (
          <div className="text-center" data-aos="fade-up">
            <p className={`text-lg mb-4 ${textColorClass}`}>{editedTitle || title}</p>
            <a 
              href={editedCtaUrl || ctaUrl} 
              className={`inline-block ${buttonClass} px-6 py-3 rounded-full font-medium transition-colors duration-300`}
            >
              {editedCtaText || ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTABlock;