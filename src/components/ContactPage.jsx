import React, { useState } from "react";

import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useGlobalContext } from "./Context";
import { FaArrowUpLong } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const ContactPage = ({scroll}) => {
  const { offsetY, _x } = useGlobalContext();

  const [x12, setx12] = useState(0);
  const [x22, setx22] = useState(0);
  const [y12, sety12] = useState(0);
  const [y22, sety22] = useState(0);
  const [blobX, setBlobX] = useState(0);
  const [blobY, setBlobY] = useState(0);

  function activateMagneto(e) {
    let magneto = document.getElementById("magneto2");
    let magnetoText = document.getElementById("magneto-text2");

    let boundBox = magneto.getBoundingClientRect();

    const newX = (e.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
    const newY = (e.clientY - boundBox.top) / magneto.offsetHeight - 0.5;
    setx12(newX * 40);
    setx22(newX * 40);
    sety12(newY * 40);
    sety22(newY * 40);
    setBlobX(e.clientX - boundBox.left - magneto.offsetWidth / 2);
    setBlobY(e.clientY - boundBox.top - magneto.offsetHeight / 2);
  }

  function resetMagneto(e) {
    setx12(0);
    setx22(0);
    sety12(0);
    sety22(0);
    setBlobX(0);
    setBlobY(0);
  }

  return (
    <div className="contact-pg h-screen  bg-neutral-100 text-zinc-800 flex flex-col justify-between items-center">
      <div
        className=" flex flex-col justify-center flex-grow items-center gap-10"
        id="contact"
      >
        <p className=" text-3xl sm:text-4xl overflow-hidden text-center text-stone-500">
          Want to Collaborate?
        </p>
        <p className="text-5xl sm:text-6xl font-semibold overflow-hidden text-center">
          GET IN TOUCH
        </p>
        <div className="border-2 overflow-hidden rounded-3xl grid place-items-center border-stone-500 px-8 py-6 sm:px-16 sm:py-8 h-[50px]">
          <a href="mailto:samyakmhrzn9841@gmail.com" target="_blank">
            <span className="flex justify-center items-center gap-3">
              <div className="text-slate-100 bg-zinc-800 rounded-full p-1">
                <IoMdMail size={25} />
              </div>
              <p className="text-xl sm:text-2xl underlined">
                mail@samyakmhrzn9841
              </p>
            </span>
          </a>
        </div>

        <div className="relative">
          <div className="flex text-slate-100 gap-[10px]">
            <div className="bg-zinc-800 rounded-full p-[5px]">
              <a
                className="yt"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <FaYoutube size={20} className="text-slate-100 bg-zinc-800" />
              </a>
            </div>

            <div className="bg-zinc-800 rounded-full p-[5px]">
              <a
                className="ig"
                href="https://github.com/samyak0-0/"
                target="_blank"
              >
                <FaGithub size={20} className="text-slate-100 bg-zinc-800" />
              </a>
            </div>
            <div className="bg-zinc-800 rounded-full p-[5px]">
              <a
                className="fb"
                href="https://www.linkedin.com/in/samyak-maharjan-767909293/"
                target="_blank"
              >
                <BsLinkedin
                  size={20}
                  className="text-zinc-800 bg-slate-100"
                />
              </a>
            </div>
            <div className="bg-zinc-800 rounded-full p-[5px]">
              <a
                className="ig"
                href="mailto:samyakmhrzn9841@gmail.com"
                target="_blank"
              >
                <IoMdMail size={20} className="text-slate-100 bg-zinc-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[10vh] mdd:mb-[50px]">
        <ul className="flex md:gap-2 md:text-xl">
          <li className=" p-2 mdd:p-3">
            <HashLink to="/#home" className="nav_link">
              Home
            </HashLink>
          </li>
          <li className=" p-2 mdd:p-3">
            <HashLink to="/#skills" className="nav_link">
              Expertise
            </HashLink>
          </li>
          <li className=" p-2 mdd:p-3">
            <HashLink to="/#myproj" className="nav_link">
              Projects
            </HashLink>
          </li>
          <li className=" p-2 mdd:p-3">
            <a href="https://blog-app-nine-ecru.vercel.app/" target="_blank" className="nav_link">
              Blog
            </a>
          </li>
          <li className=" p-2 mdd:p-3">
            <HashLink to="/#contact" className="nav_link">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>

      <a href="#" className={scroll}>
        <div
          id="magneto2"
          style={{ transform: `translate(${x12}px,${y12}px)` }}
          onMouseMove={activateMagneto}
          onMouseLeave={resetMagneto}
          className=" absolute right-5 bottom-[8vh] mdd:right-10 mdd:bottom-20 rounded-full p-4 h-fit aspect-square border-[3px] md:border-4 hover:border-0 0 border-slate-700 flex justify-center items-center cursor-pointer overflow-hidden blob_cont"
        >
          <div
            id="magneto-text2"
            style={{ transform: `translate(${x22}px,${y22}px)` }}
            className=" flex flex-col items-center justify-center"
          >
            <div>
              <FaArrowUpLong
                size={_x >= 600 ? 40 : 20}
                className=" blob_text text-slate-700  hover:text-slate-100"
              />
            </div>
          </div>
          <div
            className={`blob -z-10 absolute aspect-square bg-slate-700 rounded-full`}
            style={{ transform: `translate(${blobX}px, ${blobY}px)` }}
          ></div>
        </div>
      </a>
      <div className="pb-4">
        <p className="text-center p-[1px]">
          Copyright &copy; 2023 Samyak. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
