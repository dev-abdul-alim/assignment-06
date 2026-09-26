import Image from "next/image";
import React from "react";
import heroImg from "../../../public/banner.png";

const HeroPage = () => {
  return (
    <section className="bg-[#0f1014] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1110px] overflow-hidden rounded-2xl border border-[#292d35] bg-[#1a1d23]">
        <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12 lg:px-14">
            <p className="mb-7 text-sm font-bold uppercase tracking-wide text-[#c6ff00]">
              Workout Library
            </p>

            <h1 className="max-w-[600px] text-5xl font-black uppercase leading-[0.98] tracking-tight text-[#e7e9ed] sm:text-6xl lg:text-[58px] xl:text-[62px]">
              Train with intent. log
              <br />
              every set.
            </h1>

            <p className="mt-7 max-w-[530px] text-base leading-7 text-[#b7bbc4] sm:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <div className="mt-7">
              <a
                href="#library"
                className="
                  inline-flex
                  rounded-xl
                  bg-[#c6ff00]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-black
                  transition
                  duration-200
                  hover:bg-[#d4ff33]
                  hover:shadow-[0_0_25px_rgba(198,255,0,0.15)]
                  active:scale-95
                "
              >
                Browse Workouts
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex min-h-[400px] items-center justify-center lg:min-h-0">
            <Image
              src={heroImg}
              alt="Workout training"
              priority
              className="
                h-auto
                w-[85%]
                max-w-[560px]
                object-contain
                sm:w-[75%]
                lg:w-full
                lg:max-w-[600px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
