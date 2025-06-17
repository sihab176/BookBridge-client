import Lottie from "lottie-react";
import React from "react";
import ErrorAnimation from "../assets/Animation - 1750169016990.json";

const ErrorPage = () => {
  return (
    <div className="w-11/12 mx-auto md:my-20 max-w-[650px]  mt-40">
      <Lottie animationData={ErrorAnimation} loop={true}></Lottie>
    </div>
  );
};

export default ErrorPage;
