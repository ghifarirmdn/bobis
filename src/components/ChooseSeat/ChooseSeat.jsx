import React from "react";
import "./ChooseSeat.css";
import Seat from "../seat/Seat";

const ChooseSeat = () => {
  return (
    <div className="card-seat-choose">
      <div className="card-seat-choose-left">
        <Seat />
        <div className="full-seat"></div>
      </div>
      <div className="card-seat-choose-right">
        <Seat />
        <Seat />
      </div>
    </div>
  );
};

export default ChooseSeat;
