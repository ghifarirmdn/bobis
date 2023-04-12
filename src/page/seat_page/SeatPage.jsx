import React from "react";
import "./SeatPage.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SeatNumber from "../../components/SeatNumber/SeatNumber";
import Seat from "../../components/seat/Seat";
import ChooseSeat from "../../components/ChooseSeat/ChooseSeat";
import Button from "../../components/Button/Button";

const SeatPage = () => {
  return (
    <>
      <Navbar title="Pilih Kursi" />
      <div className="seat-page">
        <div className="card-seat">
          <div className="nomor-kursi">
            <SeatNumber number="5C 40" />
          </div>
          <div className="info-seat">
            <div className="not-avail">
              <div className="not-avail-seat"></div>
              <p>Tidak Tersedia</p>
            </div>
            <div className="avail">
              <div className="avail-seat"></div>
              <p>Tersedia</p>
            </div>
            <div className="choose">
              <div className="choose-seat"></div>
              <p>Dipilih</p>
            </div>
          </div>
          <hr style={{ margin: "10px" }} />

          <ChooseSeat />
          <ChooseSeat />
          <ChooseSeat />
          <ChooseSeat />
          <ChooseSeat />
          <ChooseSeat />
          <ChooseSeat />
          <ChooseSeat />
          <ChooseSeat />
          <ChooseSeat />
        </div>
      </div>
      <div className="confirm-seat-page">
        <div className="total">
          <h5>Total</h5>
          <h6>Rp 12.000</h6>
        </div>
        <div className="confirm-button">
          <Link to="/beli-tiket">
            <Button text="Konfirmasi" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SeatPage;
