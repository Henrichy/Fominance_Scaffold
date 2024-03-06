import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    <>
        <div className=" font-bold py-4 bg-blue-600 w-full flex justify-around">
    <Link to="/" className="text-white flex border-b-2 border-yellow-400 justify-center items-center h-full">
      BUY GIFTCARDS
    </Link>
    <Link to="/mostpopular" className="text-white flex justify-center items-center h-full">
      MOST POPULAR CARDS
    </Link>
    <Link to="/bestdeals" className="text-white flex justify-center items-center h-full">
      BEST DEALS
    </Link>
    <Link to="/allcategories" className="text-white flex justify-center items-center h-full">
      ALL CATEGORIES
    </Link>
    <Link to="/about" className="text-white flex justify-center items-center h-full">
      COMPANY
    </Link>
    <Link to="/legal" className="text-white flex justify-center items-center h-full">
      LEGAL
    </Link>
    <Link to="/support" className="text-white flex justify-center items-center h-full">
      SUPPORT
    </Link>
  </div>
  </>

  )
}
export default Head;

