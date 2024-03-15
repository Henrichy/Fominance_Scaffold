import React, { useState } from 'react'
import Head from './Nav'
import Headroom from 'react-headroom'
import icon from "../assets/icon.png"
import LOGO from "../assets/LOGO.png"
import nigeria from "../assets/nigeria.png"
import ghana from "../assets/ghana.png"
import togo from "../assets/togo.png"
import forminance from "../assets/fominance.png"
import Netflix from "../assets/Netflix.png"
import Hermes from "../assets/hermes.png"
import Youtube from "../assets/youtube.png"
import Hm from "../assets/h.m.png"
import Edx from "../assets/edx.png"
import Skill from "../assets/skill.png"
import Linked from "../assets/linkedin.png"
import Apple from "../assets/apple.png"
import Olive from "../assets/olive.png"
import Chilis from "../assets/chilis.png"
import Uu from "../assets/uu.png"
import Shirt from "../assets/shirt.png"

import heart_fill from "../assets/heart_fill.png"
import heart_unfill from "../assets/heart_unfill.png"
import Globalg from "../assets/globalg.png"
import Giftcode from "../assets/giftcode.png"
import Kiva from "../assets/kiva.png"
import Kids from "../assets/kids.png"
import Amnesty from "../assets/amnesty.png"
import Moment from "../assets/moment.png"


import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Supportcomp from './Supportcomp'
import Robluxcomp from './Robluxcomp'
import Footer from './footer'

function Mostpopular() {
  const initialMarginTop = '-1200px';

  const [marginTop, setMarginTop] = useState(initialMarginTop);
  const [showMore, setShowMore] = useState(true);

  const [marginTopTwo, setMarginTopTwo] = useState(initialMarginTop);
  const [showMoretwo, setShowMoretwo] = useState(true);

  const [marginTopThree, setMarginTopThree] = useState(initialMarginTop);
  const [showMorethree, setShowMorethree] = useState(true);


  const toggleContainer = () => {
    const newMarginTop = marginTop === initialMarginTop ? '0px' : initialMarginTop;
    setMarginTop(newMarginTop);
    setShowMore(!showMore);
  };

  const toggleContainertwo = () => {
    const newMarginTopTwo = marginTopTwo === initialMarginTop ? '0px' : initialMarginTop;
    setMarginTopTwo(newMarginTopTwo);
    setShowMoretwo(!showMoretwo);
  };

  const toggleContainerthree = () => {
    const newMarginTopThree = marginTopThree === initialMarginTop ? '0px' : initialMarginTop;
    setMarginTopThree(newMarginTopThree);
    setShowMorethree(!showMorethree);
  };


  return (
    <nav>
     <Headroom>
        <Head />
        <div className="flex bg-white justify-around items-center pt-10 pb-10">
          <div className="flex h-10 w-auto items-center">
            <img src={LOGO} alt="Logo" />
            <img className="h-8 w-auto" src={forminance} alt="Logo" />
          </div>
          <div className="ico h-8 w-auto flex items-center cursor-pointer" >
          <div className="circle ico"><FontAwesomeIcon icon={faLocationDot} /></div>            
          <h4 className="text-sm">Nigeria</h4>
          </div>
          <div className="ico h-8 w-auto flex items-center cursor-pointer" >
          <div className="circle ico"><FontAwesomeIcon icon={faCartShopping} /></div>          
            <h4 className=" text-sm">My Cart</h4>
          </div>
          <div className="ico flex items-center cursor-pointer" >
          <div className="circle"><FontAwesomeIcon icon={faUser} /></div>            
          <h4 className=" text-sm">My Account</h4>
          </div>
          <div className="relative flex items-center rounded-md border border-blue-600 w-55  flex items-center pl-4  gap-2">
            <img className="h-4 w-auto absolute left-2 top-2.2" src={icon} alt="Logo" />
            <input type="text" className="focus:outline-none ml-6"
              placeholder="Search for Giftcard"
            />
            <button className="bg-blue-600 h-8 pl-3 pr-3 text-white">Search</button>
          </div>
        </div>
      </Headroom>
      
      <div className='px-10 mb-6'>
        <img src={nigeria} alt="" />
      </div>
      {showMore && (
      <div className='contain px-10'>
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Hermes} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Youtube} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Hm} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>         
          </div>
      )}
      <div className='overall'>
      <div className="px-10 seeall-container" style={{ marginTop: marginTop }}>
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Hermes} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Youtube} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Hm} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>         
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Edx} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Skill} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>    
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Linked} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          {/*<div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>            
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>            
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
      </div>*/}
          </div>
          </div>
      <div className="py-8 mx-10 flex justify-center items-center">
        <h3 className="font-semibold text-2xl">
          <button
          onClick={toggleContainer}
          className="text-white font-bold rounded-lg flex justify-center items-center px-24 py-2 bg-blue-500 hover:bg-blue-700">
            {showMore ? 'See More' : 'See Less'}
          </button>
        </h3>
      </div>

      <div className='px-10 mb-6'>
        <img src={ghana} alt="" />
      </div>
      {showMoretwo && (
      <div className='contain px-10'>
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Apple} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Olive} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Chilis} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>         
          </div>
      )}
      <div className='overall'>
      <div className="px-10 seeall-container"  style={{ marginTop: marginTopTwo }}>
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Apple} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Olive} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Chilis} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>         
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Globalg} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Kiva} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>    
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Giftcode} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          {/*<div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>            
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>            
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
      </div>*/}
          </div>
          </div>
      <div className="py-8 mx-10 flex justify-center items-center">
        <h3 className="font-semibold text-2xl ">
          <button
          onClick={toggleContainertwo}
          className="text-white font-bold rounded-lg flex justify-center items-center px-24 py-2 bg-blue-500 hover:bg-blue-700">
            {showMoretwo ? 'See More' : 'See Less'}
          </button>
        </h3>
      </div>
      <div className='px-10 mb-6'>
        <img src={togo} alt="" />
      </div>
      {showMorethree && (
      <div className='contain px-10'>
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Uu} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Shirt} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>         
          </div>
      )}
       <div className='overall'>
      <div className="px-10 seeall-container"  style={{ marginTop: marginTopThree }}>
        <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Uu} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Shirt} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>         
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Kids} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Amnesty} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>    
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Moment} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          {/*<div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>            
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>            
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
      </div>*/}
          </div>
          </div>
      <div className="py-8 mx-10 flex justify-center items-center">
        <h3 className="font-semibold text-2xl ">
          <button
          onClick={toggleContainerthree}
          className="text-white font-bold rounded-lg flex justify-center items-center px-24 py-2 bg-blue-500 hover:bg-blue-700">
            {showMorethree ? 'See More' : 'See Less'}
          </button>
        </h3>
      </div>
      <Supportcomp />
      <Robluxcomp />
      <Footer />
    </nav>
  )
}

export default Mostpopular
