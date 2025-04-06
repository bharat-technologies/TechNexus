import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface JobsBlockProps {
  title: string;
  subtitle?: string;
  jobPositions: JobPosition[];
  backgroundColor?: string;
  textColor?: string;
  isCmsMode?: boolean;
  id?: number;
}

const JobListing = ({ job, index }: { job: JobPosition; index: number }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
    <div className="p-6">
      <h3 className="font-poppins font-bold text-xl mb-2">{job.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.department}</span>
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.location}</span>
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.type}</span>
      </div>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <Link href={`#job-${index}`}>
        <a className="inline-block bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
          Apply Now
        </a>
      </Link>
    </div>
  </div>
);

/**
 * A reusable jobs block for displaying job positions with CMS editing capability
 */
const JobsBlock = ({
  title,
  subtitle = '',
  jobPositions = [],
  backgroundColor = 'white',
  textColor = 'black',
  isCmsMode = false,
  id
}: JobsBlockProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedSubtitle, setEditedSubtitle] = useState(subtitle || '');
  const [editedJobPositions, setEditedJobPositions] = useState<JobPosition[]>(jobPositions);
  const [editingJobIndex, setEditingJobIndex] = useState<number | null>(null);
  const [editingJob, setEditingJob] = useState<JobPosition | null>(null);
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
          jobPositions: editedJobPositions,
          backgroundColor,
          textColor
        })
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Jobs section updated successfully",
          variant: "default"
        });
        setIsEditing(false);
        queryClient.invalidateQueries({ queryKey: ['/api/cms/website-content'] });
      } else {
        toast({
          title: "Error",
          description: "Failed to update jobs section",
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

  const handleEditJob = (index: number) => {
    setEditingJobIndex(index);
    setEditingJob({ ...editedJobPositions[index] });
  };

  const handleSaveJob = () => {
    if (editingJobIndex !== null && editingJob) {
      const updatedJobs = [...editedJobPositions];
      updatedJobs[editingJobIndex] = editingJob;
      setEditedJobPositions(updatedJobs);
      setEditingJobIndex(null);
      setEditingJob(null);
    }
  };

  const handleAddJob = () => {
    const newJob: JobPosition = {
      title: 'New Position',
      department: 'Department',
      location: 'Location',
      type: 'Full-time',
      description: 'Job description goes here'
    };
    setEditedJobPositions([...editedJobPositions, newJob]);
  };

  const handleRemoveJob = (index: number) => {
    const updatedJobs = [...editedJobPositions];
    updatedJobs.splice(index, 1);
    setEditedJobPositions(updatedJobs);
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
              Edit Jobs Section
            </Button>
          </div>
        ) : null}

        {isCmsMode && isEditing ? (
          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Edit Jobs Section</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">Section Title</label>
                <Input 
                  value={editedTitle} 
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Section Subtitle</label>
                <Input 
                  value={editedSubtitle} 
                  onChange={(e) => setEditedSubtitle(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Job Positions</h4>
              
              {editedJobPositions.map((job, index) => (
                <div key={index} className="border p-4 rounded-md mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">{job.title}</div>
                    <div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => handleEditJob(index)}>
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Job Position</DialogTitle>
                          </DialogHeader>
                          {editingJob && (
                            <div className="space-y-4 py-4">
                              <div>
                                <label className="block text-sm font-medium mb-1">Job Title</label>
                                <Input 
                                  value={editingJob.title} 
                                  onChange={(e) => setEditingJob({...editingJob, title: e.target.value})}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Department</label>
                                <Input 
                                  value={editingJob.department} 
                                  onChange={(e) => setEditingJob({...editingJob, department: e.target.value})}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Location</label>
                                <Input 
                                  value={editingJob.location} 
                                  onChange={(e) => setEditingJob({...editingJob, location: e.target.value})}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Job Type</label>
                                <Input 
                                  value={editingJob.type} 
                                  onChange={(e) => setEditingJob({...editingJob, type: e.target.value})}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Description</label>
                                <Textarea 
                                  value={editingJob.description} 
                                  onChange={(e) => setEditingJob({...editingJob, description: e.target.value})}
                                  rows={4}
                                />
                              </div>
                              <div className="flex justify-end">
                                <Button onClick={handleSaveJob}>Save Job</Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="ml-2 text-red-500"
                        onClick={() => handleRemoveJob(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{job.department} • {job.location} • {job.type}</div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full" onClick={handleAddJob}>
                + Add Job Position
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
            <h2 className={`font-poppins font-bold text-3xl mb-4 text-center ${textColorClass}`} data-aos="fade-up">{editedTitle || title}</h2>
            {(editedSubtitle || subtitle) && (
              <p className={`text-lg text-center max-w-3xl mx-auto mb-12 ${textColorClass === 'text-white' ? 'text-gray-200' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="100">
                {editedSubtitle || subtitle}
              </p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {(isEditing ? editedJobPositions : jobPositions).map((job, index) => (
                <JobListing key={index} job={job} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JobsBlock;