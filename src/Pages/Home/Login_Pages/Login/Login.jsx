import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase.init";
import SocialLogin from "../Social_Login/SocialLogin";
import UserLoading from "../../Loading/UserLoading";

const Login = () => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  // ! send password reset email
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  if (user) {
    navigate(from,{replace:true});
  }

  // ! sign in with email and password
  const [signInWithEmailAndPassword, existUser, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handlePasswordReset = async () => {
    if (userInfo.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  const handleLoginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(userInfo.email, userInfo.password);

  };

  return (
    <div className="border-2 mx-2  shadow-2xl rounded-lg my-10 md:w-4/6 md:mx-auto p-10  ">
      <form onSubmit={handleLoginUser}>
        <h1 className="text-center mb-3 text-2xl font-semibold"> Login </h1>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            Enter Your Email
          </label>

          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="email or username "
            required=""
            onBlur={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Enter Your password
          </label>
          <div className="relative">
            <input
              type={togglePassword ? "text" : "password"}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="password"
              required=""
              onBlur={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
            <span
              onClick={() => setTogglePassword(!togglePassword)}
              className="absolute top-2 cursor-pointer right-3 "
            >
              {" "}
              {togglePassword ? (
                <EyeOffIcon className="h-5 w-5 text-blue-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-blue-500" />
              )}
            </span>
          </div>
        </div>
        <div className="flex items-start mb-6">
          <div className="ml-3 text-sm">
            <button
              onClick={handlePasswordReset}
              className="text-blue-800 text-base md:text-sm hover:underline font-semibold "
            >
              Forget Password ?
            </button>
          </div>
        </div>
        {error && (
            <p className="text-red-700 text-sm font-semibold my-3 ">
              {error.message}{" "}
            </p>
          )}
        {sending && <UserLoading />}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base md:text-sm w-full  px-5 py-2.5 text-center "
        >
          Login
        </button>

        <p className=" mt-5 text-base md:text-sm  font-semibold">
          Dont't have an account ?{" "}
          <Link className=" text-blue-800 hover:underline  " to="/register">
            {" "}
            Create an Account{" "}
          </Link>
        </p>
      </form>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
