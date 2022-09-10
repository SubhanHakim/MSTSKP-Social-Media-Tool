import React from "react";
import Play from "../../assets/icons/play-circle.svg";

export default function NoBgButton() {
  return (
    <div>
      <button className="px-10 py-[25px] bg-transparent rounded-[100px] flex items-center gap-x-1">
        <img src={Play} alt="icons" />
        <a href="/" className="text-white">
          Pelajari Dulu
        </a>
      </button>
    </div>
  );
}
