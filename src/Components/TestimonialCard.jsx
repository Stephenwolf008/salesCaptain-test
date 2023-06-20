import React from 'react';

function TestimonialCard() {
    return (
        <div class="grid mb-0 md:mb-12 md:grid-cols-2 font-sans">
            <figure class="flex flex-col items-center justify-center p-8 text-center border-b lg:rounded-tl-lg md:rounded-t-none md:rounded-tl-lg md:border-r bg-blue-300 hover:bg-blue-400 border-blue-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8 ">
                    <h3 class="text-lg font-semibold text-white ">40% Average net profit increase</h3>
                    <p class="my-4 font-serif">“In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn”</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp" alt="profile" />
                    <div class="space-y-0.5 font-medium text-white text-left">
                        <div>Simon Page</div>
                        <div class="text-sm text-black">Owner, Mamagato Restaurant</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center border-b lg:rounded-tr-lg bg-blue-300 hover:bg-blue-400 border-blue-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8 ">
                    <h3 class="text-lg font-semibold text-white">200% new review growth</h3>
                    <p class="my-4 font-serif">“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp" alt="profile" />
                    <div class="space-y-0.5 font-medium text-white text-left">
                        <div>Daniel Wilson</div>
                        <div class="text-sm text-black">Marketing head, The Air Conditioning Company</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-blue-300 hover:bg-blue-400 border-blue-700  border-b lg:border-b-0 lg:rounded-bl-lg md:border-b-0 md:border-r">
                <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8 ">
                    <h3 class="text-lg font-semibold text-white">$150k generated with marketing campaign</h3>
                    <p class="my-4 font-serif">“Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks”</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp" alt="profile" />
                    <div class="space-y-0.5 font-medium text-white text-left">
                        <div>Debbie Rose</div>
                        <div class="text-sm text-black">Owner, Jiva luxury Spa</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-blue-300 hover:bg-blue-400 border-blue-700 lg:rounded-br-lg">
                <blockquote class="max-w-2xl mx-auto mb-4 text-black lg:mb-8 ">
                    <h3 class="text-lg font-semibold text-white">Efficient Collaborating</h3>
                    <p class="my-4 font-serif">“You have many examples that can be used to create a fast prototype for your team”</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile" />
                    <div class="space-y-0.5 font-medium text-white text-left">
                        <div>Joseph McFall</div>
                        <div class="text-sm text-black">CTO at Google</div>
                    </div>
                </figcaption>    
            </figure>
        </div>
    );
}

export default TestimonialCard;
