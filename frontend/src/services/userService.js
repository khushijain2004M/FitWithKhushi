import { apiClient } from "./apiClient";

export const getUserProfile = async () => {
  return apiClient("/user/profile");
};

export const updateUserStats = async (data) => {
  return apiClient("/user/update", {
    method: "POST",
    body: JSON.stringify(data),
  });
};