import React, { useEffect, useState } from "react";
import TagCanvas from "tag-canvas";
import { useGlobalContext } from "./Context";
import pic1 from "../assets/pic1.png";
import pic3 from "../assets/pic3.png";
import pic2 from "../assets/pic2.png";
import backimg1 from "../assets/backimg1.png"
import backimg2 from "../assets/backimg2.png"
import backimg3 from "../assets/backimg3.png"

const Expertise = () => {
  const { offsetY, _x } = useGlobalContext();

  const [viewx1, setViewX1] = useState(0);
  const [viewy1, setViewY1] = useState(0);
  const [viewx2, setViewX2] = useState(0);
  const [viewy2, setViewY2] = useState(0);
  const [viewx3, setViewX3] = useState(0);
  const [viewy3, setViewY3] = useState(0);

  const [visiblity1, setVisibility1] = useState("hidee");
  const [visiblity2, setVisibility2] = useState("hidee");
  const [visiblity3, setVisibility3] = useState("hidee");

  const skills = [
    {
      sn: 1,
      header_: "MERN Stack",
      subheader_: ["MongoDB", "MySQL", "Express", "React", "TypeScript", "Node"],
      exp_img: pic1,
      backimg: backimg1
    },
    {
      sn: 2,
      header_: "NEXT JS",
      subheader_: ["NEXT", "Prisma", "OAuth", "Firebase", "Web Sockets"],
      exp_img: pic2,
      backimg: backimg2
    },
    {
      sn: 3,
      header_: "UI / UX Design",
      subheader_: [
        "Figma",
        "Canva",
        "SVG",
        "Responsive design"
      ],
      exp_img: pic3,
      backimg: backimg3
    },
  ];

  function moveView(e, num) {
    let offset = document.getElementById(`imge${num}`).getBoundingClientRect();
    let y = e.clientY - offset.top;
    let x = e.clientX - offset.left;

    let difference = _x >= 1000 ? 150 : 100;

    if (num == 1) {
      setViewX1(x - difference);
      setViewY1(y - difference);
      setVisibility1("pop");
    }
    if (num == 2) {
      setViewX2(x - difference);
      setViewY2(y - difference);
      setVisibility2("pop");
    }
    if (num == 3) {
      setViewX3(x - difference);
      setViewY3(y - difference);
      setVisibility3("pop");
    }
    if (num == 4) {
      setViewX4(x - difference);
      setViewY4(y - difference);
      setVisibility4("pop");
    }
  }

  function hide(num) {
    if (num == 1) {
      setVisibility1("hidee");
    }
    if (num == 2) {
      setVisibility2("hidee");
    }
    if (num == 3) {
      setVisibility3("hidee");
    }
    if (num == 4) {
      setVisibility4("hidee");
    }
  }

  return (
    <div
      className=" overflow-hidden w-full z-0 bg-stone-100 text-slate-900 white relative"
      id="skills"
    >
      <p className="text-5xl pb-1 sm:text-6xl overflow-hidden ml-[10vw] mt-4 underlined w-fit">
        Skills
      </p>

      <div className="z-20 flex flex-col w-full my-[10vh] sm:my-[15vh] gap-[15vh] mx-3">
        {skills.map((obj) => {
          return (
            <div
              key={obj.header_}
              className={`flex ${
                obj.sn % 2 == 0
                  ? "sm:flex-row flex-col-reverse text-left"
                  : "sm:flex-row-reverse flex-col-reverse text-right mr-0 sm:mr-4 md:mr-6"
              } gap-1 sm:gap-4 md:gap-6 `}
            >
              <div className="flex flex-col w-1/3 gradient-stroke relative justify-center items-center gap-[5vh]">
                <div
                  className={`text-xl sm:text-2xl mdd:text-4xl font-semibold overflow-hidden relative shard ${
                    obj.sn % 2 == 0 ? "shard-left" : "shard-right"
                  }`}
                >
                  {obj.header_}
                </div>
                <div className="flex flex-col">
                  {obj.subheader_.map((e) => {
                    return (
                      <div
                        key={e}
                        className={`text-base md:text-xl mdd:text-2xl relative shard overflow-hidden py-1 ${
                          obj.sn % 2 == 0 ? "shard-left" : "shard-right"
                        }`}
                      > 
                        {e}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                id={`imge${obj.sn}`}
                className=" w-2/3 max-h-[90vh] h-fit rounded-2xl overflow-hidden relative"
                onMouseOver={(e) => moveView(e, obj.sn)}
                onMouseMove={(e) => moveView(e, obj.sn)}
                onMouseLeave={() => hide(obj.sn)}
              >
                <img src={obj.exp_img} className=" rounded-2xl expt_img w-full" />
                <div
                  className={`w-[150px] md:w-[200px] lg:w-[300px] h-[150px] md:h-[200px] lg:h-[300px] backdrop-blur overflow-hidden  lg:text-[1.4rem] text-xl  cursor-pointer absolute top-0 z-10 bg-transparent aspect-square rounded-full text-white bg-slate-200 ${
                    obj.sn == 1
                      ? visiblity1
                      : obj.sn == 2
                      ? visiblity2
                      : visiblity3
                  }`}
                  style={
                    obj.sn == 1
                      ? {
                          transform: `translate(${viewx1}px,${viewy1}px)`,
                          transition: "all .3s ease-out",
                        }
                      : obj.sn == 2
                      ? {
                          transform: `translate(${viewx2}px,${viewy2}px)`,
                          transition: "all .3s ease-out",
                        }
                      : {
                          transform: `translate(${viewx3}px,${viewy3}px)`,
                          transition: "all .3s ease-out",
                        }
                  }
                >
                  <img
                    src={obj.backimg}
                    className={`object-cover hidden-img brightness-90 ${
                      obj.sn == 1
                        ? "h-[30vh] md:h-[50vh] lg:h-[90vh]"
                        : obj.sn == 2
                        ? "h-[40vh] md:h-[90vh] lg:h-[100vh]"
                        : "h-[30vh] md:h-[45vh] lg:h-[90vh]"
                    }`}
                    style={{
                      objectPosition: `${
                        obj.sn == 1 ? -viewx1 : obj.sn == 2 ? -viewx2 : -viewx3
                      }px ${obj.sn == 1 ? -viewy1 : obj.sn == 2 ? -viewy2 : -viewy3}px`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;
