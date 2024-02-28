import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import forminance from "../assets/fominance.png"
import LOGO from "../assets/LOGO.png"
import location from "../assets/location.png"
import cart from "../assets/cart.png"
import person from "../assets/person.png"
import icon from "../assets/icon.png"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import Netflix from "../assets/Netflix.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import image7 from "../assets/image7.png"
import Star3 from "../assets/Star3.svg"
import Star5 from "../assets/Star5.svg"
import Frame5 from "../assets/Frame5.png"
import Frame6 from "../assets/Frame6.png"
import Frame7 from "../assets/Frame7.png"
import Frame8 from "../assets/Frame8.png"
import Frame11 from "../assets/Frame11.png"
import Group11 from "../assets/Group11.png"
import ok from "../assets/ok.png"
import ok2 from "../assets/ok2.png"
import ok3 from "../assets/ok3.png"
import UsedLogo from "../assets/UsedLogo.png"
import talk1 from "../assets/talk1.png"
import copyright from "../assets/copyright.png"
import appstore from "../assets/appstore.png"
import googleplay from "../assets/googleplay.png"
import talk2 from "../assets/talk2.png"
import Socialfb from "../assets/Socialfb.png"
import Socialig from "../assets/Socialig.png"
import Socialin from "../assets/Socialin.png"
import Socialtwitter from "../assets/Socialtwitter.png"


import "./Home.css"


function Home() {

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const animateSlide = () => {
      // Calculate the total width of the content inside the container
      const contentWidth = container.scrollWidth;
      // Calculate the width of the visible portion of the container
      const containerWidth = container.clientWidth;
      // Calculate the difference between the content width and container width
      const difference = contentWidth - containerWidth;

      // Apply animation to the container
      container.style.animation = `slideAnimation ${difference * 20}ms linear infinite`;

      // Reset the animation after it's done
      setTimeout(() => {
        container.style.animation = 'none';
        // Trigger the animation again after a delay
        setTimeout(animateSlide, 5000);
      }, difference * 20);
    };

    // Start the animation when the component mounts
    animateSlide();

    // Clean up on component unmount
    return () => {
      container.style.animation = 'none';
    };
  }, []);

  return (
    <nav>
      <div className=" font-bold py-4 bg-blue-600 w-full flex justify-around">
        <Link to="/buyGiftCard" className="text-white flex border-b-2 border-yellow-400 justify-center items-center h-full">
          BUY GIFTCARDS
        </Link>
        <Link to="/mostpopular" className="text-white flex justify-center items-center h-full">
          MOST POPULAR CARDS
        </Link>
        <Link to="/bestdeals" className="text-white flex justify-center items-center h-full">
          BEST DEALS
        </Link>
        <Link to="/allcategories" className="text-white flex justify-center items-center h-full">
          ALL CATEGORIES
        </Link>
        <Link to="/company" className="text-white flex justify-center items-center h-full">
          COMPANY
        </Link>
        <Link to="/legal" className="text-white flex justify-center items-center h-full">
          COMPANY
        </Link>
        <Link to="/support" className="text-white flex justify-center items-center h-full">
          SUPPORT
        </Link>
      </div>
      <div className="flex justify-around items-center pt-10 pb-10">
        <div className="flex h-10 w-auto items-center">
        <img src={LOGO} alt="Logo" />
        <img className="h-8 w-auto" src={forminance} alt="Logo" />
        </div>
        <div className="h-8 w-auto flex items-center cursor-pointer" >
        <img className="h-8 w-auto flex items-center" src={location} alt="Logo" />
        <h4 className="text-sm">Nigeria</h4>
        </div>
        <div className="h-8 w-auto flex items-center cursor-pointer" >
        <img className="h-8 w-auto flex items-center" src={cart} alt="Logo" />
        <h4 className="text-sm">My Cart</h4>
        </div>
        <div className=" flex items-center cursor-pointer" >
        <img className="h-8 w-auto flex items-center" src={person} alt="Logo" />
        <h4 className="text-sm">My Account</h4>
        </div>
        <div className="relative flex items-center rounded-md border border-blue-600 w-55  flex items-center pl-4  gap-2">
        <img className="h-4 w-auto absolute left-2 top-2.2" src={icon} alt="Logo" />
        <input type="text" className="focus:outline-none ml-6"
        placeholder="Search for Giftcard"
        />
        <button className="bg-blue-600 h-8 pl-3 pr-3 text-white">Search</button>
        </div>
      </div>
      {/* Next Section */}
      <div className="relative">
  <div className="box flex items-center bg-blue-400 relative">
    <img className="fimage h-full" src={image1} alt="Logo" />
    <img className="simage h-full" src={image2} alt="Logo" />
    <img className="timage h-full" src={image3} alt="Logo" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
    <h2 className="text-white text-4xl font-bold">Welcome to your hub for all things giftcard!</h2>
    <h3 className="text-orange-200 text-2xl font-semibold">Here we make gifting experience worth cherishing.</h3>
    <button className="bg-blue-500 mt-28 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded cursor-pointer">Buy GiftCard</button>
  </div>
</div>

<div className="mt-12 mx-10">
  <h4 className="text-indigo-800 text-3xl font-semibold font-
Familjen Grotesk">Trending Giftcards</h4>
<h5 className="text-black text-2xl font-semibold" >Stay on Top of Trends: Explore the Latest and Most Popular Gift Cards!"</h5>
<div className="flex justify-around items-center gap-4 mt-6">
  <div className="bg-orange-200 h-325px pb-4">
    <img className="" src={Netflix} alt="Logo" />
    <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">Netflix</h4> <h3>$200</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
</div>
  <div className="bg-orange-200 h-325px pb-4">
  <img className="" src={image4} alt="Logo" />
  <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
  </div>
  <div className="bg-orange-200 h-325px pb-4">
  <img className="" src={image5} alt="Logo" />
  <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">Escape from Tarkov</h4> <h3>$400</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
  </div>
</div>
</div>

<div className="py-8 mx-10">
  <h3 className="font-semibold text-2xl">See All...</h3>
</div>
<div className="bg-blue-50 px-10 pt-12">
  <div>
<h4 className="text-indigo-800 text-3xl font-semibold font-
Familjen Grotesk">Categories</h4>
<h5 className="text-black text-2xl font-semibold" >Discover Your Favorites: Explore Gift Cards Sorted by Categories!</h5>
</div>
<div className="flex gap-6 mt-10">
  <div className="bg-orange-100 py-6 px-6 text-xl rounded-xl">
    <div className="flex items-center gap-2">
    <h4>Categories</h4> 
    <span class="pb-1 px-3 text-white flex items-center justify-center rounded-lg bg-blue-600 inline-flex items-center justify-center">></span>
    </div>
    <div className="block mt-2">
    <div class="flex flex-col items-center">
    <img class="mt-2 h-16 w-auto" src={Frame5} alt="Logo" />
    <h4 class="mt-2 text-lg">Health</h4>
   </div>
   <div class="flex flex-col items-center mt-6">
    <img class="mt-2 h-16" src={Frame6} alt="Logo" />
    <h4 class="mt-2 text-lg">Fashion</h4>
   </div>   
   <div class="flex flex-col items-center mt-6">
    <img class="mt-2 h-16" src={Frame7} alt="Logo" />
    <h4 class="mt-2 text-lg">Travel</h4>
   </div>    
   <div class="flex flex-col items-center mt-6">
    <img class="mt-2 h-16" src={Frame8} alt="Logo" />
    <h4 class="mt-2 text-lg">Gaming</h4>
   </div>    </div>
    </div>
  <div>
    <div className="flex gap-12"> 
      <div className="bg-orange-200 h-325px pb-4 rounded-xl">
    <img className="rounded-xl" src={Netflix} alt="Logo" />
    <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">Netflix</h4> <h3>$200</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
    </div>
    <div className="bg-orange-200 h-325px pb-4 rounded-xl">
    <img className="rounded-xl" src={image6} alt="Logo" />
    <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">Wizard 101</h4> <h3>$98</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
    </div>
    </div>
    <div className="flex gap-12 mt-6">
    <div className="bg-orange-200 h-325px pb-4 rounded-xl">
    <img className="rounded-xl" src={image7} alt="Logo" />
    <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">Escape from Tarkov</h4> <h3>$400</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
    </div>
    <div className="bg-orange-200 h-325px pb-4 rounded-xl">
    <img className="rounded-xl" src={image6} alt="Logo" />
    <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">Wizard 101</h4> <h3>$98</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
    </div>
    </div>
  </div>
</div>
<h3 className="font-semibold text-2xl mt-6">See All...</h3>

</div>
<div className="bg-orange-50">
  <div className="px-10 pt-12">
    <h4 className="text-indigo-800 text-3xl font-semibold font-
Familjen Grotesk">Best Deals</h4>
<h5 className="text-xl">Discover unbeatable discounts and incredible savings on a curated selection 
  of top- <br/> notch gift cards with our exclusive 'Best Deals' section,
   ensuring you get the most value < br /> out of every purchase.</h5>

   <div ref={containerRef} className="flex justify-around items-center gap-4 mt-6 overflow-x-hidden">
  
 <div className="new bg-orange-200 pb-4">
    <img className="" src={Netflix} alt="Logo" />
    <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">Netflix</h4> <h3>$200</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
</div>

  <div className="new bg-orange-200 pb-4">
  <img className="" src={image4} alt="Logo" />
  <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
  </div>
  <div className="new bg-orange-200 pb-4">
  <img className="" src={image5} alt="Logo" />
  <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">Escape from Tarkov</h4> <h3>$400</h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
    <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star3} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />
      <img className="" src={Star5} alt="Logo" />

