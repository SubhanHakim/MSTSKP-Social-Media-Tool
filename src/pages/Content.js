import React from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import ImgSosmed from "../components/background/ImgSosmed";
import { AiOutlinePlayCircle } from "react-icons/ai";
import heroSection from "../assets/sosmed/hero-img.png";

function Content() {
  return (
    <div className="">
      <div className="container px-[100px] py-8 mx-auto text-center align-middle flex flex-col justify-center items-center relative">
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
      <div className="flex justify-center mt-32">
        <img src={heroSection} className="" alt="heroImage" />
      </div>
    </div>
  );
}

export default Content;
