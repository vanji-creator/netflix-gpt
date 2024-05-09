import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerStore = useSelector((store) => store.movies?.movieTrailer?.key);
  useTrailer(movieId);
 
  return (
    <div
      className="w-screen "
      // className="relative w-screen h-screen"
    >
      <iframe
        className="w-screen aspect-video absolute -z-10 -inset-y-10"
        // className="max-w-full max-h-full bottom-0 left-0 m-auto overflow-auto fixed right-0 top-0 object-contain"
        // className="absolute inset-0 w-full h-full object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailerStore +
          "?&autoplay=1&hd=1&mute=1&loop=1&contols=0&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
