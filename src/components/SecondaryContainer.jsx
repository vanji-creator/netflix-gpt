import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-56 relative z-20 pl-12">
        <MovieList category={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList category={"Popular"} movies={movies.popularMovies} />
        <MovieList category={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList category={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
