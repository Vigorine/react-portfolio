import { FaMoon } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

export default function Home() {
  return (
      
    <main className=" bg-white ">
      <title>Jack Allcock's Portfolio</title>
      <div className=" text-black">
        <nav className=" py-10 ml-8 flex justify-between ">
          <h1>DEVELOPED BY VIGORINE</h1>
          <ul className=" flex items-center ">
            <li>
              <FaMoon className=" cursor-pointer text-2xl"/>
            </li>
            <li>
              <a href="#" className=" ml-8 mr-10 bg-cyan-400 px-4 py-1 rounded-md ">Home</a>
              <a href="#" className=" mr-10 bg-cyan-400 px-4 py-1 rounded-md ">Portfolio</a>
              <a href="#" className=" mr-10 bg-cyan-400 px-4 py-1 rounded-md ">CV</a>
              <a href="#" className=" mr-8 bg-cyan-400 px-4 py-1 rounded-md ">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="  text-black text-center p-10 first-letter:">
        <h2 className=" text-5xl py-2 text-teal-600 font-medium ">Jack Allcock</h2>
        <h3 className=" text-xl ">Programmer and student.</h3>
        <p className=" text-md py-3 leading-8 ">Hey! I'm a programmer that is currently studying coding, so this website can be better.</p>
        <p className=" text-md ">Please support my socials!</p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-500 ">
        <a href="https://twitter.com/vigoralicious"><AiOutlineTwitter/></a>
        <a href="https://github.com/Vigorine"><AiOutlineGithub/></a>
        <a href="https://linkedin.com/in/jack-allcock-40431a251"><AiOutlineLinkedin/></a>
      </div>
    </main>

  )
}
