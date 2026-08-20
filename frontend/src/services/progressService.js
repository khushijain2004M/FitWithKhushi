import { apiClient } from "./apiClient";

export const getProgress = async () => {
  const res = await apiClient.get("/progress");
  return res.data;
};



export const getLatestProgress = async () => {
  try {
    const res = await apiClient.get("/progress/latest");
    return res.data;
  } catch (err) {
    console.log("Progress latest error:", err.response?.data || err.message);
    return { latestProgress: null };
  }
};

export const addProgress = async (data) => {
  const res = await apiClient.post("/progress", data);
  return res.data;
};

export const updateProgress = async (id, data) => {
  const res = await apiClient.put(`/progress/${id}`, data);
  return res.data;
};

export const deleteProgress = async (id) => {
  const res = await apiClient.delete(`/progress/${id}`);
  return res.data;
};