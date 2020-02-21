import React from "react";

const DashboardRecentActivity = () => {
  return (
    <>
      <div className="my-3">
        <h2 className="m-b-3 font-bold">Recent Activities</h2>
        <div>
          <p className="text-xs">Time variable 1</p>
          <div className="flex justify-between border-t border-gray-700 h-12 ">
            <div className="flex justify-center items-center">
              <i className="flex justify-center items-center bg-teal-400 rounded-full h-8 w-8 border border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </i>
              <div className="flex flex-col justify-center p-2 text-xs">
                <p>To customer</p>
                <p>Status</p>
              </div>
            </div>
            <div className="mr-4">
              <div className="relative">
                <select
                  className="block appearance-none w-full py-3 px-4 pr-8 leading-tight bg-gray-400 focus:outline-none"
                  id="grid-state-1"
                >
                  <option>Item-1</option>
                  <option>Item-2</option>
                  <option>Item-3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-xs">Time variable 2</p>
          <div className="flex justify-between border-t border-gray-700 h-12 ">
            <div className="flex">
              <i className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-plus-circle bg-green-600 rounded-full"
                >
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </i>
              <div className="flex flex-col justify-center p-2 text-xs">
                <p>To customer</p>
                <p>Status</p>
              </div>
            </div>
            <div className="mr-4">
              <div className="relative">
                <select
                  className="block appearance-none w-full py-3 px-4 pr-8 leading-tight bg-gray-400 focus:outline-none"
                  id="grid-state-2"
                >
                  <option>Item-1</option>
                  <option>Item-2</option>
                  <option>Item-3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardRecentActivity;
