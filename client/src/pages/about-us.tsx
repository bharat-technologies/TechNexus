import { useEffect } from 'react';
import { useCmsMode } from '@/hooks/use-cms-mode';
import { useCmsContent } from '@/hooks/use-cms-content';
import CmsPageTemplate from '@/components/cms-templates/CmsPageTemplate';
import ContentBlock from '@/components/cms-blocks/ContentBlock';
import ValuesBlock from '@/components/cms-blocks/ValuesBlock';
import HeroBlock from '@/components/cms-blocks/HeroBlock';

const AboutUs = () => {
  const isCmsMode = useCmsMode();
  const { content: contentData, isLoading, error } = useCmsContent('about-us');
  
  // Set page title
  useEffect(() => {
    document.title = 'About Us - Bharat Technologies';
  }, []);

  // Default content blocks for the About Us page
  const defaultContent = [
    {
      id: 0,
      type: 'hero',
      pageLocation: 'about-us',
      name: 'About Us Hero',
      title: 'About Us',
      subtitle: 'Learn about our story, mission, and values',
      content: '',
      backgroundColor: 'black',
      textColor: 'white',
      order: 0,
      isActive: true
    },
    {
      id: 0, 
      type: 'content',
      pageLocation: 'about-us',
      name: 'Our Story',
      title: 'Our Story',
      content: "Bharat Technologies was founded in 2015 with a vision to revolutionize the technology landscape in India and beyond. What started as a small team of passionate innovators has now grown into a global technology company with a presence in multiple countries.\n\nOur journey has been defined by our commitment to innovation, excellence, and customer satisfaction. We have consistently pushed the boundaries of what's possible, developing cutting-edge solutions that address complex challenges across industries.",
      backgroundColor: 'white',
      textColor: 'black',
      order: 1,
      isActive: true
    },
    {
      id: 0,
      type: 'content',
      pageLocation: 'about-us',
      name: 'Our Mission',
      title: 'Our Mission',
      content: "At Bharat Technologies, our mission is to empower organizations through innovative technology solutions that drive growth, efficiency, and competitive advantage. We aim to be at the forefront of technological advancement, creating products and services that shape the future.",
      backgroundColor: 'white',
      textColor: 'black',
      order: 2,
      isActive: true
    },
    {
      id: 0,
      type: 'content',
      pageLocation: 'about-us',
      name: 'Our Vision',
      title: 'Our Vision',
      content: "To be a global leader in technology innovation, recognized for our excellence, integrity, and the transformative impact of our solutions on businesses and society.",
      backgroundColor: 'white',
      textColor: 'black',
      order: 3,
      isActive: true
    },
    {
      id: 0,
      type: 'values',
      pageLocation: 'about-us',
      name: 'Our Values',
      title: 'Our Values',
      content: '',
      values: [
        {
          title: 'Innovation',
          description: 'We embrace creativity and continuously seek new ways to solve problems and create value.'
        },
        {
          title: 'Excellence',
          description: 'We are committed to delivering the highest quality in everything we do.'
        },
        {
          title: 'Integrity',
          description: 'We conduct our business with honesty, transparency, and ethical standards.'
        },
        {
          title: 'Collaboration',
          description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.'
        }
      ],
      backgroundColor: 'white',
      textColor: 'black',
      order: 4,
      isActive: true
    }
  ];

  return (
    <CmsPageTemplate 
      pageLocation="about-us"
      defaultContent={defaultContent}
    >
      {({ content: contentItems }) => (
        <>
          {contentItems.map((block, index) => {
            if (block.type === 'hero') {
              return (
                <HeroBlock 
                  key={`${block.type}-${index}`}
                  title={block.title}
                  subtitle={block.subtitle || ''}
                  content={block.content || ''}
                  backgroundColor={block.backgroundColor || 'black'}
                  textColor={block.textColor || 'white'}
                  isCmsMode={isCmsMode}
                  id={block.id}
                />
              );
            } else if (block.type === 'content' || block.type === 'story' || block.type === 'mission' || block.type === 'vision') {
              return (
                <ContentBlock
                  key={`${block.type}-${index}`}
                  title={block.title}
                  content={block.content || ''}
                  backgroundColor={block.backgroundColor || 'white'}
                  textColor={block.textColor || 'black'}
                  isCmsMode={isCmsMode}
                  id={block.id}
                />
              );
            } else if (block.type === 'values') {
              return (
                <ValuesBlock
                  key={`${block.type}-${index}`}
                  title={block.title}
                  values={block.values || []}
                  backgroundColor={block.backgroundColor || 'white'}
                  textColor={block.textColor || 'black'}
                  isCmsMode={isCmsMode}
                  id={block.id}
                />
              );
            }
            return null;
          })}
        </>
      )}
    </CmsPageTemplate>
  );
};

export default AboutUs;