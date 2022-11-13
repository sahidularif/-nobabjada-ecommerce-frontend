import React from "react";
import { FaBlog } from "react-icons/fa";
import { MdArrowBack, MdContacts, MdGroups, MdHome, MdProductionQuantityLimits } from "react-icons/md";
import Images from "../images/images";
const Footer = () => {
  return (
    <div className="">
      <div className="footer-wrapper">
        <div className="even-columns">
          <div className="info-contact">
            <h5>About Phnox</h5>
            <div className="footer-nav">
              <div className="img-box">
                <img src={Images.location} width="18px" alt="" />
              </div>
              <p>Address</p>
            </div>
            <div className="footer-nav">
              <div className="img-box">
                <img src={Images.mobile} width="12px" alt="" />
              </div>
              <p>+01 1234567890</p>
            </div>
            <div className="footer-nav">
              <div className="img-box">
                <img src={Images.mail} width="18px" alt="" />
              </div>
              <p>demo@gmail.com</p>
            </div>
          </div>
          <div className="info-contact">
            <h5>Information</h5>
            <div className="footer-nav">
              <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
          <div className="info-contact">
          <h5>
              Useful Link
            </h5>
            <ul>
              <li>
                <a href="">
                <MdHome/>&nbsp; Home
                </a>
              </li>
              <li>
                <a href="">
                <MdProductionQuantityLimits/>&nbsp; Product
                </a>
              </li>
              <li>
                <a href="">
                <MdGroups/>&nbsp; About us
                </a>
              </li>
              <li>
                <a href="">
                  <FaBlog/>&nbsp; Blog
                </a>
              </li>
              <li>
                <a href="">
                <MdContacts/>&nbsp; Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="info-contact">
            <h5>NewsLetter</h5>
            <form action="" className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="button">
                Subscribe
              </button>
            </form>
            <div className="social_box">
              <a href="">
                <img src={Images.facebook} alt=""/>
              </a>
              <a href="">
                <img src={Images.twitter} alt=""/>
              </a>
              <a href="">
                <img src={Images.linkedin} alt=""/>
              </a>
              <a href="">
                <img src={Images.youtube} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
