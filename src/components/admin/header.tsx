import React from "react";
import logo from "../../nobabjada-2.png";
import {
  MdGridView, MdProductionQuantityLimits, MdSearch, MdSettings,
} from "react-icons/md";
import Offcanvas from "react-bootstrap/Offcanvas";
import { VscAccount } from "react-icons/vsc";
import superAdmin from "../../images/super_admin.jpg";
import "../../styles/dashboard.css";
import { HiViewGrid } from "react-icons/hi";
import { BsFileEarmarkPost } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks/useTypeSelector";
import { logout } from "../../redux/reducer/authSlices";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const dispatch = useAppDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userLogout = () => {
    dispatch(logout())
      .then(() => {
        window.location.reload();
        
      })
  }
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
        <input type="text" className=" border form-control" id="exampleFormControlInput1" placeholder="Search dashboard..." />
      </div>

      <div className="admin_second-nav">
        {/* <div>
          <MdMessage color="#000" size={20} />
        </div>
        <div>
          <VscBellDot color="#000" size={20} />
        </div> */}
        {/* <div className="dash"></div> */}
        <div className="admin-profile" >

          <Dropdown className="user-icon">
            <Dropdown.Toggle variant="outline-white" className="d-flex align-items-center border-0" id="dropdown-basic">
              <img src={superAdmin} className="" alt="logo" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" className="h6">Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <hr />
              <Dropdown.Item href="#/action-3" onClick={userLogout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
