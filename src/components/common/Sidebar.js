import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="bg-gray-700 text-white md:w-64 hidden md:flex md:flex-col md:justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-center h-24 border-b">
            <h1 className="text-2xl font-bold cursor-pointer">TranSwap</h1>
          </div>

          <div className="flex flex-col font-bold">
            <ul className="w-full px-4 ">
              <li className="py-2 ">
                <a>
                  <i></i>
                  <span className="cursor-pointer">Dashboard</span>
                </a>
              </li>

              <li className="border-b py-2">
                <a>
                  <i></i>
                  <span className="cursor-pointer">Reports</span>
                </a>
              </li>
              <li className="py-2">
                <a>
                  <i></i>
                  <span className="cursor-pointer">Balances</span>
                </a>
              </li>
              <li className="py-2">
                <a>
                  <i></i>
                  <span className="cursor-pointer">Payments</span>
                </a>
              </li>
              <li className="border-b py-2">
                <a>
                  <i></i>
                  <span className="cursor-pointer">Conversions</span>
                </a>
              </li>
              <li className="py-2">
                <a>
                  <i></i>
                  <span className="cursor-pointer">Contacts</span>
                </a>
              </li>
              <li className="py-2">
                <a>
                  <i></i>
                  <span className="cursor-pointer">Setting</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-full px-4 font-bold mt-20">
            <h1 className="py-2">Admin</h1>
            <a className="py-2 cursor-pointer">Help Center</a>
            <p className="py-2 cursor-pointer">Log out</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 py-6 border-t ">
          <div className="border-red-300">Footer Component</div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
