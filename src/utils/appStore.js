import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import gptSliceReducer from "./gptSlice";
import configSliceReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSliceReducer,
    gpt: gptSliceReducer,
    config: configSliceReducer,
  },
});

export default appStore;
