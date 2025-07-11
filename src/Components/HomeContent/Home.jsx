import container from "../../assets/Homeimages/container.png";
import "../HomeContent/Home.css";
import Features from "./Features";
import HomeService from "./HomeService";
import WhyOutports from "./WhyOutports";
import HomeSolution from "./HomeSolution";
import HomeWarhouse from "./HomeWarhouse";
import moreContainerSketch from "../../assets/Homeimages/moreContainerSketch.png";
import Aeroplane from "../../assets/HomeImages/AeroplaneSketch.png";
import Ship from "../../assets/Homeimages/ContShipSketch.png";
import HangCont from "../../assets/Homeimages/HangingContSketch.png";
import ContOpen from "../../assets/Homeimages/ContBoxOpen.png";
import HomeAbout from "./HomeAbout";
import HomeGlobalReach from "./HomeGlobalReach";

const Home = () => {
  return (
    <>
      <div className="home-container">
       <section className="hero-banner">
  <div className="hero-overlay">
    <h1 className="hero-title">Move Anything, Anywhere, Anytime</h1>
    <p className="hero-subtitle">
      Connect your supply chain across sea, air, rail, and road — fast and securely.
      From containers to cargo — we handle your transport with care.
    </p>
    
  </div>
</section>

      </div>
      
      <div className="relative">
        <img
          src={moreContainerSketch}
          alt="Container Sketch"
          className="absolute bottom-0 right-0 w-[250px]  z-10 pointer-events-none"
        />
      </div>
      <HomeAbout />
      <WhyOutports />
      <div className="relative">
        <img
          src={Ship}
          alt="Container Sketch"
          className="absolute -bottom-20 right-0 w-[250px] pointer-events-none"
        />
      </div>
      <HomeService />
      <div className="relative">
        <img
          src={HangCont}
          alt="Container Sketch"
          className="absolute bottom-8 left-0 w-[250px] pointer-events-none"
        />
      </div>
      <Features />
      <HomeGlobalReach />
      <HomeSolution />
      <HomeWarhouse />
      <div className="relative">
        <img
          src={ContOpen}
          alt="Container Sketch"
          className="absolute -bottom-35 left-0 w-[350px] pointer-events-none"
        />
      </div>
    </>
  );
};

export default Home;
