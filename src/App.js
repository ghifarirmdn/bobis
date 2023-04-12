import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Home from "./page/home/Home";
import News from "./page/news/News";
import Rute from "./page/rute/Rute";
import Riwayat from "./page/riwayat/Riwayat";
import Ticket from "./page/ticket/Ticket";
import Profile from "./page/profile/Profile";
import SearchDestination from "./page/search_destination/SearchDestination";
import SeatPage from "./page/seat_page/SeatPage";
import BeliTiket from "./page/beli_tiket/BeliTiket";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/berita" element={<News />} />
          <Route path="/rute" element={<Rute />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search-destination" element={<SearchDestination />} />
          <Route path="/pilih-kursi" element={<SeatPage />} />
          <Route path="/beli-tiket" element={<BeliTiket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
