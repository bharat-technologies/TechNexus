import { useEffect } from 'react';
import CmsPageTemplate from '@/components/cms-templates/CmsPageTemplate';
import { useCmsMode } from '@/hooks/use-cms-mode';
import { CMSContent } from '@/hooks/use-cms-content';
import HeroBlock from '@/components/cms-blocks/HeroBlock';
import ContentBlock from '@/components/cms-blocks/ContentBlock';
import FeaturesBlock from '@/components/cms-blocks/FeaturesBlock';
import CTABlock from '@/components/cms-blocks/CTABlock';

const AiIntelligence = () => {
  const isCmsMode = useCmsMode();

  useEffect(() => {
    document.title = 'Artificial Human Intelligence - Bharat Technologies';
  }, []);

  // Content is now automatically created if it doesn't exist

  // Define default CMS content for initialization
  const defaultCmsContent: CMSContent[] = [
    // Hero section content
    {
      id: 0,
      type: 'ai-hero-heading',
      pageLocation: 'ai-intelligence',
      name: 'Hero Heading',
      title: 'Artificial Human',
      content: 'Main page heading (first line)',
      order: 1,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-hero-subheading',
      pageLocation: 'ai-intelligence',
      name: 'Hero Subheading',
      title: 'Intelligence',
      content: 'Main page heading (second line)',
      order: 2,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-hero-description',
      pageLocation: 'ai-intelligence',
      name: 'Hero Description',
      title: 'Hero Description',
      content: 'Advancing human potential through intelligent technology that enhances rather than replaces human capabilities.',
      order: 3,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-hero-primary-button',
      pageLocation: 'ai-intelligence',
      name: 'Hero Primary Button',
      title: 'Explore AI Solutions',
      ctaUrl: '/contact',
      order: 4,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-hero-secondary-button',
      pageLocation: 'ai-intelligence',
      name: 'Hero Secondary Button',
      title: 'Learn More',
      ctaUrl: '#ai-approach',
      order: 5,
      isActive: true
    },
    
    // Approach section content
    {
      id: 0,
      type: 'ai-approach-heading',
      pageLocation: 'ai-intelligence',
      name: 'Approach Section Heading',
      title: 'Human-Centered AI Approach',
      content: 'Heading for approach section',
      order: 6,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-approach-subheading',
      pageLocation: 'ai-intelligence',
      name: 'Approach Section Subheading',
      title: 'Enhancing human potential, not replacing it',
      content: 'Subheading for approach section',
      order: 7,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-approach-content',
      pageLocation: 'ai-intelligence',
      name: 'Approach Section Content',
      title: 'Content',
      content: '<p>At Bharat Technologies, we are pioneering a new approach to artificial intelligence that puts humans at the center. Our AI systems are designed to augment human capabilities, not replace them.</p><p>By combining advanced machine learning with deep understanding of human cognitive processes, we create AI solutions that work with people in intuitive, natural ways, enhancing productivity, creativity, and decision-making.</p>',
      order: 8,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-approach-image',
      pageLocation: 'ai-intelligence',
      name: 'Approach Section Image',
      title: 'Approach Image',
      content: 'Human-AI collaboration illustration',
      imageUrl: '/assets/ai-approach.jpg',
      order: 9,
      isActive: true
    },
    
    // Capabilities section
    {
      id: 0,
      type: 'ai-capabilities-heading',
      pageLocation: 'ai-intelligence',
      name: 'Capabilities Section Heading',
      title: 'Our AI Capabilities',
      content: 'Heading for capabilities section',
      order: 10,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-capabilities-subheading',
      pageLocation: 'ai-intelligence',
      name: 'Capabilities Section Subheading',
      title: 'Cutting-edge technologies powering innovation',
      content: 'Subheading for capabilities section',
      order: 11,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-capabilities-description',
      pageLocation: 'ai-intelligence',
      name: 'Capabilities Section Description',
      title: 'Description',
      content: 'Our suite of artificial intelligence capabilities enables businesses to solve complex problems and create new opportunities.',
      order: 12,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-capabilities-item',
      pageLocation: 'ai-intelligence',
      name: 'Natural Language Processing',
      title: 'Natural Language Processing',
      content: 'Advanced language understanding and generation capabilities that enable more natural human-computer interaction. Our NLP models can understand context, sentiment, and nuance in multiple languages.',
      order: 13,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-capabilities-item',
      pageLocation: 'ai-intelligence',
      name: 'Computer Vision',
      title: 'Computer Vision',
      content: 'Visual perception systems that can analyze and understand images and video with human-like accuracy. Applications include quality control, medical imaging analysis, and security systems.',
      order: 14,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-capabilities-item',
      pageLocation: 'ai-intelligence',
      name: 'Predictive Analytics',
      title: 'Predictive Analytics',
      content: 'AI-powered forecasting tools that help businesses anticipate trends and make data-driven decisions. Our models process vast datasets to identify patterns invisible to traditional analytics.',
      order: 15,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-capabilities-item',
      pageLocation: 'ai-intelligence',
      name: 'Reinforcement Learning',
      title: 'Reinforcement Learning',
      content: 'Systems that learn through interaction with their environment, maximizing reward signals to optimize decision processes. Ideal for complex control systems and resource allocation problems.',
      order: 16,
      isActive: true
    },
    
    // Ethics section
    {
      id: 0,
      type: 'ai-ethics-heading',
      pageLocation: 'ai-intelligence',
      name: 'Ethics Section Heading',
      title: 'Ethical AI Development',
      content: 'Heading for ethics section',
      order: 17,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-ethics-subheading',
      pageLocation: 'ai-intelligence',
      name: 'Ethics Section Subheading',
      title: 'Responsible innovation at every step',
      content: 'Subheading for ethics section',
      order: 18,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-ethics-content',
      pageLocation: 'ai-intelligence',
      name: 'Ethics Section Content',
      title: 'Ethics Content',
      content: '<p>We believe in developing AI systems that are transparent, fair, and accountable. Our ethical framework guides all our AI projects, ensuring that our solutions respect privacy, reduce bias, and operate with clear oversight.</p><p>By prioritizing ethical considerations from the earliest stages of development, we create AI systems that users can trust and that benefit society as a whole.</p>',
      order: 19,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-ethics-image',
      pageLocation: 'ai-intelligence',
      name: 'Ethics Section Image',
      title: 'Ethics Image',
      content: 'Ethical AI development illustration',
      imageUrl: '/assets/ai-ethics.jpg',
      order: 20,
      isActive: true
    },
    
    // CTA section
    {
      id: 0,
      type: 'ai-cta-heading',
      pageLocation: 'ai-intelligence',
      name: 'CTA Section Heading',
      title: 'Ready to Explore AI Solutions?',
      content: 'Heading for CTA section',
      order: 21,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-cta-description',
      pageLocation: 'ai-intelligence',
      name: 'CTA Section Description',
      title: 'CTA Description',
      content: 'Discover how our AI technologies can transform your business and help you stay ahead in the digital era.',
      order: 22,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-cta-primary-button',
      pageLocation: 'ai-intelligence',
      name: 'CTA Primary Button',
      title: 'Contact Our AI Experts',
      ctaUrl: '/contact',
      order: 23,
      isActive: true
    },
    {
      id: 0,
      type: 'ai-cta-secondary-button',
      pageLocation: 'ai-intelligence',
      name: 'CTA Secondary Button',
      title: 'View Case Studies',
      ctaUrl: '/case-studies',
      order: 24,
      isActive: true
    }
  ];

  return (
    <CmsPageTemplate 
      pageLocation="ai-intelligence" 
      defaultContent={defaultCmsContent}
      editButtonProps={{
        position: 'custom',
        customPositionClass: 'fixed top-20 right-4 z-50',
        filterQuery: 'ai-'
      }}
    >
      {({ content, isLoading, getContentByType, getAllContentByType }) => (
        <main>
          {isCmsMode && (
            <div className="bg-gray-100 p-4 sticky top-0 z-50 border-b">
              <div className="container mx-auto">
                <div>
                  <h2 className="font-medium">CMS Mode: Editing AI Intelligence Page</h2>
                  <p className="text-sm text-gray-500">Make changes to page content using the Edit button</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Hero Section */}
          <section id="hero">
            <HeroBlock 
              content={content}
              isLoading={isLoading}
              getContentByType={getContentByType}
              getAllContentByType={getAllContentByType}
              typePrefix="ai-hero"
            />
          </section>
          
          {/* Approach Section */}
          <section id="ai-approach">
            <ContentBlock 
              content={content}
              isLoading={isLoading}
              getContentByType={getContentByType}
              getAllContentByType={getAllContentByType}
              typePrefix="ai-approach"
              imagePosition="right"
              backgroundColor="white"
            />
          </section>
          
          {/* Capabilities Section */}
          <section id="ai-capabilities">
            <FeaturesBlock 
              content={content}
              isLoading={isLoading}
              getContentByType={getContentByType}
              getAllContentByType={getAllContentByType}
              typePrefix="ai-capabilities"
              backgroundColor="light"
            />
          </section>
          
          {/* Ethics Section */}
          <section id="ai-ethics">
            <ContentBlock 
              content={content}
              isLoading={isLoading}
              getContentByType={getContentByType}
              getAllContentByType={getAllContentByType}
              typePrefix="ai-ethics"
              imagePosition="left"
              backgroundColor="white"
            />
          </section>
          
          {/* CTA Section */}
          <section id="ai-cta">
            <CTABlock 
              content={content}
              isLoading={isLoading}
              getContentByType={getContentByType}
              getAllContentByType={getAllContentByType}
              typePrefix="ai-cta"
              style="centered"
              backgroundColor="black"
            />
          </section>
        </main>
      )}
    </CmsPageTemplate>
  );
};

export default AiIntelligence;