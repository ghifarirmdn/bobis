import React from "react";
import "./SeatNumber.css";

const SeatNumber = (props) => {
  return (
    <>
      <div className="seat-number">
        <p>{props.number}</p>
      </div>
    </>
  );
};

export default SeatNumber;
