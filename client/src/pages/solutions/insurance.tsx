import { ArrowRight, Shield, FileCheck, Activity, Clock, PieChart, ChartBar, CheckCircle, Users, Coins } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import futureTechImage from '@assets/Future-Tech_01.png';

const InsurancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">Insurance Technology Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies is revolutionizing the insurance industry with innovative digital solutions that enhance risk assessment, streamline claims processing, and create seamless customer experiences through AI, data analytics, and cloud technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={futureTechImage} 
                alt="Insurance Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Insurance Technology Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-indigo-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-indigo-100 p-3 rounded-full w-fit mb-4">
                  <FileCheck className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Claims Processing</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered claims processing systems that automate assessment, reduce fraud, and accelerate payouts through advanced image recognition, natural language processing, and predictive analytics.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk Analytics Platform</h3>
                <p className="text-gray-600 mb-4">
                  Advanced risk assessment systems using machine learning algorithms to analyze vast data sets, enabling more accurate pricing models and underwriting decisions based on comprehensive risk profiles.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Health Analytics & Telemedicine</h3>
                <p className="text-gray-600 mb-4">
                  Connected health monitoring systems that integrate with insurance platforms, providing real-time health data for personalized coverage and enabling virtual healthcare services for policyholders.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">On-Demand Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Flexible digital platforms enabling usage-based and on-demand insurance products, allowing customers to activate coverage instantly for specific durations through mobile apps with automated policy issuance.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                  <PieChart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Analytics Suite</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive customer analytics tools that provide insurers with deep insights into customer behavior, preferences, and needs, enabling personalized offerings and improved customer retention strategies.
                </p>
                <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-cyan-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-cyan-100 p-3 rounded-full w-fit mb-4">
                  <ChartBar className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fraud Detection System</h3>
                <p className="text-gray-600 mb-4">
                  Advanced fraud detection systems using machine learning to identify suspicious patterns and anomalies across claims data, significantly reducing fraudulent payouts while expediting legitimate claims.
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
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Insurance Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Coins className="h-8 w-8 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reduced Operational Costs</h3>
                <p className="text-gray-600">
                  Automation of routine processes reduces manual effort, minimizes errors, and lowers administrative costs, allowing insurers to offer more competitive premiums.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Faster Claims Settlement</h3>
                <p className="text-gray-600">
                  AI-powered claims processing reduces settlement times from weeks to days or even hours, significantly improving customer satisfaction and loyalty.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Customer Experience</h3>
                <p className="text-gray-600">
                  Digital interfaces and mobile apps provide seamless self-service options, real-time policy management, and transparent communication throughout the insurance lifecycle.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Risk Management</h3>
                <p className="text-gray-600">
                  Data-driven risk assessment enables more accurate pricing, better loss prevention strategies, and the ability to offer coverage for previously uninsurable risks.
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
          
          <div className="bg-indigo-50 rounded-xl p-8 shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-900">How We Transformed Claims Processing for a Leading Insurance Provider</h3>
                <p className="text-gray-700 mb-6">
                  A major Indian insurance company partnered with Bharat Technologies to implement our AI-powered claims processing system. The solution reduced claims processing time by 75% while improving fraud detection by 40%, resulting in significant cost savings and improved customer satisfaction.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reduced claims processing time from 15 days to just 3 days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>40% reduction in fraudulent claims through advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Customer satisfaction scores increased by 35%</span>
                  </li>
                </ul>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={futureTechImage} 
                  alt="Insurance case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Insurance Operations?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement cutting-edge solutions that enhance risk assessment, streamline claims processing, and create exceptional customer experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-indigo-900 hover:bg-indigo-50">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-indigo-800">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsurancePage;