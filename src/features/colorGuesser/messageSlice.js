import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "--",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    // Action and reducer
    setMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
