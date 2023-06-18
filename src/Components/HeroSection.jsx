import "../App.css";

function HeroSection() {
  return (
    <div
      className="App flex justify-center items-center bg-cover bg-center bg-no-repeat mb-2 mt-2 border rounded"
      style={{
        backgroundImage:
          'url("https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x.webp")',
      }}
    >
      {/* Hero Section */}
      <div className="heroSection sm:w-full md:w-6/12 h-full flex flex-col items-center justify-center text-center text-white">
        <div className="bg-gray-800 border-1 border-black mb-1 mt-2 shadow-2xl rounded-md relative z-10 transition-all duration-500 hover:bg-transparent">
            <h1 className="text-8xl title">
                Best way to grow <br />
                your local business
            </h1>
            <p className="py-10">
                Artificial Intelligence powered easy-to-use tools to get more customers & give them a better experience
            </p>
        </div>
        <div className="flex justify-center mb-2 mt-2 relative z-20">
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-4 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-700 duration-300 px-7 py-3 font-[Poppins] rounded-md text-white md:w-auto w-full">
            Get Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
