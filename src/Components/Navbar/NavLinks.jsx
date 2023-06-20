import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

function NavLinks() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-2 text-left md:cursor-pointer group">
            <div
              className="md:py-4 py-6 flex justify-between items-center md:pr-0 pr-5 group font-semibold hover:text-blue-500"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="md:hidden">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              {/* <span className="md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180">
                <ion-icon name="chevron-down"></ion-icon>
              </span> */}
            </div>
            {link.submenu && (
              <div>
                <div className="absolute top-16 right-20 hidden group-hover:md:block hover:md:block z-30">
                  {/* <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                    <div className="w-4 h-4 right-3 absolute mt-1 bg-white rotate-45"></div>
                  </div> */}
                  <div className="bg-white p-10 grid grid-cols-3 gap-10 border-1 rounded-2xl shadow-2xl">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold mb-2 text-black underline font-[Lora]">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li key={slink.name} style={{ listStyleType: "disc" }} className="my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-blue-500 text-base text-black font-[Lora]"
                            >
                              {slink.name}
                            </Link>
                            <div className="text-xs text-gray-600">{slink.description}</div>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading(" ")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center text-sm md:text-base hover:text-blue-500"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li key={slink.name} className="py-3 pl-14">
                        <Link
                          to={slink.link}
                          className="text-base underline hover:text-blue-500 hover:no-underline"
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default NavLinks;
