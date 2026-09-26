import Image from "next/image";
import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#292d35] bg-[#1a1d23]">
      {/* Image */}
      <div className="relative h-[250px] w-full">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-7 py-7">
        {/* Muscle Groups */}
        <div className="mb-5 flex flex-wrap gap-3">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#c6ff00] px-4 py-1 text-sm text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="font-[var(--font-oswald)] text-2xl font-bold uppercase text-[#e7e9ed]">
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="mt-4 text-base text-[#aeb3bd]">{exercise.equipment}</p>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-[#e7e9ed]">
            <i className="ri-time-line text-xl text-[#c6ff00]"></i>
            <span>{exercise.duration} min</span>
          </div>

          <div className="flex items-center gap-2 text-[#e7e9ed]">
            <i className="ri-fire-line text-xl text-[#c6ff00]"></i>
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2 text-[#e7e9ed]">
            <i className="ri-star-line text-xl text-[#c6ff00]"></i>
            <span>{exercise.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
