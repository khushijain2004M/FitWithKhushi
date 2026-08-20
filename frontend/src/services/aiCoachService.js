import { apiClient } from "./apiClient";


export const getReadinessScore = async () => {
  const res = await apiClient.get("/ai/readiness");
  return res.data;
};


export const getRecoveryInsight = async () => {
  const res = await apiClient.get("/ai/recovery");
  return res.data;
};


export const getWeeklyPlan = async () => {
  const res = await apiClient.get("/ai/weekly-plan");
  return res.data;
};


export const askCoach = async (message) => {
  const res = await apiClient.post("/ai/chat", {
    message,
  });

  return res.data;
};