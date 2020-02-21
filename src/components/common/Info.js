import React from "react";

const Info = () => {
  return (
    <>
      <div className="p-3 flex flex-row justify-between border-b border-gray-600 mx-2">
        <div>
          <ul className="flex flex-row">
            <li className="flex items-center bg-gray-300 rounded-full px-2 cursor-pointer">
              <a>
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
              </a>
              {/** hidden on <sm */}
              <a className="ml-1">Send Money</a>
              {/** hidden on <sm */}
            </li>
            <li className="ml-3 flex items-center bg-gray-300 rounded-full px-2 cursor-pointer">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="feather feather-folder-minus"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  <line x1="9" y1="14" x2="15" y2="14"></line>
                </svg>
              </a>
              {/** hidden on <sm */}
              <a className="ml-1">Batch Payments</a>
              {/** hidden on <sm */}
            </li>
            <li className="ml-3 flex items-center bg-gray-300 rounded-full px-2 py-1 cursor-pointer">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
              {/** hidden on <sm */}
              <a className="ml-1">Deposit Money</a>
              {/** hidden on <sm */}
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Submersible Pte Ltd</p>
        </div>
      </div>
    </>
  );
};
export default Info;
