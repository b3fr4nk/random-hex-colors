import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    // Action and reducer
    addColor: (state, action) => {
      state.value.push(action.payload);
    },
    clearColors: (state, action) => {
      state.value = [];
    },
  },
});

export const { addColor } = colorsSlice.actions;
export const { clearColors } = colorsSlice.actions;
export default colorsSlice.reducer;
