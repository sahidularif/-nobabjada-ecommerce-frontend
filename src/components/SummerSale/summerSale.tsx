import React from "react";
import "../../styles/style.css";
import smartwatch from "../../images/smartwatch.png";
const SummerSale = () => {
  return (
    <div className="container">
      <div className="wrapper bg-neutral-100">
        <div className="summer-heading">
          <div className="heading_body">
            <h6>20 % OFF</h6>
            <h1 className="summer_main_heading">
              HAPPY <br /> HOURE
            </h1>
            <h6>15 Nov To 7 Dec</h6>
          </div>
          <div className="heading-img">
            <img src={smartwatch} alt="summer sale" />
          </div>
        </div>
        <div className="summer-description">
            <h6>Beats Solo Air</h6>
            <h2 className="fs-normal-heading fw-bold-lg text-neutral-900">Summer Deal</h2>
            <p>Company that's grown 270 to 480 employees in the last 12 months</p>
            <button className="button_item text-primary-400">Shop</button>
        </div>
      </div>
    </div>
  );
};

export default SummerSale;
