import React from "react";
import "./BottomNav.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faTicket, faUser } from "@fortawesome/free-solid-svg-icons";

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
