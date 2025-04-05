import HeroCms from '@/components/home/HeroCms';
import AboutCms from '@/components/home/AboutCms';
import Gallery from '@/components/home/Gallery';
import Contact from '@/components/home/Contact';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import CmsPageTemplate from '@/components/cms/CmsPageTemplate';
import { useCmsMode } from '@/hooks/use-cms-mode';

const Home = () => {
  const isCmsMode = useCmsMode();

  useEffect(() => {
    document.title = 'Bharat Technologies - Home';
  }, []);

  const handleInitializeContent = () => {
    // Add the create_cms_content parameter to the URL and refresh
    const url = new URL(window.location.href);
    url.searchParams.set('create_cms_content', 'true');
    url.searchParams.set('cms', 'true');
    window.location.href = url.toString();
  };

  return (
    <CmsPageTemplate pageLocation="home">
      {() => (
        <main>
          {isCmsMode && (
            <div className="bg-gray-100 p-4 sticky top-0 z-50 border-b">
              <div className="container mx-auto flex justify-between items-center">
                <div>
                  <h2 className="font-medium">CMS Mode: Editing Home Page</h2>
                  <p className="text-sm text-gray-500">Make changes to page content using the Edit buttons</p>
                </div>
                <Button onClick={handleInitializeContent}>
                  <Plus className="h-4 w-4 mr-2" />
                  Initialize Content
                </Button>
              </div>
            </div>
          )}
          <HeroCms />
          <AboutCms />
          <Gallery />
          <Contact />
        </main>
      )}
    </CmsPageTemplate>
  );
};

export default Home;
