import React from "react";
import Content from "../pages/Content";
// import image
import heroSection from "../assets/sosmed/hero-img.png";
// import NoBgButton from "./button/NoBgButton";
import Insight from "../pages/Insight.";
import NoInsight from "../pages/NoInsight";
import Tool from "../pages/Tool";

function Hero() {
  return (
    <div>
      <div className="">
        <Content />
        {/* <BgHero /> */}
        <div className="mt-36 relative">
          <img src={heroSection} className="w-full" alt="heroImage" />
        </div>
        <Insight />
        <NoInsight />
      </div>
      <Tool />
    </div>
  );
}

export default Hero;
