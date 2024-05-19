import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Contact from "./Contact";

const GeminiSuggestions = () => {
  const { geminiResults, allMovies, geminiMovies } = useSelector(
    (store) => store.gemini
  );
  if (!geminiResults) return null;
  return (
    <div className="flex flex-col">
      <div className="bg-black min-h-screen flex-grow">
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
      <Contact />
    </div>
  );
};

export default GeminiSuggestions;
