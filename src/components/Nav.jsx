import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

function Head() {
  return (
    <>
        <div className=" font-bold py-4 bg-blue-600 w-full flex justify-around">
    <NavLink to="/" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      BUY GIFTCARDS
    </NavLink>
    <NavLink to="/mostpopularcards" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      MOST POPULAR CARDS
    </NavLink>
    <NavLink to="/bestdeals" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      BEST DEALS
    </NavLink>
    <NavLink to="/allcategories" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      ALL CATEGORIES
    </NavLink>
    <NavLink to="/about" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      COMPANY
    </NavLink>
    <NavLink to="/legal" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      LEGAL
    </NavLink>
    <NavLink to="/support" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      SUPPORT
    </NavLink>
  </div>
  </>

  )
}
export default Head;

