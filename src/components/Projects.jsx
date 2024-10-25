import React, { useRef, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { useGlobalContext } from "./Context";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

import { browserName } from "react-device-detect";

const Projects = () => {
  const { ProjDesc, openModal, _x, offsetY } = useGlobalContext();

  const [viewx1U, setViewX1U] = useState(0);
  const [viewy1U, setViewY1U] = useState(0);
  const [viewx2U, setViewX2U] = useState(0);
  const [viewy2U, setViewY2U] = useState(0);
  const [viewx0U, setViewX0U] = useState(0);
  const [viewy0U, setViewY0U] = useState(0);

  const [visiblity1U, setVisibility1U] = useState("hidee");
  const [visiblity2U, setVisibility2U] = useState("hidee");
  const [visiblity0U, setVisibility0U] = useState("hidee");

  const [x13, setx13] = useState(0);
  const [x23, setx23] = useState(0);
  const [y13, sety13] = useState(0);
  const [y23, sety23] = useState(0);
  const [blobpX, setBlobpX] = useState(0);
  const [blobpY, setBlobpY] = useState(0);

  const [bezX, setBezX] = useState(0);
  const [bezY, setBezY] = useState(0);
  const [reset, setReset] = useState(true);

  function playGuitar(e) {
    let offset = document.getElementById("canv").getBoundingClientRect();
    let y = ((e.clientY - offset.top) / (offset.bottom - offset.top)) * 1000;
    let x = ((e.clientX - offset.left) / (offset.right - offset.left)) * 1280;

    setReset(false);
    setBezX(x);
    setBezY(y);
  }

  function stringReset() {
    setReset(true);
  }
  let a = 0;
  let b = 994;
  if (browserName.includes("Safari")) {
    a = 75;
    b = 820;
  }

  function moveViewU(evt, num) {
    let offset = document.getElementById(`imgU${num}`).getBoundingClientRect();
    let y = evt.clientY - offset.top;
    let x = evt.clientX - offset.left;

    let difference = _x >= 1000 ? 75 : 60;

    if (num == 1) {
      setViewX1U(x - difference);
      setViewY1U(y - difference);
      setVisibility1U("pop");
    }
    if (num == 2) {
      setViewX2U(x - difference);
      setViewY2U(y - difference);
      setVisibility2U("pop");
    }
    if (num == 0) {
      setViewX0U(x - difference);
      setViewY0U(y - difference);
      setVisibility0U("pop");
    }
  }

  function hideU(num) {
    if (num == 1) {
      setVisibility1U("hidee");
    }
    if (num == 2) {
      setVisibility2U("hidee");
    }
    if (num == 0) {
      setVisibility0U("hidee");
    }
  }

  function activateMagneto(e) {
    let magneto = document.getElementById("magneto3");

    let boundBox = magneto.getBoundingClientRect();

    const newX = (e.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
    const newY = (e.clientY - boundBox.top) / magneto.offsetHeight - 0.5;
    setx13(newX * 50);
    setx23(newX * 50);
    sety13(newY * 50);
    sety23(newY * 50);
    setBlobpX(e.clientX - boundBox.left - magneto.offsetWidth / 2);
    setBlobpY(e.clientY - boundBox.top - magneto.offsetHeight / 2);
  }

  function resetMagneto(e) {
    setx13(0);
    setx23(0);
    sety13(0);
    sety23(0);
    setBlobpX(0);
    setBlobpY(0);
  }

  return (
    <div
      className=" flex flex-col w-full bg-neutral-100 text-black"
      id="myproj"
    >
      <div className="flex flex-col ml-8 mdd:flex-row mdd:ml-0 justify-around overflow-hidden">
        <div className="underlined ml-4 mt-4 pb-2 text-5xl mb-2 z-20 sm:text-6xl overflow-visible w-fit h-fit ">
          Projects
        </div>
        <div className="relative guitar-container overflow-hidden z-10 max-w-[500px] top-3 md:top-6 md:ml-20 mdd:ml-0">
          <svg
            id="canv"
            className=" guitar w-[90%]"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280.000000 911.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,911.000000) scale(0.100000,-0.100000)"
              fill="#795548"
              stroke="none"
            >
              <path
                d="M11946 8939 c-229 -151 -261 -170 -271 -155 -7 9 -21 28 -31 42 -48
65 -59 77 -89 90 -58 24 -119 -10 -131 -73 -12 -66 47 -146 110 -147 44 -1 43
-2 -106 -99 l-118 -76 -15 29 c-9 17 -19 30 -23 30 -4 0 -13 14 -21 31 -24 55
-102 85 -152 59 -24 -13 -49 -61 -49 -95 0 -63 59 -125 119 -125 34 0 30 -4
-88 -81 -68 -44 -124 -79 -125 -77 -89 136 -106 153 -169 153 -73 0 -112 -88
-73 -164 21 -40 43 -55 92 -61 l44 -5 -140 -90 c-77 -49 -140 -97 -140 -105 0
-20 -48 -121 -67 -142 -14 -16 -1 -41 158 -310 l173 -293 71 3 c38 2 81 -1 95
-6 21 -8 41 -1 130 45 58 31 124 67 148 80 l43 25 -15 -31 c-20 -37 -20 -62
-2 -106 29 -68 120 -96 171 -52 43 37 44 88 2 172 -27 53 -33 73 -24 81 7 6
65 39 130 72 90 47 114 56 102 40 -21 -31 -19 -97 4 -132 41 -61 119 -75 165
-30 34 35 37 108 5 148 -11 14 -18 26 -14 26 4 0 -3 15 -14 34 l-21 34 135 71
c74 39 137 71 140 71 3 0 -2 -11 -11 -25 -43 -66 22 -175 105 -175 49 0 88 30
97 75 5 27 -2 50 -30 111 -20 42 -34 79 -31 83 4 3 127 70 273 147 299 158
299 158 309 273 12 129 -45 359 -115 467 -107 164 -306 317 -430 330 -47 5
-49 4 -306 -167z m5 -218 c30 -30 36 -59 19 -90 -8 -16 -128 -101 -142 -101
-4 0 -24 31 -46 68 l-39 69 65 41 c36 23 77 42 90 42 13 0 37 -13 53 -29z
m-258 -186 c20 -35 37 -66 37 -69 0 -7 -271 -189 -275 -184 -1 2 -22 34 -45
72 -32 54 -39 71 -28 77 7 5 67 44 133 88 66 44 125 80 130 80 6 1 27 -28 48
-64z m-372 -246 c24 -40 38 -74 33 -78 -5 -5 -64 -45 -130 -89 l-121 -81 -44
76 c-40 70 -42 77 -25 87 9 6 65 43 124 83 59 39 110 72 114 72 4 1 26 -31 49
-70z m958 -115 c25 -32 27 -71 5 -102 -16 -24 -132 -87 -141 -78 -8 8 -82 131
-80 132 1 1 33 18 71 38 83 43 117 46 145 10z m-1338 -72 c8 -15 28 -48 43
-74 l28 -47 -34 -21 c-47 -28 -84 -26 -119 9 -41 42 -38 75 11 123 23 21 44
38 48 38 4 0 14 -12 23 -28z m1048 -67 c12 -19 30 -50 41 -68 l19 -33 -143
-77 c-79 -42 -147 -77 -150 -77 -11 0 -90 144 -81 147 6 2 69 34 140 72 72 38
135 70 142 70 6 1 21 -15 32 -34z m-379 -233 c22 -38 40 -71 40 -74 0 -7 -257
-148 -268 -148 -4 0 -26 33 -48 73 l-42 72 137 72 c75 40 137 73 138 73 1 0
20 -31 43 -68z m-373 -199 c21 -38 39 -71 41 -75 6 -13 -57 -38 -96 -38 -60 0
-98 60 -72 112 14 27 60 68 77 68 6 0 29 -30 50 -67z"
              />
              <path
                d="M10115 7658 c-115 -66 -264 -150 -330 -187 -323 -182 -801 -454 -808
-460 -4 -4 77 -149 180 -322 103 -173 187 -321 187 -329 0 -11 114 54 341 193
187 115 345 214 350 220 6 6 -3 3 -18 -7 -16 -10 -30 -16 -32 -14 -1 2 -78
131 -170 288 -93 157 -175 295 -182 306 -13 20 -11 23 32 49 26 15 48 25 49
23 2 -1 84 -140 183 -308 162 -273 179 -306 164 -318 -14 -11 -14 -12 0 -5 9
4 153 93 321 197 l305 189 -104 176 c-58 97 -139 233 -180 304 -41 70 -76 127
-76 126 -1 0 -96 -54 -212 -121z"
              />
              <path
                d="M8610 6805 c-168 -96 -309 -176 -315 -178 -7 -3 372 -657 393 -678 4
-4 137 74 296 172 288 178 312 194 288 187 -7 -2 -90 128 -202 317 l-190 320
23 17 c12 10 20 17 17 17 -3 0 -142 -79 -310 -174z"
              />
              <path
                d="M7948 6429 l-247 -141 33 -51 c18 -29 111 -185 206 -347 96 -162 175
-297 176 -299 2 -2 111 63 243 145 l240 148 -18 30 c-10 17 -101 171 -201 341
-101 171 -184 311 -184 312 -1 1 -112 -61 -248 -138z"
              />
              <path
                d="M4930 6405 c-115 -20 -194 -43 -291 -84 -241 -104 -388 -227 -759
-631 -259 -282 -332 -338 -498 -381 -123 -32 -279 -34 -627 -9 -358 26 -724
24 -900 -4 -520 -83 -999 -327 -1366 -695 -151 -152 -254 -295 -333 -461 -314
-665 -153 -1493 502 -2580 287 -475 619 -883 917 -1123 575 -464 1176 -556
1833 -281 371 156 709 401 953 693 185 221 317 449 519 896 223 494 333 623
605 708 44 14 199 54 345 90 320 79 447 120 605 196 241 116 427 290 549 512
142 259 166 625 67 1010 -34 133 -105 332 -162 456 -30 66 -37 88 -27 95 7 4
43 27 81 49 l67 42 -26 46 c-39 66 -340 575 -381 643 l-34 57 -75 -45 c-41
-24 -78 -44 -83 -44 -5 0 -43 44 -84 98 -436 563 -929 827 -1397 747z m1529
-1317 c116 -197 214 -364 217 -372 7 -17 -74 -73 -85 -59 -24 28 -441 746
-437 751 17 16 82 48 88 43 3 -3 101 -167 217 -363z m-380 -237 c122 -206 221
-377 221 -381 0 -3 -18 -17 -41 -29 -34 -20 -43 -21 -53 -10 -26 29 -447 751
-442 757 17 16 82 48 87 43 4 -3 106 -174 228 -380z m-340 -203 c162 -274 226
-390 217 -396 -18 -15 -77 -44 -81 -40 -2 2 -107 178 -233 390 l-230 387 42
25 c22 14 44 24 48 23 5 -1 111 -176 237 -389z m-300 -174 c128 -217 231 -397
230 -398 -2 -2 -23 -15 -45 -29 l-42 -26 -223 377 c-122 207 -229 387 -236
399 -13 20 -11 23 29 47 24 14 45 26 48 26 3 0 110 -178 239 -396z m-589 357
c41 -11 97 -30 124 -41 l48 -22 -98 -55 -98 -55 -55 11 c-77 16 -225 13 -301
-5 -36 -8 -103 -33 -149 -55 -67 -33 -102 -58 -171 -128 -75 -73 -94 -100
-133 -181 -58 -122 -71 -181 -71 -310 0 -80 5 -123 23 -180 68 -222 224 -387
440 -464 80 -29 95 -31 221 -31 120 0 143 3 211 27 111 39 195 92 275 173 78
79 140 180 169 275 18 59 19 60 108 115 49 30 91 55 93 55 11 0 2 -94 -16
-163 -41 -163 -97 -269 -204 -384 -378 -406 -1020 -367 -1342 84 -168 234
-204 561 -93 829 109 262 341 455 624 518 96 22 293 15 395 -13z m-88 -222
c29 -6 95 -31 147 -56 312 -149 434 -520 278 -841 -39 -80 -153 -204 -230
-250 -243 -146 -549 -114 -753 81 -132 125 -196 267 -198 442 0 56 5 124 13
155 56 223 225 398 446 461 70 20 218 24 297 8z m-2676 -627 c23 -14 1304
-2191 1304 -2214 0 -42 -28 -66 -175 -154 -157 -93 -198 -107 -231 -77 -29 25
-1297 2172 -1302 2203 -7 48 26 74 258 207 71 41 120 53 146 35z"
              />
              <path
                d="M7396 6116 c-119 -68 -221 -127 -227 -133 -6 -6 61 -130 197 -359
114 -192 210 -353 214 -357 4 -4 106 53 228 128 l221 137 -28 46 c-66 109
-352 595 -369 626 l-19 35 -217 -123z"
              />
              <path
                d="M6867 5816 c-108 -61 -197 -115 -197 -119 0 -5 97 -172 216 -373 139
-235 220 -362 227 -357 90 53 355 219 364 227 10 9 -11 51 -93 191 -59 99
-155 262 -214 361 l-106 181 -197 -111z"
              />
            </g>
          </svg>

          <svg
            className="string absolute z-20"
            viewBox="0 0 1280.000000 911.000000"
            onMouseMove={playGuitar}
            onMouseLeave={stringReset}
          >
            <path
              d={
                reset
                  ? `M 0 ${416 - a} L ${b} ${416 - a}`
                  : `M 0 ${416 - a} Q ${bezX - 174} ${bezY - a} ${b} ${416 - a}`
              }
              fill="none"
              stroke-width="3"
              stroke="white"
            />
            <path
              d={
                reset
                  ? `M 0 ${426 - a} L ${b} ${426 - a}`
                  : `M 0 ${426 - a} Q ${bezX - 174} ${bezY - a} ${b} ${426 - a}`
              }
              fill="none"
              stroke-width="3"
              stroke="white"
            />
            <path
              d={
                reset
                  ? `M 0 ${436 - a} L ${b} ${436 - a}`
                  : `M 0 ${436 - a} Q ${bezX - 174} ${bezY - a} ${b} ${436 - a}`
              }
              fill="none"
              stroke-width="3"
              stroke="white"
            />
            <path
              d={
                reset
                  ? `M 0 ${446 - a} L ${b} ${446 - a}`
                  : `M 0 ${446 - a} Q ${bezX - 174} ${bezY - a} ${b} ${446 - a}`
              }
              fill="none"
              stroke-width="3"
              stroke="white"
            />
            <path
              d={
                reset
                  ? `M 0 ${456 - a} L ${b} ${456 - a}`
                  : `M 0 ${456 - a} Q ${bezX - 174} ${bezY - a} ${b} ${456 - a}`
              }
              fill="none"
              stroke-width="3"
              stroke="white"
            />
            <path
              d={
                reset
                  ? `M 0 ${466 - a} L ${b} ${466 - a}`
                  : `M 0 ${466 - a} Q ${bezX - 174} ${bezY - a} ${b} ${466 - a}`
              }
              fill="none"
              stroke-width="3"
              stroke="white"
            />
          </svg>
        </div>
      </div>
      <div className="container1 w-full flex flex-col justify-center gap-[20vh]">
        <div className="flex flex-col mdd:grid mdd:grid-cols-2 md:gap-7 mdd:gap-[5vw] place-items-center mx-3 overflow-hidden">
          <div className="flex flex-col justify-between items-center md:gap-7 mdd:gap-24 overflow-visible">
            {ProjDesc.filter((e) => e.sn == 0 || e.sn == 2).map((e) => {
              if (e.sn == 0)
                return (
                  <div
                    id="img1"
                    className="w-full my-5 overflow-hidden rounded-t-3xl"
                    onClick={() => openModal(e.sn)}
                  >
                    <div
                      className="w-full overflow-hidden rounded-3xl relative "
                      id={`imgU${e.sn}`}
                      onClick={() => openModal(e.sn)}
                      onMouseMove={(evt) => moveViewU(evt, e.sn)}
                      onMouseOver={(evt) => moveViewU(evt, e.sn)}
                      onMouseLeave={() => hideU(e.sn)}
                    >
                      <div
                        className={`w-[120px] lg:w-[150px] lg:text-[1.4rem] text-xl  cursor-pointer grid place-items-center z-10 absolute top-0 ${visiblity0U} aspect-square rounded-full backdrop-blur-md view-box text-white`}
                        style={{
                          transform: `translate(${viewx0U}px,${viewy0U}px)`,
                          transition: "all .25s ease-out",
                        }}
                      >
                        <HiOutlineArrowLongRight size={50} />
                      </div>
                      <img
                        src={e.front_img}
                        className=" rounded-3xl w-full proj_img z-0 "
                      />
                    </div>
                    <div className="proj_captions text-lg sm:text-xl lg:text-2xl z-10 flex justify-between text-slate-800 text-center ">
                      <p className="flex items-center justify-center gap-1 mx-3 mdd:mx-4 lg:mx-5">
                        {e.techIcons}
                      </p>
                      <p className="mr-3">{e.title}</p>
                    </div>
                  </div>
                );
              if (e.sn == 2)
                return (
                  <div
                    className="w-full my-5 overflow-hidden rounded-t-3xl   "
                    id="img2"
                    onClick={() => openModal(e.sn)}
                  >
                    <div
                      className="w-full overflow-hidden rounded-3xl relative"
                      id={`imgU${e.sn}`}
                      onClick={() => openModal(e.sn)}
                      onMouseOver={(evt) => moveViewU(evt, e.sn)}
                      onMouseMove={(evt) => moveViewU(evt, e.sn)}
                      onMouseLeave={() => hideU(e.sn)}
                    >
                      <div
                        className={`w-[120px] lg:w-[150px] lg:text-[1.4rem] text-xl  cursor-pointer grid place-items-center z-10 absolute top-0 ${visiblity2U} aspect-square rounded-full backdrop-blur-md view-box text-white`}
                        style={{
                          transform: `translate(${viewx2U}px,${viewy2U}px)`,
                          transition: "all .25s ease-out",
                        }}
                      >
                        <HiOutlineArrowLongRight size={50} />
                      </div>
                      <img
                        src={e.front_img}
                        className="rounded-3xl w-full proj_img"
                      />
                    </div>
                    <div className="proj_captions text-lg sm:text-xl lg:text-2xl z-10 flex justify-between text-slate-800 text-center ">
                      <p className="flex items-center justify-center gap-1 mx-3 mdd:mx-4 lg:mx-5">
                        {e.techIcons}
                      </p>
                      <p className="mr-3">{e.title}</p>
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="flex flex-col justify-between items-center md:gap-24 relative mdd:top-[10vh] pb-20 overflow-visible">
            {ProjDesc.filter((e) => e.sn == 1).map((e) => {
              return (
                <div
                  className="w-full my-5 overflow-hidden rounded-t-3xl  "
                  id="img3"
                  onClick={() => openModal(e.sn)}
                >
                  <div
                    className="w-full overflow-hidden rounded-3xl relative"
                    id={`imgU${e.sn}`}
                    onClick={() => openModal(e.sn)}
                    onMouseMove={(evt) => moveViewU(evt, e.sn)}
                    onMouseOver={(evt) => moveViewU(evt, e.sn)}
                    onMouseLeave={() => hideU(e.sn)}
                  >
                    <div
                      className={`w-[120px] lg:w-[150px] lg:text-[1.4rem] text-xl  cursor-pointer grid place-items-center z-10 absolute top-0 ${visiblity1U} aspect-square rounded-full backdrop-blur-md view-box text-white`}
                      style={{
                        transform: `translate(${viewx1U}px,${viewy1U}px)`,
                        transition: "all .25s ease-out",
                      }}
                    >
                      <HiOutlineArrowLongRight size={50} />
                    </div>

                    <img
                      src={e.front_img}
                      className=" min-w-[350px] rounded-3xl w-full proj_img"
                    />
                  </div>
                  <div className="proj_captions text-lg sm:text-xl lg:text-2xl z-10 flex justify-between text-slate-800 text-center ">
                    <p className="flex items-center justify-center gap-1 mx-3 mdd:mx-4 lg:mx-5">
                      {e.techIcons}
                    </p>
                    <p className="mr-3">{e.title}</p>
                  </div>
                </div>
              );
            })}

            <HashLink to="/all_projects" className="z-20 overflow-visible">
              <div
                id="magneto3"
                style={{ transform: `translate(${x13}px,${y13}px)` }}
                onMouseMove={activateMagneto}
                onMouseLeave={resetMagneto}
                className="mt-10 sm:my-0 flex-grow text-xl rounded-full p-5 md:p-6 lg:p-10 lg:text-[1.4rem] h-fit aspect-square border-2 border-slate-700 flex justify-center items-center cursor-pointer overflow-hidden see_more text-slate-700 blob_cont"
              >
                <div
                  id="magneto-text3"
                  style={{ transform: `translate(${x23}px,${y23}px)` }}
                  className=" flex flex-col items-center justify-center overflow-visible  hover:text-slate-100"
                >
                  <div className="blob_text z-10">See More</div>
                  <div className="blob_text z-10">
                    <IoIosArrowRoundForward size={40} />
                  </div>
                  <div
                    className={`blob2 -z-10 absolute aspect-square bg-slate-700 rounded-full`}
                    style={{ transform: `translate(${blobpX}px, ${blobpY}px)` }}
                  ></div>
                </div>
              </div>
            </HashLink>
          </div>
        </div>

        {/* <div className="bg-stone-300 pt-6 pl-6 pb-4">
          <div className=" text-2xl sm:text-4xl mb-6">Upcomming . . .</div>
          <div
            className="abcd grid grid-flow-col w-[150vw] gap-4"
            style={
              offsetY > window.innerHeight * 1.5
                ? {
                    transform: `translateX(${
                      _x < 500
                        ? -((offsetY - window.innerHeight * 4) * 0.2)
                        : -((offsetY - window.innerHeight * 3) * 0.2)
                    }px)`,
                  }
                : {}
            }
          >
            {ProjDesc.filter((e) => e.sn < 0).map((e) => {
              return (
                <div className="my-5">
                  <div
                    className=" overflow-hidden h-full w-fit rounded-3xl relative  "
                    id={`imgU${e.sn}`}
                    onClick={() => openModal(e.sn)}
                    onMouseMove={(evt) => moveViewU(evt, e.sn)}
                    onMouseLeave={() => hideU(e.sn)}
                  >
                    <img
                      src={e.front_img}
                      className=" rounded-3xl w-full h-full proj_img object-fill max-w-[400px]"
                    />
                    <div
                      className={`w-[120px] lg:w-[150px] lg:text-[1.4rem] text-xl  cursor-pointer grid place-items-center absolute top-0 ${
                        e.sn == -1
                          ? visiblity1U
                          : e.sn == -2
                          ? visiblity2U
                          : e.sn == -3
                          ? visiblity3U
                          : visiblity4U
                      } aspect-square rounded-full backdrop-blur-md view-box text-white`}
                      style={{
                        transform: `translate(${
                          e.sn == -1
                            ? viewx1U
                            : e.sn == -2
                            ? viewx2U
                            : e.sn == -3
                            ? viewx3U
                            : viewx4U
                        }px,${
                          e.sn == -1
                            ? viewy1U
                            : e.sn == -2
                            ? viewy2U
                            : e.sn == -3
                            ? viewy3U
                            : viewy4U
                        }px)`,
                        transition: "all .3s ease-out",
                      }}
                    >
                      View
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
