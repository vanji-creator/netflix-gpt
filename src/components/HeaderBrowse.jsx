import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth/web-extension";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleGeminiView } from "../utils/geminiSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const HeaderBrowse = () => {
  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store.config.language);
  const showGemini = useSelector((store) => store.gemini.showGeminiSearch);
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

    dispatch(toggleGeminiView());
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
      className={`sticky w-screen top-0  md:px-8 md:py-2 bg-gradient-to-b from-black  ${backGroundColor} flex flex-col align-middle md:flex-row md:justify-between  z-50 `}
    >
      <img className="w-32 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex font-bold mx-auto md:mx-0 ">
          <select
            className="px-2  mt-2 rounded-lg h-10 text-md bg-transparent hover:text-slate-700   md:text-white cursor-pointer mr-2 w-28 text-center"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="px-2 mt-2 rounded-lg h-10 text-md bg-transparent md:text-white hover:text-slate-800 cursor-pointer mr-2 w-auto "
            onClick={handleGptClick}
          >
            {showGemini
              ? lang.header.home[language]
              : lang.header.geminiSearchButton[language]}
          </button>
          {/* <img
            className="w-10 h-10 rounded-md mr-2 mt-2"
            alt="user-icon"
            src={USER_ICON}
          /> */}
          <button
            className="md:text-white  test-xs px-2 bg-transparent border border-transparent hover:text-slate-800 rounded-md h-10 mt-2 w-28 mr-2"
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
