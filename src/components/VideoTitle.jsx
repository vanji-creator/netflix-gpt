import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-20 ">
      <h1 className="text-4xl font-bold py-2">{title}</h1>
      <p className="text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white border border-black rounded-md text-black text-lg  px-5 py-1 m-1">
          Play
        </button>
        <button className="bg-white border border-black rounded-md text-black text-lg   px-5 py-1 m-1">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
