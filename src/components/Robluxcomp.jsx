import React from 'react'
import Robluxcard from "../assets/robluxcard.png"
import Bestcard from "../assets/bestcard.png"
import c from "../assets/c.png"
import e from "../assets/e.png"
import Frameblog from "../assets/Frameblog.png"

function Robluxcomp() {
  return (
    <div className="bg-orange-50 flex flex-col justify-center items-center pb-6">
    <div className="justify-around flex items-center gap-8 py-8">
      <div className="pb-6 bg-white">
        <img className="h-96 " src={c} alt="Logo" />
        <img className="mt-6  mx-10 " src={Bestcard} alt="Logo" />
        <img className="mt-6  mx-10 " src={Frameblog} alt="Logo" />

      </div>
      <div className="pb-6 bg-white">
        <img className="h-96" src={e} alt="Logo" />
        <img className="mt-6 mx-10" src={Robluxcard} alt="Logo" />
        <img className="mt-6  mx-10 " src={Frameblog} alt="Logo" />
      </div>

    </div>
    <button className="text-white font-bold rounded-lg flex justify-center w-1/4 items-center px-2 py-2 bg-blue-500 hover:bg-blue-700">See more blog post</button>
  </div>
  )
}

export default Robluxcomp
