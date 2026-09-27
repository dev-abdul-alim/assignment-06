"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext(null);

export const FitLogProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load data from localStorage after client hydration
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        const parsedPlan = JSON.parse(storedPlan);

        if (Array.isArray(parsedPlan)) {
          setTodayPlan(parsedPlan);
        }
      }

      if (storedSaved) {
        const parsedSaved = JSON.parse(storedSaved);

        if (Array.isArray(parsedSaved)) {
          setSavedWorkouts(parsedSaved);
        }
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(todayPlan));
  }, [todayPlan, isHydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(savedWorkouts));
  }, [savedWorkouts, isHydrated]);

  // Add workout to today's plan
  const addToPlan = (exercise) => {
    if (todayPlan.length >= 5) {
      return {
        success: false,
        message: "Today's plan can contain maximum 5 workouts.",
      };
    }

    const alreadyAdded = todayPlan.some(
      (item) => String(item.id) === String(exercise.id),
    );

    if (alreadyAdded) {
      return {
        success: false,
        message: "Workout is already in today's plan.",
      };
    }

    setTodayPlan((prev) => [...prev, exercise]);

    return {
      success: true,
      message: "Added to today's plan.",
    };
  };

  // Remove workout from today's plan
  const removeFromPlan = (id) => {
    setTodayPlan((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  // Save workout for later
  const saveForLater = (exercise) => {
    const alreadySaved = savedWorkouts.some(
      (item) => String(item.id) === String(exercise.id),
    );

    if (alreadySaved) {
      return {
        success: false,
        message: "Workout is already saved.",
      };
    }

    setSavedWorkouts((prev) => [...prev, exercise]);

    return {
      success: true,
      message: "Saved for later.",
    };
  };

  // Remove saved workout
  const removeSaved = (id) => {
    setSavedWorkouts((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  // Mark workout as done
  const markAsDone = (id) => {
    setTodayPlan((prev) =>
      prev.map((item) =>
        String(item.id) === String(id) ? { ...item, completed: true } : item,
      ),
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        isHydrated,
        addToPlan,
        removeFromPlan,
        saveForLater,
        removeSaved,
        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
