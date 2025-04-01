import { useEffect } from 'react';

const TeamMember = ({ name, position, bio, delay }: { name: string; position: string; bio: string; delay: number }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay={delay}>
    <div className="bg-gray-200 h-64 flex items-center justify-center">
      <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
      </svg>
    </div>
    <div className="p-6">
      <h3 className="font-poppins font-bold text-xl mb-1">{name}</h3>
      <p className="text-gray-600 mb-4">{position}</p>
      <p className="text-gray-800">{bio}</p>
    </div>
  </div>
);

const OurTeam = () => {
  useEffect(() => {
    document.title = 'Our Team - Bharat Technologies';
  }, []);

  const teamMembers = [
    {
      name: 'Rajiv Patel',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in the tech industry, Rajiv has led multiple successful ventures before founding Bharat Technologies.'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO',
      bio: 'Priya brings extensive expertise in AI and cloud technologies, having previously worked at leading global tech companies.'
    },
    {
      name: 'Vikram Singh',
      position: 'Head of AI Research',
      bio: 'A PhD in Computer Science, Vikram leads our innovative AI research initiatives with a focus on practical applications.'
    },
    {
      name: 'Ananya Desai',
      position: 'Chief Security Officer',
      bio: 'Ananya is an expert in cybersecurity with a strong background in protecting critical infrastructure against emerging threats.'
    },
    {
      name: 'Arjun Mehta',
      position: 'Head of Cloud Services',
      bio: 'Arjun has pioneered several cloud migration strategies that have become industry standards for large enterprises.'
    },
    {
      name: 'Neha Kapoor',
      position: 'Director of Operations',
      bio: 'Neha ensures that all our processes run smoothly, bringing efficiency and excellence to every project we undertake.'
    }
  ];

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Our Team</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Meet the experts behind Bharat Technologies' innovative solutions
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl text-center mb-12" data-aos="fade-up">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                position={member.position} 
                bio={member.bio} 
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="font-poppins font-bold text-3xl mb-6">Join Our Team</h2>
            <p className="text-lg mb-8">
              We're always looking for talented individuals who are passionate about technology and innovation. If you're interested in joining our team, check out our current openings.
            </p>
            <a href="/careers" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
              View Careers
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurTeam;
