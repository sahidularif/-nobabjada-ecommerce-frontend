import React from "react";
import logo from "../../nobabjada-2.png";
import {
  MdGridView, MdMessage, MdProductionQuantityLimits, MdSearch, MdSettings,
} from "react-icons/md";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaCaretDown } from "react-icons/fa";
import { VscAccount, VscBellDot } from "react-icons/vsc";
import superAdmin from "../../images/super_admin.jpg";
import "../../styles/dashboard.css";
import { HiViewGrid } from "react-icons/hi";
import { BsFileEarmarkPost } from "react-icons/bs";

const Header = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="admin_header">

      <div className="dashboard_logo">
        <HiViewGrid className="side_menue_icon" color="green" size={30} onClick={() => setShow(!show)} />
        <img src={logo} alt="logo" />
        <div className="search_icon">
          <MdSearch />
        </div>
      </div>

      <div className="admin_search">
        <input type="text" placeholder="Search admin" />
      </div>

      <div className="admin_second-nav">
        <div>
          <MdMessage color="#000" size={20} />
        </div>
        <div>
          <VscBellDot color="#000" size={20} />
        </div>
        <div className="dash"></div>
        <div className="admin-profile">
          <img src={superAdmin} alt="admin image" height="30px" width="30px" />
          <FaCaretDown color="black" />
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} style={{ 'width': '40%' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>NOBABJADA</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="toggle_side_menue">
            <ul className="">
              <li className="">
                <a href="/">
                  <MdGridView size={20} /> <span>Dashboard</span>
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
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
