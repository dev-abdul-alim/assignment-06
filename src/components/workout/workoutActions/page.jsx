"use client";

import { useFitLog } from "@/context/FitLogProvider/page";
import { toast } from "react-toastify";

const WorkoutActions = ({ exercise }) => {
  const { addToPlan, saveForLater, todayPlan, savedWorkouts, isHydrated } =
    useFitLog();

  const isInPlan = isHydrated
    ? todayPlan.some((item) => String(item.id) === String(exercise.id))
    : false;

  const isSaved = isHydrated
    ? savedWorkouts.some((item) => String(item.id) === String(exercise.id))
    : false;

  const handleAddToPlan = () => {
    if (!isHydrated) return;

    if (isInPlan) {
      toast.info("Workout is already in today's plan.");
      return;
    }

    addToPlan(exercise);
    toast.success("Workout added to today's plan!");
  };

  const handleSave = () => {
    if (!isHydrated) return;

    const result = saveForLater(exercise);

    if (!result.success) {
      toast.info(result.message);
      return;
    }

    toast.success(result.message);
  };

  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      {/* Add to Plan */}
      <button
        onClick={handleAddToPlan}
        disabled={!isHydrated}
        className="flex h-12 w-auto items-center justify-center gap-2 rounded-full bg-[#c6ff00] px-3 py-2 font-bold tracking-tight text-black transition hover:bg-[#d5ff4d] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <i className="ri-add-box-fill" />
        Add to today&apos;s plan
      </button>

      {/* Save */}
      <button
        onClick={handleSave}
        disabled={!isHydrated}
        className="flex h-12 w-auto flex-1 items-center justify-center gap-2 rounded-full border border-[#a9ad99] px-3 py-2 font-bold uppercase text-[#f6f7f2] transition hover:border-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        <i className="ri-bookmark-line text-xl" />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
