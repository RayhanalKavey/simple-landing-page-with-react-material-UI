import React from "react";
import Brands from "../Brands/Brands";
import ExperimentalComponent from "../ExperimentalComponent/ExperimentalComponent";
import HeroCard from "../HeroCard/HeroCard";
import HeroSection from "../HeroSection/HeroSection";
import OurWorks from "../OurWorks/OurWorks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Brands></Brands>
      <Services></Services>
      <OurWorks></OurWorks>
    </div>
  );
};

export default Home;
