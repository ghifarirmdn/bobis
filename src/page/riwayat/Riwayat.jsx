import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardRiwayat from "../../components/CardRiwayat/CardRiwayat";

const Riwayat = () => {
  return (
    <>
      <Navbar title="Riwayat" />
      <div className="blank-riwayat" style={{ marginTop: "90px" }}></div>
      <CardRiwayat />
      <CardRiwayat />
    </>
  );
};

export default Riwayat;
