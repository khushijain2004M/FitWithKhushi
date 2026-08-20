import { apiClient } from "./apiClient";

export const getDashboardData = async () => {
  const response = await apiClient.get("/dashboard");
  return response.data;
};

export const getTodaySnapshot = async () => {
  const response = await apiClient.get("/dashboard/today");
  return response.data;
};

export const getWeeklyActivity = async () => {
  const response = await apiClient.get("/dashboard/weekly");
  return response.data;
};