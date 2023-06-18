import { React, useState} from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import "../../App.css";

function Footer() {

  const [showLine, setShowLine] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 border-1 shadow-2xl border-black"
        onMouseEnter={() => setShowLine(true)}
        onMouseLeave={() => setShowLine(false)}>
      {showLine && (
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span
              className="text-white"
              style={{ fontWeight: 600 }}
            >
              See why 100,000+ businesses trust us. Book a personalized demo to see how SalesCaptain provides you the right tools to grow your business.
            </span>
          </h1>
        )}
        {!showLine && (
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span
              className="text-white font-Serif"
              style={{ fontWeight: 600, }}
            >
              Ready To Grow?
            </span>
          </h1>
        )}
        <div className="flex mr-10">
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-700 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
            Get Demo
          </button>
        </div>
        <div>
            <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp" loading="lazy" width="229" alt="" />
            <div className="text-center text-1xl">500+ Reviews</div>
        </div>
      </div>

      <ItemsContainer />

      <div className="flex flex-wrap justify-center mb-3">
        <SocialIcons Icons={Icons} />
      </div>

      <div className="bg-white pt-2 text-black text-sm pb-4">
        <div className="flex flex-wrap justify-center">
          <span className="mr-2">
            &copy; SalesCaptain Inc 2023 (A division of SalesBook Technologies Pvt Ltd)
          </span>
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
    </footer>
  );
}

export default Footer;
