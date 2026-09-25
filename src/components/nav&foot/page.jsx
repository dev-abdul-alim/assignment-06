import Image from "next/image";
import React from "react";
import logo from '../../../public/logo.png'

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-[#191c22]">
      <div className="mx-auto flex min-h-29.5 max-w-[1800px] items-center justify-between gap-6 px-6 py-8 sm:px-10 lg:px-14">
        <div className="flex items-center gap-3">
         
          <Image src={logo} alt = {logo} className="h-5 w-5 "/>

          <h2 className="text-[24px] font-semibold tracking-tight text-white">
            FITLOG
          </h2>
        </div>

        <p className="text-right text-sm text-gray-300 sm:text-base lg:text-[15px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
