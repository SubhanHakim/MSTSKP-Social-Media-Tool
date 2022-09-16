import React from "react";
import blur1 from "../../assets/sosmed/blur1.png";
import blur2 from "../../assets/sosmed/blur2.png";
import youtube from "../../assets/sosmed/youtube.png";
import facebook from "../../assets/sosmed/facebook.png";
import instagram from "../../assets/sosmed/instagram.png";
import tiktok from "../../assets/sosmed/tiktok.png";

function ImgSosmed() {
  return (
    <div>
      <img src={blur1} alt="blur-img" className="absolute left-40 top-1/2" />
      <img src={blur2} alt="blur-img" className="absolute right-40 top-12" />
      <img src={youtube} alt="blur-img" className="absolute left-40 top-32" />
      <img src={facebook} alt="blur-img" className="absolute right-40 top-1/2" />
      <img src={instagram} alt="blur-img" className="absolute left-64 bottom-20" />
      <img src={tiktok} alt="blur-img" className="absolute right-64 left bottom-20" />
    </div>
  );
}

export default ImgSosmed;
