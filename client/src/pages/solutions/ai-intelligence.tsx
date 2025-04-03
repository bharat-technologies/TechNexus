import { ArrowRight, Brain, Zap, BarChart, Layers, Database, Shield, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import futureTechImage from '@assets/Future-Tech_01.png';

const AIIntelligenceSolutions = () => {
  useEffect(() => {
    document.title = 'AI Intelligence Solutions - Bharat Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Intelligence Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies delivers cutting-edge AI solutions that transform business processes, enhance decision-making, and create unprecedented competitive advantages across industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Schedule Demo
                </Button>
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  Explore AI Use Cases
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={futureTechImage} 
                alt="AI Intelligence Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our AI Intelligence Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-indigo-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-indigo-100 p-3 rounded-full w-fit mb-4">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
                <p className="text-gray-600 mb-4">
                  Advanced NLP solutions for sentiment analysis, content summarization, multilingual support, and intelligent document processing that understand context and nuance in human language.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning models that analyze historical data to predict future trends, identify opportunities, optimize resources, and provide actionable insights for strategic decision-making.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cognitive Automation</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent process automation that combines RPA with AI capabilities to automate complex workflows, reduce manual intervention, and enhance productivity across business functions.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <Layers className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
                <p className="text-gray-600 mb-4">
                  Advanced image and video analysis capabilities for object recognition, quality control, security surveillance, and visual data interpretation across various industry applications.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Generative AI</h3>
                <p className="text-gray-600 mb-4">
                  Next-generation AI systems that create content, design solutions, and generate code based on natural language inputs, enhancing creativity and accelerating development processes.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Ethics & Governance</h3>
                <p className="text-gray-600 mb-4">
                  Frameworks, tools, and advisory services for responsible AI implementation, ensuring transparency, fairness, and compliance with regulatory requirements and ethical standards.
                </p>
                <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">AI Solutions Across Industries</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Our AI technologies are tailored to address specific challenges and unlock unique opportunities across diverse industry sectors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-3">Banking & Finance</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fraud detection and risk assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Algorithmic trading and portfolio optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Personalized financial recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Diagnostic imaging and early disease detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Personalized treatment planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Drug discovery and development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Predictive maintenance and quality control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated visual inspection systems</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold mb-3">Defense & Government</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Threat intelligence and security analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Resource allocation and logistics optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pattern recognition for intelligence analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Our AI Implementation Approach</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We follow a proven methodology to deliver AI solutions that drive measurable business outcomes.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-gray-600">
                  Understanding business challenges, defining objectives, and identifying AI opportunities.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-gray-600">
                  Architecting the solution, selecting algorithms, and designing implementation roadmap.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Develop</h3>
                <p className="text-gray-600">
                  Building, training, and validating AI models through iterative development cycles.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Deploy</h3>
                <p className="text-gray-600">
                  Implementation, integration, monitoring, and continuous improvement of AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Success Stories</h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-5xl mx-auto" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Case Study</span>
                <h3 className="text-2xl font-semibold mb-4">How AI Transformed Data Processing for a Global Financial Institution</h3>
                <p className="text-gray-700 mb-6">
                  A leading financial institution partnered with Bharat Technologies to implement our NLP and cognitive automation solutions to process over 10,000 financial documents daily. The result was a 85% reduction in processing time and a 60% decrease in operational costs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Increased accuracy from 92% to 99.5%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reduced manual review time by 78%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>ROI achieved within 8 months of implementation</span>
                  </li>
                </ul>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={futureTechImage} 
                  alt="AI case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement cutting-edge AI solutions that drive innovation, efficiency, and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-indigo-900 hover:bg-indigo-50">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-indigo-800">
              Explore AI Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIIntelligenceSolutions;