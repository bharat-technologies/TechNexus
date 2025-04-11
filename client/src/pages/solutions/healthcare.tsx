import { ArrowRight, HeartPulse, Stethoscope, Brain, Microscope, Monitor, Database, CheckCircle, Shield, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import healthcareImage from '@assets/Health-Care_01.png';

const HealthcarePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">Healthcare Technology Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies is at the forefront of healthcare innovation, developing cutting-edge solutions that improve patient care, enhance clinical decision-making, and streamline healthcare operations through advanced AI, data analytics, and secure digital health platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={healthcareImage} 
                alt="Healthcare Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Healthcare Technology Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-teal-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                  <HeartPulse className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Remote Patient Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Advanced IoT-enabled remote monitoring systems that track patient vitals in real-time, enabling preventive interventions and allowing healthcare providers to monitor patients outside traditional clinical settings.
                </p>
                <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Telemedicine Platform</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive telemedicine solutions that connect patients with healthcare providers through secure video consultations, integrated with electronic health records and prescription systems for seamless care delivery.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Diagnostics</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning algorithms that analyze medical images, lab results, and patient data to assist in disease detection and diagnosis, improving accuracy and enabling earlier interventions.
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Microscope className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clinical Research Platform</h3>
                <p className="text-gray-600 mb-4">
                  Specialized software solutions for managing clinical trials, organizing research data, and facilitating collaboration between research teams, accelerating the development of new treatments and therapies.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
                  <Monitor className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hospital Management System</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive hospital information systems that integrate patient records, appointment scheduling, billing, inventory management, and analytics to optimize hospital operations and improve efficiency.
                </p>
                <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Health Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics platforms that process healthcare data to identify population health trends, optimize resource allocation, and enable data-driven decision-making for healthcare providers and policymakers.
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
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Healthcare Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <HeartPulse className="h-8 w-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Patient Outcomes</h3>
                <p className="text-gray-600">
                  Early detection of health issues, more accurate diagnoses, and personalized treatment plans lead to better patient outcomes and improved quality of life.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Efficiency</h3>
                <p className="text-gray-600">
                  Automation of routine tasks, streamlined workflows, and integrated systems reduce administrative burden, enabling healthcare providers to focus more on patient care.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Increased Accessibility</h3>
                <p className="text-gray-600">
                  Telemedicine and remote monitoring solutions extend healthcare access to underserved populations and remote regions, addressing healthcare disparities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-gray-600">
                  Advanced analytics provide valuable insights for medical research, public health initiatives, and healthcare policy planning, driving systemic improvements.
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
          
          <div className="bg-teal-50 rounded-xl p-8 shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-teal-900">Transforming Patient Care at a Major Hospital Network</h3>
                <p className="text-gray-700 mb-6">
                  A leading hospital chain in India implemented our AI-powered diagnostic platform and remote patient monitoring system, resulting in earlier disease detection, reduced readmission rates, and improved overall patient outcomes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>32% reduction in diagnostic errors through AI-assisted image analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>28% decrease in hospital readmissions with remote monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>45% improvement in patient satisfaction scores</span>
                  </li>
                </ul>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={healthcareImage} 
                  alt="Healthcare case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement innovative solutions that improve patient outcomes, enhance operational efficiency, and expand healthcare access.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-teal-900 hover:bg-teal-50">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-teal-800">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;