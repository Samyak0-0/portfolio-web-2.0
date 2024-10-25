import React, { useContext } from "react";
import { useState, useEffect } from "react";
import backimg1 from "../assets/backimg1.png";
import backimg2 from "../assets/backimg2.png";
import projimg3 from "../assets/proj3.png";

import { SiNextdotjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoFirebase } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { PiFileSvg } from "react-icons/pi";


const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSn, setSelectedSn] = useState(0);

  const handleClose = () => {
    setShowModal(false);
  };

  const repeatedUpcommingProjects = 3;
  const numberOfUpcommingProjects = 4;

  const left_scroll = () => {
    if (selectedSn == 0) {
      setSelectedSn(ProjDesc.length - 1 - repeatedUpcommingProjects);
    } else {
      setSelectedSn(selectedSn - 1);
    }
  };

  const right_scroll = () => {
    if (selectedSn >= ProjDesc.length - 1 - repeatedUpcommingProjects) {
      setSelectedSn(0);
    } else {
      setSelectedSn(selectedSn + 1);
    }
  };

  const [menu, setMenu] = useState(false);

  const [offsetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ProjDesc = [
    {
      sn: 0,
      title: "Blog App",
      description:
        "This blog page allows users log in with Google to create, share and comment on posts, built with Next.js, MongoDB, Prisma, OAuth, and Firebase. With a sleek and simple UI, Users can explore posts by category, share their thoughts and get feedback easily.",
      front_img: backimg2,
      viewimg: backimg2,
      Link: "https://blog-app-nine-ecru.vercel.app",
      techIcons: [
        <SiNextdotjs />,
        <SiMongodb />,
        <SiPrisma />,
        <BiLogoFirebase />,
      ],
      source: "",
    },
    {
      sn: 1,
      title: "Chat-app",
      description:
        "A real time messaging app made using the MERN Stack along with json web tokens(JWT), Web Sockets and typescript. Sensitive information are all encrypted using bycrpyt js and stored in mongo DB, the use of Web Sockets allows for real time online status update and communication between users.",
      front_img: backimg1,
      viewimg: backimg1,
      Link: "",
      techIcons: [
        <SiMongodb />,
        <SiExpress />,
        <FaReact />,
        <FaNodeJs />,
        <SiTypescript />,
        <SiTailwindcss />,
      ],
      source: "",
    },
    {
      sn: 2,
      title: "Freelance Website Project",
      description:
        "A freelance job where I created a stunning musical portfolio fro my client, using react js, tailwind, vite and a focus on easy updatability.",
      front_img: projimg3,
      viewimg: projimg3,
      Link: "",
      techIcons: [
        <FaReact />,
        <SiTailwindcss />,
        <SiVite />,
        <IoLogoFigma />,
        <PiFileSvg />
      ],
      source: "",
    },
    {
      sn: 3,
      title: "Portfolio - v.1.0 (outdated) ",
      description:
        "This used to be my previous portfolio website made primarily using react JS.",
      front_img: backimg1,
      viewimg: backimg1,
      Link: "",
      techIcons: [
        <FaReact />,
        <IoLogoCss3 />,
        <IoLogoJavascript />
      ],
      source: "",
    },
    {
      sn: 4,
      title: "Meals Finder App",
      description:
        "A website that helps to find new meals and search various recipes with the help of React JS, CSS and Meals API.",
      front_img: backimg1,
      viewimg: backimg1,
      Link: "",
      techIcons: [
        <FaReact />,
        <IoLogoCss3 />,
        <IoLogoJavascript />
      ],
      source: "",
    },
    {
      sn: 5,
      title: "Stock Tracker App",
      description:
        "A website that can track all of the popular stocks, explore new ones and observe their performances in graph using the data fetched from FinnHub API.",
      front_img: backimg2,
      viewimg: backimg2,
      Link: "https://blog-app-nine-ecru.vercel.app",
      techIcons: [
        <FaReact />,
        <IoLogoCss3 />,
        <IoLogoJavascript />
      ],
      source: "",
    },
    {
      sn: 6,
      title: "Team Manager App",
      description:
        " A website to help you or an organization manage, assign and track your specific team and their team members.",
      front_img: backimg2,
      viewimg: backimg2,
      Link: "",
      techIcons: [
        <FaReact />,
        <IoLogoCss3 />,
        <IoLogoJavascript />
      ],
      source: "",
    },
  ];

  const openModal = (sn) => {
    const b = ProjDesc.findIndex((e) => e.sn == sn);
    setSelectedSn(b);
    setShowModal(true);
  };

  const [_x, set_X] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      set_X(window.innerWidth);
    });
  });

  return (
    <Context.Provider
      value={{
        _x,
        setMenu,
        menu,
        offsetY,
        showModal,
        handleClose,
        openModal,
        selectedSn,
        right_scroll,
        left_scroll,
        ProjDesc,
        repeatedUpcommingProjects,
        numberOfUpcommingProjects,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Context);
};

export { Context, ContextProvider };
