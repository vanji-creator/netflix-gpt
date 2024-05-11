import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth/web-extension";
import { LOGO_URL, USER_ICON } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleGptView } from "../utils/gptSlice";

const HeaderBrowse = () => {
  const [backGroundColor, setBackGroundColor] = useState("bg-transparent");
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptClick = () => {
    //toggle gpt search component
    console.log("gpt clicked");
    dispatch(toggleGptView());
  };

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 600) {
      setBackGroundColor("bg-gray-700");
    } else {
      setBackGroundColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky w-screen top-0 px-8 py-2 bg-gradient-to-b from-black  ${backGroundColor} flex flex-col md:flex-row justify-between z-50 `}
    >
      <img className="w-32 " src={LOGO_URL} alt="logo" />
      <div className="flex ">
        <button
          className="px-2 mt-2 rounded-lg h-10 text-md bg-lime-400 cursor-pointer"
          onClick={handleGptClick}
        >
          GPT Search
        </button>
        <img
          className="w-10 h-10 rounded-md m-2 "
          alt="user-icon"
          src={USER_ICON}
        />
        <button className="text-white px-2" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default HeaderBrowse;
