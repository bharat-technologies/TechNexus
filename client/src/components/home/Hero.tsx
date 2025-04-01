import { Link } from 'wouter';
import HumanAICollaboration from './HumanAICollaboration';

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
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
            <div className="w-full max-w-lg">
              <HumanAICollaboration size={600} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
