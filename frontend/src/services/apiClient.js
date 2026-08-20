import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/api";

export const apiClient = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
