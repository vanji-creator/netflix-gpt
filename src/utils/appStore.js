import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import geminiSliceReducer from "./geminiSlice";
import configSliceReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSliceReducer,
    gemini: geminiSliceReducer,
    config: configSliceReducer,
  },
});

export default appStore;
