import farmerTechImage from '../../assets/farmer_tech.png';
import smartSolutionsImage from '../../assets/Smart_Solutions_01.png';
import futureTechImage from '../../assets/Future-Tech_01.png';

const Gallery = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16 mt-4" data-aos="fade-up">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          
          {/* AI in Agriculture Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-96 px-0 py-0 bg-cyan-50 overflow-hidden">
              <img src={farmerTechImage} alt="Farmer using technology in a field" className="w-full h-full object-fill" />
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-green-800">AI in Agriculture</h3>
              <p className="text-gray-700">Revolutionizing farming with AI technology</p>
              <div className="mt-4">
                <a href="/technology/agriculture-farming" className="text-green-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Smart Solutions Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-96 px-0 py-0 bg-blue-50 overflow-hidden">
              <img src={smartSolutionsImage} alt="Business professional using smart solutions" className="w-full h-full object-fill" />
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-blue-800">Smart Solutions</h3>
              <p className="text-gray-700">Intelligent systems for modern businesses</p>
              <div className="mt-4">
                <a href="/ai-intelligence" className="text-blue-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Future Tech Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-96 px-0 py-0 bg-purple-50 overflow-hidden">
              <img src={futureTechImage} alt="Future technology with woman in purple blazer" className="w-full h-full object-fill" />
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-purple-800">Future Tech</h3>
              <p className="text-gray-700">Pioneering the future of technology</p>
              <div className="mt-4">
                <a href="/development" className="text-purple-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;
