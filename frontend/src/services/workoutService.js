import { apiClient } from "./apiClient";

export const getWorkouts = async () => {
  const res = await apiClient.get("/workouts");
  return res.data;
};

export const getTodayWorkout = async () => {
  const res = await apiClient.get("/workouts/today");
  return res.data;
};

export const createWorkout = async (data) => {
  const res = await apiClient.post("/workouts", data);
  return res.data;
};

export const updateWorkout = async (id, data) => {
  const res = await apiClient.put(`/workouts/${id}`, data);
  return res.data;
};

export const deleteWorkout = async (id) => {
  const res = await apiClient.delete(`/workouts/${id}`);
  return res.data;
};

export const getWorkoutById = async (id) => {
  const res = await apiClient.get(`/workouts/${id}`);
  return res.data;
};