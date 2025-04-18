import { Link } from 'wouter';
import { useContact } from '@/contexts/ContactContext';

const Footer = () => {
  const { openContactModal } = useContact();
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">About Us</h3>
            <p className="text-gray-300 mb-6">Bharat Technologies is at the forefront of technological innovation, providing cutting-edge solutions for businesses worldwide.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <div 
                  onClick={() => window.location.href = '/'}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >Home</div>
              </li>
              <li>
                <div 
                  onClick={() => window.location.href = '/about-us'}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >About</div>
              </li>
              <li>
                <div 
                  onClick={() => window.location.href = '/consulting'}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >Services</div>
              </li>
              <li>
                <div 
                  onClick={() => openContactModal('main')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >Contact</div>
              </li>
              <li>
                <div 
                  onClick={() => window.location.href = '/careers'}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >Careers</div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-black" />
              <button type="submit" className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-200 transition-colors duration-300">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bharat Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
