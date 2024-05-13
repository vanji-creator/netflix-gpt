import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div>
      <form className="flex justify-center">
        <input
          type="text"
          className="p-2 m-4 border border-black w-96 rounded-lg h-12 text-md"
          placeholder={lang.gptPlaceholder[language]}
        />
        <button className="py-2 px-8 mt-4 h-12  border border-red-600 bg-gradient-to-tr from-red-600 rounded-lg">
          {lang.gptSearch[language]}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
