import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeaderBrowse from "./HeaderBrowse";
import MainContainer from "./MainContainer";
import Navigator from "./Navigator";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <Navigator />
      <HeaderBrowse />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        -main container
          -video
          -video title
        -second container
          -movie lists
     */}
    </div>
  );
};

export default Browse;
