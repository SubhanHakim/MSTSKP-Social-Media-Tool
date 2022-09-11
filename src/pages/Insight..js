import React from "react";
// import InsightBtn from "../components/button/InsightBtn";
import PrimaryButton from "../components/button/PrimaryButton";
import { BsArrowRightCircle } from "react-icons/bs";
import { InsightData } from "../data/InsightData";

function Insight() {
  return (
    <div className="text-black grid grid-cols-2 items-center justify-center">
      <div className="w-[475px]">
        <div className="flex items-center gap-x-[10px] mb-[10px]">
          <div className="bg-[#FC881D] w-11 h-[2px]"></div>
          <span className="uppercase text-[#FC881D] font-semibold text-base tracking-[10%]">Kenapa Sih ?</span>
        </div>
        <div>
          <h2 className="font-bold text-4xl text-[#0D0E25] mb-5">Kenapa Kami Tidak Memberikan Insight Apapun?</h2>
          <p className="font-normal text-base text-[#0D0E25] mb-[50px]">
            Di sini kita akan klarifikasi mengapa kita tidak memberikan insight apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan semata-mata ingin menyelamatkan planet bumi.
          </p>
          <PrimaryButton color="Secondary">
            Pelajari Lebih Lanjut
            <BsArrowRightCircle />
          </PrimaryButton>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-5">
          {InsightData.map((item, index) => {
            return (
              <div className="p-[35px] rounded-[10px] group hover:bg-[#0D0E25] hover:text-white ease-in-out duration-500" key={index}>
                <div className="">
                  <div className="flex items-center gap-x-5 mb-5">
                    <div className="bg-[#FFE9D6] group-hover:bg-white/10 P-[10px] w-10 h-10 flex items-center justify-center rounded-[5px]">
                      <span className="text-[#FC881D] group-hover:text-white">{item.icon}</span>
                    </div>
                    <span>{item.head}</span>
                  </div>
                  <div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Insight;
