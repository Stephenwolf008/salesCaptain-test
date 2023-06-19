import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";


function Header() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow font-sans">
      <div className="flex items-center justify-between">
        <div className="z-50 p-2 md:w-auto w-full flex justify-between">
          <img
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo.webp"
            alt="logo"
            className="md:cursor-pointer h-9 "
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <div className="flex m-2">
          <ul className="md:flex hidden uppercase item-center font-semibold mr-2">
            <NavLinks />
            <li>
              <Link to="/" className="py-4 px-2 inline-block text-black hover:text-blue-700">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="py-4 px-2 inline-block text-black hover:text-blue-700">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/" className="py-4 px-2 inline-block text-black hover:text-blue-700">
                Support
              </Link>
            </li>
          </ul>

          <div className="md:block hidden mt-1">
            <Link to="/login" target="_blank">
              <button className="border-2 mr-2 border-black text-black rounded-full px-3 py-2 inline-block bg-blue-400 font-semibold hover:bg-black hover:text-white">
                Sign In
              </button>
            </Link>
            <a href="/" target="_blank">
              <button className="border-2 mr-2 border-black text-black rounded-full px-3 py-2 inline-block font-semibold bg-blue-400 hover:bg-black hover:text-white">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Nav  */}
        <ul
          className={`
            md:hidden fixed w-full top-0 bottom-0 py-20 pl-4 duration-500 z-30
            ${open ? "left-0 bg-white" : "left-[-100%]"}
          `}
          style={{ overflowY: "auto" }}
        >
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block font-semibold hover:text-blue-500">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block font-semibold hover:text-blue-500">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block font-semibold hover:text-blue-500">
              Support
            </Link>
          </li>
          <div className="py-2">
            <a href="/login">
              <button className="border-2 border-black text-black rounded-full px-6 inline-block font-semibold hover:bg-black hover:text-white">
                Sign In
              </button>
            </a>
          </div>
          <div className="py-2">
            <a href="/" target="_blank">
              <button className="border-2 border-black text-black rounded-full px-6 inline-block font-semibold hover:bg-blue-700 hover:text-white">
                Get Started
              </button>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
