import React from "react";
import { FaCircleXmark, FaCircle } from "react-icons/fa6";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useGlobalContext } from "./Context";

const Descriptions = () => {
  const { selectedSn, handleClose, right_scroll, left_scroll, ProjDesc } =
    useGlobalContext();

  return (
    <div className="modal_overlay z-[60]" >
      <div className="modal">
        <div className="mac_tab">
          <FaCircleXmark
            style={{
              color: "#ff5f57",
              cursor: "pointer",
              margin: "5px 0px 5px 6px",
            }}
            size="15px"
            onClick={handleClose}
          />
          <FaCircle
            style={{ color: "#ffbc2f", margin: "5px 0px 5px 6px" }}
            size="15px"
          />
          <FaCircle
            style={{ color: "#28c93f", margin: "5px 0px 5px 6px" }}
            size="15px"
          />
        </div>

        <div className="details text-neutral-600 font-mono text-base sm:text-xl flex flex-col mdd:flex-row justify-between items-center gap-2">
          <div className="h-1/2 mdd:h-full w-4/5 mdd:max-w-[400px] lg:max-w-[600px] mdd:min-w-[350px] lg:min-w-[400px]">
            <img
              src={ProjDesc[selectedSn].viewimg}
              className="h-full w-full object-cover mdd:object-scale-down lg:object-fill brightness-75 hover:brightness-90"
              alt="image here"
            ></img>
          </div>
          <div className="overflow-visible flex-growy">
            <div className="title text-xl md:text-3xl text-slate-700 font-semibold my-3">
              {ProjDesc[selectedSn].title}
            </div>
            <div className="description text-sm md:text-base lg:text-xl mdd:w-[30vw] ">
              {ProjDesc[selectedSn].description}
            </div>
            
              <div className="modal_links w-full text-sm md:text-base lg:text-xl flex flex-col md:flex-row">
                <div className="grid place-items-center"><a href={ProjDesc[selectedSn].source} target='_blank'  className=" py-[5px] px-[10px] xl:py-[10px] xl:px-[20px] website_source"> Source Code </a></div>
                <div className="grid place-items-center"><a href={ProjDesc[selectedSn].Link} target='_blank'  className=" py-[5px] px-[10px] xl:py-[10px] xl:px-[20px] website_link">Website Link</a></div>
              </div>
            
          </div>
        </div>
      </div>
      <div className=" pointer-events-auto left_scroll" onClick={left_scroll}>
        <AiOutlineLeft size="30px" />
      </div>
      <div className=" pointer-events-auto right_scroll" onClick={right_scroll}>
        <AiOutlineRight size="30px" />
      </div>
    </div>
  );
};

export default Descriptions;
