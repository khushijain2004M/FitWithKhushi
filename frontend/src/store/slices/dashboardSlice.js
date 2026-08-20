import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardData } from "../../services/dashboardService";

// THUNK
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async () => {
    const res = await getDashboardData();

    return res;
  }
);

const initialState = {
  data: {
    user: null,
    stats: null,
    recentWorkouts: [],
    latestProgress: null,
    todayNutrition: null,
    weeklyActivity: [],
  },
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // now correct shape
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;