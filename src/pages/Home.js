import React from "react";
import Navbar from "../components/header/Navbar";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="bg">
        <div className="-z-20 absolute top-0 left-0 right-0">
          <img src={bg1} alt="background" />
        </div>
        <div className="-z-30 absolute top-0 left-0 right-0">
          <img src={bg2} alt="background" />
        </div>
      </div>
    </div>
  );
}

export default Home;
