import React from "react";

function PrimaryButton({ children, color, ...props }) {
  const BgButton = {
    Primary: "bg-[#FC881D]",
    Secondary: "bg-[#0D0E25]",
    Transparent: "bg-transparent",
  };

  const colorClassName = BgButton[color || "Primary"];

  return (
    <div>
      <button className={"py-5 px-8 text-white rounded-full flex items-center gap-x-[10px] " + colorClassName} {...props}>
        {children}
      </button>
    </div>
  );
}

export default PrimaryButton;
