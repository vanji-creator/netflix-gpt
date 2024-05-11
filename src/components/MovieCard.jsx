import React from "react";
import { POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 ">
      <img src={POSTER_CDN + posterPath + ".jpg"} alt="" />
    </div>
  );
};

export default MovieCard;
