import { useEffect } from 'react';

const AiIntelligence = () => {
  useEffect(() => {
    document.title = 'Artificial Human Intelligence - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Artificial Human Intelligence</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Advancing human potential through intelligent technology
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="font-poppins font-bold text-3xl mb-6">Human-Centered AI Solutions</h2>
              <p className="text-lg mb-4">
                At Bharat Technologies, we're pioneering a new approach to artificial intelligence that puts humans at the center. Our AI systems are designed to augment human capabilities, not replace them.
              </p>
              <p className="text-lg">
                By combining advanced machine learning with deep understanding of human cognitive processes, we create AI solutions that work with people in intuitive, natural ways, enhancing productivity, creativity, and decision-making.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <circle cx="300" cy="200" r="150" fill="#e0e0e0"></circle>
                <path d="M200 200C200 150 250 100 300 100C350 100 400 150 400 200C400 250 350 300 300 300C250 300 200 250 200 200Z" stroke="#333" fill="none" strokeWidth="2"></path>
                <path d="M225 175C225 160 250 145 275 145C300 145 325 160 325 175" stroke="#333" strokeWidth="2"></path>
                <path d="M275 175C275 160 300 145 325 145C350 145 375 160 375 175" stroke="#333" strokeWidth="2"></path>
                <circle cx="250" cy="175" r="10" fill="#333"></circle>
                <circle cx="350" cy="175" r="10" fill="#333"></circle>
                <path d="M275 230C275 230 300 250 325 230" stroke="#333" strokeWidth="2"></path>
                <path d="M225 145L250 175" stroke="#333" strokeWidth="2"></path>
                <path d="M375 145L350 175" stroke="#333" strokeWidth="2"></path>
                <rect x="275" y="100" width="50" height="20" rx="5" fill="#333"></rect>
              </svg>
            </div>
          </div>

          <div className="mb-20" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Our AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Natural Language Processing</h3>
                <p className="text-gray-600">Advanced language understanding and generation capabilities that enable more natural human-computer interaction.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Computer Vision</h3>
                <p className="text-gray-600">Visual perception systems that can analyze and understand images and video with human-like accuracy.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-4xl text-black mb-6">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-4">Predictive Analytics</h3>
                <p className="text-gray-600">AI-powered forecasting tools that help businesses anticipate trends and make data-driven decisions.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="font-poppins font-bold text-3xl mb-6">Ethical AI Development</h2>
              <p className="text-lg mb-4">
                We believe in developing AI systems that are transparent, fair, and accountable. Our ethical framework guides all our AI projects, ensuring that our solutions respect privacy, reduce bias, and operate with clear oversight.
              </p>
              <p className="text-lg">
                By prioritizing ethical considerations from the earliest stages of development, we create AI systems that users can trust and that benefit society as a whole.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <svg className="w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#f5f5f5" rx="10"></rect>
                <rect x="100" y="100" width="400" height="200" fill="#e0e0e0" rx="10"></rect>
                <line x1="100" y1="150" x2="500" y2="150" stroke="#333" strokeWidth="2"></line>
                <line x1="100" y1="200" x2="500" y2="200" stroke="#333" strokeWidth="2"></line>
                <line x1="100" y1="250" x2="500" y2="250" stroke="#333" strokeWidth="2"></line>
                <circle cx="150" cy="150" r="15" fill="#333"></circle>
                <circle cx="250" cy="200" r="15" fill="#333"></circle>
                <circle cx="350" cy="250" r="15" fill="#333"></circle>
                <rect x="450" y="125" width="30" height="50" rx="5" fill="#333"></rect>
                <rect x="450" y="175" width="30" height="50" rx="5" fill="#333"></rect>
                <rect x="450" y="225" width="30" height="50" rx="5" fill="#333"></rect>
              </svg>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-8">Ready to Explore AI Solutions?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Discover how our AI technologies can transform your business and help you stay ahead in the digital era.
            </p>
            <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
              Contact Our AI Experts
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiIntelligence;
