import React, { useEffect, useState } from "react";
import "./CardRute.css";
import tujuan from "../../assets/icon/tujuan.svg";
import tick from "../../assets/icon/tick.svg";
import axios from "axios";

const CardRute = (props) => {
  const [data, setData] = useState(null);

  const getData = async (res) => {
    res = await axios.get("https://tiket-bus-api.kencang.id/api/bus");
    console.log(res);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data
        ? data.map((res, i) => {
            return (
              <div className="card-rute" key={i}>
                <div className="kode-rute">{props.kode}</div>
                <div className="text-rute">
                  <div className="destinasi">
                    <h5>{res?.origin_destination}</h5>
                  </div>
                  <div className="keterangan">
                    <div className="keterangan-text">
                      <img src={tick} alt="" /> Beroprasi
                    </div>
                    <div className="keterangan-jam">
                      <p>07.00 - 17.00</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default CardRute;
