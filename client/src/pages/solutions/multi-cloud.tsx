import { ArrowRight, Cloud, Database, ServerCog, Shield, Workflow, Network, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import futureTechImage from '@assets/Future-Tech_01.png';

const MultiCloudSolutions = () => {
  useEffect(() => {
    document.title = 'Multi-Cloud Solutions - Bharat Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Multi-Cloud Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies delivers comprehensive multi-cloud management and orchestration solutions that unify your cloud environment, optimize resources, and accelerate innovation across any cloud provider.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  Schedule Cloud Assessment
                </Button>
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={futureTechImage} 
                alt="Multi-Cloud Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Multi-Cloud Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Workflow className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Orchestration</h3>
                <p className="text-gray-600 mb-4">
                  Unified management and automation across AWS, Azure, Google Cloud, and private clouds with consistent governance, deployment, and operations for all your cloud resources.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Network className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hybrid Connectivity</h3>
                <p className="text-gray-600 mb-4">
                  Secure, high-performance networking solutions that connect your on-premises environments with multiple cloud providers, ensuring seamless data flow and application integration.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Management</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solutions for managing, migrating, and protecting data across multi-cloud environments, ensuring consistency, compliance, and accessibility.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Security</h3>
                <p className="text-gray-600 mb-4">
                  Unified security framework for multi-cloud environments with identity management, threat protection, compliance monitoring, and automated remediation capabilities.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <ServerCog className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Tools and services for monitoring, analyzing, and optimizing cloud spending across providers, identifying waste, and implementing automated cost control measures.
                </p>
                <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-cyan-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-cyan-100 p-3 rounded-full w-fit mb-4">
                  <Cloud className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end services for assessing, planning, and executing migrations to multi-cloud environments with minimal disruption and optimized application performance.
                </p>
                <a href="#" className="inline-flex items-center text-cyan-600 hover:text-cyan-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Multi-Cloud Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Avoid Vendor Lock-in</h3>
                <p className="text-gray-600">
                  Maintain flexibility and negotiating power by distributing workloads across multiple cloud providers and avoiding dependency on a single vendor's ecosystem.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Best-of-Breed Services</h3>
                <p className="text-gray-600">
                  Select the optimal cloud services for each workload based on performance, features, compliance requirements, and cost considerations rather than settling for one provider's offerings.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <div className="bg-purple-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Reliability</h3>
                <p className="text-gray-600">
                  Improve business continuity with geographic and provider diversity, ensuring resilience against regional outages or service disruptions from any single cloud provider.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <div className="bg-amber-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Optimized Performance</h3>
                <p className="text-gray-600">
                  Deploy workloads on the most suitable platforms based on latency, throughput, and computing requirements, leveraging each provider's unique strengths and global presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Supported Cloud Providers</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Our multi-cloud solutions seamlessly integrate with all major cloud providers and private cloud platforms.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="h-16 flex items-center justify-center mb-4">
                <Cloud className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="font-semibold">Amazon Web Services</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="h-16 flex items-center justify-center mb-4">
                <Cloud className="h-12 w-12 text-blue-800" />
              </div>
              <h3 className="font-semibold">Microsoft Azure</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="h-16 flex items-center justify-center mb-4">
                <Cloud className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="font-semibold">Google Cloud</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="h-16 flex items-center justify-center mb-4">
                <ServerCog className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="font-semibold">Private Cloud</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Our Multi-Cloud Implementation Process</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We follow a proven methodology to deliver successful multi-cloud transformations.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-gray-600">
                  Evaluate current environment and requirements
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                <p className="text-sm text-gray-600">
                  Develop multi-cloud architecture and roadmap
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Migration</h3>
                <p className="text-sm text-gray-600">
                  Execute workload migrations with minimal disruption
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Integration</h3>
                <p className="text-sm text-gray-600">
                  Implement orchestration and management tools
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">5</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                <p className="text-sm text-gray-600">
                  Continuously improve performance and efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Success Stories</h2>
          
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg max-w-5xl mx-auto" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Case Study</span>
                <h3 className="text-2xl font-semibold mb-4">Multi-Cloud Transformation for a Global Retail Enterprise</h3>
                <p className="text-gray-700 mb-6">
                  A leading retail company partnered with Bharat Technologies to implement a multi-cloud strategy across AWS, Azure, and Google Cloud. Our solution provided unified management, optimized costs, and enhanced application performance during peak shopping seasons.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>32% reduction in overall cloud spending</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>99.99% uptime during peak shopping periods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>75% faster deployment of new applications</span>
                  </li>
                </ul>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={futureTechImage} 
                  alt="Multi-cloud case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Cloud Strategy?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to develop and implement a multi-cloud strategy that maximizes flexibility, optimizes costs, and accelerates innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule a Multi-Cloud Assessment
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-800">
              Speak with a Cloud Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiCloudSolutions;