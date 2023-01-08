import React from "react";
import "../../styles/style.css";
import logo from "../../images/watch1.png";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSupportAgent, MdSecurityUpdateGood } from "react-icons/md";
const Herosection = () => {
  return (
    <div className="justify-content-center ">
      <div className="hero-wrapper">
        <div className="hero-main">
          <div className="hero-heading">
            {/* <h5 className="fs-secondary-heading">New Wire</h5> */}
            {/* <h1 className="fs-normal-heading fw-bold">New Wire</h1> */}
            <h1 className="fs-lge-heading">
              APPLE <br />
              SMARTWATCH
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora praesentium ad.</p>
            <button className="button bg-neutral-100 text-neutral-900 mt-5">
              Shop By Category
            </button>
          </div>
          <div className="hero-description">
            <img className="hero-image" src={logo} />         
          </div>
        </div>
        <div className="hero-service">
          <div className="process">
            <div>
              <TbTruckDelivery size={30} color="#000" />
            </div>
            <div>
              <h5>Free Shipping</h5>
              <p>Free Shipping On All Order</p>
            </div>
          </div>
          <div className="process">
          <RiSecurePaymentLine size={30} color="#000" />
            <div>
              <h5>Money Gurantee</h5>
              <p>30 Days Money Back</p>
            </div>
          </div>
          <div className="process">
            <div>
              <MdSupportAgent size={30} color="#000" />
            </div>
            <div>
              <h5>24/7 Online Support</h5>
              <p>Technical Support 24/7</p>
            </div>
          </div>
          <div className="process">
            <div>
              <MdSecurityUpdateGood size={30} color="#000" />
            </div>
            <div>
              <h5>Secure Payment</h5>
              <p>All Cards Accepted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
