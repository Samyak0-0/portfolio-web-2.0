import React, { useContext } from "react";
import { useState, useEffect } from "react";
import manndhani from "../assets/manndhani.png";
import ghumri from "../assets/ghumri.png";
import Mann from "../assets/Mann.png";
import shivji from "../assets/shivji.png";
import timrosath from "../assets/timrosath.png";
import bahragaun from "../assets/project2.png"

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
      setSelectedSn(ProjDesc.length-1-repeatedUpcommingProjects);
    } else {
      setSelectedSn(selectedSn - 1);
    }
  };

  const right_scroll = () => {
    if (selectedSn >= ProjDesc.length-1-repeatedUpcommingProjects) {
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
      title: "Ghurmi nachaade",
      description:
        "A Maith-Hop sensation, seamlessly blends Maithili culture with Hip Hop beats. Surpassing 1.5 million views just in 4 months, it's a TikTok hit with 800K+ plays and remakes.",
      front_img: ghumri,
      viewimg: ghumri,
      Link: "https://www.youtube.com/watch?v=ltg3MEKOQks&pp=ygUPZ2h1cm1pIG5hY2hhYWRl",
      date: "01 / 10 / 2022",
    },
    {
      sn: 1,
      title: "Shiv Ji",
      description: "Shiv Ji's 'Appan Gang Pura High High' is a regional language sensation. With 1.5+ million views in 6 months, it's a TikTok favorite, boasting 900+ plays and remakes.",
      front_img: shivji,
      viewimg: shivji,
      Link: "https://www.youtube.com/watch?v=dxoz9y4KDOg&pp=ygUHc2hpdiBqaQ%3D%3D",
      date: "04 / 08 / 2022",
    },
    {
      sn: 2,
      title: "Timro Sath Bina",
      description:
        "Embracing romance, 'Timro Saath Bina,' a Nepali ballad, swiftly captivated hearts with 1 million views in just 11 days, securing a top 3 trending spot on YouTube in Nepal.",
      front_img: timrosath,
      viewimg: timrosath,
      Link: "https://www.youtube.com/watch?v=36cKXdEU5QY&pp=ygUddGltcm8gc2F0aCBiaW5hIHByYW1vZCBraGFyZWw%3D",
      date: "08 / 01 / 2024",
    },
    {
      sn: 3,
      title: "Man ko dhani",
      description: "Uplifting and promoting secularism, 'Man Ko Dhani,' a romantic Nepali song featuring Umar Khan, garnered 420K views in 3 months. A harmonious blend of melody and meaningful messaging.",
      front_img: manndhani,
      viewimg: manndhani,
      Link: "https://www.youtube.com/watch?v=Q7u4iAl_7M0&pp=ygUWbWFuIGtvIGRoYW5pIHVtYXIga2hhbg%3D%3D",
      date: "28 / 09 / 2023",
    },
    {
      sn: 4,
      title: "Man chha",
      description: "Delve into the depths of love with 'Man Chha,' a Nepali romantic song featuring Pushpa Khadka and Prijma Princy Khatiwada. The heartfelt melody amassed 190K views in just 3 months.",
      front_img: Mann,
      viewimg: Mann,
      Link: "https://www.youtube.com/watch?v=YtBv1F1yR00&pp=ygUJbWFubiBjaGhh",
      date: "16 / 10 / 2023",
    },
    {
      sn: -1,
      title: "12 gaau of biraj bhatta",
      description: "A song about tranditionalism.",
      front_img: bahragaun,
      viewimg: bahragaun,
      Link: "https://www.youtube.com/watch?v=YtBv1F1yR00&pp=ygUJbWFubiBjaGhh",
      date: "Upcomming . . .",
    },
    {
      sn: -2,
      title: "12 gaau of biraj bhatta",
      description: "A song about tranditionalism.",
      front_img: bahragaun,
      viewimg: bahragaun,
      Link: "https://www.youtube.com/watch?v=YtBv1F1yR00&pp=ygUJbWFubiBjaGhh",
      date: "Upcomming . . .",
    },
    {
      sn: -3,
      title: "12 gaau of biraj bhatta",
      description: "A song about tranditionalism.",
      front_img: bahragaun,
      viewimg: bahragaun,
      Link: "https://www.youtube.com/watch?v=YtBv1F1yR00&pp=ygUJbWFubiBjaGhh",
      date: "Upcomming . . .",
    },
    {
      sn: -4,
      title: "12 gaau of biraj bhatta",
      description: "A song about tranditionalism.",
      front_img: bahragaun,
      viewimg: bahragaun,
      Link: "https://www.youtube.com/watch?v=YtBv1F1yR00&pp=ygUJbWFubiBjaGhh",
      date: "Upcomming . . .",
    },
  ];

  
  const openModal = (sn) => {
    const b = ProjDesc.findIndex((e) => e.sn==sn)
    setSelectedSn(b)
    setShowModal(true)
  }

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
        numberOfUpcommingProjects
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
