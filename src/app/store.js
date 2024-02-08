import { configureStore } from "@reduxjs/toolkit";

import colorsReducer from "../features/colorGuesser/colorSlice";
import messageSlice from "../features/colorGuesser/messageSlice";
import correctColor from "../features/colorGuesser/correctColor";

export const store = configureStore({
  reducer: {
    // color slice
    colors: colorsReducer,
    correctColor: correctColor,
    message: messageSlice,
  },
});
