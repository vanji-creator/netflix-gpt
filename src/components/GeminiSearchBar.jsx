import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
// import openai from "../utils/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GeminiSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const handleGeminiSearchSubmit = async () => {
    const prompt =
      "act as a movie recommandation system and return an array of only 5 movie names based on the query,example format [movie name,movie name,movie name]" +
      searchText.current.value;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  };

  // Fetch your API_KEY
  const API_KEY = "AIzaSyA4Ro8lyur1GSfHnFREI8Fa3V4bYDTXaY4";
  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  return (
    <div>
      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-4 border border-black w-96 rounded-lg h-12 text-md"
          placeholder={lang.gptPlaceholder[language]}
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
