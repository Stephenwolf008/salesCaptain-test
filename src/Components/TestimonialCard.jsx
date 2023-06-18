import React from 'react';

function TestimonialCard() {
    return (
        <div class="grid mb-0 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">40% Average net profit increase</h3>
                    <p class="my-4">“In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn”</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp" alt="profile" />
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Simon Page</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Owner, Mamagato Restaurant</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">200% new review growth</h3>
                    <p class="my-4">“Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google”</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp" alt="profile" />
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Daniel Wilson</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Marketing head, The Air Conditioning Company</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">$150k generated with marketing campaign</h3>
                    <p class="my-4">“Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks”</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp" alt="profile" />
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Debbie Rose</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Owner, Jiva luxury Spa</div>
                    </div>
                </figcaption>    
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                    <p class="my-4">“You have many examples that can be used to create a fast prototype for your team”</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile" />
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Joseph McFall</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
                    </div>
                </figcaption>    
            </figure>
        </div>
    );
}

export default TestimonialCard;
