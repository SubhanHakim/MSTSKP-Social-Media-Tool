import React from "react";
import { FooterData } from "../data/FooterData";

// FooterData.map((item, index) => {
//   console.log(item.head);
//   {
//     item.submenu.map((judul, index) => {
//       console.log(judul.title);
//     });
//   }
// });
function Footer() {
  return (
    <div className="container px-[100px] py-8 mx-auto mt-[250px]">
      <div>
        {FooterData.map((heads, index) => {
          return (
            <div className="flex">
              <div className="" key={index}>
                <div className="">
                  <h2 className="">{heads.head}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
