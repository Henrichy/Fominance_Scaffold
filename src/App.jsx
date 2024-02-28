import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyGiftCards from "./components/buyGiftCard";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buygiftcards" element={<BuyGiftCards />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
