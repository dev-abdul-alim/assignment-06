import React from "react";
import Link from "next/link";

const PlanSection = () => {
  return (
    <main>
      <div className="bg-[#0f1014] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1680px]">
          {/* Header */}
          <div>
            <h1
              className="
          font-[var(--font-oswald)]
          text-4xl
          font-bold
          uppercase
          tracking-wide
          text-[#e7e9ed]
          sm:text-5xl
        "
            >
              My Plan
            </h1>

            <p className="mt-3 text-lg text-[#aeb3bd] sm:text-xl">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          {/* Stats */}
          <div
            className="
        mt-12
        grid
        grid-cols-1
        overflow-hidden
        rounded-2xl
        border
        border-[#292d35]
        bg-[#1a1d23]
        sm:grid-cols-3
      "
          >
            {/* Exercises */}
            <div className="px-9 py-7 sm:border-r sm:border-[#292d35]">
              <p className="text-base text-[#aeb3bd]">Exercises</p>

              <h5 className="mt-2 text-5xl font-bold text-[#c6ff00]">0</h5>
            </div>

            {/* Minutes */}
            <div className="px-9 py-7 sm:border-r sm:border-[#292d35]">
              <p className="text-base text-[#aeb3bd]">Minutes</p>

              <h5 className="mt-2 text-5xl font-bold text-[#e7e9ed]">0</h5>
            </div>

            {/* Calories */}
            <div className="px-9 py-7">
              <p className="text-base text-[#aeb3bd]">Calories</p>

              <h5 className="mt-2 text-5xl font-bold text-[#e7e9ed]">0</h5>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#0f1014] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1680px]">
          {/* Top Controls */}
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            {/* Tabs */}
            <div className="inline-flex w-fit rounded-2xl bg-[#1a1d23] p-1.5">
              <button
                className="
                rounded-xl
                bg-[#0f1014]
                px-5
                py-3
                text-base
                font-medium
                text-[#c6ff00]
              "
              >
                Today&apos;s Plan
              </button>

              <button
                className="
                rounded-xl
                px-5
                py-3
                text-base
                font-medium
                text-[#858a95]
                transition
                hover:text-white
              "
              >
                Saved
              </button>
            </div>

            {/* Sort */}
            <div className="w-full md:w-[480px]">
              <label
                htmlFor="sort"
                className="mb-2 block text-xl text-[#e7e9ed]"
              >
                Sort By
              </label>

              <select
                id="sort"
                defaultValue="rating"
                className="
                h-[60px]
                w-full
                rounded-2xl
                border
                border-[#3a3e46]
                bg-transparent
                px-5
                text-lg
                text-[#e7e9ed]
                outline-none
                focus:border-[#c6ff00]
              "
              >
                <option value="rating" className="bg-[#1a1d23]">
                  Rating
                </option>

                <option value="name" className="bg-[#1a1d23]">
                  Name
                </option>

                <option value="duration" className="bg-[#1a1d23]">
                  Duration
                </option>
              </select>
            </div>
          </div>

          {/* Empty State */}
          <div
            className="
            mt-12
            flex
            min-h-[310px]
            flex-col
            items-center
            justify-center
            rounded-2xl
            border
            border-[#292d35]
            bg-[#1a1d23]
            px-6
            text-center
          "
          >
            <h2
              className="
              font-[var(--font-oswald)]
              text-2xl
              font-bold
              uppercase
              text-[#e7e9ed]
              sm:text-3xl
            "
            >
              Nothing here yet
            </h2>

            <p className="mt-4 max-w-xl text-base text-[#aeb3bd] sm:text-xl">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/home"
              className="
              mt-8
              rounded-2xl
              bg-[#c6ff00]
              px-7
              py-4
              text-base
              font-bold
              text-black
              transition
              duration-200
              hover:bg-[#d4ff33]
              hover:shadow-[0_0_25px_rgba(198,255,0,0.15)]
              active:scale-95
            "
            >
              Go to workouts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlanSection;




















// import React from 'react'

// const MyPlan = () => {
//   return (
//     <div>
//       <div>
//         <div>
//           <h1>MY PLAN</h1>
//           <p>Cap of five lifts for today. Finish them, then load more.</p>
//         </div>

//         <div>
//           <div>
//             <p>Exercises</p>
//             <h5>0</h5>
//           </div>

//           <div>
//             <p>Minutes</p>
//             <h5>0</h5>
//           </div>

//           <div>
//             <p>Calories</p>
//             <h5>0</h5>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default MyPlan
