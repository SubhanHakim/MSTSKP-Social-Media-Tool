import React from "react";
import PrimaryButton from "./PrimaryButton";

function Hero() {
  return (
    <div className="container px-[100px] py-8 mx-auto">
      <div className="text-center align-middle flex flex-col justify-center items-center">
        <span className="text-[#fc881d] font-semibold text-base">MANA SAYA TAU SAYA KAN PENCURRY</span>
        <h2 className="text-white text-[62px] text-center leading-[74px] font-normal mt-5 mb-7 w-[800px]">Social Media Tool Yang Tidak Akan Memberikan Kamu Insight Apapun</h2>
        <p className="text-white w-[573px] mb-[60px]">Adalah benar apa yang kamu baca barusan. Tool yang mainstream akan memberikan kamu pelbagai insight, karena kami anti-mainstream maka kami akan melakukan sebaliknya.</p>
        <div className="flex gap-x-4">
          <PrimaryButton />
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;
