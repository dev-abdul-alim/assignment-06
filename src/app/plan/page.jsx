"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogProvider/page";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const {
    todayPlan,
    savedWorkouts,
    isHydrated,
    removeFromPlan,
    removeSaved,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");

  const [sortBy, setSortBy] = useState("");

const currentWorkouts = [
  ...(activeTab === "plan" ? todayPlan : savedWorkouts),
].sort((a, b) => {
  if (sortBy === "duration") {
    return Number(a.duration || 0) - Number(b.duration || 0);
  }

  if (sortBy === "calories") {
    return Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0);
  }

  if (sortBy === "rating") {
    return Number(b.rating || 0) - Number(a.rating || 0);
  }

  return 0;
});


  const totalMinutes = todayPlan.reduce(
    (total, exercise) => total + Number(exercise.duration || 0),
    0,
  );

  const totalCalories = todayPlan.reduce(
    (total, exercise) => total + Number(exercise.caloriesBurned || 0),
    0,
  );

  

  if (!isHydrated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0f1014] text-[#e7e9ed]">
        <div className="flex items-center gap-3">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#c6ff00] border-t-transparent" />

          <span>Loading workouts…</span>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f1014] px-4 py-12 text-[#e7e9ed] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div>
          {/* <p className="text-sm font-bold tracking-[0.25em] text-[#c6ff00]">
            FITLOG
          </p> */}

          <h1 className="mt-3 text-5xl font-black uppercase sm:text-6xl">
            MY PLAN
          </h1>

          <p className="mt-4 max-w-xl text-[#aeb3bd]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#292d35] bg-[#1a1d23] p-6">
            <p className="text-sm uppercase text-[#aeb3bd]">Exercises</p>

            <p className="mt-3 text-4xl font-bold">{todayPlan.length}</p>
          </div>

          <div className="rounded-2xl border border-[#292d35] bg-[#1a1d23] p-6">
            <p className="text-sm uppercase text-[#aeb3bd]">Minutes</p>

            <p className="mt-3 text-4xl font-bold">{totalMinutes}</p>
          </div>

          <div className="rounded-2xl border border-[#292d35] bg-[#1a1d23] p-6">
            <p className="text-sm uppercase text-[#aeb3bd]">Calories</p>

            <p className="mt-3 text-4xl font-bold">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#292d35]">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-4 text-sm font-bold uppercase transition ${
              activeTab === "plan"
                ? "border-b-2 border-[#c6ff00] text-[#c6ff00]"
                : "text-[#aeb3bd] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-4 text-sm font-bold uppercase transition ${
              activeTab === "saved"
                ? "border-b-2 border-[#c6ff00] text-[#c6ff00]"
                : "text-[#aeb3bd] hover:text-white"
            }`}
          >
            Saved
          </button>

          <div className="ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-[#292d35] bg-[#1a1d23] px-4 py-2 text-sm font-bold uppercase text-[#aeb3bd] outline-none transition focus:border-[#c6ff00]"
            >
              <option value="">Sort By</option>
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        <div className="mt-8 space-y-4">
          {currentWorkouts.length === 0 ? (
            <EmptyState activeTab={activeTab} />
          ) : (
            currentWorkouts.map((exercise) => (
              <WorkoutItem
                key={exercise.id}
                exercise={exercise}
                activeTab={activeTab}
                removeFromPlan={removeFromPlan}
                removeSaved={removeSaved}
                markAsDone={markAsDone}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

const WorkoutItem = ({
  exercise,
  activeTab,
  removeFromPlan,
  removeSaved,
  markAsDone,
}) => {

const handleMarkAsDone = () => {
  markAsDone(exercise.id);
  removeFromPlan(exercise.id);

  toast.success("Workout logged — nice work!");
};

  const handleRemoveFromPlan = () => {
    removeFromPlan(exercise.id);
    toast.info("Removed from today's plan.");
  };

  const handleRemoveSaved = () => {
    removeSaved(exercise.id);
    toast.info("Removed from saved workouts.");
  };

  return (
    <div
      className={`flex flex-col gap-5 rounded-2xl border border-[#292d35] bg-[#1a1d23] p-4 sm:flex-row sm:items-center ${
        exercise.completed ? "opacity-60" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold uppercase">{exercise.name}</h2>

        <p className="mt-2 text-[#aeb3bd]">{exercise.equipment}</p>

        <div className="mt-4 flex flex-wrap gap-5 text-sm text-[#aeb3bd]">
          <span>
            <i className="ri-time-line mr-1 text-[#c6ff00]" />
            {exercise.duration} min
          </span>

          <span>
            <i className="ri-fire-line mr-1 text-[#c6ff00]" />
            {exercise.caloriesBurned} kcal
          </span>

          <span>
            <i className="ri-star-line mr-1 text-[#c6ff00]" />
            {exercise.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 sm:flex-col lg:flex-row">
        <Link
          href={`/workout/${exercise.id}`}
          className="rounded-full border border-[#c8ccd6] px-4 py-2 text-center text-sm font-bold uppercase transition hover:border-[#c6ff00]"
        >
          View Details
        </Link>

        {activeTab === "plan" && (
          <>
            <button
              onClick={handleMarkAsDone}
              disabled={exercise.completed}
              className="rounded-full bg-[#c6ff00] px-4 py-2 text-sm font-bold uppercase text-black transition hover:bg-[#d5ff4d] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <i className="ri-check-line" />{" "}
              {exercise.completed ? "Done" : "Mark as done"}
            </button>

            <button
              onClick={handleRemoveFromPlan}
              className="flex items-center justify-center rounded-full border border-[#292d35] px-3 py-2 text-[#aeb3bd] transition hover:border-red-400 hover:text-red-400"
            >
              <i className="ri-close-line" />
            </button>
          </>
        )}

        {activeTab === "saved" && (
          <button
            onClick={handleRemoveSaved}
            className="flex items-center justify-center rounded-full border border-[#292d35] px-3 py-2 text-[#aeb3bd] transition hover:border-red-400 hover:text-red-400"
          >
            <i className="ri-close-line" />
          </button>
        )}
      </div>
    </div>
  );
};


const EmptyState = ({ activeTab }) => {
  return (
    <div className="rounded-2xl border border-dashed border-[#292d35] bg-[#1a1d23] px-6 py-20 text-center">
      <h2 className="text-3xl font-black uppercase">NOTHING HERE YET</h2>

      <p className="mx-auto mt-4 max-w-md text-[#aeb3bd]">
        {activeTab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save workouts from the library to find them here later."}
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex rounded-full bg-[#c6ff00] px-6 py-3 font-bold uppercase text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default MyPlanPage;