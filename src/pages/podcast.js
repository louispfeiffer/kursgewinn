import * as React from "react"
import NavBar from "./navbar"
import FooterPage from "./footer"
import Header from "./header"
import ABC from "../images/247.webp"


const PodcastPage = () => {
    return (
        <html>
            <Header></Header>
            <body>
                <NavBar></NavBar>

                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div class="flex flex-col justify-center">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Podcast jetzt auf Youtube und Spotify</h1>
                        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">HDer Schuh für drinnen und draußen! Der neue Podcast ist jetzt auf YouTube verfügbar. Es ging um viel Geld, Gesetzesänderungen und Mega-Yachten.</p>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white hover:text-black rounded-lg bg-secondary hover:bg-primary border-2 border-secondary hover:border-primary hover:drop-shadow-2xl">
                                Zum Video
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <a href="#" class="inline-flex justify-center items-center md:w-40 w-full px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border-2 border-secondary hover:border-accent hover:bg-accent hover:drop-shadow-2xl dark:text-white dark:border-primary">
                                Wissen
                            </a>


                            <div class="grid grid-cols-5 flex items-center">
                                <svg class="w-8 h-8  text-yellow place-self-center md:ml-2 drop-shadow-xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-8 h-8  text-yellow place-self-center md:ml-2 drop-shadow-xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-8 h-8 text-yellow place-self-center md:ml-2 drop-shadow-xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-8 h-8 text-yellow place-self-center md:ml-2 drop-shadow-xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-8 h-8  text-yellow place-self-center md:ml-2 drop-shadow-xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>

                        </div>
                    </div>
                    <div className="drop-shadow-2xl">
                        <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/5d1tHkAXCCA?si=u0Lvos7wqxClycyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full lg:w-2/3 gap-4">

                        <div className="bg-transparent md:hover:bg-accent rounded-lg drop-shadow-2xl lg:p-2 flex flex-col justify-between mx-2">
                            <iframe class="w-full h-96 rounded-lg drop-shadow-2xl" src="https://www.youtube.com/embed/5d1tHkAXCCA?si=u0Lvos7wqxClycyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="flex w-full mt-2 drop-shadow-2xl">
                                <a href="#" class=" w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg dark:bg-primary">
                                    zum Video
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="bg-transparent md:hover:bg-accent rounded-lg drop-shadow-2xl lg:p-2 flex flex-col justify-between mx-2">
                            <iframe class="w-full h-96 rounded-lg drop-shadow-2xl" src="https://www.youtube.com/embed/VVRwTqjpwrE?si=eSnyY5IDE4ACBOSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="flex w-full mt-2 drop-shadow-2xl">
                                <a href="#" class=" w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg dark:bg-primary">
                                    zum Video
                                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>



                <FooterPage></FooterPage>
            </body >
        </html>
    )
}

export default PodcastPage

export const Head = () => <title>Schon gehört?</title>


