const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getExercises = async () => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return res.json();
};
