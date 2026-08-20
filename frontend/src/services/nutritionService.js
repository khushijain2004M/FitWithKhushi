import { apiClient } from "./apiClient";

export const getNutrition = async () => {
  const res = await apiClient.get("/nutrition");
  return res.data;
};

export const getTodayNutrition = async () => {
  const res = await apiClient.get("/nutrition/today");
  return res.data;
};

export const addMeal = async (data) => {
  const res = await apiClient.post("/nutrition", data);
  return res.data;
};

export const updateMeal = async (id, data) => {
  const res = await apiClient.put(`/nutrition/${id}`, data);
  return res.data;
};

export const deleteMeal = async (id) => {
  const res = await apiClient.delete(`/nutrition/${id}`);
  return res.data;
};