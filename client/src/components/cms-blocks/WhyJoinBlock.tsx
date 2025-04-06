import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export interface BenefitItem {
  title: string;
  description: string;
}

export interface WhyJoinBlockProps {
  title: string;
  benefits: BenefitItem[];
  backgroundColor?: string;
  textColor?: string;
  isCmsMode?: boolean;
  id?: number;
}

/**
 * A reusable why join us block for displaying company benefits with CMS editing capability
 */
const WhyJoinBlock = ({
  title,
  benefits = [],
  backgroundColor = 'white',
  textColor = 'black',
  isCmsMode = false,
  id
}: WhyJoinBlockProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedBenefits, setEditedBenefits] = useState<BenefitItem[]>(benefits);
  const [editingBenefitIndex, setEditingBenefitIndex] = useState<number | null>(null);
  const [editingBenefit, setEditingBenefit] = useState<BenefitItem | null>(null);
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
          benefits: editedBenefits,
          backgroundColor,
          textColor
        })
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Why Join Us section updated successfully",
          variant: "default"
        });
        setIsEditing(false);
        queryClient.invalidateQueries({ queryKey: ['/api/cms/website-content'] });
      } else {
        toast({
          title: "Error",
          description: "Failed to update Why Join Us section",
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

  const handleEditBenefit = (index: number) => {
    setEditingBenefitIndex(index);
    setEditingBenefit({ ...editedBenefits[index] });
  };

  const handleSaveBenefit = () => {
    if (editingBenefitIndex !== null && editingBenefit) {
      const updatedBenefits = [...editedBenefits];
      updatedBenefits[editingBenefitIndex] = editingBenefit;
      setEditedBenefits(updatedBenefits);
      setEditingBenefitIndex(null);
      setEditingBenefit(null);
    }
  };

  const handleAddBenefit = () => {
    const newBenefit: BenefitItem = {
      title: 'New Benefit',
      description: 'Benefit description goes here'
    };
    setEditedBenefits([...editedBenefits, newBenefit]);
  };

  const handleRemoveBenefit = (index: number) => {
    const updatedBenefits = [...editedBenefits];
    updatedBenefits.splice(index, 1);
    setEditedBenefits(updatedBenefits);
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
    <section className={`py-16 ${bgColorClass}`}>
      <div className="container mx-auto px-4">
        {isCmsMode && !isEditing ? (
          <div className="flex justify-end mb-4">
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(true)}
              className="mb-4"
            >
              Edit Why Join Us Section
            </Button>
          </div>
        ) : null}

        {isCmsMode && isEditing ? (
          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Edit Why Join Us Section</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">Section Title</label>
                <Input 
                  value={editedTitle} 
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Benefits</h4>
              
              {editedBenefits.map((benefit, index) => (
                <div key={index} className="border p-4 rounded-md mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">{benefit.title}</div>
                    <div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => handleEditBenefit(index)}>
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Benefit</DialogTitle>
                          </DialogHeader>
                          {editingBenefit && (
                            <div className="space-y-4 py-4">
                              <div>
                                <label className="block text-sm font-medium mb-1">Benefit Title</label>
                                <Input 
                                  value={editingBenefit.title} 
                                  onChange={(e) => setEditingBenefit({...editingBenefit, title: e.target.value})}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Description</label>
                                <Textarea 
                                  value={editingBenefit.description} 
                                  onChange={(e) => setEditingBenefit({...editingBenefit, description: e.target.value})}
                                  rows={4}
                                />
                              </div>
                              <div className="flex justify-end">
                                <Button onClick={handleSaveBenefit}>Save Benefit</Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="ml-2 text-red-500"
                        onClick={() => handleRemoveBenefit(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{benefit.description.substring(0, 100)}...</div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full" onClick={handleAddBenefit}>
                + Add Benefit
              </Button>
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
          <>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className={`font-poppins font-bold text-3xl mb-6 ${textColorClass}`} data-aos="fade-up">{editedTitle || title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                {(isEditing ? editedBenefits : benefits).map((benefit, index) => (
                  <div key={index} className={`${backgroundColor === 'white' ? 'bg-gray-100' : backgroundColor === 'light' ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg`}>
                    <h3 className={`font-poppins font-semibold text-xl mb-3 ${textColorClass}`}>{benefit.title}</h3>
                    <p className={textColorClass === 'text-white' ? 'text-gray-300' : 'text-gray-600'}>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WhyJoinBlock;