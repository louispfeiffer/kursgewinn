import * as React from "react"
import NavBar from "./navbar"
import FooterPage from "./footer"
import B1 from "../images/B1.webp"
import B2 from "../images/B2.webp"
import B3 from "../images/B3.webp"
import Disney from "../images/Disney.webp"
import TTE from "../images/TTE.webp"
import AppleHeadQ from "../images/AppleHeadQ.webp"
import Nvidia from "../images/Nvidia.webp"

const AktienPage = () => {
    return (
        <body>
            <NavBar></NavBar>

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Diese Aktien haben wir im Auge</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Fange jetzt an in deine Zukunft zu investieren. Wir helfen dir die richtigen Entscheidungen zu treffen. Kontaktiere uns, um mehr zu erfahren.</p>
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
                <p className="m-2 h-10 text-sm text-center">Alle Angaben sind in USD, Quelle <a href="https://www.finanzen.net/" className="hover:text-secondary">Finanzen.net</a>, die Bilder sind KI generiert</p>
            </section>

            <div class="flex justify-center">
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-3/4 gap-8">

                    <img class="w-full rounded-lg drop-shadow-2xl" src={AppleHeadQ} alt="Hier ist ein Bild"></img>

                    <div className="bg-accentapple rounded-lg drop-shadow-2xl lg:p-2 flex flex-col justify-between">
                        <div>
                            <h2 className="ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white">Apple</h2>
                            <p className="m-2 lg:h-40">Apple Inc. ist ein globales Technologieunternehmen, dessen Aktien unter dem Ticker-Symbol AAPL
                                an der NASDAQ gehandelt werden. Als eines der wertvollsten Unternehmen weltweit zeichnet sich Apple durch eine starke
                                Marktposition aus.
                            </p>
                        </div>
                        <div className="flex w-full mb-2">
                            <a href="#" class="mx-2 w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg dark:bg-primary">
                                mehr lesen
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>


                    <div className="bg-accentapple rounded-lg drop-shadow-2xl lg:p-2">

                        <h2 className=" ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none md:text-xl lg:text-4xl dark:text-white mt-2">Q3/23</h2>

                        <div class="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 m-2 gap-2 h-80" >

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">KGV: 27,91</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Div. Rendite: 0,55%</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">EPS: 6,16</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Umsatz: 383 Mrd</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Gewinn*: 96,9 Mrd</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Gewinn*: 96,9 Mrd</p>
                            </div>
                        </div>
                    </div>




                    <img class="w-full rounded-lg drop-shadow-2xl" src={Nvidia} alt="Hier ist ein Bild"></img>

                    <div className="bg-accentnvidia rounded-lg drop-shadow-2xl lg:p-2 flex flex-col justify-between">
                        <div>
                            <h2 className="ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white">Nvidia</h2>
                            <p className="m-2 lg:h-40">
                                NVIDIA ist ein führendes Technologieunternehmen, dessen Aktien unter dem Ticker-Symbol NVDA an der NASDAQ gehandelt werden.
                                Bekannt für seine bahnbrechenden Entwicklungen im Bereich der Grafikprozessoren und künstlichen Intelligenz,
                                hat sich NVIDIA als unverzichtbar erwiesen.
                            </p>
                        </div>
                        <div className="flex w-full mb-2">
                            <a href="#" class="mx-2 w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg dark:bg-primary">
                                mehr lesen
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-accentnvidia rounded-lg drop-shadow-2xl lg:p-2">

                        <h2 className=" ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none md:text-xl lg:text-4xl dark:text-white mt-2">Q3/23</h2>

                        <div class="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 m-2 gap-2 h-80" >

                            <div className="flex place-self-center justify-center w-full">
                                <p className="text-xl font-bold">KGV: 27,91</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Div. Rendite: 0,55%</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">EPS: 6,16</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Umsatz: 383 Mrd</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Gewinn*: 96,9 Mrd</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Gewinn*: 96,9 Mrd</p>
                            </div>
                        </div>
                    </div>




                    <img class="w-full rounded-lg drop-shadow-2xl" src={Disney} alt="Hier ist ein Bild"></img>
                    <div className="bg-accentdisney rounded-lg drop-shadow-2xl lg:p-2 flex flex-col justify-between">
                        <div>
                            <h2 className="ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white">Disney</h2>
                            <p className="m-2 lg:h-40">
                                The Walt Disney Company ist ein weltweit führendes Unterhaltungs- und Medienunternehmen, dessen Aktien unter dem
                                Ticker-Symbol DIS an der NYSE gehandelt werden. Als einer der prominentesten Namen in der Unterhaltungsindustrie
                                zeichnet sich die Aktie durch seine umfangreiche Medienbibliothek aus.
                            </p>
                        </div>
                        <div className="flex w-full mb-2">
                            <a href="#" class="mx-2 w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg dark:bg-primary">
                                mehr lesen
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-accentdisney rounded-lg drop-shadow-2xl lg:p-2">

                        <h2 className=" ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none md:text-xl lg:text-4xl dark:text-white mt-2">Q3/23</h2>

                        <div class="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 m-2 gap-2 h-80" >

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">KGV: 27,91</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Div. Rendite: 0,55%</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">EPS: 6,16</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Umsatz: 383 Mrd</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Gewinn*: 96,9 Mrd</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Gewinn*: 96,9 Mrd</p>
                            </div>
                        </div>
                    </div>




                    <img class="w-full rounded-lg drop-shadow-2xl" src={TTE} alt="Hier ist ein Bild"></img>

                    <div className="bg-accenttte rounded-lg drop-shadow-2xl lg:p-2 flex flex-col justify-between">
                        <div>
                            <h2 className="ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white">Total Energies</h2>
                            <p className="m-2 lg:h-40">
                                TotalEnergies ist ein weltweit führendes Energieunternehmen, dessen Aktien unter dem Ticker-Symbol TTE an der Euronext Paris gehandelt werden.
                                Als einer der größten Akiten in der Energiebranche zeichnet sich TotalEnergies durch seine breit gefächerte Energiepalette aus, die sowohl
                                traditionelle Energiequellen wie Öl und Gas als auch erneuerbare Energien wie Wind- und Solarenergie umfasst.
                            </p>
                        </div>
                        <div className="flex w-full mb-2">
                            <a href="#" class="mx-2 w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg dark:bg-primary">
                                mehr lesen
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="bg-accenttte rounded-lg drop-shadow-2xl lg:p-2">

                        <h2 className=" ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none md:text-xl lg:text-4xl dark:text-white mt-2">Q3/23</h2>

                        <div class="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 m-2 gap-2 h-80" >

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">KGV: 27,91</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Div. Rendite: 0,55%</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">EPS: 6,16</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Umsatz: 383 Mrd</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Gewinn*: 96,9 Mrd</p>
                            </div>

                            <div className="flex place-self-center justify-center w-full p-2">
                                <p className="text-xl font-bold">Gewinn*: 96,9 Mrd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterPage></FooterPage>
        </body >
    )
}

export default AktienPage

export const Head = () => <title>Aktien</title>
