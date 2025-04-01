import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Gallery from '@/components/home/Gallery';
import Contact from '@/components/home/Contact';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Bharat Technologies - Home';
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Home;
