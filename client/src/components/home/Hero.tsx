import { Link } from 'wouter';

const Hero = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-up">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Welcome to<br/>Bharat Technologies</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">Innovating the future with cutting-edge technology solutions.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about-us">
                <a className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">Learn More</a>
              </Link>
              <Link href="/#contact">
                <a className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300">Get Started</a>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <svg 
              className="w-full h-auto" 
              viewBox="0 0 400 300" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="400" height="300" rx="10" fill="#101010"/>
              <circle cx="200" cy="150" r="80" fill="#151515"/>
              <path d="M170 100V200M230 100V200" stroke="white" strokeWidth="2"/>
              <path d="M150 150H250" stroke="white" strokeWidth="2"/>
              <circle cx="170" cy="130" r="5" fill="white"/>
              <circle cx="170" cy="170" r="5" fill="white"/>
              <circle cx="230" cy="130" r="5" fill="white"/>
              <circle cx="230" cy="170" r="5" fill="white"/>
              <path d="M250 120C270 130 270 170 250 180" stroke="white" strokeWidth="2"/>
              <path d="M150 120C130 130 130 170 150 180" stroke="white" strokeWidth="2"/>
              <path d="M180 90C190 80 210 80 220 90" stroke="white" strokeWidth="2"/>
              <path d="M180 210C190 220 210 220 220 210" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
