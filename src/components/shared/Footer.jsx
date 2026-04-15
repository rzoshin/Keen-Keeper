import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <div className="pt-20 text-center flex flex-col items-center justify-center max-w-[75%] mx-auto">
        <div className="mb-6">
          <h1 className="text-white font-medium text-6xl mb-4">KeenKeeper</h1>
          <p className="text-white/80 text-base">
            Your personal shelf of meaningful connections. Browse, tend and
            nurture the relationships that matter the most.
          </p>
        </div>
        <div className="mb-10">
          <h4 className="text-white text-xl font-medium mb-4">Social Links</h4>
          <div className="flex gap-3">
            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
              <TbBrandInstagramFilled className="w-5 h-5" />
            </div>
            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
              <FaFacebookSquare className="w-5 h-5" />
            </div>
            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
              <FaXTwitter className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full border-t border-[#1A8862] text-[#FAFAFA]/50 py-[30px] ">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
