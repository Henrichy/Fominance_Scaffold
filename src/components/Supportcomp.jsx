import React from 'react'
import Frame11 from "../assets/Frame11.png"
import twofour from "../assets/twofour.png"
import { Link } from "react-router-dom";
import "./Stat.css"


function Supportcomp() {
  return (
    
    <div className=" bg-blue-600 py-14 px-10 flex Supportdiv">
    <div className="image-containerr">
      <img className="image" src={Frame11} alt="Logo" />
    </div>
    <div className="thewhite bg-white p-8  ">
      <div className='txt-container' >
        <h1 className='Support-header'>24/7 Support at Your Fingertips.</h1>
        <h4 className='S-paragraph'>Our Customer Service Team is Here to Help Make Your Gifting Experience better. <br />Reach Out Anytime, Anywhere!</h4>
        <div className="flex items-center justify-left mt-8">
        <Link to="/contactus" className="  text-white font-bold rounded-lg flex justify-center w-1/2 items-center px-9 py-4 bg-blue-500 hover:bg-blue-700">
          Contact Us
        </Link>
      </div>
      </div>
      {/* <img src={twofour} alt="" /> */}
     
    </div>
  </div>
  )
}

export default Supportcomp
