import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <form className="flex justify-center">
        <input
          type="text"
          className="p-4 m-4 border border-black w-80 rounded-lg h-12"
          placeholder="Let me cook the best movie suggestions"
        />
        <button className="py-2 px-8 mt-4 h-12  border border-red-600 bg-gradient-to-tr from-red-600 rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
