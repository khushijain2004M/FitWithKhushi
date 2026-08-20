import { apiClient } from "./apiClient";

export const getReadinessScore = async () => {
  return apiClient("/ai/readiness");
};

export const getRecoveryInsight = async () => {
  return apiClient("/ai/recovery");
};

export const getWeeklyPlan = async () => {
  return apiClient("/ai/weekly-plan");
};