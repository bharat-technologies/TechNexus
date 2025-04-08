import React from 'react';
import { CMSContent } from '@/hooks/use-cms-content';
import CmsPageTemplate from '@/components/cms-templates/CmsPageTemplate';
import SimpleHeroBlock from '@/components/cms-blocks/SimpleHeroBlock';
import FeatureBlock from '@/components/cms-blocks/FeatureBlock';
import SimpleContentBlock from '@/components/cms-blocks/SimpleContentBlock';
import PricingBlock from '@/components/cms-blocks/PricingBlock';

export default function AnalyticsCloudPage() {
  // This is where content would be fetched and rendered
  return (
    <CmsPageTemplate
      pageLocation="products/analytics-cloud"
      defaultContent={[
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
        }
      ]}
    >
      {({ content, isLoading, getContentByType, getAllContentByType }) => {
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
              <section className="py-16 bg-gray-50">
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