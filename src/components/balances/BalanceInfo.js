import React from "react";

const BalanceInfo = () => {
  return (
    <>
      <div className="mt-3">
        <h2 className="font-bold cursor-pointer">Balances</h2>
        <div className="flex flex-wrap">
          <div className="h-16 bg-white w-40 flex items-center justify-center mr-2 my-2"></div>
          <div className="h-16 bg-white w-40 flex items-center justify-center mr-2 my-2"></div>
          <div className="h-16 bg-white w-40 flex items-center justify-center mr-2 my-2"></div>
          <div className="h-16 bg-white w-40 flex items-center justify-center mr-2 my-2"></div>
          <div className="h-16 bg-white w-40 flex items-center justify-center mr-2 my-2"></div>
          <div className="h-16 bg-white w-32 flex items-center justify-center mr-2 my-2 cursor-pointer">
            View All
          </div>
        </div>
      </div>
    </>
  );
};
export default BalanceInfo;
