"use client"
import { FaMoon } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"
import Image from "next/image"
import coding1 from "./images/coding1.png"
import coding2 from "./images/coding2.png"
import coding3 from "./images/coding3.png"
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (

    <main className={ darkMode ? "dark" : "" }>
      <div className=" text-black dark:text-gray-200 dark:bg-gray-900 duration-200 delay-100 ">
        <title>Jack Allcock's Portfolio</title>
        <div>
          <nav className=" justify-between flex items-center bg-white dark:bg-gray-900 duration-200 delay-100 sm:px-10 py-2 border-gray-200 border-t-0 border-r-0 border-l-0 border-b-2 fixed top-0 w-full ">
            <h1>DEVELOPED BY VIGORINE</h1>
            <ul className=" flex items-center ">
              <li>
                <FaMoon onClick={() => setDarkMode(!darkMode)}className=" cursor-pointer text-2xl"/>
              </li>
              <li>
                <a href="#" className=" ml-8 mr-10 bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md duration-200 delay-100 ">Home</a>
                <a href="#" className=" mr-10 bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md duration-200 delay-100 ">Portfolio</a>
                <a href="#" className=" mr-10 bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md duration-200 delay-100 ">CV</a>
                <a href="#" className=" bg-gray-400 dark:bg-gray-600 px-4 py-1 rounded-md duration-200 delay-100 ">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" text-center p-10 ">
          <h2 className=" text-5xl py-2 text-teal-600 font-medium ">Jack Allcock</h2>
          <h3 className=" text-xl ">Programmer and student.</h3>
          <p className=" text-md py-3 leading-8 ">Hey! I'm a programmer that is currently studying coding, so this website can be better.</p>
          <p className=" text-md ">Please support my socials!</p>
        </div>
        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-500">
          <a href="https://twitter.com/vigoralicious"><AiOutlineTwitter/></a>
          <a href="https://github.com/Vigorine"><AiOutlineGithub/></a>
          <a href="https://linkedin.com/in/jack-allcock-40431a251"><AiOutlineLinkedin/></a>
        </div>
        <div>
          <h1 className=" text-5xl text-teal-600 font-medium text-center pt-96">Portfolio</h1>
          <div className=" flex justify-between gap-10 px-40 py-10 ">
            <div className=" rounded-md ">
              <Image className=" object-cover h-72 w-96 " src={coding1} />
            </div>
            <div className=" rounded-md ">
              <Image className=" object-cover h-72 w-96 " src={coding2} />
            </div>
            <div className=" rounded-md ">
              <Image className=" object-cover h-72 w-96 " src={coding3} />
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}
