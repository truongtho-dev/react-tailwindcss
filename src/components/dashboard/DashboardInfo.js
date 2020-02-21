import React from "react";

const DashboardInfo = () => {
  return (
    <>
      <div>
        <div className="relative -ml-3 p-3">
          <div className="h-20 static bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="cursor-pointer feather feather-x-circle absolute top-0 right-0 bg-white border border-black rounded-full stroke-2"
            >
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardInfo;
