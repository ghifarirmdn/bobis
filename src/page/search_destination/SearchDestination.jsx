import React from "react";
import "./SearchDestination.css";
import Navbar from "../../components/Navbar/Navbar";
import logocard from "../../assets/icon/destination.svg";
import map from "../../assets/icon/choose-map.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SearchDestination = () => {
  return (
    <>
      <Navbar title="Mau Pergi Kemana?" />

      <div className="blank-search"></div>

      <div className="search-page">
        <div className="search-card">
          <div className="input-card">
            <input type="text" placeholder="Cari lokasi berangkat" />
            <hr />
            <input type="text" placeholder="Cari lokasi destinasi" />
          </div>
          <div className="search-card-logo">
            <img src={logocard} alt="" />
          </div>
        </div>
        <div className="choose-map">
          <img src={map} alt="" />
          <p>Choose with map</p>
        </div>
        <hr style={{ margin: "50px 15px 10px" }} />

        <div className="destination-category">
          <button>Home</button>
          <button>Work</button>
          <Link to="/pilih-kursi">
            <div className="next">
              <button>Next</button>
            </div>
          </Link>
        </div>

        <hr style={{ margin: "10px 15px 15px" }} />

        <div className="destination-history">
          <div className="destination-history-icon">
            <FontAwesomeIcon icon={faClockRotateLeft} />
          </div>

          <div className="destination-history-text">
            <div className="tujuan">
              <h4>Halte Pens</h4>
              <p>Alamat Detail</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDestination;
