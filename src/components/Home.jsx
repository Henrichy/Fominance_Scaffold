import React, { useState, useEffect, useRef } from "react";
import '@webpunk/circular-text';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import forminance from "../assets/fominance.png"
import twofour from "../assets/twofour.png"
import Robluxcard from "../assets/robluxcard.png"
import Bestcard from "../assets/bestcard.png"
import LOGO from "../assets/LOGO.png"
import location from "../assets/location.png"
import ubuntu from "../assets/ubuntu.png"
import cart from "../assets/cart.png"
import person from "../assets/person.png"
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
import c from "../assets/c.png"
import e from "../assets/e.png"
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
import image5 from "../assets/image5.png"
import Frameblog from "../assets/Frameblog.png"
import seeall from "../assets/seeall.png"
import Frame101 from "../assets/Frame101.png"
import Frame102 from "../assets/Frame102.png"
import Frame103 from "../assets/Frame103.png"
import Frame104 from "../assets/Frame104.png"
import Frame105 from "../assets/Frame105.png"
import Frame106 from "../assets/Frame106.png"
import Frame107 from "../assets/Frame107.png"
import Frame11 from "../assets/Frame11.png"
import Frame50 from "../assets/Frame50.png"
import "./Home.css"
import Head from "./Nav";
import Footer from "./footer";


function Home() {
  const [activeComponent, setActiveComponent] = useState("component-1");

  const handleClick = (targetId) => {
    setActiveComponent(targetId);
  }
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
          <div className="h-8 w-auto flex items-center cursor-pointer" >
            <img className="ico h-8 w-auto flex items-center" src={location} alt="Logo" />
            <h4 className="ico text-sm">Nigeria</h4>
          </div>
          <div className="ico h-8 w-auto flex items-center cursor-pointer" >
            <img className="h-8 w-auto flex items-center" src={cart} alt="Logo" />
            <h4 className=" text-sm">My Cart</h4>
          </div>
          <div className="ico flex items-center cursor-pointer" >
            <img className="h-8 w-auto flex items-center" src={person} alt="Logo" />
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
        <div className="round-div bg-blue-500">
      {/* You can add content inside the round div */}
     <circular-text
    text="Hub for all things giftcard "
    radius="90"
    textColor="#fff">
</circular-text>
    </div>
      </div>

      <div className="mt-12 mx-10">
        <img src={discover} alt="" />
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
      </div>

      <div className="py-8 mx-10">
        <h3 className="font-semibold text-2xl">
          <button className="text-white font-bold rounded-lg flex justify-center w-1/4 items-center px-2 py-2 bg-blue-500 hover:bg-blue-700">See All</button>
        </h3>
      </div>
      <div className="cate pt-12">
        <div>
          <img className="mx-10" src={categories} alt="" />
        </div>
        <div className="relative">
          <img className="rectanglar" src={Rectanglar} alt="Logo" />
          <div className="px-10 absolute image-container">
            <img className="" src={tr} alt="Logo" />
            <img className="" src={technology} alt="Logo" />
            <img className="" src={su} alt="Logo" />
            <img className="" src={re} alt="Logo" />
            <img className="" src={ga} alt="Logo" />
            <img className="" src={en} alt="Logo" />
            <img className="" src={ed} alt="Logo" />
            <img className="" src={di} alt="Logo" />
            <img className="" src={ch} alt="Logo" />
            <img className="" src={tr} alt="Logo" />
            <img className="" src={ed} alt="Logo" />
            <img className="" src={di} alt="Logo" />

          </div>
        </div>
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
        <h3 className="font-semibold px-10 text-2xl my-6">
          <button className="text-white font-bold rounded-lg flex justify-center w-1/4 items-center px-2 py-2 bg-blue-500 hover:bg-blue-700">See All</button>
        </h3>

      </div>
      <div className="bg-orange-50">
        <div className="px-10 pt-12">
          <img className="" src={BestDeals} alt="Logo" />
          <img className="my-8" src={discov} alt="Logo" />
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
          <h3 className="font-semibold text-2xl mt-6 pb-6">
            <button className="text-white font-bold rounded-lg flex justify-center w-1/4 items-center px-2 py-2 bg-blue-500 hover:bg-blue-700">See All</button>

          </h3>

        </div>
      </div>
      <div className="bg-blue-50">
        <img className="" src={Framebig} alt="Logo" />
      </div>
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
      
     <Footer />
    </nav>


  );
}

export default Home;