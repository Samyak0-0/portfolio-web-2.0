import React from "react";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "./Context";
import { IoIosClose } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const { menu, setMenu, _x, offsetY } = useGlobalContext();

  const showMenu = () => {
    setMenu(!menu);
  };

  const [x1, setx1] = useState(0);
  const [x2, setx2] = useState(0);
  const [y1, sety1] = useState(0);
  const [y2, sety2] = useState(0);

  function activateMagneto(e) {
    let magneto = document.getElementById("magneto");
    let magnetoText = document.getElementById("magneto-text");

    let boundBox = magneto.getBoundingClientRect();

    const newX = (e.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
    const newY = (e.clientY - boundBox.top) / magneto.offsetHeight - 0.5;
    setx1(newX*40)
    setx2(newX*40)
    sety1(newY*40)
    sety2(newY*40)
  }

  function resetMagneto(e) {
    setx1(0)
    setx2(0)
    sety1(0)
    sety2(0)
  }

  return (
    <div>
      <div className={_x > 600 ? "nav_bar" : "hide"}>
        <ul className={_x > 600 ? "nav_li" : "hide"}>
          <li className="nav_elements">
            <HashLink to="/#home" className="nav_link">
              Home
            </HashLink>
          </li>
          <li className="nav_elements">
            <HashLink to="/#skills" className="nav_link">
              Skills
            </HashLink>
          </li>
          <li className="nav_elements">
            <HashLink to="/#myproj" className="nav_link">
              Projects
            </HashLink>
          </li>
          <li className="nav_elements">
            <a href="https://blog-app-nine-ecru.vercel.app/" target="_blank" className="nav_link">
              Blog
            </a>
          </li>
          <li className="nav_elements">
            <HashLink to="/#contact" className="nav_link">
              Contact Me!
            </HashLink>
          </li>
        </ul>
      </div>
      <div
        id="magneto"
        style={{ transform: `translate(${x1}px,${y1}px)` }}
        onMouseMove={activateMagneto}
        onMouseLeave={resetMagneto}
        className={
          _x <= 600 || offsetY > window.innerHeight * 0.8
            ? "blob-menu fixed right-6 top-6 z-50 bg-slate-800 rounded-full p-5 cursor-pointer overflow-hidden"
            : "hide"
        }
        onClick={showMenu}
      >
        {!menu && (
          <RxHamburgerMenu
            id="magneto-text"
            style={{ transform: `translate(${x2}px,${y2}px)` }}
            size={35}
            color="white"
            className="burger"
          />
        )}
        {menu && (
          <IoIosClose
            id="magneto-text"
            style={{ transform: `translate(${x2}px,${y2}px)` }}
            size={35}
            color="white"
            className="close"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
