import { useEffect } from 'react';
import { useCmsMode } from '@/hooks/use-cms-mode';
import CmsPageTemplate from '@/components/cms-templates/CmsPageTemplate';
import SimpleHeroBlock from '@/components/cms-blocks/SimpleHeroBlock';
import WhyJoinBlock from '@/components/cms-blocks/WhyJoinBlock';
import JobsBlock from '@/components/cms-blocks/JobsBlock';
import CTABlock from '@/components/cms-blocks/CTABlock';
import { JobPosition } from '@/components/cms-blocks/JobsBlock';
import { BenefitItem } from '@/components/cms-blocks/WhyJoinBlock';
import { CMSContent } from '@/hooks/use-cms-content';

const Careers = () => {
  const isCmsMode = useCmsMode();

  useEffect(() => {
    document.title = 'Careers - Bharat Technologies';
  }, []);

  // Default data structure for the page
  const defaultContent: CMSContent[] = [
    // Hero section
    {
      id: 0,
      type: 'hero',
      pageLocation: 'careers',
      name: 'careers-hero',
      title: 'Careers',
      subtitle: 'Join our team of innovators and help shape the future of technology',
      backgroundColor: 'black',
      textColor: 'white',
      order: 1,
      isActive: true
    },
    // Why Join Us section
    {
      id: 0,
      type: 'why-join',
      pageLocation: 'careers',
      name: 'careers-why-join',
      title: 'Why Join Bharat Technologies?',
      benefits: [
        {
          title: 'Innovation',
          description: 'Work on cutting-edge technologies that are shaping the future. We encourage creative thinking and provide resources to turn innovative ideas into reality.'
        },
        {
          title: 'Growth',
          description: 'We invest in our employees\' professional development through training programs, conference attendance, and mentorship opportunities.'
        },
        {
          title: 'Impact',
          description: 'Your work will directly impact businesses and industries across the globe, helping them transform through technology.'
        },
        {
          title: 'Culture',
          description: 'Join a diverse, inclusive workplace where collaboration, respect, and work-life balance are core values.'
        }
      ] as BenefitItem[],
      backgroundColor: 'white',
      textColor: 'black',
      order: 2,
      isActive: true
    },
    // Jobs section
    {
      id: 0,
      type: 'jobs',
      pageLocation: 'careers',
      name: 'careers-jobs',
      title: 'Current Openings',
      jobPositions: [
        {
          title: 'Senior AI Engineer',
          department: 'Artificial Intelligence',
          location: 'Bangalore, India',
          type: 'Full-time',
          description: 'We are looking for an experienced AI Engineer to join our team and help develop cutting-edge AI solutions for our clients.'
        },
        {
          title: 'Cloud Architect',
          department: 'Cloud Services',
          location: 'Remote',
          type: 'Full-time',
          description: 'Join our cloud team to design and implement scalable, high-performance cloud infrastructure for enterprise clients.'
        },
        {
          title: 'Cybersecurity Analyst',
          department: 'Security',
          location: 'Delhi, India',
          type: 'Full-time',
          description: 'Help protect our clients from cyber threats by identifying vulnerabilities and implementing security measures.'
        },
        {
          title: 'Frontend Developer',
          department: 'Engineering',
          location: 'Hyderabad, India',
          type: 'Full-time',
          description: 'Create intuitive and responsive user interfaces for our web applications using modern frontend technologies.'
        },
        {
          title: 'Product Manager',
          department: 'Product',
          location: 'Mumbai, India',
          type: 'Full-time',
          description: 'Lead the development of innovative products from conception to launch, working closely with engineering and design teams.'
        },
        {
          title: 'Technical Writer',
          department: 'Documentation',
          location: 'Remote',
          type: 'Part-time',
          description: 'Create clear, concise technical documentation for our products and services.'
        }
      ] as JobPosition[],
      backgroundColor: 'white',
      textColor: 'black',
      order: 3,
      isActive: true
    },
    // CTA section
    {
      id: 0,
      type: 'cta',
      pageLocation: 'careers',
      name: 'careers-cta',
      title: 'Don\'t see a position that matches your skills?',
      ctaText: 'Send Us Your Resume',
      ctaUrl: '#contact',
      backgroundColor: 'white',
      textColor: 'black',
      order: 4,
      isActive: true
    }
  ];

  return (
    <main>
      <CmsPageTemplate 
        pageLocation="careers"
        defaultContent={defaultContent}
        editButtonProps={{
          filterQuery: 'filter=careers'
        }}
      >
        {({ content: contentItems }) => (
          <>
            {contentItems.map((block, index) => {
              if (block.type === 'hero') {
                return (
                  <SimpleHeroBlock 
                    key={`${block.type}-${index}`}
                    title={block.title}
                    subtitle={block.subtitle || ''}
                    backgroundColor={block.backgroundColor || 'black'}
                    textColor={block.textColor || 'white'}
                    isCmsMode={isCmsMode}
                    id={block.id}
                  />
                );
              } else if (block.type === 'why-join') {
                return (
                  <WhyJoinBlock
                    key={`${block.type}-${index}`}
                    title={block.title}
                    benefits={block.benefits || []}
                    backgroundColor={block.backgroundColor || 'white'}
                    textColor={block.textColor || 'black'}
                    isCmsMode={isCmsMode}
                    id={block.id}
                  />
                );
              } else if (block.type === 'jobs') {
                return (
                  <JobsBlock
                    key={`${block.type}-${index}`}
                    title={block.title}
                    subtitle={block.subtitle || ''}
                    jobPositions={block.jobPositions || []}
                    backgroundColor={block.backgroundColor || 'white'}
                    textColor={block.textColor || 'black'}
                    isCmsMode={isCmsMode}
                    id={block.id}
                  />
                );
              } else if (block.type === 'cta') {
                return (
                  <CTABlock
                    key={`${block.type}-${index}`}
                    title={block.title}
                    ctaText={block.ctaText || 'Send Us Your Resume'}
                    ctaUrl={block.ctaUrl || '#contact'}
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
    </main>
  );
};

export default Careers;
