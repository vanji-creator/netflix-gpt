import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeaderBrowse from "./HeaderBrowse";
import Navigator from "./Navigator";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Navigator />
      <HeaderBrowse />
    </div>
  );
};

export default Browse;
