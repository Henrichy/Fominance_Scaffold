import React from 'react'
import Frame11 from "../assets/Frame11.png"
import twofour from "../assets/twofour.png"
import { Link } from "react-router-dom";

function Supportcomp() {
  return (
    
    <div className=" bg-blue-600 py-14 px-10 flex">
    <div className="image-containerr">
      <img className="image" src={Frame11} alt="Logo" />
    </div>
    <div className="thewhite bg-white p-8"><img src={twofour} alt="" />
      <div className="flex items-center justify-center mt-16">
        <Link to="/contactus" className="text-white font-bold rounded-lg flex justify-center w-1/2 items-center px-6 py-2 bg-blue-500 hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Supportcomp
