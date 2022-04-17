import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Social_Login/SocialLogin";

const Register = () => {
  return (
    <div className="border-2 mx-2  shadow-2xl rounded-lg my-10 md:w-4/6 md:mx-auto p-10  ">
      <form>
        <h1 className="text-center mb-3 text-2xl font-semibold"> Create an Account</h1>
        <div className="mb-6">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            Enter Your Name
          </label>

          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Full Name "
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            Enter Your Email
          </label>

          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="something@gmail.com "
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
           Create Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=" new password"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Repeat Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=" confirm password"
            required=""
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base md:text-sm w-full  px-5 py-2.5 text-center "
        >
          Create An Account
        </button>

        <p className=" mt-5 text-base md:text-sm  font-semibold">
          Already have an account ?{" "}
          <Link className=" text-blue-800 hover:underline  " to="/login">
            {" "}
            Login{" "}
          </Link>
        </p>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;
