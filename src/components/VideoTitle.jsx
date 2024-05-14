import React, { useEffect, useState } from "react";


const VideoTitle = ({ title, overview }) => {
  const [showOverView, setShowOverView] = useState(true);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setShowOverView(false);
    }, 5000);

    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <div className="pt-[23%] px-12 absolute text-white  aspect-video z-10">
      <h1 className="text-4xl font-bold py-2 w-screen">{title}</h1>
      {showOverView && <p className="text-md w-1/2 ">{overview}</p>}
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
