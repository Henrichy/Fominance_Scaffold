import React, { useState } from 'react'
import seeall from "../assets/seeall.png"
import Frame101 from "../assets/Frame101.png"
import Frame102 from "../assets/Frame102.png"
import Frame103 from "../assets/Frame103.png"
import Frame104 from "../assets/Frame104.png"
import Frame105 from "../assets/Frame105.png"
import Frame106 from "../assets/Frame106.png"
import Frame107 from "../assets/Frame107.png"
import Frame50 from "../assets/Frame50.png"

import  './Home.css'

function Reviewcomp() {
    const [activeComponent, setActiveComponent] = useState("component-1");
    const handleClick = (targetId) => {
        setActiveComponent(targetId);
      }
  return (
    <div className="flex justify-center items-center flex-col py-4">
    <img className="" src={Frame50} alt="Logo" />
    <div className="relative">

      <img id="component-1" className={activeComponent === "component-1" ? "component" : "hidden"} src={Frame101} alt="Logo" />

      <img id="component-2" className={activeComponent === "component-2" ? "component" : "hidden"} src={Frame102} alt="Logo" />
      <img id="component-3" className={activeComponent === "component-3" ? "component" : "hidden"} src={Frame103} alt="Logo" />
      <img id="component-4" className={activeComponent === "component-4" ? "component" : "hidden"} src={Frame104} alt="Logo" />
      <img id="component-5" className={activeComponent === "component-5" ? "component" : "hidden"} src={Frame105} alt="Logo" />
      <img id="component-6" className={activeComponent === "component-6" ? "component" : "hidden"} src={Frame106} alt="Logo" />
      <img id="component-7" className={activeComponent === "component-7" ? "component" : "hidden"} src={Frame107} alt="Logo" />

      <div className="absolute span-container">
        <span onClick={() => handleClick("component-1")}>Component 1</span>
        <span onClick={() => handleClick("component-2")}>Component 2</span>
        <span onClick={() => handleClick("component-3")}>Component 3</span>
        <span onClick={() => handleClick("component-4")}>Component 4</span>
        <span onClick={() => handleClick("component-5")}>Component 5</span>
        <span onClick={() => handleClick("component-6")}>Component 6</span>
        <span onClick={() => handleClick("component-7")}>Component 7</span>
        {/* Render components based on activeComponent state */}
      </div>
    </div>
  </div>
  )
}

export default Reviewcomp
