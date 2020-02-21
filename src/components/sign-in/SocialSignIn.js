import React from "react";
import Privacy from "./Privacy";

const SocialSignIn = () => {
  return (
    <>
      <div className="lg:flex-row bg-white border-2 border-blue-600 flex flex-col  py-5 m-6">
        {/** Main Image */}
        <div className="lg:w-3/5 flex flex-col justify-center">
          <img
            className=" w-full px-5"
            src="https://via.placeholder.com/600/600/771796"
            alt="img"
          />
        </div>
        {/** End Main Image */}
        <section className=" lg:w-2/5">
          <div className="flex flex-col items-center">
            <h1 className="w-4/5 font-bold py-8 text-2xl text-gray-700 pl-3">
              Hey Ambrose, Please Login To Your Account!
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="mt-4 w-3/5 text-white flex flex-col text-center items-center">
              <button className=" w-40 rounded-full py-2 inline-flex items-center justify-center bg-blue-700">
                <svg
                  className="w-5 h-5 mr-2 feather feather-facebook fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="text-xs">Login With Facebook</span>
              </button>
              <button className="mt-2 w-40 rounded-full py-2 rounded inline-flex items-center justify-center bg-blue-300">
                <svg
                  className="w-5 h-5 mr-2 feather feather-twitter fill-current "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                <span className="text-xs">Login With Twitter</span>
              </button>
            </div>
            <p className="text-gray-600 text-xs m-2 ">- OR -</p>
          </div>

          {/** Main form */}
          <div className="w-full flex flex-col items-center">
            <form className="w-4/5 bg-white px-4 pt-4 pb-2 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm  mb-2"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  className="w-full py-2 text-gray-700 leading-tight border-b"
                  id="emailAddress"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="passwordSocialSignIn"
                >
                  Password
                </label>
                <input
                  className=" w-full py-2 text-gray-700 mb-3 leading-tight border-b "
                  id="password"
                  type="passwordSocialSignIn"
                  placeholder="***************"
                />
              </div>
              <div className="flex flex-col font-bold text-gray-600 text-xs sm:flex-row sm:justify-between md:text-sm lg:flex-col">
                <div className="block">
                  <input type="checkbox" />
                  <label className="ml-1">Remember Me</label>
                </div>
                <a className="mt-1 sm:mt-0 text-blue-600">Forgot Password</a>
              </div>
              <div className="mt-4 font-bold text-base lg:text-xs">
                <button className="rounded-full h-8 w-20 bg-yellow-500 lg:w-16">
                  Login
                </button>
                <button className="ml-4 rounded-full h-8 w-20 border border-gray-500 lg:w-16">
                  Signup
                </button>
              </div>
            </form>
            <div className="w-4/5">
              <Privacy />
            </div>
          </div>
          {/** End Main form */}
        </section>
      </div>
      <p className="text-xs text-gray-800 px-6 py-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    </>
  );
};
export default SocialSignIn;
