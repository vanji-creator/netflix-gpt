import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth/web-extension";
import { LOGO_URL, USER_ICON } from "../utils/constants";

const HeaderBrowse = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-32 " src={LOGO_URL} alt="logo" />
      <div className="flex ">
        <img
          className="w-10 h-10 rounded-md m-2"
          alt="user-icon"
          src={USER_ICON}
        />
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );
};

export default HeaderBrowse;
