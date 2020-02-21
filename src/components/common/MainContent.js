import React from "react";
import Info from "./Info";
import Process from "./Process";
import Dashboard from "../dashboard/Dashboard";

const MainContent = () => {
  return (
    <>
      <div className="bg-white w-full flex flex-col">
        <Info />
        <Process />
        <Dashboard />
      </div>
    </>
  );
};
export default MainContent;
