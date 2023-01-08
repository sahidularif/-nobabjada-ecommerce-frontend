import React, { useTransition } from "react";
import { BsFileEarmarkPost } from "react-icons/bs";
import { MdGridView, MdProductionQuantityLimits, MdSettings } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import Accordion from 'react-bootstrap/Accordion';
import { CgShoppingBag } from "react-icons/cg";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineFundView } from "react-icons/ai";
const SideMenue = () => {
  const [show, setShow] = React.useState(false)
  return (
    <div className="dashboard_side_menue">
      <ul>
        <li><a href="overview"><AiOutlineFundView size={20} /> <span>Overview</span></a></li>
      </ul>
      <div className="collapse_menue">
        <a className="collapse_icon" onClick={() => setShow(!show)}>
          <span className="d-flex align-items-center"><CgShoppingBag size={20} /> &nbsp; Ecommerce </span>
          <span><HiOutlineChevronDown style={{ transform: `${!show ? 'rotate(360deg)' : 'rotate(180deg)'}` }} /></span>
        </a>
        <ul className={`${show ? 'active' : 'hide'}`} aria-controls="collapse-text">
          <li className="">
            <a href="/dashboard/products">
              <span>Products</span>
            </a>
          </li>
          <li className="">
            <a href="/dashboard/categories">
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/orders">
              <span>Orders</span>
            </a>

          </li>
          <li>
            <a href="/dashboard/invoice">
              <span>Invoice</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/customers">
              <span>Customers</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/product">
              <span>Add Product</span>
            </a>
          </li>
        </ul>
      </div>
      <ul className="">
        <li>
          <a href="/">
            <VscAccount size={20} /> <span>Account</span>
          </a>
        </li>
        <li>
          <a href="/dashboard/articles">
            <BsFileEarmarkPost size={20} /> <span>Article</span>
          </a>
        </li>
        <li>
          <a href="/dashboard/products">
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
