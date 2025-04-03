import { ArrowRight, Lock, Shield, Eye, AlertTriangle, CheckCircle, FileSearch, Server } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import cyberSecurityImage from '@assets/Cyber-Security_02.png';

const CyberSecuritySolutions = () => {
  useEffect(() => {
    document.title = 'Cyber Security Solutions - Bharat Technologies';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-50 to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cyber Security Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Bharat Technologies delivers comprehensive, adaptive cybersecurity solutions that protect your organization's critical assets from evolving threats, ensure regulatory compliance, and enable secure digital transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-slate-800 hover:bg-slate-900">
                  Security Assessment
                </Button>
                <Button variant="outline" className="border-slate-800 text-slate-800 hover:bg-slate-50">
                  View Solutions
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img 
                src={cyberSecurityImage} 
                alt="Cyber Security Technology" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Our Cyber Security Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-slate-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <div className="bg-slate-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Threat Protection</h3>
                <p className="text-gray-600 mb-4">
                  Advanced threat detection and response solutions that combine AI-powered analytics, behavior monitoring, and real-time threat intelligence to identify and neutralize sophisticated attacks.
                </p>
                <a href="#" className="inline-flex items-center text-slate-600 hover:text-slate-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Identity & Access Management</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive identity solutions with multi-factor authentication, privileged access management, and zero-trust frameworks that ensure only authorized users access your systems and data.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-purple-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security Operations Center</h3>
                <p className="text-gray-600 mb-4">
                  24/7 monitoring, detection, and response services delivered by our expert security analysts, backed by cutting-edge technologies to provide continuous protection against emerging threats.
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
                  <FileSearch className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
                <p className="text-gray-600 mb-4">
                  Secure your sensitive information with advanced encryption, data loss prevention, and privacy-enhancing technologies that protect data across cloud, on-premises, and hybrid environments.
                </p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="500">
              <CardContent className="p-6">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <Server className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Security</h3>
                <p className="text-gray-600 mb-4">
                  Specialized security solutions for public, private, and hybrid cloud environments that address unique cloud challenges including configuration management, container security, and more.
                </p>
                <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-red-500 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="600">
              <CardContent className="p-6">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
                <p className="text-gray-600 mb-4">
                  Rapid response and recovery services to minimize the impact of security incidents, including breach containment, forensic investigation, and system restoration.
                </p>
                <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Why Choose Our Security Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integrated Security Approach</h3>
                <p className="text-gray-600">
                  Our solutions work together as a cohesive security ecosystem rather than individual products, providing defense in depth and eliminating security gaps.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
                <p className="text-gray-600">
                  Powered by our global threat intelligence network that analyzes billions of events daily to identify emerging threats and attack patterns before they impact your organization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="flex-shrink-0">
                <div className="bg-green-100 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Monitoring</h3>
                <p className="text-gray-600">
                  Round-the-clock visibility into your security posture with real-time monitoring, alerts, and dashboards that provide actionable insights and rapid response capabilities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="flex-shrink-0">
                <div className="bg-purple-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Our solutions are designed to help you meet industry-specific compliance requirements including GDPR, HIPAA, PCI DSS, and other regulatory frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Assessment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">Our Security Assessment Process</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We provide comprehensive security assessments to identify vulnerabilities and develop tailored security strategies.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-gray-600">
                  Comprehensive asset inventory and risk profiling to understand your security posture.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">
                  Vulnerability scanning, penetration testing, and security architecture review.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Analysis</h3>
                <p className="text-gray-600">
                  Detailed risk analysis, prioritization, and remediation planning.
                </p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
                <p className="text-gray-600">
                  Strategic and tactical security recommendations with implementation roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">Success Stories</h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-5xl mx-auto" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Case Study</span>
                <h3 className="text-2xl font-semibold mb-4">How We Protected a Financial Institution Against Advanced Threats</h3>
                <p className="text-gray-700 mb-6">
                  A leading financial services company engaged Bharat Technologies to strengthen their security posture against sophisticated cyber threats. Our integrated security solutions stopped over 1.2 million attack attempts within the first year and reduced their security incident response time by 76%.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Blocked 99.9% of attempted attacks before impact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reduced security incident response time from hours to minutes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Achieved regulatory compliance with zero audit findings</span>
                  </li>
                </ul>
                <Button className="bg-slate-800 hover:bg-slate-900 text-white">
                  Read Full Case Study
                </Button>
              </div>
              <div className="order-first md:order-last mb-6 md:mb-0">
                <img 
                  src={cyberSecurityImage} 
                  alt="Cyber security case study" 
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Strengthen Your Security Posture Today</h2>
          <p className="text-xl text-slate-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to protect your organization's most valuable assets against evolving cyber threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-slate-900 hover:bg-slate-50">
              Schedule a Security Assessment
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-slate-800">
              Speak to a Security Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecuritySolutions;