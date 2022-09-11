import React from "react";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";

function BgHero() {
  return (
    <div>
      <div className="bg">
        <div className="-z-20 absolute top-0 left-0 right-0">
          <img src={bg1} alt="background" />
        </div>
        <div className="-z-30 absolute top-0 left-0 right-0">
          <img src={bg2} alt="background" />
        </div>
      </div>
    </div>
  );
}

export default BgHero;
