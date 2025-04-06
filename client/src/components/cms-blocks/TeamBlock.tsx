import { useState } from 'react';
import { Edit, Plus, Trash } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl?: string;
}

interface TeamBlockProps {
  title: string;
  subtitle?: string;
  teamMembers: TeamMember[];
  backgroundColor?: string;
  textColor?: string;
  isCmsMode?: boolean;
  id?: number;
}

const TeamMemberCard = ({ name, position, bio, imageUrl, delay }: TeamMember & { delay: number }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay={delay}>
    <div className="bg-gray-200 h-64 flex items-center justify-center">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
        </svg>
      )}
    </div>
    <div className="p-6">
      <h3 className="font-poppins font-bold text-xl mb-1">{name}</h3>
      <p className="text-gray-600 mb-4">{position}</p>
      <p className="text-gray-800">{bio}</p>
    </div>
  </div>
);

const TeamBlock = ({
  title,
  subtitle,
  teamMembers = [],
  backgroundColor = 'white',
  textColor = 'black',
  isCmsMode = false,
  id
}: TeamBlockProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedSubtitle, setEditedSubtitle] = useState(subtitle || '');
  const [editedTeamMembers, setEditedTeamMembers] = useState<TeamMember[]>(teamMembers);
  const [editingMemberIndex, setEditingMemberIndex] = useState<number | null>(null);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
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
          teamMembers: editedTeamMembers,
          backgroundColor,
          textColor
        })
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Team block updated successfully',
          variant: 'default'
        });
        
        // Refresh data
        queryClient.invalidateQueries({ queryKey: ['/api/cms/website-content'] });
        
        // Close dialog
        setIsEditing(false);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to update team block',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while updating the team block',
        variant: 'destructive'
      });
    }
  };

  const handleEditMember = (index: number) => {
    setEditingMemberIndex(index);
    setEditingMember(editedTeamMembers[index]);
  };

  const handleAddMember = () => {
    setEditingMemberIndex(null);
    setEditingMember({
      name: '',
      position: '',
      bio: '',
      imageUrl: ''
    });
  };

  const handleSaveMember = () => {
    if (!editingMember) return;

    const updatedMembers = [...editedTeamMembers];
    
    if (editingMemberIndex !== null) {
      // Edit existing member
      updatedMembers[editingMemberIndex] = editingMember;
    } else {
      // Add new member
      updatedMembers.push(editingMember);
    }
    
    setEditedTeamMembers(updatedMembers);
    setEditingMember(null);
  };

  const handleDeleteMember = (index: number) => {
    const updatedMembers = [...editedTeamMembers];
    updatedMembers.splice(index, 1);
    setEditedTeamMembers(updatedMembers);
  };

  const backgroundClass = backgroundColor === 'black' ? 'bg-black text-white' : 'bg-white text-black';
  const textColorClass = textColor === 'white' ? 'text-white' : 'text-black';

  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        {isCmsMode && id && (
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => setIsEditing(true)}
            >
              <Edit className="h-4 w-4" /> Edit Team
            </Button>
          </div>
        )}
        
        <h2 className={`font-poppins font-bold text-3xl text-center mb-4 ${textColorClass}`} data-aos="fade-up">
          {title}
        </h2>
        
        {subtitle && (
          <p className={`text-lg text-center mb-12 max-w-3xl mx-auto ${textColorClass}`} data-aos="fade-up" data-aos-delay="100">
            {subtitle}
          </p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              name={member.name} 
              position={member.position} 
              bio={member.bio} 
              imageUrl={member.imageUrl}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Edit Dialog */}
      {isEditing && (
        <Dialog open={isEditing} onOpenChange={setIsEditing}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Edit Team Block</DialogTitle>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Title</Label>
                <Input
                  id="title"
                  className="col-span-3"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subtitle" className="text-right">Subtitle</Label>
                <Input
                  id="subtitle"
                  className="col-span-3"
                  value={editedSubtitle}
                  onChange={(e) => setEditedSubtitle(e.target.value)}
                />
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Team Members</h3>
                  <Button variant="outline" size="sm" onClick={handleAddMember}>
                    <Plus className="w-4 h-4 mr-1" /> Add Member
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  {editedTeamMembers.length === 0 ? (
                    <p className="text-center text-gray-500">No team members added yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {editedTeamMembers.map((member, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.position}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" onClick={() => handleEditMember(index)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeleteMember(index)}>
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button onClick={handleSave}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Member Edit Dialog */}
      {editingMember && (
        <Dialog open={!!editingMember} onOpenChange={(open) => !open && setEditingMember(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingMemberIndex !== null ? 'Edit Team Member' : 'Add Team Member'}</DialogTitle>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="memberName" className="text-right">Name</Label>
                <Input
                  id="memberName"
                  className="col-span-3"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="memberPosition" className="text-right">Position</Label>
                <Input
                  id="memberPosition"
                  className="col-span-3"
                  value={editingMember.position}
                  onChange={(e) => setEditingMember({...editingMember, position: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="memberImageUrl" className="text-right">Image URL</Label>
                <Input
                  id="memberImageUrl"
                  className="col-span-3"
                  value={editingMember.imageUrl || ''}
                  onChange={(e) => setEditingMember({...editingMember, imageUrl: e.target.value})}
                  placeholder="(Optional)"
                />
              </div>
              
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="memberBio" className="text-right mt-2">Bio</Label>
                <Textarea
                  id="memberBio"
                  className="col-span-3"
                  rows={4}
                  value={editingMember.bio}
                  onChange={(e) => setEditingMember({...editingMember, bio: e.target.value})}
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setEditingMember(null)}>Cancel</Button>
              <Button onClick={handleSaveMember}>Save Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default TeamBlock;