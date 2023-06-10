import React, { useEffect, useState } from "react";
import "./SeatPage.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SeatNumber from "../../components/SeatNumber/SeatNumber";
import Seat from "../../components/seat/Seat";
import ChooseSeat from "../../components/ChooseSeat/ChooseSeat";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import steer from "../../assets/icon/steer.png";
import frontDoor from "../../assets/icon/frontDoor.svg";

const SeatPage = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState("");
  const [data, setData] = useState("");
  const [numberSeat, setNumberSeat] = useState(null);

  const storedId = localStorage.getItem("selectedRouteId");

  const getData = async (res) => {
    res = await axios
      .get(`https://tiket-bus-api.kencang.id/api/bus/${storedId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleNumberSeat = (seat) => {
    console.log(seat);
    setNumberSeat(seat);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/beli-tiket");
  };

  useEffect(() => {
    const storedRoute = localStorage.getItem("selectedRoute");

    if (storedRoute) {
      setSelectedRoute(storedRoute);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [storedId]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Navbar title="Pilih Kursi" />
        <div className="seat-page">
          <div className="card-seat">
            {/* <div className="nomor-kursi">
              <SeatNumber number={numberSeat} />
            </div> */}
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
              <div className="ibu-hamil">
                <div className="ibu-hamil-seat"></div>
                <p>Ibu Hamil</p>
              </div>
              <div className="disabilitas">
                <div className="disabilitas-seat"></div>
                <p>Disabilitas</p>
              </div>
            </div>
            {/* <p>Rute Bis yang Dipilih: {selectedRoute}</p> */}
            <hr style={{ margin: "10px" }} />

            <div
              className="front-seat"
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px",
                height: "20px",
              }}
            >
              <img src={frontDoor} alt="" style={{ height: "30px" }} />
              <img src={steer} alt="" />
            </div>

            <ChooseSeat setNumberSeat={handleNumberSeat} />
          </div>
        </div>
        <div className="confirm-seat-page">
          <div className="total">
            <h5>Total</h5>
            <h6>{data.price}</h6>
          </div>
          <div className="confirm-button">
            <Button text="Konfirmasi" />
          </div>
        </div>
      </form>
    </>
  );
};

export default SeatPage;
