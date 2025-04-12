import { ArrowRight, Building, HeartPulse, Droplet, Factory, Zap, Globe, Database, Briefcase, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from 'react';
import { Link } from 'wouter';
import futureTechImage from '@assets/Future-Tech_01.png';

const AllIndustriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industryCards = [
    {
      title: "Banking",
      icon: <Database className="h-8 w-8 text-blue-600" />,
      description: "Digital banking solutions that transform financial services with secure, efficient platforms for payments, lending, and customer engagement.",
      textColorClass: "text-blue-600",
      hoverColorClass: "hover:text-blue-800",
      bgColorClass: "bg-blue-100",
      borderColorClass: "border-t-blue-500",
      path: "/solutions/banking"
    },
    {
      title: "Insurance",
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
      description: "Technology solutions for insurers, enhancing risk assessment, claims processing, and customer experiences through AI and analytics.",
      textColorClass: "text-indigo-600",
      hoverColorClass: "hover:text-indigo-800",
      bgColorClass: "bg-indigo-100",
      borderColorClass: "border-t-indigo-500",
      path: "/solutions/insurance"
    },
    {
      title: "Healthcare",
      icon: <HeartPulse className="h-8 w-8 text-teal-600" />,
      description: "Digital healthcare platforms that improve patient care, streamline operations, and enable telemedicine and remote monitoring.",
      textColorClass: "text-teal-600",
      hoverColorClass: "hover:text-teal-800",
      bgColorClass: "bg-teal-100",
      borderColorClass: "border-t-teal-500",
      path: "/solutions/healthcare"
    },
    {
      title: "Oil & Gas",
      icon: <Droplet className="h-8 w-8 text-blue-600" />,
      description: "Advanced solutions for exploration, production, and distribution optimization, with predictive maintenance and environmental monitoring.",
      textColorClass: "text-blue-600",
      hoverColorClass: "hover:text-blue-800",
      bgColorClass: "bg-blue-100",
      borderColorClass: "border-t-blue-500",
      path: "/solutions/oil-gas"
    },
    {
      title: "Industrial Manufacturing",
      icon: <Factory className="h-8 w-8 text-slate-600" />,
      description: "Industry 4.0 technologies for smart factories, connected operations, and automated processes that enhance efficiency and quality.",
      textColorClass: "text-slate-600",
      hoverColorClass: "hover:text-slate-800",
      bgColorClass: "bg-slate-100",
      borderColorClass: "border-t-slate-500",
      path: "/solutions/industrial-manufacturing"
    },
    {
      title: "Public Sector",
      icon: <Building className="h-8 w-8 text-gray-600" />,
      description: "Digital government solutions that enhance citizen services, streamline operations, and enable secure, efficient public administration.",
      textColorClass: "text-gray-600",
      hoverColorClass: "hover:text-gray-800",
      bgColorClass: "bg-gray-100",
      borderColorClass: "border-t-gray-500",
      path: "/solutions/public-sector"
    },
    {
      title: "Utilities",
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      description: "Smart grid and utility management systems that optimize energy and water distribution while enhancing reliability and sustainability.",
      textColorClass: "text-emerald-600",
      hoverColorClass: "hover:text-emerald-800",
      bgColorClass: "bg-emerald-100",
      borderColorClass: "border-t-emerald-500",
      path: "/solutions/utilities"
    },
    {
      title: "Education",
      icon: <FileText className="h-8 w-8 text-amber-600" />,
      description: "Digital learning platforms and educational management systems that transform teaching, learning, and educational administration.",
      textColorClass: "text-amber-600",
      hoverColorClass: "hover:text-amber-800",
      bgColorClass: "bg-amber-100",
      borderColorClass: "border-t-amber-500",
      path: "/solutions/education"
    },
    {
      title: "Retail & E-commerce",
      icon: <Globe className="h-8 w-8 text-pink-600" />,
      description: "Omnichannel commerce solutions that enhance customer experiences, optimize inventory, and enable personalized marketing strategies.",
      textColorClass: "text-pink-600",
      hoverColorClass: "hover:text-pink-800",
      bgColorClass: "bg-pink-100",
      borderColorClass: "border-t-pink-500",
      path: "/solutions/retail"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industry Solutions</h1>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Bharat Technologies delivers specialized technology solutions across industries, applying deep domain expertise to solve the unique challenges of each sector with innovative digital technologies.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-black hover:bg-gray-800">
                Schedule Industry Consultation
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                Download Industry Insights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCards.map((industry, index) => {
              return (
                <Card 
                  key={index} 
                  className={`shadow-lg hover:shadow-xl transition-all border-t-4 ${industry.borderColorClass}`}
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-6">
                    <div className={`${industry.bgColorClass} p-3 rounded-full w-fit mb-4`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {industry.description}
                    </p>
                    <div 
                      onClick={() => window.location.href = industry.path} 
                      className={`inline-flex items-center cursor-pointer ${industry.textColorClass} ${industry.hoverColorClass}`}
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Can't Find Your Industry?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Every industry has unique challenges and opportunities. Our team of technology experts works closely with businesses in all sectors to develop customized solutions that address specific needs and unlock digital potential.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Contact our industry specialists to discuss how we can help your organization leverage cutting-edge technology to transform operations, enhance customer experiences, and drive innovation in your specific sector.
              </p>
              <Button className="bg-black hover:bg-gray-800">
                Request Custom Industry Consultation
              </Button>
            </div>
            <div data-aos="fade-left">
              <img 
                src={futureTechImage} 
                alt="Custom Industry Solutions" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with Bharat Technologies to implement cutting-edge solutions tailored to your industry's unique challenges and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button className="bg-white text-black hover:bg-gray-50">
              Schedule a Consultation
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

export default AllIndustriesPage;