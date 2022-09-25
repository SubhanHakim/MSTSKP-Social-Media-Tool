import React from "react";
import insight from "../assets/insight.png";
// import bg3 from "../assets/bg3.png";

function Tool() {
  return (
    <div className="bg-bg-pattern mt-[100px] bg-contain relative bg-no-repeat h-[776px] w-full left-0">
      <div className="container px-[100px] py-8 mx-auto absolute top-1/4">
        <div className="grid grid-cols-2 items-center align-middle">
          <div>
            <div className="flex items-center gap-x-4">
              <div className="w-[45px] h-[2px] bg-white"></div>
              <p className="uppercase text-white">Alternatives</p>
            </div>
            <div>
              <h2 className="text-4xl text-white font-bold">Karena Tool Kita Ini Nggak Ada Apa-Apnya, Inilah Alternatifnya!</h2>
            </div>
          </div>
          <div>
            <h2 className="text-base text-white font-normal">
              Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya. Barangkali lo udah serius gitu butuh tool untuk sosial media, maka dari itu kita kasih 2 alternatif yang bisa lo pake untuk sosial media lo.
            </h2>
          </div>
        </div>
        <div className="mt-20">
          <img src={insight} alt="insight" />
        </div>
      </div>
    </div>
  );
}

export default Tool;
