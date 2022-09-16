import React from "react";
// import BgHero from "../components/background/BgHero";
import Navbar from "../components/header/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="bg-bg-primary absolute top-0 right-0 left-0 -z-20 bg-no-repeat">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
