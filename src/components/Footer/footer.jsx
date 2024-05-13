import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-4 px-10 py-8 bg-black flex items-center justify-between">
      <img
        src="../../src/assets/logo.png"
        alt=""
        className="-ml-6 h-20 object-contain max-xl:hidden"
      />
      <span className="w-1/2 flex items-center justify-evenly text-white">
        <ul className="list-none">
          <li className="text-sm text-slate-300">Lorem ipsum</li>
          <li className="text-sm text-slate-300">ipsum ipsum</li>
          <li className="text-sm text-slate-300">dolor ipsum</li>
        </ul>
        <ul className="list-none">
          <li className="text-sm text-slate-300">Lorem ipsum</li>
          <li className="text-sm text-slate-300">ipsum ipsum</li>
          <li className="text-sm text-slate-300">dolor ipsum</li>
        </ul>
        <ul className="list-none">
          <li className="text-sm text-slate-300">Lorem ipsum</li>
          <li className="text-sm text-slate-300">ipsum ipsum</li>
          <li className="text-sm text-slate-300">dolor ipsum</li>
        </ul>
      </span>
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-smeibold text-sm text-slate-300">Follow us on:</h1>
        <span className="flex items-center gap-6">
          <FaFacebook className="text-xl text-sky-500" />
          <FaTwitter className="text-xl text-slate-500" />
          <FaInstagram className="text-xl text-pink-500" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
