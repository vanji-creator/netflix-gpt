import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import Contact from "./Contact";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const currentLanguage = useSelector((store) => store.config.language);

  return (
    <div className="bg-black">
      <div className="md:-mt-56 relative z-20 ">
        <MovieList
          category={lang.categories.nowPlaying[currentLanguage]}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          category={lang.categories.popular[currentLanguage]}
          movies={movies.popularMovies}
        />
        <MovieList
          category={lang.categories.topRated[currentLanguage]}
          movies={movies.topRatedMovies}
        />
        <MovieList
          category={lang.categories.upcoming[currentLanguage]}
          movies={movies.upcomingMovies}
        />
        <Contact />
      </div>
    </div>
  );
};

export default SecondaryContainer;
