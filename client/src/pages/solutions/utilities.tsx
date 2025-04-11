import { ArrowRight, Zap, Droplet, Wind, BarChart3, Activity, Building, CheckCircle, Shield, LineChart, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import smartSolutionsImage from '@assets/Smart_Solutions_01.png';

const UtilitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Utilities Technology Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies is transforming the utilities sector with innovative digital solutions that optimize grid operations, enhance energy and water management, and enable sustainable infrastructure through AI, IoT, and advanced analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={smartSolutionsImage} 
                alt="Utilities Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Utilities Technology Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-emerald-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Grid Management</h3>
                <p className="text-gray-600 mb-4">
                  Advanced grid management systems that optimize electricity distribution, enable real-time monitoring, and enhance reliability through automated load balancing and predictive outage management.
                </p>
                <a href="#" className="inline-flex items-center text-emerald-600 hover:text-emerald-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Droplet className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Water Management Systems</h3>
                <p className="text-gray-600 mb-4">
                  IoT-enabled water management solutions that monitor distribution networks, detect leaks, optimize pressure, and ensure water quality through intelligent sensing and analytics.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                  <Wind className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Renewable Energy Integration</h3>
                <p className="text-gray-600 mb-4">
                  Solutions for seamlessly integrating solar, wind, and other renewable energy sources into existing grids, with advanced forecasting and storage optimization for reliable clean energy delivery.
                </p>
                <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-t-4 border-t-amber-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy Analytics Platform</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analytics solutions that transform utility data into actionable insights for improved demand forecasting, consumption pattern analysis, and strategic infrastructure planning.
                </p>
                <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <Activity className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Asset Performance Management</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered solutions that monitor utility assets in real-time, predict failures before they occur, and optimize maintenance schedules to extend equipment life and prevent outages.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-indigo-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-indigo-100 p-3 rounded-full w-fit mb-4">
                  <Building className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Engagement Systems</h3>
                <p className="text-gray-600 mb-4">
                  Digital customer platforms that provide real-time consumption data, enable personalized energy efficiency recommendations, and streamline billing and service processes.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
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
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Utilities Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <LineChart className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Smart grid and distribution automation typically reduce operational costs by 15-25% while improving service reliability and asset utilization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Reliability</h3>
                <p className="text-gray-600">
                  Predictive maintenance and real-time monitoring can reduce outage frequency by up to 45% and duration by up to 55%, improving customer satisfaction.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Wind className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainability Impact</h3>
                <p className="text-gray-600">
                  Renewable integration and energy optimization solutions typically reduce carbon footprint by 20-30% while supporting regulatory compliance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Resource Management</h3>
                <p className="text-gray-600">
                  Water management solutions can reduce non-revenue water loss by up to 25% through leak detection and pressure management systems.
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
          
          <div className="bg-emerald-50 rounded-xl p-8 shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-900">Transforming Operations for a Major Power Distribution Company</h3>
                <p className="text-gray-700 mb-6">
                  One of India's largest power distribution companies implemented our Smart Grid and Asset Performance Management solutions, achieving significant improvements in reliability, efficiency, and operational performance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>42% reduction in outage duration through predictive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>28% improvement in peak load management efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>35% reduction in technical losses through grid optimization</span>
                  </li>
                </ul>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={smartSolutionsImage} 
                  alt="Utilities case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Utility Operations?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement cutting-edge solutions that enhance reliability, efficiency, and sustainability across your energy and water infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-emerald-900 hover:bg-emerald-50">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-800">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UtilitiesPage;