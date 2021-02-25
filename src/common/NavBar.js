import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/logo.png";
import Avatar from "@material-ui/core/Avatar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <MenuIcon className="navMenu" fontSize="large" />
      <img className="navLogo" src={logo} alt="" />
      <Avatar
        className="avatar"
        alt=""
        src="https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg"
      />
    </div>
  );
};

export default NavBar;
