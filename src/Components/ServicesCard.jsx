import { React, useState} from "react";

function ServicesCard() {
    const [showMore, setShowMore] = useState(false);
    const industries = [
        "HealthCare",
        "Dental",
        "Home Services",
        "Retail",
        "Hospitality",
        "Automotive",
        "Restaurants",
        "Wellness",
        "Professional Services",
        "Care Services",
        "Financial Services",
        "Recreational Services",
    ];

    const visibleIndustries = showMore ? industries : industries.slice(0, 8);

    const toggleShowMore = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    };

    return(
        <div className="w-full flex flex-col items-center justify-center font-sans">
          <div className="md:grid md:grid-cols-2 gap-4 p-5 mb-2">
            <a href="/" className="m-2 flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-slate-100 border-gray-300 bg-slate-200">
                <img className="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">Google My Business Basics: How to get more customers from GMB.</h5>
                    <p class="mb-3 font-normal text-gray-700">Customers want to find local proprietors on search engines and nearly 90 percent of that traffic goes to Google.</p>
                </div>
            </a>
              <a href="/" className="m-2 flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-slate-100 border-gray-300 bg-slate-200">
                <img class="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">How to use Google's Business Messaging tool to get new customers</h5>
                    <p class="mb-3 font-normal text-gray-700">Today’s leading businesses aren’t just being found - they’re engaging the moment they’re discovered.</p>
                </div>
            </a>
              <a href="/" className="m-2 flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-slate-100 border-gray-300 bg-slate-200">
                <img class="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">6 Ways to Increase Your Website Traffic and Leads</h5>
                    <p class="mb-3 font-normal text-gray-700">More than 61% of marketers have reported that attracting traffic to their website is their biggest challenge.</p>
                </div>
            </a>
              <a href="/" className="m-2 flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-slate-100 border-gray-300 bg-slate-200">
                <img class="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">6 Ways to Increase Your Website Traffic and Leads</h5>
                    <p class="mb-3 font-normal text-gray-700">More than 61% of marketers have reported that attracting traffic to their website is their biggest challenge.</p>
                </div>
            </a>
          </div>
          <div className="p-6 bg-gray-800 border-gray-700 w-full font-[Poppins]">
            <h5 className="mb-3 text-base font-semibold md:text-xl text-white">
            SalesCaptain is designed for your business
            </h5>
            <p className="text-sm font-normal text-gray-500">
            Select your industry to see how it works.
            </p>
            <ul className="my-4 space-y-3">
            {visibleIndustries.map((industry, index) => (
                <li key={index}>
                <a
                    href="/"
                    className="flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-gray-600 hover:bg-gray-500 text-white"
                >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                    {industry}
                    </span>
                </a>
                </li>
            ))}
            </ul>
            {industries.length > 8 && (
            <div className="flex justify-center mt-4">
                <button
                id="showMoreBtn"
                className="group hover:shadow bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
                onClick={toggleShowMore}
                >
                {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
            )}
          </div>
        </div>
    );
}

export default ServicesCard;