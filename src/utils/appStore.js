import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import gptSliceReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSliceReducer,
    gpt: gptSliceReducer,
  },
});

export default appStore;
