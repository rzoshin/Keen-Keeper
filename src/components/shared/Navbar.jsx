import React from "react";
import { IoStatsChart, IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-[95%] mx-auto">
      <div className="flex-1">
        <a className="text-2xl">
        <span className="font-extrabold text-[#1F2937]">Keen</span><span className="font-semibold text-[#244D3F]">Keeper</span>
        </a>
      </div>
      <div className="flex">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `text-[#131313]/80 btn btn-ghost ${
              isActive ? "bg-[#244D3F] text-white" : " "
            }`
          }
        >
          <span>
            <RiHome2Line />
          </span>
          Home
        </NavLink>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            `text-[#131313]/80 btn btn-ghost ${
              isActive ? "bg-[#244D3F] text-white" : " "
            }`
          }
        >
          <span>
            <IoTimeOutline />
          </span>
          Timeline
        </NavLink>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            `text-[#131313]/80 btn btn-ghost ${
              isActive ? "bg-[#244D3F] text-white" : " "
            }`
          }
        >
          <span>
            <IoStatsChart />
          </span>
          Stats
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
