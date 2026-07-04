import { MdArrowBack, MdArrowForward } from "react-icons/md";

function ImageFromCarousel({ imageUrl, type, onClick, index }) {
  return (
    <div
      onClick={onClick}
      className={`w-[20%] ${index <= 0 && type === "prev" && "invisible"} ${index >= 4 && type === "next" && "invisible"} ${type === "prev" && "image-rotate-prev"} ${type === "next" && "image-rotate-next"} justify-center items-center  relative flex h-[200px] md:h-[390px] `}
    >
      <img
        src={imageUrl}
        className="w-full select-none  opacity-40  h-full"
        alt="image"
      />

      {type === "prev" && (
        <div className="absolute rotate-0 bg-[#8A8A8A41] rounded-[30px] w-[50px] h-[50px] justify-center items-center  flex self-center">
          <MdArrowBack color="#BCBCBC" size={29} />
        </div>
      )}
      {type === "next" && (
        <div className="absolute rotate-0 bg-[#8A8A8A41] rounded-[30px] w-[50px] h-[50px] justify-center items-center  flex self-center">
          <MdArrowForward color="#BCBCBC" size={29} />
        </div>
      )}
    </div>
  );
}

export default ImageFromCarousel;
