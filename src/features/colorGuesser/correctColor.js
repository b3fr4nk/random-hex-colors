import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "#",
};

export const correctColorSlice = createSlice({
  name: "correctColor",
  initialState,
  reducers: {
    // Action and reducer
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = correctColorSlice.actions;
export default correctColorSlice.reducer;
