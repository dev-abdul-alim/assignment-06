"use client";

import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogProvider/page";

const Navbar = () => {
  const pathname = usePathname();

  const { todayPlan, savedWorkouts, isHydrated } = useFitLog();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/plan";

  const planCount = isHydrated ? todayPlan.length : 0;
  const savedCount = isHydrated ? savedWorkouts.length : 0;

  return (
    <header className="sticky top-0 z-50 border-b border-[#292d35] bg-[#101216]/95 backdrop-blur-md">
      <nav className="mx-auto flex min-h-[72px] max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <Image
            src={logo}
            alt="FitLog logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
          />

          <span className="hidden text-xl font-black tracking-tight text-white sm:block">
            FIT<span className="text-[#c6ff00]">LOG</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-[#292d35] bg-[#181b21] p-1 md:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition ${
              isWorkoutActive
                ? "bg-[#c6ff00] text-black"
                : "text-[#aeb3bd] hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/plan"
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition ${
              isPlanActive
                ? "bg-[#c6ff00] text-black"
                : "text-[#aeb3bd] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Plan */}
          <Link
            href="/plan?tab=plan"
            className="group flex items-center gap-1.5 rounded-full bg-[#2b2c29] px-3 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#1e2019] sm:px-4 sm:text-sm"
          >
            {/* <i className="ri-list-check-2 text-base sm:text-lg" /> */}

            <span className="hidden sm:inline">Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6ff00] px-1 text-[10px] text-black sm:h-6 sm:min-w-6 sm:text-xs">
              {planCount}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/plan?tab=saved"
            className="group flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-gray-500  sm:px-4 sm:text-sm"
          >
            {/* <i className="ri-bookmark-line text-base sm:text-lg" /> */}

            <span className="hidden sm:inline">Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-500 px-1 text-[10px] text-white sm:h-6 sm:min-w-6 sm:text-xs">
              {savedCount}
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="border-t border-[#292d35] px-4 py-2 md:hidden">
        <div className="mx-auto flex max-w-[1400px] items-center justify-center gap-2">
          <Link
            href="/"
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition ${
              isWorkoutActive
                ? "bg-[#c6ff00] text-black"
                : "text-[#aeb3bd] hover:bg-[#181b21] hover:text-white"
            }`}
          >
            <i className="ri-dumbbell-line text-base" />
            Workout
          </Link>

          <Link
            href="/plan?tab=plan"
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition ${
              isPlanActive
                ? "bg-[#c6ff00] text-black"
                : "text-[#aeb3bd] hover:bg-[#181b21] hover:text-white"
            }`}
          >
            <i className="ri-calendar-check-line text-base" />
            My Plan
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
