import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getProgress,
  getLatestProgress,
  addProgress,
  updateProgress,
  deleteProgress,
} from "../../services/progressService";


// GET ALL
export const fetchProgress = createAsyncThunk(
  "progress/fetchProgress",
  async () => {
    return await getProgress();
  }
);


// GET LATEST
export const fetchLatestProgress = createAsyncThunk(
  "progress/fetchLatestProgress",
  async () => {
    return await getLatestProgress();
  }
);


// CREATE
export const createProgress = createAsyncThunk(
  "progress/createProgress",
  async (data) => {
    return await addProgress(data);
  }
);


// UPDATE
export const editProgress = createAsyncThunk(
  "progress/editProgress",
  async ({ id, data }) => {
    return await updateProgress(id, data);
  }
);


// DELETE
export const removeProgress = createAsyncThunk(
  "progress/removeProgress",
  async (id) => {
    await deleteProgress(id);
    return id;
  }
);



const initialState = {
  progress: [],
  latestProgress: null,
  loading: false,
  error: null,
};



const progressSlice = createSlice({

  name: "progress",

  initialState,

  reducers: {},


  extraReducers: (builder) => {

    builder

      // GET ALL
      .addCase(fetchProgress.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.progress = action.payload.progresses || [];
      })

      .addCase(fetchProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      // LATEST
      .addCase(fetchLatestProgress.fulfilled, (state, action) => {
        state.latestProgress =
          action.payload.latestProgress || null;
      })


      // CREATE
      .addCase(createProgress.fulfilled, (state, action) => {
        state.progress.unshift(action.payload.progress);
      })


      // UPDATE
      .addCase(editProgress.fulfilled, (state, action) => {

        const updated = action.payload.progress;

        state.progress = state.progress.map((item) =>
          item._id === updated._id
            ? updated
            : item
        );

      })


      // DELETE
      .addCase(removeProgress.fulfilled, (state, action) => {

        state.progress = state.progress.filter(
          (item) => item._id !== action.payload
        );

      });

  },

});


export default progressSlice.reducer;