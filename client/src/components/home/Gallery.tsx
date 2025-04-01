const Gallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16" data-aos="fade-up">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg relative group">
            <svg viewBox="0 0 400 300" className="w-full h-80" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#f5f5f5"/>
              <circle cx="200" cy="150" r="80" fill="#e0e0e0"/>
              <path d="M160 180C180 200 220 200 240 180" stroke="#333" strokeWidth="2"/>
              <circle cx="160" cy="120" r="10" fill="#333"/>
              <circle cx="240" cy="120" r="10" fill="#333"/>
              <path d="M140 220C160 240 240 240 260 220" stroke="#333" strokeWidth="3"/>
              <path d="M120 100L160 120M280 100L240 120" stroke="#333" strokeWidth="2"/>
              <rect x="150" y="60" width="100" height="30" rx="5" fill="#333"/>
              <rect x="170" y="30" width="60" height="30" rx="5" fill="#333"/>
            </svg>
            <div className="gallery-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-6 opacity-0 transition-opacity duration-500">
              <h3 className="font-poppins font-semibold text-xl mb-2">AI in Agriculture</h3>
              <p className="text-center">Revolutionizing farming with AI technology</p>
            </div>
          </div>
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg relative group">
            <svg viewBox="0 0 400 300" className="w-full h-80" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#f5f5f5"/>
              <rect x="100" y="80" width="200" height="140" rx="10" fill="#e0e0e0"/>
              <rect x="120" y="100" width="160" height="100" rx="5" fill="#333"/>
              <circle cx="200" cy="240" r="10" fill="#333"/>
              <rect x="195" y="230" width="10" height="20" fill="#333"/>
              <path d="M140 120L160 140L140 160" stroke="white" strokeWidth="2"/>
              <path d="M180 140H220" stroke="white" strokeWidth="2"/>
              <path d="M260 120L240 140L260 160" stroke="white" strokeWidth="2"/>
            </svg>
            <div className="gallery-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-6 opacity-0 transition-opacity duration-500">
              <h3 className="font-poppins font-semibold text-xl mb-2">Smart Solutions</h3>
              <p className="text-center">Intelligent systems for modern businesses</p>
            </div>
          </div>
          <div className="gallery-item overflow-hidden rounded-lg shadow-lg relative group">
            <svg viewBox="0 0 400 300" className="w-full h-80" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#f5f5f5"/>
              <path d="M200 50V250" stroke="#333" strokeWidth="3"/>
              <path d="M150 70L200 50L250 70" stroke="#333" strokeWidth="2"/>
              <path d="M150 230L200 250L250 230" stroke="#333" strokeWidth="2"/>
              <circle cx="200" cy="150" r="60" fill="#e0e0e0" stroke="#333" strokeWidth="2"/>
              <path d="M180 130L200 150L220 130" stroke="#333" strokeWidth="2"/>
              <path d="M180 170L200 150L220 170" stroke="#333" strokeWidth="2"/>
              <path d="M140 150C140 122.386 162.386 100 190 100H210C237.614 100 260 122.386 260 150C260 177.614 237.614 200 210 200H190C162.386 200 140 177.614 140 150Z" stroke="#333" strokeWidth="2" fill="none"/>
            </svg>
            <div className="gallery-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-6 opacity-0 transition-opacity duration-500">
              <h3 className="font-poppins font-semibold text-xl mb-2">Future Tech</h3>
              <p className="text-center">Pioneering the future of technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
