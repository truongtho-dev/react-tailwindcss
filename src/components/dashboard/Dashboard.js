import React from "react";
import DashboardInfo from "./DashboardInfo";
import BalanceInfo from "../balances/BalanceInfo";
import PaymentInfo from "../payments/PaymentInfo";
import DashboardRecentActivity from "./DashboardRecentActivity";

const Dashboard = () => {
  return (
    <>
      <div className="h-full p-3 bg-gray-400 m-2 flex flex-col">
        <DashboardInfo />
        <BalanceInfo />
        <PaymentInfo />
        <DashboardRecentActivity />
      </div>
    </>
  );
};
export default Dashboard;
