import pfl1 from "../../assets/HomeImages/pfl1.jpg";
import pfl2 from "../../assets/HomeImages/pfl2.jpg";
import index31 from "../../assets/HomeImages/index31.jpg";
import group3 from "../../assets/HomeImages/group3.png";
import pfllogo from "../../assets/HomeImages/pfllogo.png";
import gropu43 from "../../assets/HomeImages/gropu43.png";
import {
  TruckIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  EyeIcon,
  StarIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid';

const features = [
  { title: "On-Time Delivery", desc: "Timely cargo across India & abroad.", icon: <ClockIcon className="  w-12 h-12 text-white" /> },
  { title: "Competitive Pricing", desc: "Best rates with no compromise.", icon: <CurrencyRupeeIcon className="w-12 h-12 text-white" /> },
  { title: "Top Service Quality", desc: "Reliable, friendly, expert service.", icon: <StarIcon className="w-12 h-12 text-white" /> },
  { title: "Live Tracking", desc: "Track your cargo anytime, anywhere.", icon: <MapPinIcon className="w-12 h-12 text-white" /> },
  { title: "Transparency", desc: "Clear updates and real-time alerts.", icon: <EyeIcon className="w-12 h-12 text-white" /> },
  { title: "24x7 Support", desc: "Assistance when you need it most.", icon: <TruckIcon className="w-12 h-12 text-white" /> },
];

const AboutUs = () => {
  return (

<section className="bg-gray-50 py-16 px-6 md:px-20">
  <div className="w-full mx-auto space-y-16 ">


    <div className="pt-12 flex flex-col md:flex-row items-start gap-15">
      <div className="w-full md:w-1/2 " data-aos="fade-up" data-aos-delay="100">
        <img
          src={index31}
          alt="PFL Logistics"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
      Welcome to <span className="text-orange-400">PFL Logistics</span>
    </h2>
  </div>
  
      </div>

      <div className=" w-full md:w-1/2 space-y-6"data-aos="fade-up" data-aos-delay="150">
        <h2 className="text-4xl font-bold style-font text-blue-800">About Us</h2>
        <p className="text-text-sm style-font text-gray-700 leading-relaxed">
          <strong className="text-blue-700">Professional Freight Logistics (PFL)</strong> is a proudly established logistics company based in Chennai, operating since 2001. With a strong commitment to reliability and customer satisfaction, we manage inbound and outbound shipments for diverse businesses.
        </p>
        <p className="text-text-sm  style-font text-gray-700 leading-relaxed">
          Backed by an expert team and global partnerships, our solutions are time-bound, cost-effective, and tailored to serve clients across sea and air routes with efficiency and flexibility.
        </p>
        <p className="text-text-sm  style-font text-gray-700 leading-relaxed">
  Our dedicated team of professionals ensures reliable, cost-effective operations, earning us long-term relationships with satisfied customers across India and beyond.</p>
      </div>
    </div>


<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    <div className="w-full md:w-1/2 grid grid-cols-1 gap-6"data-aos="fade-up" data-aos-delay="200">
      {[
        { title: "Founded in 2001", desc: "Built a strong base in Chennai’s logistics space." },
        { title: "Inbound & Outbound", desc: "Handles all types of shipment routes." },
        { title: "Client-Centric", desc: "Flexible and efficient for every need." },
        { title: "Sea & Air Routes", desc: "Experts in port and airport logistics." },
      ].map((item, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300">
          <h3 className="text-blue-700 font-semibold">{item.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="w-full md:w-1/2 flex justify-center"data-aos="fade-up" data-aos-delay="250">
      <img
        src={group3} // replace with your actual image path
        alt="Logistics Visual"
        className="w-screenmax-w-sm rounded-xl "
      />
    </div>
</div>


  
 <div className="w-full bg-[#2a4455] py-16 text-center   mx-auto "data-aos="fade-up" data-aos-delay="150">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-white">
      With our
      <span className=" text-orange-500 font-bold"> Worldwide Network & Expert Professionals</span><br />
      We Offer the
      <span className="text-orange-500 font-bold"> Best Logistics Service</span> for your<br />
      <span className="text-white font-semibold">Logistics Needs.</span>
    </h2>
  </div>


<div data-aos="fade-up" data-aos-delay="150">
  <div className="w-190 h-160" >
    <img
      src={gropu43}
      alt="logo"
      className=""
    />
  <div className="absolute right-15 top-30 " >
    <h2 className="text-black text-2xl style-font md:text-4xl font-bold text-center">
     PFL Logistics
    </h2><br/><br/>
        <ul className="list-disc list-inside space-y-2  text-gray-700 text-lg">
  
            <li className="flex items-center gap-2"> <CheckCircleIcon className="w-5 h-5 text-blue-600" /><span>20+ years of logistics industry experience</span></li><br/>
            <li className="flex items-center gap-2"> <CheckCircleIcon className="w-5 h-5 text-blue-600" /><span>Flexible and responsive service model</span></li><br/>
            <li className="flex items-center gap-2"> <CheckCircleIcon className="w-5 h-5 text-blue-600" /><span>Highly satisfied and loyal customer base</span></li><br/>
            <li className="flex items-center gap-2"> <CheckCircleIcon className="w-5 h-5 text-blue-600" /><span>Efficient operations with a cost-effective approach</span></li><br/>
            <li className="flex items-center gap-2"> <CheckCircleIcon className="w-5 h-5 text-blue-600" /><span>Expertise in both seaport and airport logistics</span></li><br/>
          </ul>
  </div>
  </div>
  </div>



     <h2 className="text-center text-3xl font-bold style-font text-blue-700 mb-8">Our Partners</h2>

   <div className="grid md:grid-cols-3 gap-10 justify-items-center" data-aos="fade-up" data-aos-delay="200">
 
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-black-100 transform hover:-translate-y-2 transition-all duration-300 text-center group w-full max-w-sm">
    <img
      src={pfl1}
      alt="J. Ravi Kumar"
      className="w-36 h-36 rounded-full mx-auto object-cover mb-4 transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-blue-400"
    />
    <h3 className="text-xl font-bold text-blue-800">J. Ravi Kumar</h3>
    <p className="text-gray-600">Partner</p>
  </div>

  <div className="">
    <img
      src={pfllogo}
      alt="logo"
      className=""
    />
  </div>
  
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:shadow-black-100 transform hover:-translate-y-2 transition-all duration-300 text-center group w-full max-w-sm">
    <img
      src={pfl2}
      alt="K. Ravi"
      className="w-36 h-36 rounded-full mx-auto object-cover mb-4 transition-all duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-blue-400"
    />
    <h3 className="text-xl font-bold text-blue-800">K. Ravi</h3>
    <p className="text-gray-600">Partner</p>
  </div>
</div>



        <h2 className="text-4xl font-bold text-center style-font text-blue-800 mb-12">Why Choose PFL</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6" data-aos="fade-up" data-aos-delay="150">
      {features.map((item, i) => (
        <div key={i} className="group perspective   ">
          <div className="relative h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            <div className="absolute inset-0 bg-[#253c6a] rounded-xl shadow-xl flex flex-col items-center justify-center text-white backface-hidden">
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            </div>
            <div className="absolute inset-0 bg-white rounded-xl shadow-xl rotate-y-180 backface-hidden flex items-center justify-center text-center p-6">
            <p className="text-gray-700 text-lg font-medium">{item.desc}</p>
          </div>

          </div>
        </div>
      ))}
    </div>
        </div>
      </section>

  );
};

export default AboutUs;
