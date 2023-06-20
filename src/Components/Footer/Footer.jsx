import { React, useState} from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import "../../App.css";


function Footer() {


  return (
    <footer>
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-white py-7">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-black font-[Poppins] font-semibold">
              See why 100,000+ businesses trust us. Book a personalized demo to see how SalesCaptain provides you the right tools to grow your business.
            </span>
          </h1>
        <div className="flex flex-col gap-12 mr-10">
          <div className="text-black text-center text-3xl font-semibold font-[Lora]">Ready To Grow?</div>
          <div className="md:flex mr-5 ml-5 items-center">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="text-gray-900 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:border-black border-2"
            />
            <button className="bg-blue-400 hover:bg-black hover:text-white duration-300 px-10 lg:px-5 py-2.5 font-[Poppins] rounded-md text-white lg:w-auto md:w-full">
              Get Demo
            </button>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0 flex-col items-center">
            <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp" loading="lazy" width="229" alt="" />
            <div className="text-center text-black ">500+ Reviews</div>
        </div>
      </div>
      <div class="flex md:flex-row flex-wrap md:gap-10 items-center justify-center bg-black py-2">
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp" loading="lazy" width="80" alt="" class="image-178" />
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp" loading="lazy" width="141" alt="" class="image-179" />
        <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp" loading="lazy" width="213" alt="" />
      </div>
      <div className="bg-gray-900 text-white">
        <ItemsContainer />
        <div className="flex flex-wrap justify-center pb-3">
          <SocialIcons Icons={Icons}/>
        </div>
      </div>

      <div className="bg-white pt-2 text-black text-sm pb-4">
        <div className="flex flex-wrap justify-center">
          <span className="mr-2 text-center">
            &copy; SalesCaptain Inc 2023 (A division of SalesBook Technologies Pvt Ltd)
          </span>
          <div>
            <a href="/" className="mr-2 text-gray-500 hover:text-gray-700">
              Terms and Conditions
            </a>
            <a href="/" className="mr-2 text-gray-500 hover:text-gray-700">
              Privacy
            </a>
            <a href="/" className="mr-2 text-gray-500 hover:text-gray-700">
              Refund Policy
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-700">
              CCPA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
