import React from "react";

const SocialLogin = () => {
  return (
    <div className="my-5 text-center ">
      <div className=" flex items-center justify-center ">
        <div className=" w-52 ring-1 ring-blue-500 mr-2 "></div>
        or
        <div className=" w-52 ring-1 ring-blue-500 ml-2 "></div>
      </div>

      <div className="buttons  text-center mt-5 ">
        <button
          type="button"
          className="text-black w-full  border-2 items-center justify-center flex focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-base md:text-sm px-5 py-2 "
        >
          <img
            className="w-8 mr-2 "
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="Continue With Google"
          />
          <span className=" font-semibold">Continue With Google</span>
        </button>

        <button
          type="button"
          className="text-black w-full mt-5 border-2 items-center justify-center flex focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-base md:text-sm px-5 py-2 "
        >
          <img
            className="w-8 mr-2 "
            src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
            alt="Continue With Google"
          />
          <span className=" font-semibold">Continue With Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
