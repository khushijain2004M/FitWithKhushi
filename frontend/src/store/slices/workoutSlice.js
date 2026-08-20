import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getWorkouts,
  getTodayWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkoutById,
} from "../../services/workoutService";


// GET ALL WORKOUTS
export const fetchWorkouts = createAsyncThunk(
  "workout/fetchWorkouts",
  async () => {
    return await getWorkouts();
  }
);


// GET TODAY WORKOUT
export const fetchTodayWorkout = createAsyncThunk(
  "workout/fetchTodayWorkout",
  async () => {
    return await getTodayWorkout();
  }
);


// GET SINGLE WORKOUT
export const fetchWorkoutById = createAsyncThunk(
  "workout/fetchWorkoutById",
  async (id) => {
    return await getWorkoutById(id);
  }
);


// CREATE WORKOUT
export const addWorkout = createAsyncThunk(
  "workout/addWorkout",
  async (data) => {
    return await createWorkout(data);
  }
);


// UPDATE WORKOUT
export const editWorkout = createAsyncThunk(
  "workout/editWorkout",
  async ({ id, data }) => {
    return await updateWorkout(id, data);
  }
);


// DELETE WORKOUT
export const removeWorkout = createAsyncThunk(
  "workout/removeWorkout",
  async (id) => {
    await deleteWorkout(id);
    return id;
  }
);



const initialState = {
  workouts: [],
  todayWorkout: null,
  selectedWorkout: null,
  loading: false,
  error: null,
};



const workoutSlice = createSlice({
  name: "workout",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // GET ALL WORKOUTS
      .addCase(fetchWorkouts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchWorkouts.fulfilled, (state, action) => {
        state.loading = false;
        state.workouts = action.payload.workouts || [];
      })

      .addCase(fetchWorkouts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      // GET TODAY WORKOUT
      .addCase(fetchTodayWorkout.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchTodayWorkout.fulfilled, (state, action) => {
        state.loading = false;
        state.todayWorkout = action.payload.workout;
      })

      .addCase(fetchTodayWorkout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      // GET SINGLE WORKOUT
      .addCase(fetchWorkoutById.fulfilled, (state, action) => {
        state.selectedWorkout = action.payload.workout;
      })


      // CREATE WORKOUT
      .addCase(addWorkout.fulfilled, (state, action) => {
        state.workouts.unshift(
          action.payload.workout || action.payload
        );
      })


      // UPDATE WORKOUT
      .addCase(editWorkout.fulfilled, (state, action) => {
        const updated = action.payload.workout;

        state.workouts = state.workouts.map((workout) =>
          workout._id === updated._id
            ? updated
            : workout
        );
      })


      // DELETE WORKOUT
      .addCase(removeWorkout.fulfilled, (state, action) => {
        state.workouts = state.workouts.filter(
          (workout) => workout._id !== action.payload
        );
      });

  },
});


export default workoutSlice.reducer;