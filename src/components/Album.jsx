import { MdArrowBackIos, MdBurstMode } from "react-icons/md";

function Album({
  albumMainPhoto,
  albumName,
  imagesCount,
  setShowImages,
  showImages,
}) {
  function switchShowImages(newImage) {
    if (showImages !== false) {
      setShowImages(false);
    } else {
      setShowImages(newImage);
    }
  }

  return (
    <div className=" w-[85%] md:w-[25%]  relative ml-[2%] mr-[2%] flex-col  h-[340px] flex">
      <div className="w-full relative h-[80%] flex justify-center">
        <div className="flex w-[100%] h-[100%] absolute rotate-[5deg] bg-[#131313]"></div>
        <img
          src={albumMainPhoto}
          alt="mainphoto"
          className="w-[95%] h-[100%] absolute"
        ></img>
      </div>
      <div
        className={`absolute bottom-0 rounded-[5px] h-[82px] flex justify-center w-[90%] ${albumName === "Idee & Konstruktion" && "stroke-linear-album-name-ic"} ${albumName === "Gartenpflege" && "stroke-linear-album-name-gm"}`}
      >
        <div
          className={`absolute bottom-0 rounded-[5px] justify-between flex h-[80px] w-[99%]  ${albumName === "Idee & Konstruktion" && "bg-linear-album-name-ic"} ${albumName === "Gartenpflege" && "bg-linear-album-name-gm"}`}
        >
          <div className="flex flex-col h-[100%] justify-center items-start pl-[5%] w-[66%]">
            <p
              className={`md:text-[20px] text-[16px]  ${albumName === "Gartenpflege" ? "text-[#93E70B]" : "text-[#ffffff]"}`}
            >
              {albumName}
            </p>
            <p
              className={`text-[15px]  font-medium ${albumName === "Gartenpflege" ? "text-[#435F2D]" : "text-[#7D7D7D]"}`}
            >
              Click to see more
            </p>
          </div>
          <div className="flex w-[40%]  justify-center items-center">
            <span>
              <MdBurstMode
                className={`${albumName === "Gartenpflege" ? "text-[#435F2D]" : "text-[#7D7D7D]"}`}
                size={25}
              />
            </span>
            <p
              className={` ${albumName === "Gartenpflege" ? "text-[#435F2D]" : "text-[#7D7D7D]"} text-[32px] font-inter ml-2 font-medium`}
            >
              {imagesCount}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`absolute items-center right-0 bottom-0 rounded-[5px] h-[82px] flex justify-center w-[10%] ${albumName === "Idee & Konstruktion" && "stroke-linear-album-name-ic"} ${albumName === "Gartenpflege" && "bg-linear-album-name-gm"}`}
        onClick={() => switchShowImages(albumName)}
      >
        <MdArrowBackIos
          className={`${albumName === "Gartenpflege" ? "text-[#435F2D]" : "text-[#7D7D7D]"}`}
          style={{ rotate: `${showImages == albumName ? "90deg" : "-90deg"}` }}
          size={25}
        />
      </div>
    </div>
  );
}

export default Album;
