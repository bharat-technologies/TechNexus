import { useEffect } from 'react';
import { Link } from 'wouter';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const JobListing = ({ job, index }: { job: JobPosition; index: number }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
    <div className="p-6">
      <h3 className="font-poppins font-bold text-xl mb-2">{job.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.department}</span>
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.location}</span>
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.type}</span>
      </div>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <Link href={`#job-${index}`}>
        <a className="inline-block bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
          Apply Now
        </a>
      </Link>
    </div>
  </div>
);

const Careers = () => {
  useEffect(() => {
    document.title = 'Careers - Bharat Technologies';
  }, []);

  const jobPositions: JobPosition[] = [
    {
      title: 'Senior AI Engineer',
      department: 'Artificial Intelligence',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'We are looking for an experienced AI Engineer to join our team and help develop cutting-edge AI solutions for our clients.'
    },
    {
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our cloud team to design and implement scalable, high-performance cloud infrastructure for enterprise clients.'
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Help protect our clients from cyber threats by identifying vulnerabilities and implementing security measures.'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Create intuitive and responsive user interfaces for our web applications using modern frontend technologies.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Lead the development of innovative products from conception to launch, working closely with engineering and design teams.'
    },
    {
      title: 'Technical Writer',
      department: 'Documentation',
      location: 'Remote',
      type: 'Part-time',
      description: 'Create clear, concise technical documentation for our products and services.'
    }
  ];

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Careers</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Join our team of innovators and help shape the future of technology
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl mb-6" data-aos="fade-up">Why Join Bharat Technologies?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-poppins font-semibold text-xl mb-3">Innovation</h3>
                <p>Work on cutting-edge technologies that are shaping the future. We encourage creative thinking and provide resources to turn innovative ideas into reality.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-poppins font-semibold text-xl mb-3">Growth</h3>
                <p>We invest in our employees' professional development through training programs, conference attendance, and mentorship opportunities.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-poppins font-semibold text-xl mb-3">Impact</h3>
                <p>Your work will directly impact businesses and industries across the globe, helping them transform through technology.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-poppins font-semibold text-xl mb-3">Culture</h3>
                <p>Join a diverse, inclusive workplace where collaboration, respect, and work-life balance are core values.</p>
              </div>
            </div>
          </div>

          <h2 className="font-poppins font-bold text-3xl mb-8 text-center" data-aos="fade-up">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {jobPositions.map((job, index) => (
              <JobListing key={index} job={job} index={index} />
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <p className="text-lg mb-4">Don't see a position that matches your skills?</p>
            <a href="#contact" className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
