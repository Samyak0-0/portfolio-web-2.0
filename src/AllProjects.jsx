import React, { useEffect, useState, useCallback } from "react";
import { useGlobalContext } from "./components/Context";
import ContactPage from "./components/ContactPage";
import { IoCalendarOutline } from "react-icons/io5";

const AllProjects = () => {
  const { ProjDesc, openModal, repeatedUpcommingProjects,  numberOfUpcommingProjects} = useGlobalContext();

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      let horzScroll = document.getElementById("horz_scroll");
      if (y > window.scrollY) {
        horzScroll.scrollBy(-2, 0);
      } else if (y < window.scrollY) {
        horzScroll.scrollBy(2, 0);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it will run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [handleNavigation]);
  useEffect(() =>  {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className=" min-h-screen w-full pt-[15vh] md:pt-[10vh] lg:pt-[15vh] overflow-hidden">
      <div
        className="underlined ml-4 mt-4 pb-2 text-4xl mb-2 sm:text-6xl overflow-visible w-fit "
      >
        Projects
      </div>
      <div
        id="horz_scroll"
        className="ml-2 pb-2 overflow-x-scroll grid grid-flow-col gap-3 "
      >
        {ProjDesc.filter((e) => e.sn >= repeatedUpcommingProjects - numberOfUpcommingProjects).map((e) => {
          return (
            <div
              key={e.sn}
              className="flex w-[90vw] md:w-[60vw] lg:w-[40vw]  border-2 border-neutral-500 rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col h-full w-full">
                <div className="overflow-hidden">
                  <img
                    src={e.front_img}
                    className="object-cover w-full h-[50vh] brightness-75 hover:brightness-90 hover:scale-105"
                  />
                </div>
                <div className="text-center flex-grow flex flex-col justify-center items-center text-lg sm:text-2xl text-slate-700 my-1 gap-1">
                  <div className="overflow-hidden text-2xl sm:text-4xl ">
                    {e.title}
                  </div>
                  <div className="flex w-full  justify-around items-center overflow-visible  text-neutral-500">
                    <div className="overflow-hidden justify-center items-center flex gap-2">
                    <IoCalendarOutline />{e.date}</div>
                    <button
                      onClick={() => openModal(e.sn)}
                      className="overflow-visible border-2 border-slate-700 px-5 hover:text-white hover:bg-neutral-700 hover:border-neutral-700  py-1 rounded-3xl"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjects;
