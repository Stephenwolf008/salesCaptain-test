import React from 'react';
import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection";
import Carousel from "../Components/Carousel";
import TestimonialCard from "../Components/TestimonialCard";
import ServicesCard from '../Components/ServicesCard';


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
    <div className='bg-white'>
        <Header />
        <HeroSection />
        <div className="sm:justify-center flex flex-col items-center bg-white p-4 px-5 py-20 ">
            <h1 className="text-5xl font-bold p-4 inline-block font-[cursive]">
                Trusted by 100,000+ local businesses globally
            </h1>
            <Carousel images={images} />
        </div>
        <TestimonialCard />
        <ServicesCard />
        <Footer />
    </div>
  );
}

export default Home;
