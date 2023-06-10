import React, { useState, useEffect } from "react";
import "./SearchDestination.css";
import Navbar from "../../components/Navbar/Navbar";
import logocard from "../../assets/icon/destination.svg";
import map from "../../assets/icon/choose-map.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchDestination = () => {
  const [data, setData] = useState(null);
  const [selectedRouteId, setSelectedRouteId] = useState(1);
  const navigate = useNavigate();
  const getData = async (res) => {
    res = await axios.get("https://tiket-bus-api.kencang.id/api/bus");
    console.log(res);
    setData(res.data.data);
  };

  const handleChange = (e) => {
    setSelectedRouteId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pilih-kursi");
  };

  useEffect(() => {
    getData();
    localStorage.setItem("selectedRouteId", selectedRouteId);
  }, [selectedRouteId]);

  return (
    <>
      <Navbar title="Mau Pergi Kemana?" />
      <div className="blank-search"></div>
      <div className="search-page">
        <form onSubmit={handleSubmit}>
          <select className="dropdown" onChange={handleChange}>
            {data
              ? data.map((res, i) => {
                  return (
                    <option key={i} value={res?.id}>
                      {res?.origin_destination}
                    </option>
                  );
                })
              : null}
          </select>
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
        </form>
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
