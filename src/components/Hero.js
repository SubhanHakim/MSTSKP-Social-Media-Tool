import React from "react";
import Content from "../pages/Content";
import Footer from "../pages/Footer";
// import image

// import NoBgButton from "./button/NoBgButton";
import Insight from "../pages/Insight.";
import NoInsight from "../pages/NoInsight";
import Tool from "../pages/Tool";

function Hero() {
  return (
    <div>
      <div className="relative">
        <Content />
        <Insight />
        <NoInsight />
        <Tool />
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
