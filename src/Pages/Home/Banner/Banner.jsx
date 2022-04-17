import React from "react";
import { Link } from "react-router-dom";
import doctorImg from "../../../images/doctor.jpg";
const Banner = () => {
  return (
    <div className="flex items-center p-2  flex-col-reverse md:flex-row md:p-10 justify-center bg-[#d6dad9] ">
      <div className="left-side text-center mt-5 md:text-left space-y-3 md:w-2/4 ">
        <h1 className=" text-3xl font-bold"> Dr. Nasir Uddin</h1>
        <p className="text-xl text-gray-800 font-semibold ">
          Professor & Head at Dept. of Oral and Maxillofacial Surgery
        </p>
        <div data-aos="fade-up" className="buttons">
          <Link
            to="/checkout"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base  md:text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              BOOK APPOINTMENT
            </span>
          </Link>

          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-base md:text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            {" "}
            GET SPECIAL OFFERS
          </button>
        </div>
      </div>

      <div className="right-side z-0 shadow-2xl rounded-full  bg-[#4659ed2d] ">
        <img
          className="w-80 z-2 cursor-pointer  h-80 "
          src={doctorImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
