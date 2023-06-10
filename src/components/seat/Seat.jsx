import React, { useEffect } from "react";
import "./Seat.css";
import { useState } from "react";

const Seat = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    props.onClick(props.data);
    // props.setNumberSeat(props.text);
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      localStorage.setItem("selectedSeat", props.data.id);
    }
  }, [active]);

  // console.log(selectedSeat);

  return (
    <div
      className={`seat ${
        parseInt(props.type) === 1
          ? "basic"
          : parseInt(props.type) === 2
          ? "disable"
          : "pregnant"
      } ${props.data.id === props.selected?.id ? "active" : ""}`}
      onClick={handleClick}
    >
      <p style={{ color: "white" }}>{props.text}</p>
    </div>
  );
};

export default Seat;
