import { ArrowRight, Cloud, Database, Server, Shield, Sliders, Code, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import futureTechImage from '@assets/Future-Tech_01.png';

const CloudStackSolutions = () => {
  useEffect(() => {
    document.title = 'Cloud Stack Solutions - Bharat Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cloud Stack Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies delivers comprehensive cloud infrastructure, platform, and software solutions designed to accelerate digital transformation, enhance scalability, and optimize operational efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Cloud Services
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={futureTechImage} 
                alt="Cloud Stack Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Cloud Stack Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Infrastructure as a Service (IaaS)</h3>
                <p className="text-gray-600 mb-4">
                  Scalable and secure cloud infrastructure with virtual machines, storage, networks, and bare metal servers that provide the foundation for digital transformation.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-cyan-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-cyan-100 p-3 rounded-full w-fit mb-4">
                  <Code className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Platform as a Service (PaaS)</h3>
                <p className="text-gray-600 mb-4">
                  Developer-friendly platforms that streamline application development, testing, and deployment with pre-configured environments, tools, and middleware services.
                </p>
                <a href="#" className="inline-flex items-center text-cyan-600 hover:text-cyan-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Cloud className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Software as a Service (SaaS)</h3>
                <p className="text-gray-600 mb-4">
                  Ready-to-use cloud applications for business processes, collaboration, analytics, and industry-specific solutions that deliver immediate value without infrastructure management.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Database as a Service (DBaaS)</h3>
                <p className="text-gray-600 mb-4">
                  Fully managed database solutions for relational, NoSQL, and in-memory databases that ensure high availability, security, and performance with automated maintenance.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security as a Service</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cloud security services including threat detection, identity management, data protection, and compliance monitoring to secure your entire cloud environment.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                  <Sliders className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Management</h3>
                <p className="text-gray-600 mb-4">
                  Unified management tools and services for monitoring, optimization, cost control, and governance across multi-cloud and hybrid environments.
                </p>
                <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-800">
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
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Cloud Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scalability & Flexibility</h3>
                <p className="text-gray-600">
                  Easily scale resources up or down based on demand. Our cloud solutions adapt to your evolving business needs with flexible deployment options across public, private, and hybrid environments.
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
                <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
                <p className="text-gray-600">
                  Reduce capital expenditure and control operational costs with pay-as-you-go pricing models. Our intelligent optimization tools help identify and eliminate resource waste.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                <p className="text-gray-600">
                  Protect your data and applications with multi-layered security, including encryption, identity management, network security, and compliance controls that meet industry standards.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <div className="bg-red-100 p-3 rounded-full">
                  <Cloud className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Availability</h3>
                <p className="text-gray-600">
                  Deploy applications and services closer to your users with our global network of data centers, ensuring low latency, high availability, and regional compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration & Modernization */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Cloud Migration & Modernization</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Our comprehensive approach ensures a smooth transition to the cloud and helps modernize your legacy applications.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">
                  Evaluate your current environment, applications, and workloads to develop the optimal migration strategy.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">
                  Design cloud architecture, select appropriate services, and create a detailed migration roadmap.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Migration</h3>
                <p className="text-gray-600">
                  Execute migration with minimal disruption using automated tools, testing, and validation.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimization</h3>
                <p className="text-gray-600">
                  Continuously improve performance, security, and cost-efficiency of your cloud environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Success Stories</h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-5xl mx-auto" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Case Study</span>
                <h3 className="text-2xl font-semibold mb-4">Cloud Transformation for a Leading Manufacturing Enterprise</h3>
                <p className="text-gray-700 mb-6">
                  A major manufacturing company partnered with Bharat Technologies to migrate their legacy IT infrastructure to our cloud stack. The transformation reduced their IT operating costs by 42% while improving application performance and enabling rapid scaling for seasonal demand.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reduced infrastructure costs by 42%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Decreased application deployment time from weeks to hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Improved system reliability with 99.99% uptime</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={futureTechImage} 
                  alt="Cloud case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Accelerate Your Cloud Journey?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement the perfect cloud stack for your organization's unique needs and objectives.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule a Cloud Assessment
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-800">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudStackSolutions;