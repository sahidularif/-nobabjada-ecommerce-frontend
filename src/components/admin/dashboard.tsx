import React, { ReactNode } from "react";
import "../../styles/dashboard.css";
import { MdGridView, MdSettings } from "react-icons/md";
import logo from "../../nobabjada-2.png";
import SideMenue from "./sideMenue";
import { ChieldProps } from "../pages/admin";

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
