import { ArrowRight, Building, Users, FileText, Shield, Server, Globe, CheckCircle, Clock, Database, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import defenceTechImage from '@assets/Defence-Tech_01.png';

const PublicSectorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Public Sector Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies empowers government organizations with secure, scalable digital solutions that enhance citizen services, streamline operations, and support the digital transformation of public administration across local, state, and national levels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gray-700 hover:bg-gray-800">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-50">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={defenceTechImage} 
                alt="Public Sector Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Public Sector Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-gray-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-gray-100 p-3 rounded-full w-fit mb-4">
                  <Building className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Government Process Automation</h3>
                <p className="text-gray-600 mb-4">
                  Digital workflows and process automation solutions that streamline administrative procedures, reduce paperwork, and accelerate service delivery across government departments.
                </p>
                <a href="#" className="inline-flex items-center text-gray-600 hover:text-gray-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Citizen Service Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Integrated citizen engagement platforms that provide seamless access to government services, enable transparent communication, and improve citizen satisfaction through digital channels.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Document Management</h3>
                <p className="text-gray-600 mb-4">
                  Secure document management systems that digitize, organize, and preserve government records, enabling efficient information retrieval while ensuring compliance with retention policies.
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
                <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security solutions that protect sensitive government data, ensure regulatory compliance, and defend critical infrastructure against cyber threats and unauthorized access.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Server className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Government Cloud Services</h3>
                <p className="text-gray-600 mb-4">
                  Secure, compliant cloud infrastructure and platform services designed specifically for government agencies, enabling cost-effective IT modernization while maintaining data sovereignty.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-cyan-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-cyan-100 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart City Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  IoT-enabled smart city platforms that integrate urban systems, enhance public services, and improve quality of life through connected infrastructure and real-time data analytics.
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
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Public Sector Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-gray-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Service Delivery</h3>
                <p className="text-gray-600">
                  Digital platforms reduce processing times by up to 70%, enabling faster, more responsive government services and improved citizen satisfaction.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Governance</h3>
                <p className="text-gray-600">
                  Advanced analytics capabilities enable evidence-based policy making and resource allocation, improving the effectiveness of government programs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Lock className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Security & Compliance</h3>
                <p className="text-gray-600">
                  Purpose-built security frameworks ensure protection of sensitive government data while maintaining compliance with regulatory requirements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Increased Transparency</h3>
                <p className="text-gray-600">
                  Digital platforms facilitate greater visibility into government operations, enhancing accountability and building public trust through transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Success Stories</h2>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Digital Transformation of a State Government Department</h3>
                <p className="text-gray-700 mb-6">
                  A major state government department in India implemented our digital process automation and citizen service platform, resulting in dramatic improvements in service delivery, operational efficiency, and citizen satisfaction.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>75% reduction in document processing time through workflow automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>60% increase in service requests processed per day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>85% improvement in citizen satisfaction ratings</span>
                  </li>
                </ul>
                <Button className="bg-gray-700 hover:bg-gray-800">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={defenceTechImage} 
                  alt="Public Sector case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Government Services?</h2>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement secure, scalable digital solutions that enhance citizen services, streamline operations, and accelerate digital government initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-gray-900 hover:bg-gray-50">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-gray-800">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicSectorPage;