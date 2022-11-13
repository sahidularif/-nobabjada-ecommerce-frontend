import React from "react";
import { BsFileEarmarkPost } from "react-icons/bs";
import { MdGridView, MdProductionQuantityLimits, MdSettings } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const SideMenue = () => {
  return (
    <div className="dashboard_side_menue">
      <ul className="">
        <li className="">
          <a href="/">
            <MdGridView size={20} /> <span>sdsdfsf</span>
          </a>
        </li>
        <li>
          <a href="/">
            <VscAccount size={20} /> <span>Account</span>
          </a>
        </li>
        <li>
          <a href="/">
            <BsFileEarmarkPost size={20} /> <span>Article</span>
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <MdProductionQuantityLimits size={20} /> <span>Products</span>
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <MdSettings size={20} />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </div>
    
  );
};

export default SideMenue;
