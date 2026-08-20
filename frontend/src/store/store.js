import { configureStore } from "@reduxjs/toolkit";

import workoutReducer from "./slices/workoutSlice";
import authReducer from "./slices/authSlice";
import dashboardReducer from "./slices/dashboardSlice";
import nutritionReducer from "./slices/nutritionSlice";
import progressReducer from "./slices/progressSlice";
import aiCoachReducer from "./slices/aiCoachSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    workout: workoutReducer,
    dashboard: dashboardReducer,
    nutrition: nutritionReducer,
    progress: progressReducer,
    aiCoach: aiCoachReducer,
  },
});