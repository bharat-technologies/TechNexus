import HeroCms from '@/components/home/HeroCms';
import AboutCms from '@/components/home/AboutCms';
import Gallery from '@/components/home/Gallery';
import Contact from '@/components/home/Contact';
import { useEffect } from 'react';
import CmsPageTemplate from '@/components/cms-templates/CmsPageTemplate';
import { useCmsMode } from '@/hooks/use-cms-mode';

const Home = () => {
  const isCmsMode = useCmsMode();

  useEffect(() => {
    document.title = 'Bharat Technologies - Home';
  }, []);

  // Content is now automatically created if it doesn't exist

  return (
    <CmsPageTemplate 
      pageLocation="home"
      editButtonProps={{
        position: 'custom',
        customPositionClass: 'fixed top-20 right-4 z-50'
      }}
    >
      {() => (
        <main>
          {isCmsMode && (
            <div className="bg-gray-100 p-4 sticky top-0 z-50 border-b">
              <div className="container mx-auto">
                <div>
                  <h2 className="font-medium">CMS Mode: Editing Home Page</h2>
                  <p className="text-sm text-gray-500">Make changes to page content using the Edit buttons</p>
                </div>
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
