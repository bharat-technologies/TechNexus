import { ArrowRight, Shield, Radio, Radar, Crosshair, Compass, CheckCircle, Command } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import defenceTechImage from '@assets/Defence-Tech_01.png';

const DefenceSolutions = () => {
  useEffect(() => {
    document.title = 'Defence Solutions - Bharat Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-50 to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Defence Technology Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies delivers cutting-edge defense systems and solutions that empower security forces with superior situational awareness, command capabilities, and operational effectiveness.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gray-800 hover:bg-gray-900">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-50">
                  View Defence Portfolio
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={defenceTechImage} 
                alt="Defence Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Defence Technology Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-gray-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-gray-100 p-3 rounded-full w-fit mb-4">
                  <Command className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Command & Control Systems</h3>
                <p className="text-gray-600 mb-4">
                  Advanced C4ISR (Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance) systems that integrate multiple data sources to provide comprehensive situational awareness.
                </p>
                <a href="#" className="inline-flex items-center text-gray-600 hover:text-gray-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Radar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Surveillance & Reconnaissance</h3>
                <p className="text-gray-600 mb-4">
                  Multi-spectral sensors, radars, and unmanned systems that deliver real-time intelligence and surveillance capabilities across land, sea, air, and cyber domains.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cybersecurity & Electronic Warfare</h3>
                <p className="text-gray-600 mb-4">
                  Advanced defensive and offensive cyber capabilities, electronic countermeasures, and secure communications systems that protect critical infrastructure and military networks.
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
                  <Radio className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Communication Systems</h3>
                <p className="text-gray-600 mb-4">
                  Secure, resilient tactical and strategic communication networks that ensure reliable information exchange in challenging environments and contested spectrum conditions.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <Crosshair className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Targeting & Navigation Systems</h3>
                <p className="text-gray-600 mb-4">
                  Precision guidance, navigation, and positioning technologies that enhance accuracy and effectiveness across various platforms and weapon systems.
                </p>
                <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <Compass className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Training & Simulation</h3>
                <p className="text-gray-600 mb-4">
                  Advanced virtual and augmented reality training environments that provide realistic, immersive scenarios for military personnel to develop and refine tactical skills.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Defence Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <div className="bg-gray-200 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Indigenous Development</h3>
                <p className="text-gray-600">
                  We design and develop advanced defense technologies in-house, reducing dependency on foreign systems and ensuring technological sovereignty for critical security capabilities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Radar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multi-Domain Integration</h3>
                <p className="text-gray-600">
                  Our solutions operate seamlessly across land, air, maritime, space, and cyber domains, enabling unified operations and coordinated responses to complex security challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <div className="bg-green-100 p-3 rounded-full">
                  <Radio className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced AI Applications</h3>
                <p className="text-gray-600">
                  We integrate artificial intelligence and machine learning throughout our defense systems, enhancing threat detection, autonomous operations, and decision-making processes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Compass className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interoperability</h3>
                <p className="text-gray-600">
                  Our systems are designed with open architectures and international standards compliance to ensure seamless integration with allied forces and legacy systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Security & Compliance</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Our defense solutions adhere to the highest security standards and compliance requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-3 text-center">Information Security</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>CMMC Level 3 compliant development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ISO 27001 certified facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Secure software development lifecycle</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-3 text-center">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>AS9100 aerospace standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ISO 9001 quality management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Rigorous testing protocols</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold mb-3 text-center">Export Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ITAR compliant operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Export control management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Secure supply chain protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Success Stories</h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-5xl mx-auto" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Case Study</span>
                <h3 className="text-2xl font-semibold mb-4">Integrated Command & Control System for Border Security</h3>
                <p className="text-gray-700 mb-6">
                  Bharat Technologies developed and implemented an advanced integrated command and control system for a national border security force, incorporating AI-powered surveillance, secure communications, and real-time intelligence analysis.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>85% increase in surveillance coverage with existing resources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>62% reduction in response time to security incidents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>93% improvement in threat detection accuracy</span>
                  </li>
                </ul>
                <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={defenceTechImage} 
                  alt="Defence technology case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Partner With Us for Next-Generation Defence Solutions</h2>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Let's work together to develop and implement advanced defense technologies that enhance national security and operational effectiveness.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-gray-900 hover:bg-gray-50">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-gray-800">
              Download Defense Capabilities Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefenceSolutions;