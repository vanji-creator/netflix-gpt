import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute bg-black">
        <img
          className="opacity-40"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background "
        />
      </div>
      <form className="absolute my-32 mx-auto right-0 left-0 w-3/12 p-12 bg-opacity-80 bg-black text-white rounded-md">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? <>Sign In</> : <>Sign Up</>}
        </h1>
        {isSignInForm ? null : (
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-gray-600 bg-opacity-40 border border-white my-4 w-full rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 bg-gray-600 bg-opacity-40 border border-white my-4 w-full rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 bg-gray-600 bg-opacity-40 border border-white my-4 w-full rounded-md"
        />
        <button className="w-full bg-red-700 p-2 my-6 rounded-md">
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p onClick={toggleSignIn} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
