import React from 'react'
import UsedLogo from "../assets/UsedLogo.png"
import talk1 from "../assets/talk1.png"
import appstore from "../assets/appstore.png"
import googleplay from "../assets/googleplay.png"
import talk2 from "../assets/talk2.png"
import Socialfb from "../assets/Socialfb.png"
import Socialig from "../assets/Socialig.png"
import Socialin from "../assets/Socialin.png"
import Socialtwitter from "../assets/Socialtwitter.png"
import FrameCopy from "../assets/FrameCopy.png"
import "./Home.css"

function Footer() {
  return (
    <div className="bg-indigo-900 flex flex-col justify-center items-center pt-16 pb-4 px-10 ">
    <img className="mb-2" src={talk1} alt="Logo" />
    <img className="" src={talk2} alt="Logo" />
    <div className="flex gap-10 mt-10">
      <img className="cursor-pointer" src={googleplay} alt="Logo" />
      <img className="cursor-pointer" src={appstore} alt="Logo" />
    </div>

    <div className="flex justify-around w-full mt-16">
      <div className="w-1/6">
        <img className="h-16 w-auto" src={UsedLogo} alt="Logo" />
        <div className="flex ml-2 gap-4">
          <img className="" src={Socialfb} alt="Logo" />
          <img className="" src={Socialig} alt="Logo" />
          <img className="" src={Socialin} alt="Logo" />
          <img className="" src={Socialtwitter} alt="Logo" />
        </div>
      </div>

      <div className="w-1/6 text-white">
        <h3 className="text-gray-400 font-semibold mb-6">COMPANY</h3>
        <h5>About Us</h5>
        <h5>FAQ</h5>
        <h5>Blog Post</h5>
        <h5>Review</h5>
        <h5>Career</h5>

      </div>
      <div className="w-1/6 text-white">
        <h3 className="text-gray-400 font-semibold mb-6">LEGAL</h3>
        <h5>Terms and Conditions</h5>
        <h5>Privacy Policy</h5>
      </div>
      <div className="w-1/6 text-white">
        <h3 className="text-gray-400 font-semibold mb-6">SUPPORT</h3>
        <h5>Help</h5>
        <h5>FAQs</h5>
        <h5>Return Policy</h5>
        <h5>Contact Us</h5>
      </div>
      <div className="w-1/6 text-white">
        <h3 className="text-gray-400 font-semibold mb-6">DEALS</h3>
        <h5>Give Always</h5>
        <h5>Discounts</h5>
        <h5>Refer and Earn</h5>
        <h5>Affiliate Programs</h5>
      </div>
    </div>
    
    <div className='allrights'>
      <p> ©2024 Fominance.      All rights reserved.   <a href="">  Privacy Policy.</a> <a href="">Terms and Conditions</a></p>
    </div>

    
  </div>
  )
}

export default Footer