import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../page-home/Home";
import Top100 from "../page-top-100/Top100";
import Check from "../page-check/Check";
import Coin from "../page-coin/Coin";
import "../../scss/app/app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-100" element={<Top100 />} />
          <Route path="/check" element={<Check />} />
          <Route path="/coin" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
