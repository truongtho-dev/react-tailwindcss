import React from "react";

const PaymentInfo = () => {
  return (
    <>
      <div className="mt-3 flex flex-wrap justify-between">
        <div className="mr-5 mt-3 w-1/3">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-bold cursor-pointer">Payments</h2>
            <p className="mr-2 text-xs">Time variable</p>
          </div>
          <div className="h-24 w-full bg-white mt-1"></div>
        </div>
        <div className="mr-5 mt-3 w-1/4">
          <p>Money In</p>
          <div className="h-24 w-full min-w-64 bg-white mt-1"></div>
        </div>
        <div className="mt-3 w-1/4">
          <p>Money Out</p>
          <div className="h-24 w-full bg-white mt-1"></div>
        </div>
      </div>
    </>
  );
};
export default PaymentInfo;
