import { Avatar } from "@material-ui/core";
import React from "react";
import group from "../../assets/Group.png";
import path from "../../assets/Path.png";
import payment from "../../assets/payment.png";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Card = () => {
  return (
    <div className="card">
      <div className="cardHeader">
        <p>Honda City</p>
        <span>Posted at 1 Nov, 9:30 AM</span>
      </div>
      <div className="cardBody">
        <div className="items">
          <div className="item">
            <img src={group} alt="" />
            <p>Specification 01</p>
          </div>
          <div className="item">
            <img src={path} alt="" />
            <p>Specification 02</p>
          </div>
          <div className="item">
            <img src={payment} alt="" />
            <p>Specification 03</p>
          </div>
        </div>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sequi
          autem earum, rerum laborum eum voluptas
        </p>
        <div className="hide">
          <p>Hide Details</p>
          <ExpandLessIcon />
        </div>
        <div className="profile">
          <Avatar
            className="profileImage"
            alt=""
            src="https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg"
          />
          <div className="details">
            <h3>Rohan Sharma</h3>
            <p>Bengaluru, Karnataka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
