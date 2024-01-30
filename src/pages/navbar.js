import React, { useState } from 'react';
import logo from "../images/logo.webp"

function NavBar() {
  function toggleMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



  return (

    <nav class="z-50 relative sticky top-2 bg-white drop-shadow-xl mx-2 rounded-lg opacity-80 hover:opacity-100">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} class="h-8" alt="Kursgewinn Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kursgewinn</span>
        </a>
        <button onClick={toggleMenu} id="mobile-menu" data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden focus:ring-accent focus:bg-white  dark:text-white" aria-controls="mobile-menu" aria-expanded="false">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden md:flex w-full md:w-auto" id="mobile-menu-dropdown">
          <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border-gray-100 md:border-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent rounded-lg md:rounded-none">
            <li className='lg:bg-white border-2 border-bg-secondary rounded-lg h-10 p-2'>
              <a href="/landingpage" class="block text-center md:text-left px-3 text-black font-extrabold rounded dark:text-white">Home</a>
            </li>
            <li className='lg:bg-white border-2 border-bg-secondary rounded-lg h-10 p-2'>
              <a href="/blog" class="block text-center md:text-left px-3 text-black rounded dark:text-white">Blog</a>
            </li>
            <li className='lg:bg-white border-2 border-bg-secondary rounded-lg h-10 p-2'>
              <a href="/aktien" class="block text-center md:text-left px-3 text-black rounded dark:text-white">Aktien</a>
            </li>
            <li className='lg:bg-white border-2 border-bg-secondary rounded-lg h-10 p-2'>
              <a href="/kontakt" class="block text-center md:text-left px-3 text-black rounded dark:text-white">Kontakt</a>
            </li>
            <li className='lg:bg-white border-2 border-bg-secondary rounded-lg h-10 p-2'>
              <a href="/podcast" class="block text-center md:text-left px-3 text-black rounded dark:text-white">Podcast</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  )
}

export default NavBar

export const Head = () => <title>home</title>
