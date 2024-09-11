import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">267 st road, california</span>
          <div className="flexCenter f-menu">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
