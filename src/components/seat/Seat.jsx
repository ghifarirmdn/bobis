import React from "react";
import "./Seat.css";
import { useState } from "react";

const Seat = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = (props) => {
    setActive(!active);
  };
  return (
    <div
      className="seat"
      style={{
        backgroundColor: active ? "red" : "rgba(255, 110, 110, 1)",
      }}
      onClick={handleClick}
    ></div>
  );
};

export default Seat;
