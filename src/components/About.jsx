import React from 'react'
import Head from './Nav'
import Frameabout from "../assets/Frameabout.png"
import Supportcomp from "./Supportcomp";
import "./About.css"
import ourVision from "../assets/image 183.png"
import ourMission from "../assets/image 184.png"
import Footer from "./footer";
import Group from "../assets/Group 4702.svg"
import {Typewriter} from "react-simple-typewriter"
import Component1 from "../assets/Component 1.svg"
import Component3 from "../assets/Component 3.svg"
import vector from "../assets/property1.svg"
import Stats from "./stats"
import "./Home.css"


function About() {
  return (
    <div>
      <Head />
      <div className='px-4 py-4'>
        <img src={Frameabout} alt="" />
      </div>
      <div className='Hero-container'>
        <div className='Hero-div1'>
          <h1 className='welcome-header'>Welcome to Fominance</h1>
          <div className='animatedTxt'>
            <span >
              <span className='welcome-p'>Your Hub for all things &nbsp;</span>

            <span className='animated-txt'>
              <Typewriter 
                  words={['Giftcards', 'Convenient Gifting', 'Easy Payments']}
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                /> 
            </span>
            <h4 className='welcome-p2'>100% African,  100% Internet</h4>
            </span>
          </div>

        </div>
        <div className='Hero-div2'>
          <div className='div2'>
            <img className='component1 animate' src={Component1} />  
            <img className='group-img ' src={Group} />
            <img className='component2  animate' src={Component3} />
            <img className='component3' src={vector} />
          </div>
            
        </div>
      </div>
      <div className='stat-container'>
      <Stats/>
      </div>
      
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
      <Supportcomp/>
  

      
      <Footer/>
    </div>


  )
}

export default About;