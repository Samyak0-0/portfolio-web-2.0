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
      <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-6 ml-3 sm:ml-4 md:ml-6 mt-3 sm:mt-4 md:mt-6 z-50 overflow-visible">
        {ProjDesc[selectedSn].title}
      </div>

      <button onClick={handleClose}>
        <GrClose
          className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 cursor-pointer z-50"
          size={40}
          className2="sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]"
        />
      </button>

      <div className="flex flex-col xl:flex-row w-full p-4 sm:p-6 md:p-8 lg:p-10 xl:m-12 h-full z-0 justify-center items-center">
        <div
          style={{ minWidth: "30%", maxWidth: "50%" }}
          className="overflow-hidden h-1/2 mdd:h-full border-2 border-slate-700 rounded-lg"
        >
          <img
            style={{ objectPosition: "0% 50%" }}
            src={ProjDesc[selectedSn].viewimg}
            alt={`${ProjDesc[selectedSn].title}-image`}
            className="w-full h-full brightness-[.85] hover:brightness-90 object-cover"
          />
        </div>

        <div className="text-base sm:text-lg md:text-xl lg:text-2xl flex h-full flex-col xl:w-3/5">
          <div className="grow flex justify-center flex-col gap-1 px-3 sm:px-4 md:px-6">
            <span className="overflow-visible">
              <FaQuoteLeft
                className="inline align-middle mr-2 sm:mr-3 ml-2 sm:ml-4 relative bottom-2"
                size={24}
                className2="sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
              />
              <span className="overflow-visible">
                {ProjDesc[selectedSn].description}
              </span>
              <FaQuoteRight
                className="inline align-middle ml-2 sm:ml-3"
                size={20}
                className2="sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px]"
              />
            </span>

            <div className="flex mt-6 sm:mt-8 md:mt-10 lg:mt-12 gap-2 overflow-visible">
              {ProjDesc[selectedSn].techIcons}
            </div>

            <div className="modal_links mt-6 sm:mt-8 md:mt-10 lg:mt-12 pr-4 sm:pr-8 md:pr-12 lg:pr-16 w-full text-xs sm:text-sm md:text-base lg:text-xl flex flex-col gap-3 md:flex-row">
              <div className="grid place-items-center overflow-visible">
                <a
                  href={ProjDesc[selectedSn].source}
                  target="_blank"
                  className="py-1 px-2 sm:py-[5px] sm:px-[10px] xl:py-[10px] xl:px-[20px] overflow-visible website_source"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
              <div className="grid place-items-center">
                {ProjDesc[selectedSn].Link && (
                  <a
                    href={ProjDesc[selectedSn].Link}
                    target="_blank"
                    className="py-1 px-2 sm:py-[5px] sm:px-[10px] xl:py-[10px] xl:px-[20px] overflow-visible website_link"
                    rel="noreferrer"
                  >
                    Website Link
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto left_scroll" onClick={left_scroll}>
          <AiOutlineLeft
            size="40px"
            className="sm:w-[55px] sm:h-[55px] md:w-[70px] md:h-[70px]"
          />
        </div>
        <div
          className="pointer-events-auto right_scroll"
          onClick={right_scroll}
        >
          <AiOutlineRight
            size="40px"
            className="sm:w-[55px] sm:h-[55px] md:w-[70px] md:h-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Descriptions2;
