import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getExerciseById } from "@/data/api";
import WorkoutActions from "@/components/workout/workoutActions/page";

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
          <div className="mb-5 flex flex-wrap gap-3">
            {exercise.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c6ff00] px-4 py-1 text-sm font-medium uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h1 className="font-[var(--font-oswald)] text-4xl font-bold uppercase leading-tight sm:text-5xl">
            {exercise.name}
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#aeb3bd]">
            {exercise.description}
          </p>

          {/* Specs */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#292d35] bg-[#1a1d23]">
            <div className="flex justify-between border-b border-[#292d35] px-5 py-4">
              <span className="text-sm text-[#aeb3bd]">EQUIPMENT</span>
              <span>{exercise.equipment}</span>
            </div>

            <div className="flex justify-between border-b border-[#292d35] px-5 py-4">
              <span className="text-sm text-[#aeb3bd]">DIFFICULTY</span>
              <span>{exercise.difficulty}</span>
            </div>

            <div className="flex justify-between border-b border-[#292d35] px-5 py-4">
              <span className="text-sm text-[#aeb3bd]">SETS</span>
              <span>{exercise.sets}</span>
            </div>

            <div className="flex justify-between border-b border-[#292d35] px-5 py-4">
              <span className="text-sm text-[#aeb3bd]">REPS</span>
              <span>{exercise.reps}</span>
            </div>

            <div className="flex justify-between border-b border-[#292d35] px-5 py-4">
              <span className="text-sm text-[#aeb3bd]">DURATION</span>
              <span>{exercise.duration} min</span>
            </div>

            <div className="flex justify-between border-b border-[#292d35] px-5 py-4">
              <span className="text-sm text-[#aeb3bd]">CALORIES</span>
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between px-5 py-4">
              <span className="text-sm text-[#aeb3bd]">RATING</span>
              <span>{exercise.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          {exercise.instructions?.length > 0 && (
            <div className="mt-10">
              <h2 className="font-[var(--font-oswald)] text-2xl font-bold uppercase">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {exercise.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4 text-[#aeb3bd]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c6ff00] font-bold text-black">
                      {index + 1}
                    </span>

                    <span className="pt-1">{instruction}</span>
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
