import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";


function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-2xl border-1 border-black">
      <div className="flex items-center justify-between p-3">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo.webp"
            alt="logo"
            className="md:cursor-pointer h-9 ring-4 ring-white rounded-full bg-white"
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden uppercase item-center gap-8 font-semibold">
          <NavLinks />
          <li>
            <Link to="/" className="py-6 px-2 inline-block text-gray-300 hover:text-white">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/" className="py-6 px-2 inline-block text-gray-300 hover:text-white">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/" className="py-6 px-2 inline-block text-gray-300 hover:text-white">
              Support
            </Link>
          </li>
        </ul>

        <div className="md:block hidden">
          <Link to="/login" target="_blank">
            <button className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-900">
              Sign In
            </button>
          </Link>
          <a href="/" target="_blank">
            <button className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white">
              Get Started
            </button>
          </a>
        </div>

        {/* Mobile Nav  */}
        <ul
          className={`
            md:hidden fixed w-full top-0 bottom-0 py-24 pl-4 duration-500 z-30
            ${open ? "left-0 bg-gray-900" : "left-[-100%] bg-white"}
          `}
          style={{ overflowY: "auto" }}
        >
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block ">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Support
            </Link>
          </li>
          <div className="py-5">
            <a href="/login">
              <button className="border-2 border-white text-white rounded-full px-6 inline-block font-semibold hover:bg-white hover:text-gray-900">
                Sign In
              </button>
            </a>
          </div>
          <div className="py-5">
            <a href="/" target="_blank">
              <button className="border-2 border-white text-white rounded-full px-6 inline-block font-semibold hover:bg-blue-500 hover:text-white">
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
