import { MdArrowForward } from "react-icons/md";

function QuickAction({ text, link }) {
  return (
    <div className="linear-bg-actions relative cursor-pointer group rounded-[19px] pl-5 sm:pl-5 justify-between flex items-center w-[281px] xl:w-[360px] h-[49px] sm:h-[62px]">
      <div className="w-[90%] z-10 absolute h-full linear-bg-effect-action opacity-0 group-hover:opacity-100 duration-500"></div>
      <a
        href={link}
        className="xl:text-[20px] z-20 text-[16px] font-inter text-[#ffffff] shadow-text-white"
      >
        {text}
      </a>
      <span>
        {" "}
        <MdArrowForward className="text-[24px] z-20 group-hover:translate-x-2 duration-200 sm:text-[30px] text-[#D3D3D3] sm:mr-5 mr-2 " />
      </span>
    </div>
  );
}

export default QuickAction;
