import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth/web-extension";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const HeaderBrowse = () => {
  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store.config.language);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
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

    dispatch(toggleGptView());
  };

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 150) {
      setBackGroundColor("bg-gray-700");
    } else {
      setBackGroundColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={`sticky w-screen top-0 px-8 py-2 bg-gradient-to-b from-black  ${backGroundColor} flex flex-col md:flex-row justify-between z-50 `}
    >
      <img className="w-32 " src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex font-bold">
          <select
            className="px-2 mt-2 rounded-lg h-10 text-md bg-transparent hover:text-slate-700  text-white cursor-pointer mr-2 w-28 text-center"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="px-2 mt-2 rounded-lg h-10 text-md bg-transparent text-white hover:text-slate-800 cursor-pointer mr-2 w-auto "
            onClick={handleGptClick}
          >
            {showGpt
              ? lang.header.home[language]
              : lang.header.gptSearchButton[language]}
          </button>
          {/* <img
            className="w-10 h-10 rounded-md mr-2 mt-2"
            alt="user-icon"
            src={USER_ICON}
          /> */}
          <button
            className="text-white  test-xs px-2 bg-transparent border border-transparent hover:text-slate-800 rounded-md h-10 mt-2 w-28 mr-2"
            onClick={handleSignOut}
          >
            {lang.header.signOut[language]}
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderBrowse;
