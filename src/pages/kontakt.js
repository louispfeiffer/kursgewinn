import * as React from "react"
import NavBar from "./navbar"
import FooterPage from "./footer"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";


const KontaktPage = () => {
  return (
    <body>
      <NavBar></NavBar>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Kontaktiere uns gern!</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Hast du Fragen oder möchtest du mehr über unsere Services erfahren? Kein Problem! Schreibe
            uns hier einfach eine kurze Nachricht, und wir versuchen, dir so schnell wie möglich weiterzuhelfen.
          </p>
        </div>
      </section>

      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deine E-Mail Adresse</label>
          <input type="email" id="email" class="border-2 border-secondary text-black text-sm rounded-lg w-full p-2.5 dark:text-white dark:border-primary" placeholder="example@mail.com" required>
          </input>
        </div>
        <div class="mb-5">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dein Vor- und Nachname</label>
          <input type="text" id="name" class="border-2 border-secondary text-black text-sm rounded-lg w-full p-2.5 dark:text-white dark:border-primary" placeholder="Max Mustermann" required>
          </input>
        </div>
        <div class="mb-5">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deine Nachricht</label>
          <textarea type="message" id="message" class="border-2 border-secondary text-black text-sm rounded-lg w-full p-2.5 dark:text-white dark:border-primary" required>
          </textarea>
        </div>

        <button type="submit" class="inline-flex justify-center items-center p-2 w-full text-base font-medium text-center text-white hover:text-black rounded-lg bg-secondary hover:bg-primary border-2 border-secondary hover:border-primary hover:drop-shadow-2xl">Submit</button>
      </form>

      <div className="lg:block lg:flex lg:flex-col lg:items-center lg:mt-10 hidden">
        <h2 className="text-2xl font-bold mb-4">Schau auch bei meinen anderen Profilen vorbei</h2>
        <div className="flex space-x-4 mb-4 bg-accent p-2 rounded-lg">
          <FaInstagram className="w-20 h-20 opacity-20 hover:opacity-100" />
          <FaTiktok className="w-20 h-20 opacity-20 hover:opacity-100" />
          <FaXTwitter className="w-20 h-20 opacity-20 hover:opacity-100" />
          <FaYoutube className="w-20 h-20 opacity-20 hover:opacity-100" />
          <BsLinkedin className="w-20 h-20 opacity-20 hover:opacity-100" />
          <FaThreads className="w-20 h-20 opacity-20 hover:opacity-100" />
        </div>
      </div>



      <FooterPage></FooterPage>
    </body >
  )
}

export default KontaktPage

export const Head = () => <title>home</title>
