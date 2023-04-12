import React from "react";
import "./CardNews.css";
import bus from "../../assets/image/bus_news.png";

const CardNews = () => {
  return (
    <>
      <div className="content-news">
        <div className="image">
          <img src={bus} alt="" />
        </div>
        <div className="text-news">
          <h6>
            Berkolaborasi Dengan PT. VKTR Teknologi Mobilitas, PENS Kedatangan
            Bus Listrik Pertama di Indonesia
          </h6>
          <p>Sabtu, 28 Mei 2022 11.00 WIB</p>
        </div>
      </div>
    </>
  );
};

export default CardNews;
