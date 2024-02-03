import * as React from "react"
import NavBar from "./navbar"
import Header from "./header"
import FooterPage from "./footer"
import text from "../images/text_img.webp"
import employe_1 from "../images/Alex_Bramer4.webp"
import employe_2 from "../images/Alex_Bramer4.webp"
import employe_3 from "../images/Clara_Green4.webp"
import yt_thumb from "../images/YouTube Thumbnail Podcast mit Modifox (HD).webp"
import ABC from "../images/Service3.webp"
import Beratung from "../images/News3.webp"
import Verwaltung from "../images/Analysen3.webp"
import Netzwerk from "../images/Netzwerk3.webp"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";

const IndexPage = () => {
  return (
    <html lang="de">

      <Header></Header>

      <body>
        <NavBar class="z-50 relative"></NavBar>

        <section class="z-0">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Investieren Sie in Ihre Zukunft</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Fangen Sie jetzt an in Ihre Zukunft zu investieren. Wir helfen Ihnen die richtigen Entscheidungen zu treffen. Kontaktieren Sie uns, um mehr zu erfahren.</p>
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
              <h2 className=" ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">News</h2>
              <p className="m-2 h-40">
                Jeden Tag kommen hunderte Nachrichten raus, aber was davon ist eigentlich wichtig?
                Bleiben Sie mit unserem gefilterten Newsfeed immer auf dem neuesten Stand und fokussieren Sie sich auf die wichtigen Informationen.
              </p>
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
                <p className="m-2 h-40">
                  Sie sind sich nicht immer sicher, ob Sie die richtigen Entscheidungen treffen? Dann können wir Ihnen per Chatnachricht helfen.
                  24/7 sind wir für Sie erreichbar.
                </p>
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
                <h2 className="ml-2 mt-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Analysen</h2>
                <p className="m-2 h-40">
                  Wie bewertet man ein Unternehmen? Bei dieser Entscheidung helfen wir Ihnen mit unseren Top-Analysen.
                </p>
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
                <p className="m-2  h-40">
                  Werden Sie Teil des Kursgewinn-Netzwerkes und profitieren Sie von einem riesigen Netzwerk von Wissen und interessanten Leuten.
                </p>
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
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Der Schuh für drinnen und draußen! Der neue Podcast ist jetzt auf YouTube verfügbar. Es ging um viel Geld, Gesetzesänderungen und Mega-Yachten.</p>
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
            <div id="placeholder" class="h-full w-full">
              <img class="h-full w-full object-cover" src={yt_thumb} alt="YouTube Thumbnail" />
            </div>

          </div>
          <div id="player"></div>
        </div>

        <div class="py-8 px-4 mx-auto lg:w-2/3 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="md:mt-10 lg:mt-1">
            <p>
              Finanzielle Freiheit ist für viele ein wichtiges Ziel, erfordert jedoch sorgfältige Planung und Management.
              Es geht nicht nur darum, Vermögen aufzubauen, sondern auch darum, dieses klug zu verwalten und Risiken zu minimieren.
              Unser Team bietet Ihnen deshalb umfassende Unterstützung, damit Sie sich nicht mehr um die komplexen Details Ihrer Finanzen kümmern müssen.
              Wir helfen Ihnen, Ihre finanziellen Ziele zu erreichen, indem wir einen maßgeschneiderten Plan entwickeln und Sie bei jedem Schritt begleiten,
              sodass Sie sich auf andere wichtige Aspekte Ihres Lebens konzentrieren können.
            </p>
          </div>
          <div className="flex">
            <h1 class="lg:ml-10 text-2xl font-extrabold text-black md:text-5xl lg:text-6xl dark:text-white">Unser Team hilft dir, deine Finanzen zu kontrollieren</h1>
          </div>

        </div>

        <div class="flex justify-center">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 w-full mx-2 lg:w-2/3">

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <h2 className="ml-2 mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Clara Green</h2>
              <img class="h-60 w-full p-2 rounded-2xl drop-shadow-lg" src={employe_1} alt="Hier ist ein Bild"></img>
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
                <img class="h-60 w-full p-2 rounded-2xl drop-shadow-lg" src={employe_2} alt="Hier ist ein Bild"></img>
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

            <div className="bg-accent rounded-lg drop-shadow-2xl lg:p-2 border-2 border-accent hover:border-2 hover:border-secondary">
              <div>
                <h2 className="ml-2 mb-4 text-lg font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-4xl dark:text-white mt-2">Chris Hamosie</h2>
                <img class="h-60 w-full p-2 rounded-2xl drop-shadow-lg" src={employe_3} alt="Hier ist ein Bild"></img>
                <p className="m-2 h-20">Head of Analytics</p>
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
            <h1 class="lg:ml-10 text-2xl font-extrabold text-black md:text-5xl lg:text-6xl dark:text-white">Wir bringen Erfahrung</h1>
          </div>

          <div className="md:mt-10 lg:mt-1">
            <p>
              Wir bringen nicht nur frischen Wind in die Finanzwelt, sondern auch Erfahrung. Zusammen kann unser Team eine Marktpräsenz von rund 50 Jahren nachweisen.
              Man sagt ja, die Geschichte wiederholt sich – unser Team hat alles gesehen und kann Ihnen daher in jedem Fall hervorragend weiterhelfen.
            </p>
          </div>

        </div>

        <div class="py-8 px-4 mx-auto lg:w-2/3 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="flex">
            <img class="h-60 w-full rounded-lg drop-shadow-lg" src={text} alt="Hier ist ein Bild"></img>
          </div>

          <div className="md:mt-10 lg:mt-1">
            <p>
              Die ständige Aktualisierung und das Verständnis der neuesten Entwicklungen am Finanzmarkt sind von entscheidender Bedeutung für Anleger, Finanzberater und Unternehmen.
              Der Finanzmarkt ist ein dynamisches Umfeld, in dem sich Preise und Bedingungen schnell ändern können. Aktuelle Informationen über Markttrends,
              regulatorische Änderungen und wirtschaftliche Indikatoren ermöglichen es den Marktteilnehmern, fundierte Entscheidungen zu treffen.
            </p>
          </div>

        </div>

        <div class="py-8 px-4 mx-auto lg:w-2/3 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="md:mt-10 lg:mt-1">
            <p>
              Das langfristige Denken im Finanzbereich ist ein entscheidender Faktor für nachhaltigen Erfolg.
              Während kurzfristige Strategien auf schnelle Gewinne abzielen können,
              ermöglicht eine langfristige Perspektive eine tiefere Analyse und ein besseres Verständnis des Marktes und seiner potenziellen Entwicklungen.
            </p>
          </div>

          <div className="flex">
            <img class="h-60 w-full rounded-lg drop-shadow-lg" src={text} alt="Hier ist ein Bild" href="https://youtu.be/5d1tHkAXCCA?si=T8mKI4wohRnOowtM"></img>
          </div>

        </div>

        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Investieren Sie in Ihre Zukunft</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Fangen Sie jetzt an in Ihre Zukunft zu investieren. Wir helfen Ihnen die richtigen Entscheidungen zu treffen. Kontaktieren Sie uns, um mehr zu erfahren.</p>
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
    </html>
  )
}

export default IndexPage

export const Head = () => <title>Kursgewinn</title>
