import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getNutrition,
  getTodayNutrition,
  addMeal,
  updateMeal,
  deleteMeal,
} from "../../services/nutritionService";


// GET ALL NUTRITION
export const fetchNutrition = createAsyncThunk(
  "nutrition/fetchNutrition",
  async () => {
    return await getNutrition();
  }
);


// GET TODAY NUTRITION
export const fetchTodayNutrition = createAsyncThunk(
  "nutrition/fetchTodayNutrition",
  async () => {
    return await getTodayNutrition();
  }
);


// CREATE MEAL
export const createMeal = createAsyncThunk(
  "nutrition/createMeal",
  async (data) => {
    return await addMeal(data);
  }
);


// UPDATE MEAL
export const editMeal = createAsyncThunk(
  "nutrition/editMeal",
  async ({ id, data }) => {
    return await updateMeal(id, data);
  }
);


// DELETE MEAL
export const removeMeal = createAsyncThunk(
  "nutrition/removeMeal",
  async (id) => {
    await deleteMeal(id);
    return id;
  }
);



const initialState = {
  nutrition: [],
  todayNutrition: null,
  loading: false,
  error: null,
};



const nutritionSlice = createSlice({
  name: "nutrition",
  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder

      // GET ALL
      .addCase(fetchNutrition.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchNutrition.fulfilled, (state, action) => {
        state.loading = false;
        state.nutrition = action.payload.nutritions || [];
      })

      .addCase(fetchNutrition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      // TODAY
      .addCase(fetchTodayNutrition.fulfilled, (state, action) => {
        state.todayNutrition = action.payload.nutrition;
      })


      // CREATE
      .addCase(createMeal.fulfilled, (state, action) => {
        state.nutrition.unshift(
          action.payload.nutrition
        );
      })


      // UPDATE
      .addCase(editMeal.fulfilled, (state, action) => {

        const updated = action.payload.nutrition;

        state.nutrition = state.nutrition.map((item) =>
          item._id === updated._id
            ? updated
            : item
        );

      })


      // DELETE
      .addCase(removeMeal.fulfilled, (state, action) => {

        state.nutrition = state.nutrition.filter(
          (item) => item._id !== action.payload
        );

      });

  },
});


export default nutritionSlice.reducer;