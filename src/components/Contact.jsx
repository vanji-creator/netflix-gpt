import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" w-screen h-1/4 bg-red-800 text-slate-400 inset-y-full left-0 text-center  py-5 mt-auto ">
      <h1>Contact</h1>
      <p>+91 63822 85582</p>
      <Link to={"https://x.com/Vik_Vilgax"} target="_blank">
        https://x.com/Vik_Vilgax
      </Link>
    </div>
  );
};

export default Contact;
