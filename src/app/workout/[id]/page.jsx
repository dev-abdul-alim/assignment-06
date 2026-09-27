import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getExerciseById } from "@/data/api";
import WorkoutActions from "@/components/workout/workoutActions/page";
import { toast } from "react-toastify";

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  let exercise;

  try {
    exercise = await getExerciseById(id);
  } catch (error) {
    notFound();
  }

  if (!exercise) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f1014] px-4 py-12 text-[#e7e9ed] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-[#292d35] lg:min-h-[650px]">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <h1 className="font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
            {exercise.name}
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#aeb3bd]">
            {exercise.description}
          </p>

          <div className="my-3 flex flex-wrap gap-3">
            {exercise.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-4 py-1 text-sm font-medium uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#292d35] bg-[#1a1d23] sm:mt-10">
            <div className="flex flex-col gap-1 border-b border-[#292d35] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
              <span className="text-xs font-medium text-[#aeb3bd] sm:text-sm">
                EQUIPMENT
              </span>
              <span className="break-words text-sm text-[#e7e9ed] sm:text-base">
                {exercise.equipment}
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b border-[#292d35] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
              <span className="text-xs font-medium text-[#aeb3bd] sm:text-sm">
                DIFFICULTY
              </span>
              <span className="text-sm text-[#e7e9ed] sm:text-base">
                {exercise.difficulty}
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b border-[#292d35] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
              <span className="text-xs font-medium text-[#aeb3bd] sm:text-sm">
                SETS
              </span>
              <span className="text-sm text-[#e7e9ed] sm:text-base">
                {exercise.sets}
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b border-[#292d35] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
              <span className="text-xs font-medium text-[#aeb3bd] sm:text-sm">
                REPS
              </span>
              <span className="text-sm text-[#e7e9ed] sm:text-base">
                {exercise.reps}
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b border-[#292d35] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
              <span className="text-xs font-medium text-[#aeb3bd] sm:text-sm">
                DURATION
              </span>
              <span className="text-sm text-[#e7e9ed] sm:text-base">
                {exercise.duration} min
              </span>
            </div>

            <div className="flex flex-col gap-1 border-b border-[#292d35] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
              <span className="text-xs font-medium text-[#aeb3bd] sm:text-sm">
                CALORIES
              </span>
              <span className="text-sm text-[#e7e9ed] sm:text-base">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
              <span className="text-xs font-medium text-[#aeb3bd] sm:text-sm">
                RATING
              </span>
              <span className="text-sm text-[#e7e9ed] sm:text-base">
                {exercise.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          {exercise.instructions?.length > 0 && (
            <div className="mt-8 sm:mt-10">
              <h2 className="font-[var(--font-oswald)] text-xl font-bold uppercase sm:text-2xl">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {exercise.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-6 text-[#aeb3bd] sm:gap-4 sm:text-base"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c6ff00] text-sm font-bold text-black sm:h-8 sm:w-8">
                      {index + 1}
                    </span>

                    <span className="pt-0.5">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WorkoutActions exercise={exercise} />
          </div>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 text-[#aeb3bd] hover:text-[#c6ff00]"
          >
            <i className="ri-arrow-left-line" />
            Back to library
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
