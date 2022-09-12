import React from "react";
import PrimaryButton from "./button/PrimaryButton";

// import image
import heroSection from "../assets/sosmed/hero-img.png";
// import NoBgButton from "./button/NoBgButton";
import Insight from "../pages/Insight.";
import ImgSosmed from "./background/ImgSosmed";
import { AiOutlinePlayCircle } from "react-icons/ai";
import BgHero from "./background/BgHero";
import NoInsight from "../pages/NoInsight";

function Hero() {
  return (
    <div className="container px-[100px] py-8 mx-auto h-screen">
      <BgHero />
      <div className="text-center align-middle flex flex-col justify-center items-center relative">
        <span className="text-[#fc881d] font-semibold text-base">MANA SAYA TAU SAYA KAN PENCURRY</span>
        <h2 className="text-white text-[62px] text-center leading-[74px] font-normal mt-5 mb-7 w-[800px]">Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun</h2>
        <p className="text-white w-[573px] mb-[60px]">Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan memberikan kamu pelbagai insight, karena kami anti-mainstream maka kami akan melakukan sebaliknya.</p>
        <div className="flex gap-x-4">
          <PrimaryButton>Memulai Sekarang</PrimaryButton>
          <PrimaryButton color="Transparent">
            <AiOutlinePlayCircle />
            Pelajari Lebih Lanjut
          </PrimaryButton>
        </div>
        <ImgSosmed />
      </div>
      <div className="mt-36 relative">
        <img src={heroSection} className="w-full" alt="heroImage" />
      </div>
      <Insight />
      <NoInsight />
    </div>
  );
}

export default Hero;
