import React, { useEffect } from 'react';
import { CMSContent, initializeCmsContent } from '@/hooks/use-cms-content';
import CmsPageTemplate from '@/components/cms-templates/CmsPageTemplate';
import SimpleHeroBlock from '@/components/cms-blocks/SimpleHeroBlock';
import FeatureBlock from '@/components/cms-blocks/FeatureBlock';
import SimpleContentBlock from '@/components/cms-blocks/SimpleContentBlock';
import PricingBlock from '@/components/cms-blocks/PricingBlock';
import { useToast } from '@/hooks/use-toast';

// Define default content for the page
const defaultContent: CMSContent[] = [
  {
    id: 0,
    type: 'hero',
    pageLocation: 'products/analytics-cloud',
    name: 'Hero Section',
    title: 'Analytics Cloud',
    subtitle: 'Powerful data insights for your business',
    content: 'Our Analytics Cloud platform provides real-time insights and visualizations to help you make data-driven decisions.',
    ctaText: 'Get Started',
    ctaUrl: '#pricing',
    imageUrl: '/assets/products/analytics-cloud-hero.png',
    order: 1,
    isActive: true
  },
  {
    id: 0,
    type: 'feature',
    pageLocation: 'products/analytics-cloud',
    name: 'Real-time Analytics',
    title: 'Real-time Analytics',
    subtitle: 'Instant insights when you need them',
    content: 'Monitor your business metrics in real-time with our powerful analytics engine. Make informed decisions faster than ever before.',
    imageUrl: '/assets/icons/chart-up.svg',
    order: 1,
    isActive: true
  },
  {
    id: 0,
    type: 'feature',
    pageLocation: 'products/analytics-cloud',
    name: 'AI-Powered Predictions',
    title: 'AI-Powered Predictions',
    subtitle: 'See the future of your business',
    content: 'Our machine learning algorithms analyze your data to provide accurate forecasts and predictive insights.',
    imageUrl: '/assets/icons/brain-circuit.svg',
    order: 2,
    isActive: true
  },
  {
    id: 0,
    type: 'feature',
    pageLocation: 'products/analytics-cloud',
    name: 'Custom Dashboards',
    title: 'Custom Dashboards',
    subtitle: 'Tailored to your specific needs',
    content: 'Create personalized dashboards that highlight the metrics that matter most to your business.',
    imageUrl: '/assets/icons/layout-dashboard.svg',
    order: 3,
    isActive: true
  },
  {
    id: 0,
    type: 'use-case',
    pageLocation: 'products/analytics-cloud',
    name: 'Enterprise Intelligence',
    title: 'Enterprise Intelligence',
    content: 'Large enterprises use our Analytics Cloud to consolidate data from multiple sources and gain a comprehensive view of their operations. Our platform handles billions of data points with ease, providing executives with the insights they need to make strategic decisions.',
    imageUrl: '/assets/products/enterprise-dashboard.png',
    order: 1,
    isActive: true
  },
  {
    id: 0,
    type: 'use-case',
    pageLocation: 'products/analytics-cloud',
    name: 'SMB Growth Insights',
    title: 'SMB Growth Insights',
    content: 'Small and medium businesses leverage our platform to identify growth opportunities and optimize their operations. With affordable pricing tiers and quick setup, any organization can start benefiting from data-driven decision making.',
    imageUrl: '/assets/products/smb-growth.png',
    order: 2,
    isActive: true
  },
  {
    id: 0,
    type: 'pricing',
    pageLocation: 'products/analytics-cloud',
    name: 'Starter Plan',
    title: 'Starter',
    subtitle: '$49/month',
    content: '<ul><li>Up to 100,000 data points</li><li>5 custom dashboards</li><li>Basic reporting</li><li>Email support</li></ul>',
    ctaText: 'Start Free Trial',
    ctaUrl: '#contact',
    order: 1,
    isActive: true
  },
  {
    id: 0,
    type: 'pricing',
    pageLocation: 'products/analytics-cloud',
    name: 'Professional Plan',
    title: 'Professional',
    subtitle: '$199/month',
    content: '<ul><li>Up to 1M data points</li><li>Unlimited dashboards</li><li>Advanced AI predictions</li><li>Priority support</li><li>API access</li></ul>',
    ctaText: 'Start Free Trial',
    ctaUrl: '#contact',
    order: 2,
    isActive: true
  },
  {
    id: 0,
    type: 'pricing',
    pageLocation: 'products/analytics-cloud',
    name: 'Enterprise Plan',
    title: 'Enterprise',
    subtitle: 'Custom Pricing',
    content: '<ul><li>Unlimited data</li><li>Dedicated instance</li><li>Custom integrations</li><li>24/7 support</li><li>Full API access</li><li>HIPAA & GDPR compliant</li></ul>',
    ctaText: 'Contact Sales',
    ctaUrl: '#contact',
    order: 3,
    isActive: true
  }
];

