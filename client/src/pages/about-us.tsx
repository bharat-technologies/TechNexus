import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - Bharat Technologies';
  }, []);

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">About Us</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12" data-aos="fade-up">
              <h2 className="font-poppins font-bold text-3xl mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Bharat Technologies was founded in 2015 with a vision to revolutionize the technology landscape in India and beyond. What started as a small team of passionate innovators has now grown into a global technology company with a presence in multiple countries.
              </p>
              <p className="text-lg">
                Our journey has been defined by our commitment to innovation, excellence, and customer satisfaction. We have consistently pushed the boundaries of what's possible, developing cutting-edge solutions that address complex challenges across industries.
              </p>
            </div>

            <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-poppins font-bold text-3xl mb-6">Our Mission</h2>
              <p className="text-lg">
                At Bharat Technologies, our mission is to empower organizations through innovative technology solutions that drive growth, efficiency, and competitive advantage. We aim to be at the forefront of technological advancement, creating products and services that shape the future.
              </p>
            </div>

            <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
              <h2 className="font-poppins font-bold text-3xl mb-6">Our Vision</h2>
              <p className="text-lg">
                To be a global leader in technology innovation, recognized for our excellence, integrity, and the transformative impact of our solutions on businesses and society.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h2 className="font-poppins font-bold text-3xl mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-poppins font-semibold text-xl mb-3">Innovation</h3>
                  <p>We embrace creativity and continuously seek new ways to solve problems and create value.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-poppins font-semibold text-xl mb-3">Excellence</h3>
                  <p>We are committed to delivering the highest quality in everything we do.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-poppins font-semibold text-xl mb-3">Integrity</h3>
                  <p>We conduct our business with honesty, transparency, and ethical standards.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-poppins font-semibold text-xl mb-3">Collaboration</h3>
                  <p>We believe in the power of teamwork and partnerships to achieve extraordinary results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
