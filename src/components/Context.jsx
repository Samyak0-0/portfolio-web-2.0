import React, { useContext } from "react";
import { useState, useEffect } from "react";

import backimg1 from "../assets/backimg1.png";
import backimg2 from "../assets/backimg2.png";
import projimg3 from "../assets/proj3.png";

import investra1 from "../assets/investra1.png";
import investra2 from "../assets/investra2.png";
import travelapes1 from "../assets/travelapes1.jpg";
import travelapes2 from "../assets/travelapes2.jpg";
import habitician1 from "../assets/habitician1.jpg";
import habitician2 from "../assets/habitician2.jpg";

import etherFront from "../assets/ether-front.png";
import etherBack from "../assets/ether-back2.png";

import incorpfirmFront from "../assets/incorpfirm-front.png";
import incorpfirmBack from "../assets/incorpfirm-back.png";

import portfolio_v1 from "../assets/portfolio_v1.png";
import stock_tracker_app from "../assets/stock_tracker_app.png";
import meals_app from "../assets/meals_app.png";
import team_member_app from "../assets/team_member_app.png";

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
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiHive } from "react-icons/bi";
import { SiFlutter } from "react-icons/si";
import { DiDart } from "react-icons/di";
import { CiMap } from "react-icons/ci";
import { FaDocker } from "react-icons/fa6";
import { BiLogoFlask } from "react-icons/bi";
import { SiLlvm } from "react-icons/si";
import { FaRust } from "react-icons/fa6";
import { FaTerminal } from "react-icons/fa6";
// import { FaMap } from "react-icons/fa";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSn, setSelectedSn] = useState(0);

  const handleClose = () => {
    setShowModal(false);
  };

  // const repeatedUpcommingProjects = 3;
  // const numberOfUpcommingProjects = 4;

  const left_scroll = () => {
    if (selectedSn == 0) {
      setSelectedSn(ProjDesc.length - 1);
    } else {
      setSelectedSn(selectedSn - 1);
    }
  };

  const right_scroll = () => {
    if (selectedSn >= ProjDesc.length - 1) {
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
      title: "IncorpFirm",
      description:
        "IncorpFirm is a full-stack web application built using React, Node (Express) and PostgreSQL with implementations of document generation, admin dashboard, multi step forms with progression auto-save and a fully Dockerized node and postgres back-end.",
      front_img: incorpfirmFront,
      viewimg: incorpfirmBack,
      Link: null,
      techIcons: [
        <FaDocker key="docker" />,
        <FaReact key="react" />,
        <SiTypescript key="typescript" />,
        <FaNodeJs key="node" />,
        <SiExpress key="express" />,
        <BiLogoPostgresql key="postgresql" />,
      ],
      source: "https://github.com/Samyak0-0/Company-Incorporation-Tool",
    },
    {
      sn: 1,
      title: "Investra",
      description:
        "A web-based application that combines modern web development with intelligent predictive models. It features a LSTM neural network, sentiment analysis and Monte Carlo simulations to predict and analyse the stock market, built using Next.js, Flask, and PostgreSQL.",
      front_img: investra1,
      viewimg: investra2,
      Link: null,
      techIcons: [
        <SiNextdotjs key="nextjs" />,
        <FaPython key="python" />,
        <BiLogoFlask key="flask" />,
        <BiLogoPostgresql key="postgresql" />,
      ],
      source: "https://github.com/Samyak0-0/investra_backend",
    },
    {
      sn: 2,
      title: "Compiler and Programming Language",
      description:
        "Ether is a functional programming language made using LLVM Infrastructure that supports functions, control statements, loops, arrays, enums and structs along with standard read and write operations. A custom compiler-frontend ETC (Ether Compiler) was also written in Rust to compile the .etr (ether) files to executables.",
      front_img: etherFront,
      viewimg: etherBack,
      Link: null,
      techIcons: [
        <FaRust key="rust" />,
        <FaTerminal key="terminal" />,
        <SiLlvm key="llvm" title="llvm" />,
      ],
      source: "https://github.com/shri-acha/Ether",
    },
    {
      sn: 3,
      title: "Habitician",
      description:
        "Habitican, a personal habit tracking and day planner app built using Flutter. It includes a habit tracker, integrated daily to-do list, along with personalized scheduling, notifications(reminders), and trackers for each habit and daily goals.",
      front_img: habitician1,
      viewimg: habitician2,
      Link: null,
      techIcons: [
        <SiFlutter key="flutter" />,
        <DiDart key="dart" />,
        <BiHive key="hive" />,
      ],
      source: "https://github.com/Samyak0-0/blog",
    },
    {
      sn: 4,
      title: "TravlApes",
      description:
        "TravlApes is an travel planner app and a live trip guide built using Flutter, Fast API and Open Street Map(OSM). It includes personalized travel recommendations, Routing features during a trip and shareable trip snapshots",
      front_img: travelapes1,
      viewimg: travelapes2,
      Link: null,
      source: "https://github.com/Samyak0-0/TravlApes_backend",
      techIcons: [
        <SiFlutter key="flutter" />,
        <DiDart key="dart" />,
        <FaPython key="python" />,
        <CiMap key="map" />,
      ],
    },
    {
      sn: 5,
      title: "Blog App",
      description:
        "This blog page allows users log in with Google to create, share and comment on posts, built with Next.js, MongoDB, Prisma, OAuth, and Firebase. With a sleek and simple UI, Users can explore posts by category, share their thoughts and get feedback easily.",
      front_img: backimg2,
      viewimg: backimg2,
      Link: "https://blog-app-nine-ecru.vercel.app",
      techIcons: [
        <SiNextdotjs key="nextjs" />,
        <SiMongodb key="mongodb" />,
        <SiPrisma key="prisma" />,
        <BiLogoFirebase key="firebase" />,
      ],
      source: "https://github.com/Samyak0-0/blog",
    },
    {
      sn: 6,
      title: "Chat-app",
      description:
        "A real time messaging app made using the MERN Stack along with json web tokens(JWT), Web Sockets and typescript. Sensitive information are all encrypted using bycrpyt js and stored in mongo DB, the use of Web Sockets allows for real time online status update and communication between users.",
      front_img: backimg1,
      viewimg: backimg1,
      Link: "https://chat-app-live-v2.onrender.com",
      techIcons: [
        <SiMongodb key="mongodb" />,
        <SiExpress key="express" />,
        <FaReact key="react" />,
        <FaNodeJs key="nodejs" />,
        <SiTypescript key="typescript" />,
        <SiTailwindcss key="tailwind" />,
      ],
      source: "https://github.com/Samyak0-0/chat-app-live-v2",
    },
    {
      sn: 7,
      title: "Freelance Website Project",
      description:
        "A freelance job where I created a stunning musical portfolio fro my client, using react js, tailwind, vite and a focus on easy updatability.",
      front_img: projimg3,
      viewimg: projimg3,
      Link: "https://www.avinashpaswan.com.np",
      techIcons: [
        <FaReact key="react" />,
        <SiTailwindcss key="tailwind" />,
        <SiVite key="vite" />,
        <IoLogoFigma key="figma" />,
        <PiFileSvg key="svg" />,
      ],
      source: "https://github.com/Samyak0-0/music_portfolio_project_v2",
    },
    {
      sn: 8,
      title: "Portfolio - v.1.0 (outdated) ",
      description:
        "This used to be my previous portfolio website made primarily using react JS.",
      front_img: portfolio_v1,
      viewimg: portfolio_v1,
      Link: "https://www.samyak00.com.np",
      techIcons: [
        <FaReact key="react" />,
        <IoLogoCss3 key="css3" />,
        <IoLogoJavascript key="javascript" />,
      ],
      source: "https://github.com/Samyak0-0/temp-portfolio-website",
    },
    {
      sn: 9,
      title: "Meals Finder App",
      description:
        "A website that helps to find new meals and search various recipes with the help of React JS, CSS and Meals API.",
      front_img: meals_app,
      viewimg: meals_app,
      Link: "https://samyak0-0.github.io/meals_finder_app",
      techIcons: [
        <FaReact key="react" />,
        <IoLogoCss3 key="css3" />,
        <IoLogoJavascript key="javascript" />,
      ],
      source: "https://github.com/Samyak0-0/meals_finder_app",
    },
    {
      sn: 10,
      title: "Stock Tracker App",
      description:
        "A website that can track all of the popular stocks, explore new ones and observe their performances in graph using the data fetched from FinnHub API.",
      front_img: stock_tracker_app,
      viewimg: stock_tracker_app,
      Link: "https://stock-tracker-app-samyaks-projects.vercel.app",
      techIcons: [
        <FaReact key="react" />,
        <IoLogoCss3 key="css3" />,
        <IoLogoJavascript key="javascript" />,
      ],
      source: "https://github.com/Samyak0-0/stock_tracker_app",
    },
    {
      sn: 11,
      title: "Team Manager App",
      description:
        " A website to help you or an organization manage, assign and track your specific team and their team members.",
      front_img: team_member_app,
      viewimg: team_member_app,
      Link: "https://samyak0-0.github.io/team_member_app",
      techIcons: [
        <FaReact key="react" />,
        <IoLogoCss3 key="css3" />,
        <IoLogoJavascript key="javascript" />,
      ],
      source: "https://github.com/Samyak0-0/team_member_app",
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
