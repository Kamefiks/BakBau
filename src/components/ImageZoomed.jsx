import { useState } from "react";
import {
  MdArrowBack,
  MdArrowForward,
  MdClose,
  MdZoomIn,
  MdZoomOut,
} from "react-icons/md";

function ImageZoomed({
  zoomedImage,
  setZoomedImage,
  currentImageDescription,
  setCurrentImageDescription,
  setCurPhotoIndex,
  imageInformation,
}) {
  const [zoomLevel, setZoomLevel] = useState(100);

  return (
    <div
      className={`z-50 fixed  justify-center select-none items-center  inset-0 ${zoomedImage !== false ? "opacity-100 pointer-events-auto " : "opacity-0 pointer-events-none"} flex  w-full h-full`}
    >
      <div className="h-[85%] border-[1px] border-[#ffffff20] relative  rounded-md w-[95%] md:w-[60%] flex-col  backdrop-blur-3xl">
        <div className="flex h-[60%] md:h-[64%] overflow-hidden rounded-xl md:mt-[4%] md:pt-[0%] justify-center pr-[2%] pl-[2%] md:pl-[0%] md:pr-[0%]  pt-[15%] justify-self-center">
          <img
            src={`${zoomedImage !== false && zoomedImage.split(".")[0] + "zoom.webp"}`}
            alt="image"
            style={{ transform: `scale(${zoomLevel / 100})` }}
            className={`rounded-xl h-[100%] flex`}
          />
        </div>
        <div className="w-full h-[1px] bg-[#ffffff20] mt-[10px]"></div>
        <div
          className="absolute cursor-pointer right-2 top-2"
          onClick={() => {
            setZoomedImage(false);
            setZoomLevel(100);
          }}
        >
          <MdClose color="white" size={28} />
        </div>
        <div
          className={`${zoomedImage && (Number(zoomedImage.split(".")[0].at(-1)) < 1 ? "pointer-events-none opacity-25" : "pointer-events-auto opacity-100")} absolute cursor-pointer left-[2%] md:left-10 top-[30%] md:top-[35%]`}
          onClick={() => {
            const newIndex = Number(zoomedImage.split(".")[0].at(-1)) - 1;
            setZoomedImage(`src/pics/IKpic${newIndex}`);
            setCurPhotoIndex(newIndex);
            setCurrentImageDescription(imageInformation[newIndex]);
            setZoomLevel(100);
          }}
        >
          <MdArrowBack color="white" size={38} />
        </div>

        <div
          className={`${zoomedImage && (Number(zoomedImage.split(".")[0].at(-1)) > 6 ? "pointer-events-none opacity-25" : "pointer-events-auto opacity-100")} absolute cursor-pointer  right-[2%] md:right-10 top-[30%] md:top-[35%]`}
          onClick={() => {
            const newIndex = Number(zoomedImage.split(".")[0].at(-1)) + 1;
            setZoomedImage(`src/pics/IKpic${newIndex}`);
            setCurPhotoIndex(newIndex);
            setCurrentImageDescription(imageInformation[newIndex]);
            setZoomLevel(100);
          }}
        >
          <MdArrowForward color="white" size={38} />
        </div>
        <div className="absolute flex gap-1 cursor-pointer left-4 top-3">
          <MdZoomIn
            onClick={() => zoomLevel < 300 && setZoomLevel((cur) => cur + 35)}
            color={zoomLevel < 300 ? "white" : "#818181"}
            size={28}
          />
          <MdZoomOut
            onClick={() => zoomLevel > 100 && setZoomLevel((cur) => cur - 35)}
            color={zoomLevel > 100 ? "white" : "#818181"}
            size={28}
          />
        </div>
        <div className="flex flex-col w-[90%] md:w-[60%] pl-[35px] pr-1">
          <p className="text-white text-[20px] font-inter mt-[3%]">
            Beschreibung
          </p>
          <p className="text-[#BDBDBD] md:text-[16px] text-[14px] mt-[1%] font-light font-inter">
            {currentImageDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageZoomed;
