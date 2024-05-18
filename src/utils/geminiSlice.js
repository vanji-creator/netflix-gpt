import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGeminiSearch: false,
    geminiMovies: null,
    allMovies: null,
    geminiResults: null,
  },
  reducers: {
    toggleGeminiView: (state) => {
      state.showGeminiSearch = !state.showGeminiSearch;
    },
    addGeminiMovie: (state, action) => {
      state.geminiMovies = action.payload;
    },
    addAllMovies: (state, action) => {
      state.allMovies = action.payload;
    },
    addGeminiResults: (state, action) => {
      state.geminiResults = action.payload;
    },
  },
});

export const {
  toggleGeminiView,
  addGeminiMovie,
  addAllMovies,
  addGeminiResults,
} = geminiSlice.actions;
export default geminiSlice.reducer;
