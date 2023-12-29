import * as React from "react"
import NavBar from "./navbar"
import FooterPage from "./footer"
import B1 from "../images/B1.webp"
import B2 from "../images/B2.webp"
import B3 from "../images/B3.webp"
import ABC from "../images/247.webp"
import Beratung from "../images/Beratung.webp"
import Verwaltung from "../images/Verwaltung.webp"
import Netzwerk from "../images/Netzwerk.webp"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";

const IndexPage = () => {
  return (
    <body>
      <NavBar class="z-50 relative"></NavBar>

        <section class="z-0">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Investiere in deine Zukunft - Hello</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Fange jetzt an in deine Zukunft zu investieren. Wir helfen dir die richtigen Entscheidungen zu treffen. Kontaktiere uns, um mehr zu erfahren.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white hover:text-black rounded-lg bg-secondary hover:bg-primary border-2 border-secondary hover:border-primary hover:drop-shadow-2xl">
                jetzt starten
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border-2 border-secondary hover:border-accent hover:bg-accent hover:drop-shadow-2xl focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-primary">
                mehr erfahren
              </a>
            </div>
          </div>
        </section>

        <div className="">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mr-8 ml-8 gap-8 ">

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <img class="h-60 w-full rounded-lg drop-shadow-lg" src={Beratung} alt="Hier ist ein Bild"></img>
              <h2 className=" ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Beratung</h2>
              <p className="m-2 h-40">Wir beraten dich. Lege dein Geld richtig an und triff mit uns die richtigen Entscheidungen. Wir beraten dich. Lege dein Geld richtig an und triff mit uns die richtigen Entscheidungen.</p>
              <div className="flex justify-end">
                <a href="#" class="mr-2 mb-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg focus:ring-4 dark:bg-primary">
                  jetzt starten
                  <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <div>
                <img class="h-60 w-full rounded-lg drop-shadow-lg" src={ABC} alt="Hier ist ein Bild"></img>
                <h2 className=" ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">24/7 Service</h2>
                <p className="m-2 h-40">Du bist dir nicht immer sicher, ob du die richtigen Entscheidungentriffst? Dann können wir dir per Chatnachricht helfen. 24/7 sind wir für dich erreichbar.</p>
                <div className="flex justify-end">
                  <a href="#" class="mr-2 mb-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg focus:ring-4 dark:bg-primary">
                    jetzt starten
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <div>
                <img class="h-60 w-full rounded-lg drop-shadow-lg" src={Verwaltung} alt="Hier ist ein Bild"></img>
                <h2 className="ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Verwaltung</h2>
                <p className="m-2 h-40">Du hast keine Lust dich um das Investieren selbst zu kümmern, dann können wir es dir auch komplett abnehmn. Das eintzige was du machst ist Rendite kassieren.</p>
                <div className="flex justify-end">
                  <a href="#" class="mr-2 mb-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg focus:ring-4 dark:bg-primary">
                    jetzt starten
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <div>
                <img class="h-60 w-full rounded-lg drop-shadow-lg" src={Netzwerk} alt="Hier ist ein Bild"></img>
                <h2 className="ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Netzwerk</h2>
                <p className="m-2  h-40">Werde Teil des Kursgewinn Netzwerks und profitiere von einem riesen Netzwerk von Wissen und interessanten Leuten. Werde Teil des Kursgewinn Netzwerks und profitiere von einem.</p>
                <div className="flex justify-end">
                  <a href="#" class="mr-2 mb-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg focus:ring-4 dark:bg-primary">
                    jetzt starten
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>



        <div class="">

          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Podcast jetzt auf Youtube und Spotify</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
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
        </div>

        <div class="py-8 px-4 mx-auto lg:w-2/3 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="md:mt-10 lg:mt-1">
            <p>
              Finanzielle Freiheit ist für viele ein wichtiges Ziel, erfordert jedoch sorgfältige Planung und Management.
              Es geht nicht nur darum, Vermögen aufzubauen, sondern auch darum, dieses klug zu verwalten und Risiken zu minimieren.
              Unser Team bietet Dir deshalb umfassende Unterstützung, damit Du Dich nicht mehr um die komplexen Details Deiner Finanzen kümmern musst.
              Wir helfen Dir, Deine finanziellen Ziele zu erreichen, indem wir einen maßgeschneiderten Plan entwickeln und Dich bei
              jedem Schritt begleiten, sodass Du Dich auf andere wichtige Aspekte Deines Lebens konzentrieren kannst.          </p>
          </div>
          <div className="flex">
            <h1 class="lg:ml-10 text-2xl font-extrabold text-black md:text-5xl lg:text-6xl dark:text-white">Unser Team hilft dir, deine Finanzen zu kontrollieren</h1>
          </div>

        </div>

        <div class="flex justify-center">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 w-full mx-2 lg:w-2/3">

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <h2 className="ml-2 mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Clara Green</h2>
              <img class="h-60 w-full p-2 rounded-2xl drop-shadow-lg" src={B3} alt="Hier ist ein Bild"></img>
              <p className="m-2 h-20">Relationship Manager</p>
              <div className="flex justify-end">
                <a href="/kontakt" class="w-full mx-2 mb-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg focus:ring-4 dark:bg-primary">
                  jetzt kontaktieren
                  <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <div>
                <h2 className="ml-2 mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Louis Pfeiffer</h2>
                <img class="h-60 w-full p-2 rounded-2xl drop-shadow-lg" src={B2} alt="Hier ist ein Bild"></img>
                <p className="m-2 h-20">CEO</p>
                <div className="flex justify-end">
                  <a href="kontakt" class="w-full mx-2 mb-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg focus:ring-4 dark:bg-primary">
                    jetzt kontaktieren
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <div>
                <h2 className="ml-2 mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Chris Hamosie</h2>
                <img class="h-60 w-full p-2 rounded-2xl drop-shadow-lg" src={B1} alt="Hier ist ein Bild"></img>
                <p className="m-2 h-20">Head of Finance</p>
                <div className="flex justify-end">
                  <a href="kontakt" class="w-full mx-2 mb-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-secondary border-2 border-secondary hover:drop-shadow-lg focus:ring-4 dark:bg-primary">
                    jetzt kontaktieren
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center w-2/3 mb-4 bg-accent p-4 rounded-lg gap-8 drop-shadow-lg">
            <FaInstagram className="w-20 h-20 opacity-20 hover:opacity-100" />
            <FaTiktok className="w-20 h-20 opacity-20 hover:opacity-100" />
            <FaXTwitter className="w-20 h-20 opacity-20 hover:opacity-100" />
            <FaYoutube className="w-20 h-20 opacity-20 hover:opacity-100" />
            <BsLinkedin className="w-20 h-20 opacity-20 hover:opacity-100" />
            <FaThreads className="w-20 h-20 opacity-20 hover:opacity-100" />
          </div>
        </div>


        <div class="py-8 px-4 mx-auto lg:w-2/3 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="flex">
            <h1 class="lg:ml-10 text-2xl font-extrabold text-black md:text-5xl lg:text-6xl dark:text-white">Unser Team hilft dir, deine Finanzen zu kontrollieren</h1>
          </div>

          <div className="md:mt-10 lg:mt-1">
            <p>
              Finanzielle Freiheit ist für viele ein wichtiges Ziel, erfordert jedoch sorgfältige Planung und Management.
              Es geht nicht nur darum, Vermögen aufzubauen, sondern auch darum, dieses klug zu verwalten und Risiken zu minimieren.
              Unser Team bietet Dir deshalb umfassende Unterstützung, damit Du Dich nicht mehr um die komplexen Details Deiner Finanzen kümmern musst.
              Wir helfen Dir, Deine finanziellen Ziele zu erreichen, indem wir einen maßgeschneiderten Plan entwickeln und Dich bei
              jedem Schritt begleiten, sodass Du Dich auf andere wichtige Aspekte Deines Lebens konzentrieren kannst.          </p>
          </div>

        </div>

        <div class="py-8 px-4 mx-auto lg:w-2/3 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="flex">
            <img class="h-60 w-full rounded-lg drop-shadow-lg" src={B1} alt="Hier ist ein Bild"></img>
          </div>

          <div className="md:mt-10 lg:mt-1">
            <p>
              Finanzielle Freiheit ist für viele ein wichtiges Ziel, erfordert jedoch sorgfältige Planung und Management.
              Es geht nicht nur darum, Vermögen aufzubauen, sondern auch darum, dieses klug zu verwalten und Risiken zu minimieren.
              Unser Team bietet Dir deshalb umfassende Unterstützung, damit Du Dich nicht mehr um die komplexen Details Deiner Finanzen kümmern musst.
              Wir helfen Dir, Deine finanziellen Ziele zu erreichen, indem wir einen maßgeschneiderten Plan entwickeln und Dich bei
              jedem Schritt begleiten, sodass Du Dich auf andere wichtige Aspekte Deines Lebens konzentrieren kannst.          </p>
          </div>

        </div>

        <div class="py-8 px-4 mx-auto lg:w-2/3 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="md:mt-10 lg:mt-1">
            <p>
              Finanzielle Freiheit ist für viele ein wichtiges Ziel, erfordert jedoch sorgfältige Planung und Management.
              Es geht nicht nur darum, Vermögen aufzubauen, sondern auch darum, dieses klug zu verwalten und Risiken zu minimieren.
              Unser Team bietet Dir deshalb umfassende Unterstützung, damit Du Dich nicht mehr um die komplexen Details Deiner Finanzen kümmern musst.
              Wir helfen Dir, Deine finanziellen Ziele zu erreichen, indem wir einen maßgeschneiderten Plan entwickeln und Dich bei
              jedem Schritt begleiten, sodass Du Dich auf andere wichtige Aspekte Deines Lebens konzentrieren kannst.          </p>
          </div>

          <div className="flex">
            <img class="h-60 w-full rounded-lg drop-shadow-lg" src={B1} alt="Hier ist ein Bild"></img>
          </div>

        </div>

        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Investiere in deine Zukunft</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Fange jetzt an in deine Zukunft zu investieren. Wir helfen dir die richtigen Entscheidungen zu treffen. Kontaktiere uns, um mehr zu erfahren.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white hover:text-black rounded-lg bg-secondary hover:bg-primary border-2 border-secondary hover:border-primary hover:drop-shadow-2xl">
                jetzt starten
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border-2 border-secondary hover:border-accent hover:bg-accent hover:drop-shadow-2xl focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-primary">
                mehr erfahren
              </a>
            </div>
          </div>
        </section>

      <FooterPage></FooterPage>
    </body >
  )
}

export default IndexPage

export const Head = () => <title>home</title>
