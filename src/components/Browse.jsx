import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import HeaderBrowse from "./HeaderBrowse";
import MainContainer from "./MainContainer";
import Navigator from "./Navigator";
import SecondaryContainer from "./SecondaryContainer";
import GeminiSearch from "./GeminiPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGeminiSearch = useSelector(
    (store) => store.gemini.showGeminiSearch
  );
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="scrollbar-hide ">
      <Navigator />
      <HeaderBrowse />
      {showGeminiSearch ? (
        <GeminiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
