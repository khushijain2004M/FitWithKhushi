import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getReadinessScore,
  getRecoveryInsight,
  getWeeklyPlan,
  askCoach,
} from "../../services/aiCoachService";

export const fetchReadiness = createAsyncThunk(
  "ai/fetchReadiness",
  async () => {
    return await getReadinessScore();
  }
);

export const fetchRecovery = createAsyncThunk(
  "ai/fetchRecovery",
  async () => {
    return await getRecoveryInsight();
  }
);

export const fetchWeeklyPlan = createAsyncThunk(
  "ai/fetchWeeklyPlan",
  async () => {
    return await getWeeklyPlan();
  }
);

export const sendMessage = createAsyncThunk(
  "ai/sendMessage",
  async (message) => {
    return await askCoach(message);
  }
);

const initialState = {
  readiness: null,
  recovery: null,
  weeklyPlan: null,
  chat: [],
  loading: false,
  error: null,
};

const aiCoachSlice = createSlice({
  name: "aiCoach",
  initialState,
  reducers: {
    clearChat: (state) => {
      state.chat = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // READINESS
      .addCase(fetchReadiness.fulfilled, (state, action) => {
        state.readiness = action.payload.readiness;
      })

      // RECOVERY
      .addCase(fetchRecovery.fulfilled, (state, action) => {
        state.recovery = action.payload.recovery;
      })

      // WEEKLY PLAN
      .addCase(fetchWeeklyPlan.fulfilled, (state, action) => {
        state.weeklyPlan = action.payload.weeklyPlan;
      })

      // CHAT
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.chat.push({
          type: "ai",
          text: action.payload.reply,
        });
      });
    },
});

export const { clearChat } = aiCoachSlice.actions;
export default aiCoachSlice.reducer;