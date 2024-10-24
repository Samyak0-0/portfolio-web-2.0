import React from "react";
import { useGlobalContext } from "./Context";
import { HashLink } from "react-router-hash-link";

const Menu = () => {
  const { setMenu } = useGlobalContext();

  return (
    <div className=" fixed w-full max-w-[500px] right-0 h-screen bg-zinc-900 z-40 flex flex-col justify-center items-center">
      <ul className="text-white text-2xl flex flex-col justify-around w-full h-3/5 relative  ">
        <li className="overflow-hidden border-y-2 border-gray-500 flex-grow flex items-center pl-10">
          <HashLink to="/#home" className="" onClick={() => setMenu(false)}>
            Home
          </HashLink>
        </li>
        <li className="overflow-hidden border-b-2 border-gray-500 flex-grow flex items-center pl-10">
          <HashLink to="/#skills" className="" onClick={() => setMenu(false)}>
            Skills
          </HashLink>
        </li>
        <li className="overflow-hidden border-b-2 border-gray-500 flex-grow flex items-center pl-10">
          <HashLink to="/#myproj" className="" onClick={() => setMenu(false)}>
            Projects
          </HashLink>
        </li>
        <li className="overflow-hidden border-b-2 border-gray-500 flex-grow flex items-center pl-10">
          <a
            href="https://blog-app-nine-ecru.vercel.app/"
            target="_blank"
            className=""
          >
            Blog
          </a>
        </li>
        <li className="overflow-hidden border-b-2 border-gray-500 flex-grow flex items-center pl-10">
          <HashLink to="/#contact" className="" onClick={() => setMenu(false)}>
            Contact Me !
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
