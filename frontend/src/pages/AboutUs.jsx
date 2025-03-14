import React from "react";
import NavBar from "../components/navBar/NavBar";
import Hero from "../components/aboutUsSection/Hero";
import Footer from "../components/footer/Footer";
import MissionVision from "../components/aboutUsSection/MissionVision";
import Members from "../components/aboutUsSection/Members";

const AboutUs = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Hero />
      <MissionVision />
      <Members />
      <Footer />
    </div>
  );
};

export default AboutUs;
