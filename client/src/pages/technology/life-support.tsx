import React from 'react';

export default function LifeSupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Life Support Technology</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Cutting-edge life support systems and technologies designed for critical environments, emergency response, and sustained operation in extreme conditions.
        </p>
      </div>

      {/* Hero section */}
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-8 rounded-xl shadow-sm mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Advanced Systems for Life-Critical Environments</h2>
          <p className="text-lg mb-6 text-gray-700">
            At Bharat Technologies, we develop sophisticated life support technologies that sustain human life in the most challenging environments—from emergency medical situations to extreme locations like deep-sea, high-altitude, and space. Our systems are designed with multiple redundancies and intelligent monitoring to ensure reliability when life depends on it.
          </p>
          <div className="flex justify-center">
            <a href="#solutions" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition duration-300">
              Explore Our Life Support Solutions
            </a>
          </div>
        </div>
      </div>

      {/* How Technology Enhances Life Support */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">How Technology Revolutionizes Life Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-lungs text-teal-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Respiratory Support</h3>
            <p className="text-gray-700">
              Micro-turbine ventilators and adaptive oxygenation systems automatically adjust to patient needs and environmental conditions, providing up to 96% more efficient oxygen delivery while reducing the risk of ventilator-induced lung injury.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-tint text-cyan-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Water Reclamation & Purification</h3>
            <p className="text-gray-700">
              Closed-loop systems recover up to 99.7% of water from waste, breath, and humidity using nano-filtration technology and UV sterilization, ensuring potable water in enclosed environments like spacecraft, submarines, and disaster shelters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-bolt text-emerald-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Power Management & Generation</h3>
            <p className="text-gray-700">
              Distributed power systems combine high-density batteries, fuel cells, and renewable sources with AI-driven load balancing to ensure critical life support never fails, providing 72+ hours of autonomous operation during infrastructure failures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-thermometer-half text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Environmental Control</h3>
            <p className="text-gray-700">
              Integrated thermal regulation systems maintain optimal temperature, humidity, and air composition in sealed habitats, using 40% less energy than conventional systems while adapting to occupant biometric feedback for personalized comfort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-heartbeat text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Portable Medical Support</h3>
            <p className="text-gray-700">
              Field-deployable medical pods contain miniaturized life support equipment that stabilizes critical patients in remote locations, wilderness areas, or disaster zones, extending the "golden hour" for treatment by up to 300% during evacuation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-microchip text-amber-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Intelligent Monitoring Systems</h3>
            <p className="text-gray-700">
              Distributed sensor arrays with edge AI processing continuously evaluate hundreds of environmental and physiological parameters, predicting potential failures or medical emergencies up to 45 minutes before traditional monitoring systems detect problems.
            </p>
          </div>
        </div>
      </div>

      {/* Our Life Support Solutions */}
      <div className="mb-16" id="solutions">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Life Support Technology Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">BharatLife™ Integrated Life Support System</h3>
            <p className="text-gray-700 mb-4">
              A comprehensive, modular life support platform designed for sustained human habitation in remote or hostile environments, from Antarctic research stations to future lunar bases.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Atmospheric management with CO₂ scrubbing and oxygen generation</li>
              <li>Water recovery and purification from multiple waste streams</li>
              <li>Waste processing and resource recovery systems</li>
              <li>Multi-layered safety redundancy with predictive maintenance</li>
              <li>Autonomous operation capabilities for up to 180 days</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">EmergencySphere™ Disaster Response System</h3>
            <p className="text-gray-700 mb-4">
              Rapidly deployable life support infrastructure for disaster zones that provides essential services to up to 500 people within hours of arrival.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Airdrop-capable, self-expanding shelter modules</li>
              <li>Potable water production from contaminated sources</li>
              <li>Medical-grade power generation and distribution</li>
              <li>Field hospital support with critical care capabilities</li>
              <li>Satellite communications and emergency coordination systems</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">AquaHabitat™ Underwater Life Support</h3>
            <p className="text-gray-700 mb-4">
              Specialized life support technology for underwater habitats, commercial diving operations, and submarine rescue missions, ensuring safety in high-pressure environments.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Hyperbaric atmospheric control and regulation</li>
              <li>Mixed-gas breathing systems with real-time optimization</li>
              <li>Airlocked modular extensions for underwater construction</li>
              <li>Decompression management and medical intervention systems</li>
              <li>High-durability construction for depths up to 500 meters</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">CriticalCare™ Transport System</h3>
            <p className="text-gray-700 mb-4">
              Advanced mobile intensive care units that maintain life support during long-distance medical evacuations by air, land, or sea, maintaining hospital-level care in transit.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Vibration-isolated patient containment with pressure regulation</li>
              <li>Autonomous ventilation with multi-modal backup systems</li>
              <li>Comprehensive monitoring and telemedicine capabilities</li>
              <li>Climate-controlled environment independent of external conditions</li>
              <li>Rapid deployment from standby in under 8 minutes</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">OrbitalLife™ Space Habitat Systems</h3>
            <p className="text-gray-700 mb-4">
              Next-generation environmental control and life support systems (ECLSS) for long-duration spaceflight, orbital habitats, and planetary bases, developed in partnership with ISRO.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Bioregenerative life support with integrated plant cultivation</li>
              <li>Radiation mitigation and solar storm sheltering</li>
              <li>Zero-g adapted medical care and emergency stabilization</li>
              <li>3D-printed replacement parts and adaptive manufacturing</li>
              <li>Psychological support systems for long-duration missions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">IndustrialSafe™ HAZMAT Response System</h3>
            <p className="text-gray-700 mb-4">
              Specialized life support technology for hazardous material environments, chemical spills, and industrial accidents, protecting both responders and affected civilians.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Chemical-resistant containment structures with positive pressure</li>
              <li>Multi-stage air filtration for toxic gases and particles</li>
              <li>Decontamination systems integrated with medical treatment</li>
              <li>Wireless vital monitoring through protective gear</li>
              <li>Extended-duration breathing apparatus with cooling systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Applications in Different Environments */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Applications Across Critical Environments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-hospital text-blue-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Medical Settings</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Critical care units with integrated monitoring</li>
              <li>Field hospitals in disaster response</li>
              <li>Infectious disease isolation facilities</li>
              <li>Medical evacuation vehicles and aircraft</li>
              <li>Organ preservation and transport systems</li>
              <li>Remote clinics in underserved regions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-globe-asia text-emerald-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Extreme Environments</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Antarctic and Arctic research stations</li>
              <li>High-altitude mountaineering and rescue</li>
              <li>Deep-sea habitats and diving operations</li>
              <li>Desert and remote exploration bases</li>
              <li>Underground mining safety and rescue</li>
              <li>Space stations and future planetary habitats</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-shield-alt text-amber-600 text-2xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Emergency Response</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Natural disaster relief operations</li>
              <li>Chemical, biological, and radiological incidents</li>
              <li>Mass casualty event management</li>
              <li>Submarine rescue and maritime emergencies</li>
              <li>Wildfire response and firefighter support</li>
              <li>Military medical evacuation and field care</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Advantages of Our Life Support Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-teal-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Reliability</h3>
            <p className="text-gray-700">
              99.997% uptime with multiple redundancy layers and fail-safe operation
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-tachometer-alt text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Efficiency</h3>
            <p className="text-gray-700">
              40-60% reduction in resource consumption compared to conventional systems
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-project-diagram text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Adaptability</h3>
            <p className="text-gray-700">
              Modular design allows for rapid reconfiguration and scaling to meet changing needs
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-robot text-amber-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Autonomy</h3>
            <p className="text-gray-700">
              AI-driven systems reduce human intervention requirements by up to 85%
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Success Story: Uttarakhand Disaster Response</h2>
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              When catastrophic flooding struck Uttarakhand in 2023, our EmergencySphere™ systems were deployed to provide critical life support for affected communities and first responders, resulting in:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Safe shelter and basic life support for 2,800+ displaced people</li>
              <li>Provision of 28,000+ liters of clean water daily from contaminated sources</li>
              <li>Field medical facilities that treated 430+ critical patients</li>
              <li>Uninterrupted power for essential communications and medical equipment</li>
              <li>Air quality management during periods of hazardous smoke and debris</li>
            </ul>
            <p className="text-gray-700 italic">
              "Bharat Technologies' life support systems were instrumental in our disaster response efforts. Their technology allowed us to establish stable relief centers in areas completely cut off from infrastructure, saving hundreds of lives in the critical first days."
              <span className="block mt-2">— Vikram Sharma, National Disaster Response Force Commander</span>
            </p>
          </div>
        </div>
      </div>

      {/* Research and Innovation Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Research & Innovation</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-6">
            Our Life Support Technology division maintains active research partnerships with leading institutions such as IIT Bombay, the Indian Space Research Organisation (ISRO), and the Defence Research and Development Organisation (DRDO). Current research initiatives include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Next-Generation Technologies</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Bioregenerative life support using genetically optimized algae</li>
                <li>Direct air electrochemical oxygen separation systems</li>
                <li>Solid-state refrigeration for medical supply preservation</li>
                <li>Radiation-hardened electronics for space and nuclear applications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Emerging Applications</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Urban disaster shelters integrated into existing infrastructure</li>
                <li>Autonomous medical response units for remote communities</li>
                <li>Climate adaptation habitats for regions facing extreme weather</li>
                <li>Sustainable long-term settlements for planetary exploration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm text-center max-w-lg">
          <h3 className="text-2xl font-bold mb-3">Support for Critical Operations</h3>
          <p className="mb-6">Contact our life support technology specialists to discuss your specific needs and how we can help ensure safety, sustainability, and survival in the most challenging environments.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition duration-300">Request Consultation</a>
            <a href="/technology/life-support/brochure" className="inline-block bg-white text-teal-600 border border-teal-600 px-6 py-3 rounded-full hover:bg-teal-50 transition duration-300">Download Technical Specifications</a>
          </div>
        </div>
      </div>
    </div>
  );
}