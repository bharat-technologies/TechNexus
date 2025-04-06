import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useCmsMode } from "@/hooks/use-cms-mode";

interface EditPageButtonProps {
  pageLocation: string;
  className?: string;
  filterQuery?: string;
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' | 'custom';
  customPositionClass?: string;
}

/**
 * A reusable button component for editing page content in CMS
 * 
 * This button is automatically hidden unless the page is in CMS mode
 */
const EditPageButton = ({ 
  pageLocation, 
  className = '', 
  filterQuery,
  position = 'top-right',
  customPositionClass = ''
}: EditPageButtonProps) => {
  const isCmsMode = useCmsMode();
  
  if (!isCmsMode) return null;
  
  // Determine position classes
  let positionClass = customPositionClass;
  
  if (!customPositionClass) {
    switch (position) {
      case 'top-right':
        positionClass = 'absolute top-4 right-4 z-50';
        break;
      case 'bottom-right':
        positionClass = 'absolute bottom-4 right-4 z-50';
        break;
      case 'top-left':
        positionClass = 'absolute top-4 left-4 z-50';
        break;
      case 'bottom-left':
        positionClass = 'absolute bottom-4 left-4 z-50';
        break;
      default:
        positionClass = 'absolute top-4 right-4 z-50';
    }
  }
  
  const url = filterQuery 
    ? `/cms/website-content?filter=${filterQuery || pageLocation}` 
    : `/cms/website-content?filter=${pageLocation}`;
  
  return (
    <div className={`${positionClass} ${className}`}>
      <Button asChild size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-black border-gray-300 hover:bg-white/30">
        <Link href={url}>
          <Edit className="h-4 w-4 mr-2" />
          Edit Content
        </Link>
      </Button>
    </div>
  );
};

export default EditPageButton;