export default function AnalyticsCloudPage() {
  const { toast } = useToast();
  const pageLocation = 'products/analytics-cloud';
  
  // Manual initialization in case the template fails
  useEffect(() => {
    const checkAndCreateContent = async () => {
      try {
        // Fetch content to check if it exists
        const response = await fetch(`/api/cms/website-content?pageLocation=${pageLocation}`);
        const data = await response.json();
        
        // If no content exists for this page, create default content
        if (data.success && data.data && data.data.length === 0) {
          console.log("No content found, manually initializing content for Analytics Cloud page");
          await initializeCmsContent(pageLocation, defaultContent);
          
          // Refresh the page to show new content
          window.location.reload();
        }
      } catch (error) {
        console.error("Error checking/creating content:", error);
      }
    };
    
    checkAndCreateContent();
  }, [pageLocation]);

  return (
    <CmsPageTemplate
      pageLocation={pageLocation}
      defaultContent={defaultContent}
    >
      {({ content, isLoading, getContentByType, getAllContentByType }) => {
        if (isLoading) {
          return (
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-4 border-black border-t-transparent rounded-full" />
            </div>
          );
        }
        
        // If no content after loading, show a message
        if (content.length === 0) {
          return (
            <div className="min-h-screen flex items-center justify-center flex-col p-6">
              <h2 className="text-2xl font-bold mb-4">No content found</h2>
              <p className="text-gray-600 mb-8 text-center max-w-md">
                Content for this page is being initialized. Please refresh the page or check back later.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          );
        }
        
        // Group content by type
        const heroContent = content.filter(item => item.type === 'hero')[0];
        const featureContents = content.filter(item => item.type === 'feature').sort((a, b) => a.order - b.order);
        const useCaseContents = content.filter(item => item.type === 'use-case').sort((a, b) => a.order - b.order);
        const pricingContents = content.filter(item => item.type === 'pricing').sort((a, b) => a.order - b.order);
        
        return (
          <main className="min-h-screen bg-white">
            {/* Hero Section */}
            {heroContent && (
              <SimpleHeroBlock
                title={heroContent.title}
                subtitle={heroContent.subtitle || ''}
                content={heroContent.content || ''}
                ctaText={heroContent.ctaText || ''}
                ctaUrl={heroContent.ctaUrl || ''}
                imageUrl={heroContent.imageUrl || ''}
                inEditMode={false}
              />
            )}
            
            {/* Features Section */}
            {featureContents.length > 0 && (
              <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureContents.map((feature, index) => (
                      <FeatureBlock
                        key={index}
                        title={feature.title}
                        subtitle={feature.subtitle || ''}
                        content={feature.content || ''}
                        imageUrl={feature.imageUrl || ''}
                        inEditMode={false}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
            
            {/* Use Cases Section */}
            {useCaseContents.length > 0 && (
              <section className="py-16">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
                  {useCaseContents.map((useCase, index) => (
                    <SimpleContentBlock
                      key={index}
                      title={useCase.title}
                      content={useCase.content || ''}
                      imageUrl={useCase.imageUrl || ''}
                      reverse={index % 2 !== 0}
                      inEditMode={false}
                    />
                  ))}
                </div>
              </section>
            )}
            
            {/* Pricing Section */}
            {pricingContents.length > 0 && (
              <section id="pricing" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingContents.map((pricing, index) => (
                      <PricingBlock
                        key={index}
                        title={pricing.title}
                        subtitle={pricing.subtitle || ''}
                        content={pricing.content || ''}
                        ctaText={pricing.ctaText || 'Get Started'}
                        ctaUrl={pricing.ctaUrl || '#'}
                        featured={index === 1} // Make middle plan featured
                        inEditMode={false}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </main>
        );
      }}
    </CmsPageTemplate>
  );
}