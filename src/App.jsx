import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyGiftCards from "./components/buyGiftCard";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<BuyGiftCards />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
