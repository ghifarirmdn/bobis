import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import searchStatus from "../../assets/icon/search.svg";
import place1 from "../../assets/icon/place-form.svg";
import line from "../../assets/icon/line.svg";
import place2 from "../../assets/icon/place-to.svg";
import history from "../../assets/icon/history.svg";
import rute from "../../assets/icon/rute.svg";
import bus from "../../assets/icon/bus.svg";
import informasi from "../../assets/icon/informasi.svg";
import CardNews from "../../components/CardNews/CardNews";
import BottomNav from "../../components/BottomNav/BottomNav";
import SeatNumber from "../../components/SeatNumber/SeatNumber";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import UserContext from "../../context/userContext";

const Home = () => {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [authenticated, setauthenticated] = useState(null);
  // const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    console.log(loggedInUser);
    if (loggedInUser) {
      setauthenticated(loggedInUser);
      // getUser();
    } else {
      navigate("/");
    }
  }, []);
  console.log(user);
  return (
    <>
      <div className="nav-home">
        <div className="nav-home-text">
          <h4>
            Hai {user?.name} <br />
            Mau kemana hari ini?
          </h4>
        </div>
        <div className="search-bar">
          <Link to="/search-destination">
            <Button style={{ width: "150px" }} text="Cari Destinasi" />
          </Link>
        </div>
      </div>

      <div className="card-home-destination">
        <div className="card-home-destination-up">
          <div className="card-home-destination-up-left">
            <img src={place1} alt="" className="icon-from" />
            <img src={line} alt="" className="icon-line" />
            <img src={place2} alt="" className="icon-to" />
          </div>
          <div className="card-home-destination-up-left-mid">
            <p>Halte Graha Family</p>
            <p>Halte Bunderan ITS</p>
          </div>
          <div className="card-home-destination-up-right">
            <SeatNumber number="1A 25" />
          </div>
        </div>

        <div className="card-home-destination-down">
          <div className="departure-on">
            <p>Departure On</p>
            <p>12:00 am</p>
          </div>
          <div className="travel-time">
            <p>Travel Time</p>
            <p>1 hr 30 min</p>
          </div>
          <div className="seat">
            <p>Seat</p>
            <p>
              <span>25</span>/35
            </p>
          </div>
        </div>
      </div>

      <div className="menu-home">
        <div className="menu-home-icon">
          <Link to="/riwayat" style={{ textDecoration: "none" }}>
            <div className="menu-riwayat">
              <div className="menu-riwayat-icon">
                <img src={history} alt="" />
              </div>
              <h5>Riwayat</h5>
            </div>
          </Link>

          <Link to="/rute" style={{ textDecoration: "none" }}>
            <div className="menu-rute">
              <div className="menu-rute-icon">
                <img src={rute} alt="" />
              </div>
              <h5>Rute</h5>
            </div>
          </Link>

          <div className="menu-bus">
            <div className="menu-bus-icon">
              <img src={bus} alt="" />
            </div>
            <h5>Bus</h5>
          </div>
          <div className="menu-informasi">
            <div className="menu-informasi-icon">
              <img src={informasi} alt="" />
            </div>
            <h5>Informasi</h5>
          </div>
        </div>
      </div>

      <div className="berita-home">
        <div className="title-berita-home">
          <h4>Berita</h4>
          <Link to="/berita" style={{ textDecoration: "none" }}>
            <p>Lihat Lainnya</p>
          </Link>
        </div>
      </div>
      <CardNews />
      <CardNews />
      <CardNews />
      <CardNews />
      <BottomNav />
      <div className="blank-home" style={{ paddingBottom: "70px" }}></div>
    </>
  );
};

export default Home;
