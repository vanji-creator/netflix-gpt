import React from "react";
import { POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36 pr-4 ">
      <img src={POSTER_CDN + posterPath + ".jpg"} alt="" />
    </div>
  );
};

export default MovieCard;
