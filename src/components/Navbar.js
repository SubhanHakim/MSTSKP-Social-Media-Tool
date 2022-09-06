import React from "react";
import { Navdata } from "../data/Navdata";
import logo from "../logo.png";
import Button from "./Button";
import SecondButton from "./SecondButton";

export default function Navbar() {
  return (
    <nav className="container px-[100px] py-8 mx-auto">
      <div className="flex justify-between items-center">
        <div className="bg-black p-4 rounded-full w-[50px] h-[50px] flex items-center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="">
          <ul className="flex gap-x-10">
            {Navdata.map((item, index) => {
              return (
                <li className="text-white text-base font-semibold" key={index}>
                  <a href="/">{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex align-middle">
          <SecondButton />
          <Button />
        </div>
      </div>
    </nav>
  );
}
