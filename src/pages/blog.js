import * as React from "react"
import NavBar from "./navbar"
import FooterPage from "./footer"
import Header from "./header"
import B1 from "../images/B1.webp"
import B2 from "../images/B2.webp"
import B3 from "../images/B3.webp"
import Disney from "../images/Disney.webp"
import TTE from "../images/TTE.webp"
import AppleHeadQ from "../images/AppleHeadQ.webp"
import Nvidia from "../images/Nvidia.webp"

const BlogPage = () => {
    return (
        <html>

            <Header></Header>
            <body>
                <NavBar></NavBar>

                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hast du eine Frage, hier gibts die Antwort.</h1>
                        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Schau dir alle aktuellen Blog an, um immer auf dem neuesten Stand zu sein. Wenn es noch unbeantwortete Frage gibt, dann kannst du uns auch gern kontaktieren.</p>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="/kontakt" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white hover:text-black rounded-lg bg-secondary hover:bg-primary border-2 border-secondary hover:border-primary hover:drop-shadow-2xl">
                                jetzt starten
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <a href="/kontakt" class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border-2 border-secondary hover:border-accent hover:bg-accent hover:drop-shadow-2xl focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-primary">
                                mehr erfahren
                            </a>
                        </div>
                    </div>
                </section>

                <div class="flex justify-center">
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-3/4 gap-8">

                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={AppleHeadQ} alt="Hier ist ein Bild" />
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-0 bg-opacity-20 rounded-lg flex items-center justify-center">
                                <div class="text-black px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>

                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={Nvidia} alt="Hier ist ein Bild"></img>
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-0 bg-opacity-20 rounded-lg flex items-center justify-center">
                                <div class="text-black px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>

                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={Disney} alt="Hier ist ein Bild"></img>
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-20 bg-opacity-50 rounded-lg flex items-center justify-center">
                                <div class="text-black px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>

                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={TTE} alt="Hier ist ein Bild"></img>
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-20 bg-opacity-50 rounded-lg flex items-center justify-center">
                                <div class="text-white font-bold text-lg text-bolder px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>


                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={AppleHeadQ} alt="Hier ist ein Bild" />
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-20 bg-opacity-50 rounded-lg flex items-center justify-center">
                                <div class="text-white text-lg font-extrabold px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>

                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={Nvidia} alt="Hier ist ein Bild"></img>
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-20 bg-opacity-50 rounded-lg flex items-center justify-center">
                                <div class="text-white text-xl font-black px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>

                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={Disney} alt="Hier ist ein Bild"></img>
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-20 bg-opacity-50 rounded-lg flex items-center justify-center">
                                <div class="text-white px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>

                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={TTE} alt="Hier ist ein Bild"></img>
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-20 bg-opacity-50 rounded-lg flex items-center justify-center">
                                <div class="text-white px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>

                        <div class="relative w-full">
                            <img class="w-full rounded-lg drop-shadow-2xl" src={TTE} alt="Hier ist ein Bild"></img>
                            <div class="absolute top-0 left-0 w-full h-full bg-black hover:bg-opacity-20 bg-opacity-50 rounded-lg flex items-center justify-center">
                                <div class="text-white px-4 py-2 text-center">
                                    Kurzer Call to Action für den Blog
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <FooterPage></FooterPage>
            </body >
        </html>
    )
}

export default BlogPage

export const Head = () => <title>Blog</title>
