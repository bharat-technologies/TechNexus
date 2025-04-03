import { ArrowRight, Banknote, CreditCard, Lock, Smartphone, TrendingUp, Globe, CheckCircle, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import bankingTechImage from '@assets/Banking-Tech_01.png';
import bankingTechDetailImage from '@assets/Banking-Tech_01.png';

const BankingPaymentsPage = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Banking and Payments Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies is transforming the financial sector with cutting-edge solutions that combine AI, blockchain, and secure authentication technologies to create seamless, efficient, and secure banking and payment experiences.
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
                src={bankingTechImage} 
                alt="Banking and Payments Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Banking Technology Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">UPI and Digital Payments</h3>
                <p className="text-gray-600 mb-4">
                  Our unified payment interface solutions enable secure, instant money transfers between bank accounts using mobile devices. We help banks implement UPI-based systems with enhanced security and user experience.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile Banking Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed mobile banking applications that offer a comprehensive suite of services, from account management to investment tracking, with intuitive interfaces tailored for the Indian market.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Fraud Detection</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning algorithms that analyze transaction patterns in real-time to identify suspicious activities, reducing fraud while minimizing false positives and customer friction.
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
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Authentication</h3>
                <p className="text-gray-600 mb-4">
                  Multi-factor authentication systems with biometric verification, including fingerprint, facial recognition, and voice authentication, providing enhanced security without compromising user experience.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <Banknote className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Lending Solutions</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end digital lending platforms that automate loan origination, underwriting, and disbursement processes, with AI-driven credit scoring models tailored for the Indian market.
                </p>
                <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Blockchain for Banking</h3>
                <p className="text-gray-600 mb-4">
                  Blockchain solutions for cross-border payments, trade finance, and digital identity verification, reducing costs and increasing transparency in banking operations.
                </p>
                <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800">
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
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Benefits of Our Banking Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                <p className="text-gray-600">
                  Multi-layered security architecture with real-time monitoring, anomaly detection, and end-to-end encryption to protect sensitive financial data and transactions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Efficiency</h3>
                <p className="text-gray-600">
                  Automated processes that reduce manual intervention, minimize errors, and accelerate transaction processing, leading to significant operational cost savings.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced User Experience</h3>
                <p className="text-gray-600">
                  Intuitive, user-friendly interfaces designed specifically for Indian customers, supporting multiple languages and accommodating various levels of digital literacy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Built-in compliance with RBI guidelines, KYC norms, and other regulatory requirements, with automatic updates to adapt to changing regulatory landscapes.
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
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">How We Helped a Major Indian Bank Transform Their Digital Payments</h3>
                <p className="text-gray-700 mb-6">
                  A leading Indian bank partnered with Bharat Technologies to revamp their digital payment infrastructure. We implemented our UPI and mobile banking solutions, resulting in a 60% increase in digital transactions and a 40% reduction in customer complaints related to payment failures.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reduced transaction failure rate from 8% to less than 1%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Improved app store rating from 3.2 to 4.7 stars</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>35% increase in customer acquisition through digital channels</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={bankingTechDetailImage} 
                  alt="Banking case study" 
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
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Banking and Payment Services?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement cutting-edge solutions that enhance security, improve user experience, and drive digital adoption.
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

export default BankingPaymentsPage;