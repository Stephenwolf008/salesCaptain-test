import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100">
      {/* Hero Section */}
      <div className="heroSection sm:w-full md:w-10/12 h-full flex flex-col md:flex-row items-center justify-center text-center text-black">
        <div className="bg-slate-100 mt-2 relative z-10 w-1/2 md:w-1/2">
            <h1 className="text-5xl lg:text-8xl font-serif font-bold">
                Best way to grow <br />
                your local <br /> business
            </h1>
            <p className="py-10 text-2xl font-[Lora]">
                Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience
            </p>
        </div>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 md:w-1/2">
            <form className="space-y-6" action="#">
                <div>
                    <input type="text" name="text" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black" placeholder="Your Name" />
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Enter your E-mail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <button type="submit" className="w-full text-black bg-blue-600 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-md px-5 py-2.5 text-center font-[Poppins]">Get Demo</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
