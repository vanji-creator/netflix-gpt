import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ category, movies }) => {

  return (
    <div className="px-4 ">
      <h1 className="font-bold text-lg md:text-2xl py-4 text-white">
        {category}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
