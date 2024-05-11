import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  console.log("view on");
  return (
    <div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
