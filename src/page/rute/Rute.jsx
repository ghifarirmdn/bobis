import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardRute from "../../components/CardRute/CardRute";

const Rute = () => {
  return (
    <>
      <Navbar title="Rute" />
      <CardRute kode="1A" />
      <CardRute kode="2A" />
      <CardRute kode="3B" />
      <CardRute kode="4C" />
      <CardRute kode="1A" />
      <CardRute kode="1A" />
      <CardRute kode="1A" />
      <CardRute kode="1A" />
      <CardRute kode="1A" />
    </>
  );
};

export default Rute;
