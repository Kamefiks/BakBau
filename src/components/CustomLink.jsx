import { MdArrowOutward } from "react-icons/md";

function CustomLink({ type }) {
  return (
    <div className="xl:w-[200px] text-[#6B6B6B] hover:text-[#8b8b8b] group hover:border-[#3b3b3b] duration-300  justify-between ml-5 rounded-[21px] linear-bg-link pl-4 h-[33px] md:h-[46px] items-center border-2 border-[#333333] sm:w-[190px] w-[155px] flex ">
      {type === "instagram" && (
        <a
          href="https://www.instagram.com/bak_bau_marcin_bak/"
          target="_blank"
          rel="noreferrer"
          className="text-[#8E8E8E] 2xl:text-[19px] lg:text-[18px] text-[15px] duration-300  group-hover:text-[#a3a3a3]"
        >
          Our Instagram
        </a>
      )}
      {type === "facebook" && (
        <a
          href="https://www.facebook.com/marcin.bak.144?locale=pl_PL"
          target="_blank"
          rel="noreferrer"
          className="text-[#8E8E8E] 2xl:text-[19px] lg:text-[18px] text-[15px] duration-300 group-hover:text-[#a3a3a3]"
        >
          Our Facebook
        </a>
      )}
      <MdArrowOutward className="2xl:text-[30px] text-[20px] duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]   mr-[10px]" />
    </div>
  );
}

export default CustomLink;
