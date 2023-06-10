import React from "react";
import "./BeliTiket.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import bus from "../../assets/icon/big-bus.svg";
import ticket from "../../assets/icon/ticket-red.svg";
import date from "../../assets/icon/date.svg";
import qr from "../../assets/image/qr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import axios from "axios";
import { toast } from "react-toastify";

const BeliTiket = () => {
  const navigate = useNavigate();
  const [snap, setSnap] = React.useState(null);

  const initSnap = () => {
    // const { NODE_ENV: ENV } = process.env;

    // create element for script
    const snapScript = document.createElement("script");

    // checking environment mode
    // snapScript.src =
    //   ENV === 'production'
    //     ? 'https://app.midtrans.com/snap/snap.js'
    //     : 'https://app.sandbox.midtrans.com/snap/snap.js';
    snapScript.src = "https://app.sandbox.midtrans.com/snap/snap.js";

    snapScript.type = "text/javascript";
    snapScript.onload = () => {
      if ("snap" in window) {
        const { snap } = window;
        setSnap(snap);
      }
    };
    snapScript.dataset.clientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;
    document.head.appendChild(snapScript);
  };

  const handlePay = async (transactionToken) => {
    snap.pay(transactionToken, {
      onSuccess: function (result) {
        console.log("Success: ", result);
        navigate("/ticket");
      },
      onPending: function (result) {
        console.log("Pending: ", result);
      },
      onError: function (result) {
        console.log("Error: : ", result);
      },
      onClose: function () {},
    });
  };

  const handleBooking = () => {
    axios
      .post(
        "https://tiket-bus-api.kencang.id/api/booking",
        {
          chairId: localStorage.getItem("selectedSeat"),
          busId: localStorage.getItem("selectedRouteId"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        handlePay(res.data[0].token);
      })
      .catch((err) => {
        console.error(err.response.data.message);
        toast.error(err.response.data.message);
      });
  };

  React.useEffect(() => {
    initSnap();
  }, []);

  return (
    <>
      <Navbar title="Beli Tiket" />
      <div className="beli-tiket">
        <div className="beli-tiket-card">
          <div className="buy-date">
            <h5>tanggal Pembelian</h5>
            <p>15 Maret 2023</p>
          </div>
          <hr style={{ margin: "10px 20px" }} />
          <div className="tiket-tipe">
            <img src={bus} alt="" />
            <div className="tiket-tipe-text">
              <h5>Reguler</h5>
              <p>
                Perjalanan dengan menggunakan <br />
                bus reguler
              </p>
            </div>
          </div>
          <hr style={{ margin: "10px 20px" }} />
          <div className="information">
            <div className="jumlah-tiket">
              <div className="jumlah-tiket-left">
                <img src={ticket} alt="" />
                <h5>Jumlah Pembelian tiket</h5>
              </div>
              <p>2 Tiket</p>
            </div>
            <div className="period">
              <div className="period-left">
                <img src={date} alt="" />
                <h5>Masa Berlaku Tiket</h5>
              </div>
              <p>3 Jam</p>
            </div>
          </div>
          <hr style={{ margin: "10px 20px" }} />
          <div className="kode-transaksi">
            <h4>Kode Transaksi</h4>
            <p>1A2023031525REG151515</p>
            <div className="qr-code" style={{ paddingTop: "10px" }}>
              <img src={qr} alt="" />
            </div>
          </div>

          <hr style={{ margin: "10px 20px" }} />

          <div className="metode-pembayaran">
            <h5>Metode Pembayaran</h5>
            <div className="pilih-metode">
              <p>Pilih</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>

          <hr style={{ margin: "10px 20px" }} />

          <div className="total-pembayaran">
            <h5>Total Pembayaran</h5>
            <p>Rp 12.000</p>
          </div>
        </div>
      </div>
      <div className="confirm-beli-tiket">
        <div className="batal">
          <Link to="/pilih-kursi">
            <Button text="Batal" />
          </Link>
        </div>
        <div className="bayar">
          <Button text="Bayar" onClick={() => handleBooking()} />
        </div>
      </div>
    </>
  );
};

export default BeliTiket;