</h4> <h3></h3></div>
  </div>
  </div>
  <h3 className="font-semibold text-2xl mt-6">See All...</h3>

  </div>
</div>
<div className="bg-blue-50">
<img className="" src={Group11} alt="Logo" />
</div>
<div className=" bg-blue-600 py-14 px-10 flex">
<img className="" src={Frame11} alt="Logo" />
<div className="bg-white p-8"><h4 className="text-orange-400 text-3xl font-bold">24/7 Support at Your Fingertips.</h4>
<h5 className="text-2xl font-semibold mt-6">Our Customer Service Team is Here to Help Make Your Gifting Experience better.<br/>
 <strong className="text-2xl"> Reach Out Anytime, Anywhere!</strong></h5>
 <div className="flex items-center justify-center mt-16">
 <Link to="/contactus" className="text-white rounded-lg flex justify-center w-1/2 items-center px-6 py-2 bg-blue-500 hover:bg-blue-700">
          Contact Us
        </Link>
        </div>
        </div>
</div>
<div className=" bg-orange-50 justify-around flex items-center py-8">
<img className="h-22px w-1/4" src={ok} alt="Logo" />
<img className="h-22px w-1/4" src={ok2} alt="Logo" />
<img className="h-22px w-1/4" src={ok3} alt="Logo" />

</div>
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

<img className="mt-10" src={copyright} alt="Logo" />

    </div>
    </nav>
     
   
  );
}

export default Home;
