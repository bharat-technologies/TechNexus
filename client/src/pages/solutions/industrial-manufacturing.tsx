import { ArrowRight, Factory, Cpu, Wrench, Network, Eye, BarChart3, CheckCircle, Shield, Zap, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import futureTechImage from '@assets/Future-Tech_02.png';

const IndustrialManufacturingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industrial Manufacturing Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies empowers manufacturers with Industry 4.0 solutions that transform production processes, optimize supply chains, and enable smart factory operations through advanced IoT, AI, and automation technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-slate-600 hover:bg-slate-700">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-600 hover:bg-slate-50">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={futureTechImage} 
                alt="Industrial Manufacturing Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Industrial Manufacturing Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-slate-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-slate-100 p-3 rounded-full w-fit mb-4">
                  <Factory className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Factory Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive IoT systems that connect machines, workers, and processes to create intelligent manufacturing environments with real-time monitoring, analytics, and control capabilities.
                </p>
                <a href="#" className="inline-flex items-center text-slate-600 hover:text-slate-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Robotics & Automation</h3>
                <p className="text-gray-600 mb-4">
                  Next-generation robotics and automation solutions that enhance production precision, increase throughput, and enable flexible manufacturing with collaborative robots and intelligent control systems.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                  <Wrench className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered maintenance systems that analyze equipment performance data to predict failures before they occur, reducing downtime, optimizing maintenance schedules, and extending asset lifespans.
                </p>
                <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Network className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Supply Chain</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end supply chain visibility and optimization solutions that synchronize procurement, production, and distribution processes, reducing inventory costs and improving delivery performance.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Control AI</h3>
                <p className="text-gray-600 mb-4">
                  Computer vision and machine learning systems that automate quality inspection processes, detecting defects with greater accuracy than human inspectors while operating at production-line speeds.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Production Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analytics platforms that transform manufacturing data into actionable insights, enabling data-driven decisions to optimize production processes and resource allocation.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
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
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Manufacturing Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Zap className="h-8 w-8 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Increased Productivity</h3>
                <p className="text-gray-600">
                  Automation and process optimization typically increase production throughput by 15-30% while requiring less human intervention and reducing errors.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Quality</h3>
                <p className="text-gray-600">
                  AI-powered quality control and predictive maintenance systems reduce defect rates and ensure consistent product quality throughout production runs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reduced Downtime</h3>
                <p className="text-gray-600">
                  Predictive maintenance solutions typically reduce unplanned downtime by 30-50%, maximizing equipment availability and production capacity.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Network className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Supply Chain Agility</h3>
                <p className="text-gray-600">
                  Digital supply chain solutions enhance visibility and responsiveness, reducing inventory costs by 15-30% while improving on-time delivery performance.
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
          
          <div className="bg-slate-50 rounded-xl p-8 shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Digital Transformation of a Major Manufacturing Plant</h3>
                <p className="text-gray-700 mb-6">
                  A leading Indian manufacturing company implemented our Smart Factory and Predictive Maintenance solutions, achieving significant improvements in productivity, quality, and operational efficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>22% increase in overall equipment effectiveness (OEE)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>45% reduction in unplanned downtime through predictive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>35% improvement in defect detection rates with AI quality control</span>
                  </li>
                </ul>
                <Button className="bg-slate-600 hover:bg-slate-700">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={futureTechImage} 
                  alt="Manufacturing case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl text-slate-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement Industry 4.0 solutions that enhance productivity, quality, and operational efficiency across your manufacturing enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-slate-900 hover:bg-slate-50">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-slate-800">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialManufacturingPage;