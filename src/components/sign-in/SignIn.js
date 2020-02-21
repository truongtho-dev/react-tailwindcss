import React from "react";
import SocialSignIn from "./SocialSignIn";
import AccountSignIn from "./AccountSignIn";

const SignIn = () => {
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row">
        <div className="md:w-3/5 flex flex-col justify-between sm:py-16 lg:py-32 ">
          <SocialSignIn />
        </div>

        <div className="md:w-2/5 flex">
          <div className="w-full border-l-2 border-gray-700 my-20 md:py-12 flex flex-col justify-between text-justify">
            <AccountSignIn />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
