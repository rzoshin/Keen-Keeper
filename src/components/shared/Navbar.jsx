import React from "react";
import { IoStatsChart, IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-[95%] mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"><span>Keen</span>Keeper</a>
      </div>
      <div className="flex">
        <button className="btn btn-ghost">
          <span><RiHome2Line /></span>Home
        </button>
        <button className="btn btn-ghost">
          <span><IoTimeOutline /></span>Timeline
        </button>
        <button className="btn btn-ghost">
          <span><IoStatsChart /></span>Stats
        </button>
      </div>
    </div>
  );
};

export default Navbar;
