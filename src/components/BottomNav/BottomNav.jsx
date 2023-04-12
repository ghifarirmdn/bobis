import React from "react";
import "./BottomNav.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTicket,
  faBarcode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import home from "../../assets/icon/home.svg";
import ticket from "../../assets/icon/ticket.svg";
import scan from "../../assets/icon/scan.svg";
import profile from "../../assets/icon/profile.svg";

const BottomNav = () => {
  return (
    <>
      <div className="bottom-nav">
        <ul className="list-bottom-nav">
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "rgba(171, 201, 255, 1)"
                    : "rgba(0, 0, 0, 0.23)",
                };
              }}
            >
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ticket"
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "rgba(171, 201, 255, 1)"
                    : "rgba(0, 0, 0, 0.23)",
                };
              }}
            >
              <FontAwesomeIcon icon={faTicket} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scan"
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "rgba(171, 201, 255, 1)"
                    : "rgba(0, 0, 0, 0.23)",
                };
              }}
            >
              <FontAwesomeIcon icon={faBarcode} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              style={({ isActive }) => {
                return {
                  color: isActive
                    ? "rgba(171, 201, 255, 1)"
                    : "rgba(0, 0, 0, 0.23)",
                };
              }}
            >
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BottomNav;
