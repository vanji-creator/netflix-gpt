import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiSuggestions = () => {
  const { geminiResults, allMovies, geminiMovies } = useSelector(
    (store) => store.gemini
  );
  if (!geminiResults) return null;
  return (
    <div className="">
      <div className="bg-black">
        {allMovies.map((movieList, index) => (
          <MovieList
            key={index}
            category={geminiResults[index]}
            movies={movieList.map((movieNl) => movieNl)}
          />
        ))}
      </div>
      {/* <span>
        {geminiMovies.map((movieList) => (
          <MovieList
            key={2}
            category={"Gemini Results"}
            movies={movieList.map((movieNl) => movieNl)}
          />
        ))}
      </span> */}
    </div>
  );
};

export default GeminiSuggestions;
