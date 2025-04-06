import { useEffect } from 'react';
import { useCmsMode } from '@/hooks/use-cms-mode';
import { useCmsContent } from '@/hooks/use-cms-content';
import CmsPageTemplate from '@/components/cms-templates/CmsPageTemplate';
import HeroBlock from '@/components/cms-blocks/HeroBlock';
import TeamBlock from '@/components/cms-blocks/TeamBlock';
import ContentBlock from '@/components/cms-blocks/ContentBlock';

const OurTeam = () => {
  const isCmsMode = useCmsMode();
  const { content: contentData, isLoading, error } = useCmsContent('our-team');
  
  // Set page title
  useEffect(() => {
    document.title = 'Our Team - Bharat Technologies';
  }, []);

  // Default content blocks for the Team page
  const defaultContent = [
    {
      id: 0,
      type: 'hero',
      pageLocation: 'our-team',
      name: 'Team Hero',
      title: 'Our Team',
      subtitle: 'Meet the experts behind Bharat Technologies\' innovative solutions',
      content: '',
      backgroundColor: 'black',
      textColor: 'white',
      order: 0,
      isActive: true
    },
    {
      id: 0,
      type: 'team',
      pageLocation: 'our-team',
      name: 'Leadership Team',
      title: 'Leadership Team',
      content: '',
      teamMembers: [
        {
          name: 'Rajiv Patel',
          position: 'CEO & Founder',
          bio: 'With over 20 years of experience in the tech industry, Rajiv has led multiple successful ventures before founding Bharat Technologies.'
        },
        {
          name: 'Priya Sharma',
          position: 'CTO',
          bio: 'Priya brings extensive expertise in AI and cloud technologies, having previously worked at leading global tech companies.'
        },
        {
          name: 'Vikram Singh',
          position: 'Head of AI Research',
          bio: 'A PhD in Computer Science, Vikram leads our innovative AI research initiatives with a focus on practical applications.'
        },
        {
          name: 'Ananya Desai',
          position: 'Chief Security Officer',
          bio: 'Ananya is an expert in cybersecurity with a strong background in protecting critical infrastructure against emerging threats.'
        },
        {
          name: 'Arjun Mehta',
          position: 'Head of Cloud Services',
          bio: 'Arjun has pioneered several cloud migration strategies that have become industry standards for large enterprises.'
        },
        {
          name: 'Neha Kapoor',
          position: 'Director of Operations',
          bio: 'Neha ensures that all our processes run smoothly, bringing efficiency and excellence to every project we undertake.'
        }
      ],
      backgroundColor: 'white',
      textColor: 'black',
      order: 1,
      isActive: true
    },
    {
      id: 0,
      type: 'content',
      pageLocation: 'our-team',
      name: 'Join Our Team',
      title: 'Join Our Team',
      content: 'We\'re always looking for talented individuals who are passionate about technology and innovation. If you\'re interested in joining our team, check out our current openings.',
      ctaText: 'View Careers',
      ctaUrl: '/careers',
      backgroundColor: 'white',
      textColor: 'black',
      order: 2,
      isActive: true
    }
  ];

  return (
    <CmsPageTemplate 
      pageLocation="our-team"
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
            } else if (block.type === 'team') {
              return (
                <TeamBlock
                  key={`${block.type}-${index}`}
                  title={block.title}
                  subtitle={block.subtitle || ''}
                  teamMembers={block.teamMembers || []}
                  backgroundColor={block.backgroundColor || 'white'}
                  textColor={block.textColor || 'black'}
                  isCmsMode={isCmsMode}
                  id={block.id}
                />
              );
            } else if (block.type === 'content') {
              return (
                <ContentBlock
                  key={`${block.type}-${index}`}
                  title={block.title}
                  content={block.content || ''}
                  ctaText={block.ctaText}
                  ctaUrl={block.ctaUrl}
                  backgroundColor={block.backgroundColor || 'white'}
                  textColor={block.textColor || 'black'}
                  isCmsMode={isCmsMode}
                  id={block.id}
                  align="center"
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

export default OurTeam;
