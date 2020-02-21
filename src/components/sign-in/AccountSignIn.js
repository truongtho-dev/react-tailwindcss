import React from "react";
import Privacy from "./Privacy";

const AccountSignIn = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <img
          className=" w-48 h-8 px-5"
          src="https://via.placeholder.com/100/771796"
          alt="Brand"
        />

        <div className="w-full flex flex-col items-center">
          <h1 className=" w-4/5 font-bold text-4xl pl-4 mt-16">Sign In</h1>
          <form className="w-4/5 mt-12 bg-white px-4 pt-4 pb-2 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="emailOrMobileNumber"
              >
                Email Or Mobile Number
              </label>
              <input
                className="w-full py-2 text-gray-700 leading-tight border-b-2 border-gray-700"
                id="emailOrMobileNumber"
                type="text"
                placeholder="Email Or Mobile Number"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="passwordAccountSignIn"
              >
                Password
              </label>
              <input
                className="w-full py-2 text-gray-700 mb-3 leading-tight border-b-2 border-gray-700 "
                id="passwordAccountSignIn"
                type="password"
                placeholder="***************"
              />
            </div>
            <div className="flex flex-row justify-between items-center font-bold text-gray-600 text-xs md:text-sm">
              <div className="block">
                <input type="checkbox" />
                <label className="ml-1">Remember Me</label>
              </div>
              <a>Forgot Password</a>
            </div>

            <button className="rounded-full h-8 w-full border-2 font-bold text-gray-600 border-gray-600 mt-10">
              Login
            </button>
          </form>
          <div className="flex">
            <p>Don't have an account? </p>
            <a href="#" className="text-blue-600 ml-2">
              Sign Up
            </a>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center mt-10">
        <Privacy />
        <a href="#" className="text-blue-600 text-sm ml-2">
          | Licenses
        </a>
      </div>
    </>
  );
};
export default AccountSignIn;
