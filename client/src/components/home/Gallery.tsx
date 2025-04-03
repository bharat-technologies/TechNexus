import farmerTechImage from '../../assets/farmer_tech.png';
import smartSolutionsImage from '../../assets/Smart_Solutions_01.png';
import futureTechImage from '../../assets/Future-Tech_01.png';
import cybersecurityImage from '../../assets/cybersecurity.png';
import healthcareImage from '../../assets/healthcare.png';
import defenceImage from '../../assets/defence.png';
import spaceImage from '../../assets/space.png';

const Gallery = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16 mt-4" data-aos="fade-up">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8" data-aos="fade-up" data-aos-delay="200">
          
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
          
          {/* Cyber Security Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-96 px-0 py-0 bg-red-50 overflow-hidden">
              <img src={cybersecurityImage} alt="Cybersecurity technology with robot hand" className="w-full h-full object-fill" />
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-red-800">Cyber Security</h3>
              <p className="text-gray-700">Advanced protection for critical data and systems</p>
              <div className="mt-4">
                <a href="/cyber-security" className="text-red-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Healthcare Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-96 px-0 py-0 bg-indigo-50 overflow-hidden">
              <img src={healthcareImage} alt="Healthcare AI technology with robotic hand" className="w-full h-full object-fill" />
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-indigo-800">Healthcare</h3>
              <p className="text-gray-700">AI-powered solutions for better patient care</p>
              <div className="mt-4">
                <a href="/technology/healthcare" className="text-indigo-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Defence Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-96 px-0 py-0 bg-gray-50 overflow-hidden">
              <img src={defenceImage} alt="Defence technology with AI integration" className="w-full h-full object-fill" />
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-gray-800">Defence</h3>
              <p className="text-gray-700">Intelligent systems for national security</p>
              <div className="mt-4">
                <a href="/defence" className="text-gray-600 font-medium text-sm inline-flex items-center">
                  Explore Solutions <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Space Card */}
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-full h-96 px-0 py-0 bg-blue-50 overflow-hidden">
              <img src={spaceImage} alt="Space technology with data analysis" className="w-full h-full object-fill" />
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="font-poppins font-semibold text-xl mb-2 text-blue-800">Space</h3>
              <p className="text-gray-700">Advanced data analysis for space exploration</p>
              <div className="mt-4">
                <a href="/solutions/space" className="text-blue-600 font-medium text-sm inline-flex items-center">
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
