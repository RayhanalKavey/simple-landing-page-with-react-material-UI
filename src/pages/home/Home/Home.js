import React from "react";
import Brands from "../Brands/Brands";
import ExperimentalComponent from "../ExperimentalComponent/ExperimentalComponent";
import Faq from "../FAQ/Faq";
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
      <Faq></Faq>
    </div>
  );
};

export default Home;
