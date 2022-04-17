import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div data-aos="flip-up" className=" flex flex-col md:flex-row mx-1  items-center border-2 border-blue-600 shadow-2xl md:w-4/5 md:mx-auto my-5 rounded-lg md:p-10  justify-center ">
      <div className="left-side">
        <img
          className=" w-96 rounded-lg "
          src="https://thumbs.dreamstime.com/b/funny-sleeping-style-professional-cartoon-doctor-vector-illustration-148337678.jpg"
          alt=""
        />
      </div>
      <div className="right-side text-center md:text-left  ">
        <h1 className="text-2xl font-bold text-red-600 ">
          We are sorry, the page you requested cannot be found.
        </h1>
        <Link
          to="/"
          className="relative my-5  inline-flex items-center justify-center p-0.5 mb-5 md:mb-2 mr-2 overflow-hidden md:text-sm text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            Back To Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
