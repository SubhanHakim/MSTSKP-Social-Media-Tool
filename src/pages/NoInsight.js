import React from "react";
import { DescData, DescDataCard } from "../data/DescData";

function NoInsight() {
  return (
    <div className="mt-52 h-screen">
      <div className="flex justify-center text-center">
        {DescData.map((item, index) => {
          return (
            <div className="w-[576px]" key={index}>
              <span className="uppercase text-[#FC881D] font-semibold text-base">{item.head}</span>
              <h3 className="text-[#0D0E25] font-bold text-4xl mt-[10px] leading-[54px]">{item.subhead}</h3>
              <p className="font-normal text-base text-[#0D0E25]/60 mt-5">{item.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-evenly gap-8 mt-16">
        {DescDataCard.map((item, index) => {
          return (
            <div className="bg-[#0D0E25]/5 rounded-md hover:shadow-xl" key={index}>
              <div className="items-center flex justify-center my-[53px]">{item.img}</div>
              <div className="bg-white p-1">
                <h3 className="font-semibold text-[22px] text-[#0D0E25] leading-7 my-[10px]">{item.head}</h3>
                <p className="font-normal text-base text-[#0D0E25]/60">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NoInsight;
