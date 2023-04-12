import React from "react";
import "./CardRiwayat.css";
import place1 from "../../assets/icon/place-form.svg";
import line from "../../assets/icon/line.svg";
import place2 from "../../assets/icon/place-to.svg";
import SeatNumber from "../SeatNumber/SeatNumber";

const CardRiwayat = () => {
  return (
    <>
      <div className="card-riwayat">
        <div className="card-riwayat-left">
          <img src={place1} alt="" className="icon-biru" />
          <img src={line} alt="" className="icon-garis" />
          <img src={place2} alt="" className="icon-merah" />
        </div>
        <div className="card-riwayat-mid">
          <p>Halte Graha Family</p>
          <p>Halte Bunderan ITS</p>
        </div>
        <div className="card-riwayat-right">
          <p className="card-riwayat-right-color">Departure On</p>
          <p>12:00 am</p>
          <SeatNumber number="1B 24" />
        </div>
      </div>
    </>
  );
};

export default CardRiwayat;
