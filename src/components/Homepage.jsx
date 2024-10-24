import React, { useEffect, useState } from "react";
import react from "../assets/react.png";
import node from "../assets/node.png";
import next from "../assets/next.png";
import tailwind from "../assets/tailwind.png"
import { useGlobalContext } from "./Context";


const Homepage = () => {

  const {offsetY} = useGlobalContext()

  const [string, setString] = useState("Tech Enthusiast");
  

  
  useEffect(() => {
    let i = 0;
    setInterval(function () {
      const titles = ["Full stack Dev","Computer Engineer", "Curious Learner", "Tech Enthusiast"];

      if (i > titles.length - 1) {
        i = 0;
        setString(titles[i]);
      } else {
        setString(titles[i]);
        i++;
      }
    }, 5000);
  }, []);

  
  return (
    <div
      className="w-screen relative overflow-visible h-screen flex flex-col justify-center items-center bg-stone-100 text-slate-800 "
      id="home"
    >
      <img src={react} className="absolute z-20 w-1/3 sm:w-1/4 max-w-[300px] right-[5vw] bottom-[8vh]"
        style={(offsetY<window.innerHeight*2)? {transform: `translate(0,${offsetY*0.25}px) rotate(${offsetY*.35}deg)` }: {}}
      />
      <img src={next} className="absolute -z-0  w-1/4 md:w-1/5 max-w-[150px] md:max-w-[200px] top-[15vh] left-[5vw]"
        style={(offsetY<window.innerHeight*2)? {transform: `translate(0,${offsetY*0.3}px)`}: {}}
      />
      <img src={tailwind} className="absolute  w-1/3 max-w-[75px] md:max-w-[100px] bottom-[15vh] md:bottom-[15vh] left-[15vw] md:left-[15vw] sm:bottom-[20vh] sm:left-[25vw]"
        style={(offsetY<window.innerHeight*2)? {transform: `translate(0,${-offsetY*0.3}px) `}: {}}
      />
      <img src={node} className="absolute  w-1/5 max-w-[80px] md:max-w-[115px] right-[10vw] top-[18vh] md:top-[15vh] sm:top-[15vh] sm:right-[15vw]"
        style={(offsetY<window.innerHeight*2)? {transform: `translate(0,${-offsetY*0.2}px) `}: {}}
      />

      <div className="w-2/3 z-20 flex flex-col items-center justify-center overflow-visible">
        <div className="flex flex-col sm:flex-row w-full h-full sm:gap-6 justify-center items-center overflow-visible">
          <div className=" overflow-y-hidden text-center flex flex-col">
            <div className=" overflow-hidden">
              <div className=" overflow-hidden">
                <span className="hi text-lg md:text-xl lg:text-2xl text-stone-500">
                  Hi&nbsp;
                </span>
                <span className="hi text-lg md:text-xl lg:text-2xl text-stone-500">
                  !&nbsp;
                </span>
                <span className="hi text-lg md:text-xl lg:text-2xl text-stone-500">
                  I&nbsp;
                </span>
                <span className="hi text-lg md:text-xl lg:text-2xl text-stone-500">
                  am&nbsp;
                </span>
                <br />
                <span className=" hi font-semibold text-4xl md:text-5xl lg:text-6xl my-3 px-[50px]">
                  Samyak
                </span>
              </div>
              <span className="a text-stone-600 text-2xl md:text-3xl lg:text-4xl font-semibold inline-block">
                A , &nbsp;
              </span>
              <div className="typing item text-stone-500 text-lg md:text-xl lg:text-2xl inline-block ">
                {string}
              </div>
              
            </div>
            
          </div>

          <div className="w-1/2 max-w-[400px]">
            <div className="pic"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
