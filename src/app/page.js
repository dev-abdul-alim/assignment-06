import { getExercises } from "@/data/api";
import ExerciseCard from "@/components/exercises/page";
import HeroPage from "@/components/home/page";

const HomePage = async () => {
  const exercises = await getExercises();

  return (
    <main className="bg-[#0f1014]">
      <HeroPage />

      {/* LIBRARY */}
      <section id="library" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-10">
            <h2 className="text-4xl font-bold uppercase text-[#e7e9ed]">
              The Library
            </h2>

            <p className="mt-3 text-lg text-[#aeb3bd]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
