import React from "react";
import PrimaryButton from "./PrimaryButton";

// import image
import blur1 from "../assets/sosmed/blur1.png";
import blur2 from "../assets/sosmed/blur2.png";
import youtube from "../assets/sosmed/youtube.png";
import facebook from "../assets/sosmed/facebook.png";
import instagram from "../assets/sosmed/instagram.png";
import tiktok from "../assets/sosmed/tiktok.png";
import heroSection from "../assets/sosmed/hero-img.png";

function Hero() {
  return (
    <div className="container px-[100px] py-8 mx-auto h-screen">
      <div className="text-center align-middle flex flex-col justify-center items-center relative">
        <span className="text-[#fc881d] font-semibold text-base">MANA SAYA TAU SAYA KAN PENCURRY</span>
        <h2 className="text-white text-[62px] text-center leading-[74px] font-normal mt-5 mb-7 w-[800px]">Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun</h2>
        <p className="text-white w-[573px] mb-[60px]">Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan memberikan kamu pelbagai insight, karena kami anti-mainstream maka kami akan melakukan sebaliknya.</p>
        <div className="flex gap-x-4">
          <PrimaryButton />
          <PrimaryButton />
        </div>
        <img src={blur1} alt="blur-img" className="absolute left-10" />
        <img src={blur2} alt="blur-img" className="absolute right-20 top-0" />
        <img src={youtube} alt="blur-img" className="absolute left-10 top-20" />
        <img src={facebook} alt="blur-img" className="absolute right-20 top-40" />
        <img src={instagram} alt="blur-img" className="absolute left-20 bottom-20" />
        <img src={tiktok} alt="blur-img" className="absolute right-36 left bottom-20" />
      </div>
      <div className="mt-36">
        <img src={heroSection} className="w-full" alt="heroImage" />
      </div>
    </div>
  );
}

export default Hero;
