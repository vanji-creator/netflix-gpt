import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationResult, setValidationResult] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    //validation logic
    const message = validateData(emailValue, passwordValue);
    setValidationResult(message);
    if (message !== null) return;
    //Sign In /Sign Up Logic
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationResult(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationResult(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute bg-black">
        <img
          className="opacity-40 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background "
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-32 mx-auto right-0 left-0 w-3/12 p-12 bg-opacity-80 bg-black text-white rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? <>Sign In</> : <>Sign Up</>}
        </h1>
        {/* {isSignInForm ? null : (
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-gray-600 bg-opacity-20 border border-white my-4 w-full rounded-md"
          />
        )} */}

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-gray-600 bg-opacity-20 border border-white my-4 w-full rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 bg-gray-600 bg-opacity-20 border border-white my-4 w-full rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 bg-gray-600 bg-opacity-20 border border-white my-4 w-full rounded-md"
        />

        <p className="text-red-500">{validationResult}</p>

        <button
          className="w-full bg-red-700 p-2 my-6 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p onClick={toggleSignIn} className="cursor-pointer">
          {isSignInForm
            ? "New to NetflixGPT? Sign up now."
            : "Already have an account? Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
