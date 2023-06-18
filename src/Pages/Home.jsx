import React from "react";
import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection";
import Carousel from "../Components/Carousel";
import TestimonialCard from "../Components/TestimonialCard";


function Home() {
  const images = [
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp",
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <HeroSection />
        <div className="flex flex-col items-center bg-white p-4 border-2 shadow-white rounded mb-2 mt-2 px-5 py-20">
          <h1 className="text-5xl font-bold p-4 inline-block">
            Trusted by 100,000+ local businesses globally
          </h1>
          <Carousel images={images} />
        </div>
        <TestimonialCard />
        <div className="w-full flex items-center justify-center">
          <div className="w-3/5 p-5 rounded-2xl shadow-2xl max-w-4xl mb-2">
            <a href="/" className="m-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Google My Business Basics: How to get more customers from GMB.</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Customers want to find local proprietors on search engines and nearly 90 percent of that traffic goes to Google.</p>
                </div>
            </a>
            <a href="/" className="m-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to use Google's Business Messaging tool to get new customers</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Today’s leading businesses aren’t just being found - they’re engaging the moment they’re discovered.</p>
                </div>
            </a>
            <a href="/" className="m-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">6 Ways to Increase Your Website Traffic and Leads</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">More than 61% of marketers have reported that attracting traffic to their website is their biggest challenge.</p>
                </div>
            </a>
          </div>
          <div class="w-3/5 mb-6 mr-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                SalesCaptain is designed for your business
              </h5>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Select your industry to see how it works.</p>
              <ul class="my-4 space-y-3">
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white" >
                          <span class="flex-1 ml-3 whitespace-nowrap">HealthCare</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Dental</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Home Services</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Retail</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Hospitality</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Automotive</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Restaurants</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Wellness</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Professional Services</span>
                      </a>
                  </li>
                  <li>
                      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                          <span class="flex-1 ml-3 whitespace-nowrap">Care Services</span>
                      </a>
                  </li>
              </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
