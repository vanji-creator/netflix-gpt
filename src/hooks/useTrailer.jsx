import { useEffect } from "react";
// import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrailer = (id) => {
  const dispatch = useDispatch();
  // const [trailer, setTrailer] = useState(null);
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const fetchTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailerData = filterData.length ? filterData[0] : json.results[0];
    // setTrailer(trailerData.key);
    dispatch(addTrailer(trailerData));
  };
  useEffect(() => {
    !movieTrailer && fetchTrailer();
  }, []);
};

export default useTrailer;
