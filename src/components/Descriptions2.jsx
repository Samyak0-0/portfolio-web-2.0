import { GrClose } from "react-icons/gr";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Descriptions2 = () => {
  const { selectedSn, handleClose, right_scroll, left_scroll, ProjDesc } =
    useGlobalContext();

  return (
    <div className="modal z-[60]">
      <div className="text-6xl ml-6 mt-6 z-50">
        {ProjDesc[selectedSn].title}
      </div>
      <GrClose
        className="absolute top-6 right-6 cursor-pointer z-50"
        size={70}
        onClick={handleClose}
      />
      <div className="flex m-12 z-0">
        <div className="overflow-hidden h-[80vh]">
          <img
            src={ProjDesc[selectedSn].viewimg}
            alt={`${ProjDesc[selectedSn].title}-image`}
            className=" brightness-75 hover:brightness-90 object-scale-down"
          />
        </div>
        <div className="text-4xl flex h-full flex-col">
          <div className="grow flex justify-center flex-col gap-1">
            <FaQuoteLeft className="inline align-middle ml-3" size={40} />
            <div>{ProjDesc[selectedSn].description}</div>
            <FaQuoteRight className="inline align-middle ml-3" size={30} />
            <div className="flex mt-12 gap-2">
              {ProjDesc[selectedSn].techIcons}
            </div>
          </div>
          <div className="modal_links mb-[10vh] w-full text-sm md:text-base lg:text-xl flex flex-col md:flex-row">
            <div className="grid place-items-center">
              <a
                href={ProjDesc[selectedSn].source}
                target="_blank"
                className=" py-[5px] px-[10px] xl:py-[10px] xl:px-[20px] website_source"
              >
                {" "}
                Source Code{" "}
              </a>
            </div>
            <div className="grid place-items-center">
              <a
                href={ProjDesc[selectedSn].Link}
                target="_blank"
                className=" py-[5px] px-[10px] xl:py-[10px] xl:px-[20px] website_link"
              >
                Website Link
              </a>
            </div>
          </div>
        </div>

        <div className=" pointer-events-auto left_scroll" onClick={left_scroll}>
          <AiOutlineLeft size="70px" />
        </div>
        <div
          className="pointer-events-auto right_scroll"
          onClick={right_scroll}
        >
          <AiOutlineRight size="70px" />
        </div>
      </div>
    </div>
  );
};

export default Descriptions2;
