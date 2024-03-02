import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../pages/page-home/Home";
import Top100 from "../pages/page-top-100/Top100";
import Check from "../pages/page-check/Check";
import Coin from "../pages/page-coin/Coin";
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
