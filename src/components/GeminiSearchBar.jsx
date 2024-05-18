import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants";
import {
  addAllMovies,
  addGeminiMovie,
  addGeminiResults,
} from "../utils/geminiSlice";

const GeminiSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Fetch your API_KEY
  const API_KEY = process.env.REACT_APP_GEMINI_KEY;
  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const fetchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGeminiSearchSubmit = async () => {
    const prompt =
      "act as a movie recommandation system and return an array of only 5 movie names based on the query,example format is comma separated values with no numbering ,like this  movie name,movie name ,movie name " +
      searchText.current.value;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("text", text);
    const movieArray = text
      .replace(/^"|"$/g, "")
      .split(",")
      .map((movie) => movie.trim());
    console.log("movie array", movieArray);
    const promiseArray = movieArray.map((movie) => fetchMovie(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log("promise array", promiseArray);
    console.log("tmdb results", tmdbResults);

    const filteredResults = tmdbResults.map((nestedArray) => {
      return nestedArray.filter((result) =>
        movieArray.includes(result.original_title.trim())
      );
    });
    console.log(filteredResults);
    dispatch(addGeminiMovie(filteredResults));
    dispatch(addAllMovies(tmdbResults));
    dispatch(addGeminiResults(movieArray));
  };

  return (
    <div>
      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-4 border border-black w-72 md:w-96 rounded-lg h-12 text-md"
          placeholder={lang.geminiPlaceholder[language]}
        />
        <button
          className="py-2 px-8 mt-4 h-12  border border-red-600 bg-gradient-to-tr from-red-600 rounded-lg"
          onClick={handleGeminiSearchSubmit}
        >
          {lang.gptSearch[language]}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
