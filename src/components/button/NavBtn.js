import React from "react";

function NavBtn({ childreen, color, ...props }) {
  const navBtn = {
    white: "bg-white text-[#0D0E25] font-bold",
    Transparent: "bg-transparent text-white font-semibold",
  };

  const colorNavBtn = navBtn[color || "white"];

  return (
    <div>
      <button className={"px-[25px] py-[10px] text-lg rounded-full flex items-center gap-x-[10px] " + colorNavBtn} {...props}></button>
    </div>
  );
}

export default NavBtn;
