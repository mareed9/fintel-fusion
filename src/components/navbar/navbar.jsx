import React from "react";
import './navbar.scss';
import { Link } from "react-router-dom";
import Yettel from "../../assets/images/yettelLogo.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="left">
            <Link to={"/"}>
              <img src={Yettel} alt="yettel" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
