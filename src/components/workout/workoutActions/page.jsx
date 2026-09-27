"use client";

import { useFitLog } from "@/context/FitLogProvider/page";

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
    const result = addToPlan(exercise);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(result.message);
  };

  const handleSave = () => {
    const result = saveForLater(exercise);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(result.message);
  };

  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      {/* Add to Plan */}
      <button
        onClick={handleAddToPlan}
        disabled={!isHydrated}
        className="flex h-12 w-auto items-center justify-center gap-2 rounded-full bg-[#c6ff00] px-3 py-2 font-bold  tracking-tight text-black transition hover:bg-[#d5ff4d]"
      >
        <i className="ri-add-box-fill" />
        {/* {!isHydrated
          ? "Loading..."
          : isInPlan
            ? "Already in plan"
            : "Add to today's plan"} */}
        Add to today&apos; plan
      </button>

      {/* Save */}
      <button
        onClick={handleSave}
        disabled={!isHydrated}
        className="flex h-12 w-auto flex-1 items-center justify-center gap-2 rounded-full border border-[#a9ad99] px-3 py-2 font-bold uppercase text-[#f6f7f2] transition hover:border-none"
      >
        <i className="ri-bookmark-line text-xl" />
        {/* {!isHydrated ? "Loading..." : isSaved ? "Saved" : "Save for later"} */}
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
