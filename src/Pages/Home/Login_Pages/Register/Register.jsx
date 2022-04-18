import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SocialLogin from "../Social_Login/SocialLogin";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { auth } from "../../../../firebase.init";
import Loading from "../../Loading/Loading";
import UserLoading from "../../Loading/UserLoading";

const Register = () => {
  const [user] = useAuthState(auth)
  // ! get user information from input field.
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    firebaseError: "",
  });
  // show password or hide password
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate()
  // ! create user with firebase hooks
  const [createUserWithEmailAndPassword, newUser, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // ! update user name
  const [updateProfile] = useUpdateProfile(auth);

  const handleNameBlur = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };

  const handleEmailBlur = (e) => {
    const emailRegEx = /\S+@\S+\.\S+/;
    const validEmail = emailRegEx.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setErrors({ ...errors, emailError: "Please enter a valid email" });
      setUserInfo({ ...userInfo, email: "" });
      return;
    }
  };

  const handlePasswordBlur = (e) => {
    const passwordRegEx = /.{6,}/;
    const validPassword = passwordRegEx.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({
        ...errors,
        passwordError: "Your password length should be 6 or longer",
      });
      setUserInfo({ ...userInfo, password: "" });
      return;
    }
  };

  const handleConfirmPasswordBlur = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, confirmPasswordError: "" });
    } else {
      setErrors({
        ...errors,
        confirmPasswordError: "Your two password dont match",
      });
      setUserInfo({ ...userInfo, confirmPassword: "" });
      return;
    }
  };

  if(user) {
    navigate('/home')
  }

  const handleCreateUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    await updateProfile({ displayName: userInfo.name });
   
  };

  return (
    <div className="border-2 mx-2  shadow-2xl rounded-lg my-10 md:w-4/6 md:mx-auto p-10  ">
      <form onSubmit={handleCreateUser}>
        <h1 className="text-center mb-3 text-2xl font-semibold">
          {" "}
          Create an Account
        </h1>
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
            onBlur={handleNameBlur}
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
            onBlur={handleEmailBlur}
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Create Password
          </label>
          <div className="relative">
            <input
              type={togglePassword ? "text" : "password"}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder=" new password"
              required=""
              onBlur={handlePasswordBlur}
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
          {/* show errors if */}
          {errors.passwordError && (
            <p className="text-red-700 text-sm font-semibold my-3 ">
              {" "}
              {errors.passwordError}{" "}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            for="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Repeat Password
          </label>
          <div className="relative">
            <input
              type={togglePassword ? "text" : "password"}
              id="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder=" new password"
              required=""
              onBlur={handleConfirmPasswordBlur}
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
          {/* show errors if */}
          {errors.confirmPasswordError && (
            <p className="text-red-700 text-sm font-semibold my-3 ">
              {" "}
              {errors.confirmPasswordError}{" "}
            </p>
          )}
          {firebaseError && (
            <p className="text-red-700 text-sm font-semibold my-3 ">
              {firebaseError.message}{" "}
            </p>
          )}
        </div>
        {loading && <UserLoading />}
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
