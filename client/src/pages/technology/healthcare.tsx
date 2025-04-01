import React from 'react';

export default function HealthcarePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Healthcare Technology</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Advanced healthcare technology solutions designed to improve patient care, optimize hospital operations, and enhance medical research capabilities.
        </p>
      </div>

      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Transforming Healthcare Through Innovation</h2>
          <p className="text-lg mb-6 text-gray-700">
            At Bharat Technologies, we're committed to developing cutting-edge technology solutions that empower healthcare providers, improve patient outcomes, and make quality healthcare more accessible to all. Our advanced healthcare technologies combine medical expertise with innovative engineering to address the most pressing challenges in modern healthcare.
          </p>
          <div className="flex justify-center">
            <a href="#solutions" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
              Explore Our Healthcare Solutions
            </a>
          </div>
        </div>
      </div>

      {/* How Technology is Revolutionizing Healthcare */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">How Technology Transforms Healthcare</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-heartbeat text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Remote Patient Monitoring</h3>
            <p className="text-gray-700">
              Wearable devices and IoT sensors continuously track vital signs and health metrics, allowing healthcare providers to monitor patients remotely and intervene before conditions worsen, reducing hospital readmissions by up to 40%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-brain text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Diagnostics</h3>
            <p className="text-gray-700">
              Machine learning algorithms analyze medical images and patient data to detect conditions like cancer, diabetic retinopathy, and neurological disorders with accuracy rates exceeding 95%, enabling earlier intervention and improved treatment outcomes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-dna text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Medicine</h3>
            <p className="text-gray-700">
              Genomic sequencing and advanced analytics enable customized treatment plans based on patients' genetic profiles, significantly improving efficacy and reducing adverse reactions to medications by targeting therapies to individual biological characteristics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-robot text-red-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Robotic Surgery</h3>
            <p className="text-gray-700">
              Surgical robots provide enhanced precision, flexibility, and control for complex procedures, resulting in smaller incisions, less pain, faster recovery times, and reduced risk of complications compared to traditional open surgeries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-vr-cardboard text-orange-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">VR/AR Applications</h3>
            <p className="text-gray-700">
              Virtual and augmented reality technologies provide immersive environments for medical training, patient education, pain management, and treatment of psychological conditions like PTSD and phobias, offering new therapeutic approaches without medication.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-hospital-user text-teal-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Integrated Health Systems</h3>
            <p className="text-gray-700">
              Digital platforms connect disparate healthcare providers, allowing seamless sharing of patient records, test results, and treatment plans, reducing duplicate tests by 35% and medication errors by 50% while improving coordination of care.
            </p>
          </div>
        </div>
      </div>

      {/* Our Healthcare Technology Solutions */}
      <div className="mb-16" id="solutions">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Healthcare Technology Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">BharatHealth™ Integrated Platform</h3>
            <p className="text-gray-700 mb-4">
              A comprehensive healthcare information system that connects all aspects of patient care—from electronic medical records to diagnostic imaging, billing, and telemedicine—into a seamless, secure platform.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>HIPAA-compliant cloud-based architecture</li>
              <li>Real-time clinical decision support</li>
              <li>Intelligent scheduling and resource allocation</li>
              <li>Advanced security with biometric authentication</li>
              <li>Multi-language support for diverse patient populations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">HealthSense™ IoT Ecosystem</h3>
            <p className="text-gray-700 mb-4">
              A network of connected medical devices and sensors that monitor patient health metrics and environmental conditions, providing continuous data streams to healthcare providers.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Non-invasive vital sign monitoring</li>
              <li>Fall detection and emergency response</li>
              <li>Medication adherence tracking</li>
              <li>Indoor air quality monitoring for infection control</li>
              <li>Seamless integration with electronic health records</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">DiagnosAI™ Intelligent Imaging</h3>
            <p className="text-gray-700 mb-4">
              AI-powered medical imaging analysis that helps radiologists detect abnormalities faster and with greater accuracy across a wide range of modalities including X-ray, CT, MRI, and ultrasound.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Automatic detection of critical findings</li>
              <li>Quantitative measurement and tracking of changes</li>
              <li>90% reduction in false negatives for early-stage cancers</li>
              <li>GPU-accelerated processing for real-time analysis</li>
              <li>Continuous learning from verified diagnoses</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">TeleHealth Plus™ Platform</h3>
            <p className="text-gray-700 mb-4">
              An advanced telemedicine solution that enables secure video consultations, remote diagnostics, and virtual care coordination for patients regardless of location.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Ultra-low bandwidth operation for rural connectivity</li>
              <li>Integration with diagnostic peripherals</li>
              <li>AI-assisted preliminary assessments</li>
              <li>Automated appointment scheduling and follow-ups</li>
              <li>Built-in language translation for 30+ languages</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">MediTrack™ Supply Chain System</h3>
            <p className="text-gray-700 mb-4">
              Blockchain-based tracking system for pharmaceutical and medical supplies that ensures authenticity, monitors temperature-sensitive items, and prevents counterfeit products.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>End-to-end visibility from manufacturer to patient</li>
              <li>Real-time temperature and humidity monitoring</li>
              <li>Automated inventory management and reordering</li>
              <li>Immutable record of custody for regulatory compliance</li>
              <li>Serialization and anti-counterfeit verification</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">Virtual Rehabilitation System</h3>
            <p className="text-gray-700 mb-4">
              An immersive VR platform for physical and cognitive rehabilitation that combines engaging therapeutic exercises with precise motion tracking and progress monitoring.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Gamified therapy for increased patient engagement</li>
              <li>Real-time feedback on movement quality</li>
              <li>Remote therapist supervision capabilities</li>
              <li>Adaptive difficulty based on patient progress</li>
              <li>Comprehensive analytics for clinical documentation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Benefits section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Benefits of Healthcare Technology</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-user-md text-blue-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">For Healthcare Providers</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Reduced administrative burden</li>
              <li>Enhanced diagnostic accuracy</li>
              <li>Optimized resource allocation</li>
              <li>Improved clinical decision-making</li>
              <li>Better coordination across care teams</li>
              <li>Reduced burnout through automation</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-user text-green-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">For Patients</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>More accurate diagnoses</li>
              <li>Personalized treatment plans</li>
              <li>Reduced wait times</li>
              <li>Easier access to specialists</li>
              <li>Better management of chronic conditions</li>
              <li>Greater involvement in care decisions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-hospital text-purple-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">For Healthcare Systems</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>25-30% reduction in operational costs</li>
              <li>Improved resource utilization</li>
              <li>Enhanced regulatory compliance</li>
              <li>Reduced readmission rates</li>
              <li>Better population health management</li>
              <li>Data-driven strategic planning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Success Story: AIIMS New Delhi</h2>
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              The All India Institute of Medical Sciences (AIIMS) implemented our BharatHealth™ Integrated Platform and DiagnosAI™ Intelligent Imaging system, resulting in:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>42% reduction in diagnostic reporting times</li>
              <li>26% increase in early detection of serious conditions</li>
              <li>35% improvement in operating room utilization</li>
              <li>68% decrease in medication errors</li>
              <li>18% reduction in average length of stay</li>
            </ul>
            <p className="text-gray-700 italic">
              "Bharat Technologies' healthcare solutions have transformed our operations at AIIMS. We're diagnosing conditions earlier, treating patients more effectively, and managing our resources more efficiently than ever before."
              <span className="block mt-2">— Dr. Rajesh Kumar, Medical Director</span>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm text-center max-w-lg">
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Healthcare?</h3>
          <p className="mb-6">Contact our healthcare technology specialists to discuss your specific needs and how we can help optimize your healthcare operations for better patient outcomes and operational excellence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">Request Consultation</a>
            <a href="/technology/healthcare/brochure" className="inline-block bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition duration-300">Download Brochure</a>
          </div>
        </div>
      </div>
    </div>
  );
}