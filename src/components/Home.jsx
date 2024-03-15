import React, { useState, useEffect, useRef } from "react";
import '@webpunk/circular-text';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Headroom from "react-headroom";
import forminance from "../assets/fominance.png"
import LOGO from "../assets/LOGO.png"
import ubuntu from "../assets/ubuntu.png"
import icon from "../assets/icon.png"
import tr from "../assets/tr.png"
import technology from "../assets/technology.png"
import heart_fill from "../assets/heart_fill.png"
import heart_unfill from "../assets/heart_unfill.png"
import BestDeals from "../assets/BestDeals.png"
import discov from "../assets/discov.png"
import discover from "../assets/discover.png"
import categories from "../assets/categories.png"
import su from "../assets/su.png"
import re from "../assets/re.png"
import ga from "../assets/ga.png"
import en from "../assets/en.png"
import ed from "../assets/ed.png"
import di from "../assets/di.png"
import ch from "../assets/ch.png"
import Framebig from "../assets/Framebig.png"
import Rectanglar from "../assets/Rectanglar.png"
import firstslider from "../assets/firstslider.png"
import secslider from "../assets/secslider.png"
import thirdslider from "../assets/thirdslider.png"
import forthslider from "../assets/forthslider.png"
import Netflix from "../assets/Netflix.png"
import Linux from "../assets/8.png"
import zeenox from "../assets/9.png"
import image4 from "../assets/image4.png"
import Peoplep from "../assets/peoplep.png"
import Globalg from "../assets/globalg.png"
import Giftcode from "../assets/giftcode.png"
import Kiva from "../assets/kiva.png"
import Kids from "../assets/kids.png"
import Amnesty from "../assets/amnesty.png"
import Moment from "../assets/moment.png"
import Ox from "../assets/ox.png"
import Others from "../assets/otherss.png"
import Otherss from "../assets/othersss.png"
import Gamepass from "../assets/gamepass.png"




import "./Home.css"
import Head from "./Nav";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Reviewcomp from "./Reviewcomp";
import Supportcomp from "./Supportcomp";
import Robluxcomp from "./Robluxcomp";



