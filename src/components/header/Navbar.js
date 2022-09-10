import React from "react";
import { NavLink } from "react-router-dom";
import { Navdata } from "../../data/Navdata";
import logo from "../../logo.png";
import Button from "../button/Button";
import SecondButton from "../button/SecondButton";

export default function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "#cdcdcd",
    };
  };

  return (
    <nav className="container px-[100px] py-8 mx-auto">
      <div className="flex justify-between items-center">
        <div className="bg-gray-700 p-4 rounded-full w-[50px] h-[50px] flex items-center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="">
          <ul className="flex gap-x-10">
            {Navdata.map((item, index) => {
              return (
                <li className="text-white text-base font-semibold" key={index}>
                  <NavLink to={item.path} style={navLinkStyle}>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex align-middle gap-x[30px]">
          <SecondButton />
          <Button />
        </div>
      </div>
    </nav>
  );
}
