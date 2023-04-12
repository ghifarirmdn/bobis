import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import back from "../../assets/icon/back.svg";

const Navbar = (props) => {
  return (
    <>
      <div className="nav">
        <Link to="/home">
          <img src={back} alt="" />
        </Link>
        <div className="title">
          <h4>{props.title}</h4>
        </div>
      </div>
    </>
  );
};

export default Navbar;
