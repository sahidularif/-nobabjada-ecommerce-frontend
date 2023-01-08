import React from "react";
import "../../styles/dashboard.css";
import SideMenue from "./sideMenue";
import { ChieldProps } from "./admin";

const Dashboard = ({ chield }: ChieldProps) => {
  return (
    <div className="admin-container">
      <div className="dashboard">
        <SideMenue />
        <div className="dashboard_main">{chield}</div>
      </div>
    </div>
  );
};

export default Dashboard;
