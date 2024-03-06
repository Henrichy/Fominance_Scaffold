import React from 'react'
import AboutHead from './aboutNav'
import Frameabout from "../assets/Frameabout.png"
import Framehero from "../assets/Framehero.png"


function About() {
  return (
    <div>
      <AboutHead />
      <div className='px-4 py-4'>
        <img src={Frameabout} alt="" />

      </div>
      <img src={Framehero} alt="" />
    </div>
  )
}

export default About
