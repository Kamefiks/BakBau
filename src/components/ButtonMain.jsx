import { MdArrowForwardIos } from "react-icons/md";
function ButtonMain({ type }) {
  return (
    <div
      className={`sm:w-[200px] w-[141px] cursor-pointer   h-[41px] sm:h-[60px] rounded-[8px] sm:rounded-[15px] justify-center flex items-center  border-2 ${
        type === "contact" &&
        "bg-[#1F7409]  border-[#31A60D] hover:-translate-y-1 hover:border-[#6ce946] duration-300 "
      } ${
        type === "more" &&
        "bg-linear-more border-[#8A8A8A] duration-300 hover:-translate-y-1 hover:border-[#a8a8a8]"
      }`}
    >
      <p className="text-white flex items-center gap-5 justify-center font-inter font-[350] text-[14px] sm:text-[20px]">
        {type === "more" && "MEHR ERFAHREN"}
        {type === "contact" && "KONTAKT"}
        {type === "contact" && (
          <MdArrowForwardIos className="text-[15px] sm:text-[25px]" />
        )}
      </p>
    </div>
  );
}

export default ButtonMain;
