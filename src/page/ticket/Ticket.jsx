import React from "react";
import "./Ticket.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import Navbar from "../../components/Navbar/Navbar";
import TicketCard from "../../assets/icon/ticket-card.svg";
import ticket from "../../assets/icon/total-ticket.svg";
import bus from "../../assets/icon/bus-ticket.svg";
import { useLocation } from "react-router-dom";

const Ticket = () => {
  const location = useLocation();
  const [orderId, setOrderId] = React.useState(null);

  React.useEffect(() => {
    setOrderId(location.search.split("&")[0].replace("?order_id=", ""));
  }, [location]);

  return (
    <>
      <Navbar title="Ticket" />
      <div className="ticket-page">
        <div className="choose-ticket">
          <div className="aktif">
            <button>Aktif</button>
          </div>
          <div className="selesai">
            <button>Selesai</button>
          </div>
        </div>

        <div className="ticket-card">
          <img src={TicketCard} alt="" />
          <div className="text-ticket-card">
            <div className="text-ticket-card-left">
              <h4>15 Maret 2023</h4>
              <p>Lokasi Berangkat</p>
              <h5>Halte Graha Family</h5>
              <p>Lokasi Destinasi</p>
              <h5>Halte Bunderan ITS</h5>
            </div>
            <div className="text-ticket-card-right">
              <h4>Aktif</h4>
              <p>Departure On</p>
              <h5>12.00 AM</h5>
              <p style={{ marginLeft: "55px" }}>Arrival</p>
              <h5>13.30 PM</h5>
            </div>
          </div>
          <div className="ticket-seat">
            <div className="total-ticket">
              <img src={ticket} alt="" />
              <h5>2</h5>
            </div>
            <div className="ticket-seat-number">
              <img src={bus} alt="" />
              <h5>1A 25</h5>
            </div>
          </div>

          <div className="ticket-code">
            <h3>{orderId ?? "Loading..."}</h3>
          </div>
          <div className="look-ticket-button">
            <button>Lihat Tiket</button>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Ticket;
