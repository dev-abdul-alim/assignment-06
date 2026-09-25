import Image from "next/image";
import React from "react";
import logo from "../../../public/banner.png";

const ExerciseCard = () => {
  return (
    <div className="w-full max-w-[370px] overflow-hidden rounded-2xl border border-[#292d35] bg-[#1a1d23] transition duration-300 hover:border-[#c6ff00]">
      {/* Image */}
      <div className="relative h-[250px] w-full">
        <Image
          src={logo}
          alt="Barbell Bench Press"
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="px-4 py-4">
        {/* Tags */}
        <div className="mb-5 flex gap-3">
          <span className="rounded-full bg-[#c6ff00] px-4 py-1 text-base text-black">
            Chest
          </span>

          <span className="rounded-full bg-[#c6ff00] px-4 py-1 text-base text-black">
            Arms
          </span>
        </div>

        {/* Exercise Name */}
        <h2 className="font-[var(--font-oswald)] text-2xl font-bold uppercase tracking-tight text-[#e7e9ed]">
          Barbell Bench Press
        </h2>

        {/* Equipment */}
        <p className="mt-3 text-[#aeb3bd]">Barbell, Bench</p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
          {/* Time */}
          <div className="flex items-center gap-2 text-[#e7e9ed]">
            <i className="ri-time-line text-xl text-[#c6ff00]"></i>
            <span>25 min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2 text-[#e7e9ed]">
            <i className="ri-fire-line text-xl text-[#c6ff00]"></i>
            <span>180 kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-[#e7e9ed]">
            <i className="ri-star-line text-xl text-[#c6ff00]"></i>
            <span>4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
