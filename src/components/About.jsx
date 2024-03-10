import React from 'react'
import Head from './Nav'
import Frameabout from "../assets/Frameabout.png"
import Framehero from "../assets/Framehero.png"
import Stat from "../assets/Stats1.png"
import "./About.css"
import ourVision from "../assets/image 183.png"
import ourMission from "../assets/image 184.png"
import Footer from "./footer";
function About() {
  return (
    <div>
      <Head />
      <div className='px-4 py-4'>
        <img src={Frameabout} alt="" />

      </div>
      <div className='grid grid-cols-2 gap-10' hero-grid>
         <div>  
          <h1 className='welcome-header'>Welcome to Fominance</h1>
          <h4 className='welcome-p'> Your hub for all things </h4>
          <h4>100% Africa, 100% Internet</h4>
          <div>
         </div>
         </div>
      </div>
      <img className='stat-img' src={Stat} alt="" />
      <div className='txt-holder'>
      <h1 className='Big-txt'>About us</h1>
      <p className='Paragraph-txt'>We're passionate about creating moments of joy, we offer a diverse array of digital gift cards for every occasion. Whether you're celebrating birthdays, holidays, or just wanting to show someone you care, we're here to make the process effortless and memorable. 

      <br /><br />With a commitment to quality, convenience, and personalized service, we invite you to explore our world of gifting and spread happiness, one gift card at a time.</p>
        
      </div>
      <div >
        <div className='grid grid-cols-2 gap-10 grid-container'>
          <div><img src={ourVision} className='ourVisionimg'/></div>
          <div className='ovdiv'><h1 className='Ov-header'>Our Vision</h1> <br /> <p className='ov-paragraph'>To become the premier destination for effortless and joyful gifting experiences, connecting people worldwide through the power of thoughtful gestures and meaningful connections.</p></div>
          <div><img src={ourMission} className='ourMissionimg' /></div>
          <div className='omdiv'><h1 className='Om-header'>Our Mission</h1><br /><p className='om-paragraph'>Our mission is to simplify and elevate the art of gifting by providing a curated selection of digital gift cards for every occasion, delivering convenience, personalization, and delight to our users while fostering connections and spreading happiness.</p></div>
        </div>
      </div>

      
      <Footer/>
    </div>
  )
}

export default About
