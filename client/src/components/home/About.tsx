const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-16" data-aos="fade-up">About Us</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="200">
          We specialize in AI, cloud, cybersecurity, and space technologies to shape a better future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-4xl text-black mb-6">
              <i className="fas fa-robot"></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-4">AI Solutions</h3>
            <p className="text-gray-600">Advanced artificial intelligence solutions for modern businesses</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-4xl text-black mb-6">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Cyber Security</h3>
            <p className="text-gray-600">Protecting your digital assets with cutting-edge security</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-4xl text-black mb-6">
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl mb-4">Cloud Services</h3>
            <p className="text-gray-600">Scalable cloud solutions for growing enterprises</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