function Home() {
  const initialMarginTop = '-1200px';

  const [marginTop, setMarginTop] = useState(initialMarginTop);
  const [showCarousel, setShowCarousel] = useState(true);

  const [marginTopTwo, setMarginTopTwo] = useState(initialMarginTop);
  const [showCarouseltwo, setShowCarouseltwo] = useState(true);

  const [marginTopThree, setMarginTopThree] = useState(initialMarginTop);
  const [showCarouselthree, setShowCarouselthree] = useState(true);


  const toggleContainer = () => {
    const newMarginTop = marginTop === initialMarginTop ? '0px' : initialMarginTop;
    setMarginTop(newMarginTop);
    setShowCarousel(!showCarousel);
  };

  const toggleContainertwo = () => {
    const newMarginTopTwo = marginTopTwo === initialMarginTop ? '0px' : initialMarginTop;
    setMarginTopTwo(newMarginTopTwo);
    setShowCarouseltwo(!showCarouseltwo);
  };

  const toggleContainerthree = () => {
    const newMarginTopThree = marginTopThree === initialMarginTop ? '0px' : initialMarginTop;
    setMarginTopThree(newMarginTopThree);
    setShowCarouselthree(!showCarouselthree);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const secresponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const carouselRef = useRef(null);

  useEffect(() => {
 

    const interval = setInterval(() => {
      carouselRef.current.next();
    }, 3000);


    // Clean up on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

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

      {/* Next Section */}
      <div className="relative caro">
        <Carousel
          ref={carouselRef}
          responsive={secresponsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
        >
          <div>
            <img className="firstslider" src={firstslider} alt="Logo" />
          </div>
          <div>
            <img className="secslider" src={secslider} alt="Logo" />
          </div>
          <div>
            <img className="thirdslider" src={thirdslider} alt="Logo" />
          </div>
          <div>
            <img className="forthslider" src={forthslider} alt="Logo" />
          </div>
        </Carousel>
        <div className="push flex justify-between items-center">
          <div className=""></div>
        <div className="round-div bg-blue-500">
      {/* You can add content inside the round div */}
     <circular-text
    text="Hub for all things giftcard. "
    radius="90"
    textColor="#fff">
</circular-text>
    </div>
    </div>
      </div>
      
      <div className="mt-12 mx-10">
        <img src={discover} alt="" />
        {showCarousel && (
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          className="flex gap-4 justify"
        >
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={ubuntu} alt="Logo" />
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
            <img className="pinkimg" src={Linux} alt="Logo" />
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
            <img className="pinkimg" src={zeenox} alt="Logo" />
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
            <img className="pinkimg" src={image4} alt="Logo" />
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
          </div>
        </Carousel>
        )}
      </div>
      
      
      <div className="overall">
      <div className="px-10 seeall-container" style={{ marginTop: marginTop }}>
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Ox} alt="Logo" />
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
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Peoplep} alt="Logo" />
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
            <img className="pinkimg" src={Others} alt="Logo" />
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
            <img className="pinkimg" src={Otherss} alt="Logo" />
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
            <img className="pinkimg" src={Gamepass} alt="Logo" />
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
         </div>
      <div className="py-8 mx-10">
        <h3 className="font-semibold text-2xl">
          <button
          onClick={toggleContainer}
          className="text-white font-bold rounded-lg flex justify-center w-1/4 items-center px-2 py-2 bg-blue-500 hover:bg-blue-700">
           {showCarousel ? 'See All' : 'See Less'}
          </button>
        </h3>
      </div>
      <div className="cate pt-12 pb-2">
        <div>
          <img className="mx-10" src={categories} alt="" />
        </div>
        <div className="relative">
          <img className="rectanglar" src={Rectanglar} alt="Logo" />
          <div className="px-10 absolute image-container">
            <img className="catego" src={tr} alt="Logo" />
            <img className="catego" src={technology} alt="Logo" />
            <img className="catego" src={su} alt="Logo" />
            <img className="catego" src={re} alt="Logo" />
            <img className="catego" src={ga} alt="Logo" />
            <img className="catego" src={en} alt="Logo" />
            <img className="catego" src={ed} alt="Logo" />
            <img className="catego" src={di} alt="Logo" />
            <img className="catego" src={ch} alt="Logo" />
            <img className="catego" src={tr} alt="Logo" />
            <img className="catego" src={ed} alt="Logo" />
            <img className="catego" src={di} alt="Logo" />

          </div>
        </div>
        {showCarouseltwo && (
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          className="flex gap-4 justify px-10 mt-8"
        >
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={ubuntu} alt="Logo" />
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
            <img className="pinkimg" src={Linux} alt="Logo" />
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
            <img className="pinkimg" src={zeenox} alt="Logo" />
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
            <img className="pinkimg" src={image4} alt="Logo" />
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
          </div>
        </Carousel>
        )};

       
<div className="overall">
      <div className="px-10 seeall-container" style={{ marginTop: marginTopTwo }}>
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Ox} alt="Logo" />
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
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Peoplep} alt="Logo" />
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
            <img className="pinkimg" src={Others} alt="Logo" />
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
            <img className="pinkimg" src={Otherss} alt="Logo" />
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
            <img className="pinkimg" src={Gamepass} alt="Logo" />
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
         </div>
      
        <h3 className="font-semibold px-10 text-2xl my-6">
        <button
          onClick={toggleContainertwo}
          className="text-white font-bold rounded-lg flex justify-center w-1/4 items-center px-2 py-2 bg-blue-500 hover:bg-blue-700">
      {showCarouseltwo ? 'See All' : 'See Less'}
                </button>        
                </h3>

      </div>
      <div className="bg-orange-50 pb-4">
        <div className="pt-12">
          <img className="px-10" src={BestDeals} alt="Logo" />
          <img className="my-8 px-10" src={discov} alt="Logo" />
          {showCarouselthree && (
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          className="flex gap-4 justify px-10 mt-8"
        >
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={ubuntu} alt="Logo" />
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
            <img className="pinkimg" src={Linux} alt="Logo" />
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
            <img className="pinkimg" src={zeenox} alt="Logo" />
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
            <img className="pinkimg" src={image4} alt="Logo" />
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
          </div>
        </Carousel>
        )};


<div className="overall">
      <div className="px-10 seeall-container" style={{ marginTop: marginTopThree }}>
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Ox} alt="Logo" />
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
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Peoplep} alt="Logo" />
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
            <img className="pinkimg" src={Others} alt="Logo" />
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
            <img className="pinkimg" src={Otherss} alt="Logo" />
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
            <img className="pinkimg" src={Gamepass} alt="Logo" />
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
         </div>
      
        <h3 className="font-semibold px-10 text-2xl my-6">
        <button
          onClick={toggleContainerthree}
          className="text-white font-bold rounded-lg flex justify-center w-1/4 items-center px-2 py-2 bg-blue-500 hover:bg-blue-700">
            {showCarouselthree ? 'See All' : 'See Less'}
          </button>       
           </h3>

        </div>
      </div>
      <div className="bg-blue-50">
        <img className="" src={Framebig} alt="Logo" />
      </div>
      <Reviewcomp />
      <Supportcomp />
     <Robluxcomp />
      
     <Footer />
    </nav>


  );
}

export default Home;