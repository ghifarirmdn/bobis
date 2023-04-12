import React from "react";
import "./CardRute.css";
import tujuan from "../../assets/icon/tujuan.svg";
import tick from "../../assets/icon/tick.svg";

const CardRute = (props) => {
  return (
    <>
      <div className="card-rute">
        <div className="kode-rute">{props.kode}</div>
        <div className="text-rute">
          <div className="destinasi">
            <h5>
              Terminal Purabaya <img src={tujuan} alt="" /> Halte Ketintang
            </h5>
          </div>
          <div className="keterangan">
            <div className="keterangan-text">
              <img src={tick} alt="" /> Beroprasi
            </div>
            <div className="jam">
              <p>07.00 - 17.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRute;
