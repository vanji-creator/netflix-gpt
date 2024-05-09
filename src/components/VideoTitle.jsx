import React from "react";
import "../utils/playIcon.svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] px-24 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold py-2">{title}</h1>
      <p className="text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black rounded-md text-lg  px-8 py-2 m-1 hover:opacity-50">
          Play
        </button>
        <button className="bg-gray-500 bg-opacity-50  rounded-md text-lg   px-6 py-2 m-1">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
