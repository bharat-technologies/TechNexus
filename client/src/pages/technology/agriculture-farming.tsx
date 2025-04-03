import React from 'react';
import PrecisionFarmingIllustration from '@/components/agriculture/PrecisionFarmingIllustration';
import DataAnalyticsIllustration from '@/components/agriculture/DataAnalyticsIllustration';
import SmartIrrigationIllustration from '@/components/agriculture/SmartIrrigationIllustration';
import farmerTechImage from '../../assets/farmer_tech.png';

export default function AgricultureFarmingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Agriculture & Farming Technology</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Cutting-edge solutions to revolutionize agriculture and farming practices for improved efficiency, sustainability, and productivity.
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl shadow-sm mb-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Transforming Agriculture with Technology</h2>
            <p className="text-lg mb-6 text-gray-700">
              At Bharat Technologies, we're committed to empowering farmers with innovative technology solutions that increase yields, reduce costs, and promote sustainable farming practices. Our advanced agricultural technologies blend traditional farming wisdom with cutting-edge innovation.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="#solutions" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                Explore Our Solutions
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={farmerTechImage} alt="Indian farmer with technology" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Precision Farming Illustration */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <PrecisionFarmingIllustration />
          </div>
          <p className="text-sm text-center text-gray-500 mt-3">Precision farming uses GPS-guided equipment and satellite imagery to optimize farm operations</p>
        </div>
      </div>

      {/* How Technology Helps Farming Section */}
      <div className="mb-16" id="how-technology-helps">
        <h2 className="text-3xl font-bold mb-10 text-center">How Technology Revolutionizes Agriculture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-tractor text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Precision Farming</h3>
            <p className="text-gray-700">
              Utilize GPS-guided tractors, drones, and IoT sensors to manage fields with centimeter-level accuracy, optimizing seed placement, irrigation, and fertilizer application to minimize waste and maximize yields.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-cloud-rain text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Irrigation</h3>
            <p className="text-gray-700">
              Deploy automated irrigation systems that respond to real-time soil moisture data, weather forecasts, and crop water requirements, reducing water usage by up to 30% while improving crop health.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-microscope text-amber-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Soil Analysis & Monitoring</h3>
            <p className="text-gray-700">
              Use advanced sensors and AI-powered analysis to continuously monitor soil health, nutrient levels, and microbial activity, enabling targeted interventions that improve soil quality and sustainability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-robot text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Agricultural Robotics</h3>
            <p className="text-gray-700">
              Implement autonomous robots for planting, weeding, harvesting, and sorting, reducing labor costs and addressing worker shortages while improving efficiency and precision.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-bug text-red-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Pest & Disease Management</h3>
            <p className="text-gray-700">
              Employ AI-powered image recognition systems that identify pest infestations and plant diseases early, enabling targeted treatments that reduce chemical use and crop losses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Data-Driven Decisions</h3>
            <p className="text-gray-700">
              Access comprehensive farm management platforms that integrate data from multiple sources, providing actionable insights that help farmers make informed decisions about planting, harvesting, and market timing.
            </p>
          </div>
        </div>
      </div>

      {/* Data Analytics Illustration */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <DataAnalyticsIllustration />
          </div>
          <p className="text-sm text-center text-gray-500 mt-3">Farm analytics dashboard providing real-time insights and predictive models</p>
        </div>
      </div>

      {/* Our Solutions Section */}
      <div className="mb-16" id="solutions">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Agricultural Technology Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">BharatFarm™ Integrated Management System</h3>
            <p className="text-gray-700 mb-4">
              A comprehensive digital platform that connects all aspects of farm operations—from field monitoring to supply chain management—providing real-time data and analytics to optimize productivity and profitability.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Real-time monitoring of crops, soil, and equipment</li>
              <li>Predictive analytics for crop yields and market conditions</li>
              <li>Integration with weather services and satellite imagery</li>
              <li>Mobile access for management on the go</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">AgroSense™ IoT Network</h3>
            <p className="text-gray-700 mb-4">
              A network of wireless sensors deployed throughout your fields that continuously monitors critical environmental factors and transmits data to your management dashboard.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Soil moisture, temperature, and nutrient sensors</li>
              <li>Weather stations for microclimate monitoring</li>
              <li>Crop growth and health monitoring</li>
              <li>Early detection of irrigation issues or pest threats</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">HarvestBot™ Autonomous Harvesting</h3>
            <p className="text-gray-700 mb-4">
              Robotic harvesting systems that use computer vision and precise mechanics to identify and collect ripe produce, reducing labor costs and harvest losses.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Gentle handling to prevent produce damage</li>
              <li>24/7 operation capability during harvest season</li>
              <li>Selective harvesting based on ripeness</li>
              <li>Real-time yield data collection</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-3">FarmChain™ Supply Chain Solution</h3>
            <p className="text-gray-700 mb-4">
              Blockchain-based tracking system that creates a transparent record of your produce from field to market, verifying sustainable practices and enhancing value.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>QR code tracking for consumers</li>
              <li>Certification of organic or sustainable practices</li>
              <li>Streamlined compliance documentation</li>
              <li>Direct-to-consumer marketing opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Smart Irrigation Illustration */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <SmartIrrigationIllustration />
          </div>
          <p className="text-sm text-center text-gray-500 mt-3">Smart irrigation systems minimize water usage while optimizing crop health</p>
        </div>
      </div>
        
      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Benefits for Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-seedling text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Increased Yields</h3>
            <p className="text-gray-700">
              15-30% higher crop yields through optimized growing conditions and reduced losses
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-coins text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Reduced Costs</h3>
            <p className="text-gray-700">
              Save up to 25% on water, fertilizer, and pesticide expenses
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-leaf text-amber-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-700">
              Minimize environmental impact while improving long-term soil health
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Time Savings</h3>
            <p className="text-gray-700">
              Automation reduces manual labor requirements by up to 50%
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Success Story: Punjab Wheat Farm</h2>
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              A 500-acre wheat farm in Punjab implemented our BharatFarm™ Integrated Management System and AgroSense™ IoT Network, resulting in:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>22% increase in wheat yield in the first season</li>
              <li>31% reduction in water consumption</li>
              <li>18% decrease in fertilizer usage</li>
              <li>Improved grain quality commanding premium market prices</li>
              <li>ROI achieved within 18 months of implementation</li>
            </ul>
            <p className="text-gray-700 italic">
              "Bharat Technologies' farming solutions have transformed our operation. We're producing more wheat while using fewer resources, and our profit margins have never been better."
              <span className="block mt-2">— Rajinder Singh, Farm Owner</span>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm text-center max-w-lg">
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Farm?</h3>
          <p className="mb-6">Contact our agriculture technology specialists to discuss your specific needs and how we can help optimize your agricultural operations for better yields, lower costs, and sustainable growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">Request Consultation</a>
            <a href="/technology/agriculture-farming/brochure" className="inline-block bg-white text-black border border-black px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">Download Brochure</a>
          </div>
        </div>
      </div>
    </div>
  );
}