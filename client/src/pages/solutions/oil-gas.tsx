import { ArrowRight, Droplet, Zap, BarChart3, PieChart, Factory, Gauge, CheckCircle, Shield, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import smartSolutionsImage from '@assets/Smart_Solutions_01.png';

const OilGasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Oil & Gas Technology Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies is transforming the oil and gas industry with advanced digital solutions that optimize exploration, production, and distribution operations while enhancing safety, sustainability, and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={smartSolutionsImage} 
                alt="Oil & Gas Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Oil & Gas Technology Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Droplet className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Reservoir Management</h3>
                <p className="text-gray-600 mb-4">
                  Advanced reservoir modeling and simulation tools that leverage machine learning algorithms to optimize oil extraction, enhance recovery rates, and maximize field production efficiency.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  IoT-enabled condition monitoring systems that predict equipment failures before they occur, reducing downtime, optimizing maintenance schedules, and extending the lifespan of critical assets.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exploration Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced seismic data processing and interpretation tools that identify potential drilling sites with greater accuracy, reducing exploration costs and improving discovery rates.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-t-4 border-t-yellow-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
              <CardContent className="p-6">
                <div className="bg-yellow-100 p-3 rounded-full w-fit mb-4">
                  <PieChart className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Supply Chain Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Integrated supply chain management solutions that optimize inventory levels, streamline logistics, and enhance distribution efficiency from wellhead to customer delivery.
                </p>
                <a href="#" className="inline-flex items-center text-yellow-600 hover:text-yellow-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Factory className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Refinery Process Automation</h3>
                <p className="text-gray-600 mb-4">
                  Advanced control systems and digital twin technology that optimize refinery operations, improve product quality, and reduce energy consumption through real-time adjustments.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-cyan-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-cyan-100 p-3 rounded-full w-fit mb-4">
                  <Gauge className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Emissions Monitoring & Control</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive environmental monitoring systems that track and reduce greenhouse gas emissions, identify methane leaks, and help meet sustainability targets and regulatory requirements.
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
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Oil & Gas Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Optimized processes and predictive maintenance reduce operational costs by up to 30%, while increasing equipment uptime and production capacity.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Safety</h3>
                <p className="text-gray-600">
                  Real-time monitoring, early warning systems, and automated controls reduce workplace incidents and improve emergency response capabilities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Factory className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainability Improvements</h3>
                <p className="text-gray-600">
                  Advanced emissions monitoring and energy optimization help reduce environmental footprint, supporting compliance with increasingly stringent regulations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Better Decision Making</h3>
                <p className="text-gray-600">
                  Data-driven insights enable more informed operational and strategic decisions, from exploration investments to production optimization.
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
          
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Transforming Operations at a Major Indian Refinery</h3>
                <p className="text-gray-700 mb-6">
                  A leading Indian oil refinery implemented our predictive maintenance and process optimization solutions, resulting in significant operational improvements, reduced downtime, and enhanced production efficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>42% reduction in unplanned downtime through predictive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>18% improvement in overall equipment effectiveness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>25% reduction in maintenance costs through optimized scheduling</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={smartSolutionsImage} 
                  alt="Oil & Gas case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Oil & Gas Operations?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement cutting-edge solutions that enhance operational efficiency, safety, and sustainability across your oil and gas value chain.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-800">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilGasPage;