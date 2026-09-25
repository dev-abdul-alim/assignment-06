import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-[#191c22]">
      <div className="mx-auto flex min-h-[118px] max-w-[1800px] items-center justify-between gap-6 px-6 py-8 sm:px-10 lg:px-14">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 text-[#c6ff00]"
          >
            <path d="M6.5 6.5 17.5 17.5" />
            <path d="m5 9 4-4" />
            <path d="m15 19 4-4" />
            <path d="m3 12 3-3" />
            <path d="m18 15 3-3" />
            <path d="m9 3 3 3" />
            <path d="m12 18 3 3" />
          </svg>

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
