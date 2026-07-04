// import { useRef } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
const IconItem = ({ isSelected, onClick }) => (
  <div className="flex gap-4">
    <div
      className={`sm:w-[82px] w-[52px] sm:h-[17px] h-[13px]  ${
        isSelected
          ? "bg-[#FFFFFF]  rounded-[16px] opacity-25"
          : "opacity-25  rounded-[16px] bg-[#727272]"
      }`}
      onClick={onClick}
    ></div>
  </div>
);

const PicChangeBar = ({ imageMain, setImageMain }) => {
  // const iconsRef = useRef([]);
  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#sidebar",
  //     {
  //       opacity: 0,
  //       x: -500,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       delay: 3,
  //       duration: 1,
  //       ease: "expo.out",
  //     }
  //   );
  // }, []);
  return (
    <div
      id="sidebar"
      className="justify-center z-50 mb-[12%] sm:mb-[3%] gap-8  h-full  flex "
    >
      <p
        className="-rotate-90 flex items-center"
        onClick={() =>
          imageMain > 1
            ? setImageMain((cur) => (cur = cur - 1))
            : setImageMain(3)
        }
      >
        <FontAwesomeIcon
          icon={fas.faChevronUp}
          className=" text-[#F0F0F0]  opacity-50 cursor-pointer text-xl sm:text-2xl"
        />
      </p>
      <div className="flex gap-4 items-center p-[3px]">
        <IconItem
          isSelected={imageMain === 1}
          onClick={() => setImageMain(1)}
        />
        <IconItem
          isSelected={imageMain === 2}
          onClick={() => setImageMain(2)}
        />
        <IconItem
          isSelected={imageMain === 3}
          onClick={() => setImageMain(3)}
        />
      </div>

      <p
        className="flex items-center"
        onClick={() =>
          imageMain < 3
            ? setImageMain((cur) => (cur = cur + 1))
            : setImageMain(1)
        }
      >
        <FontAwesomeIcon
          icon={fas.faChevronDown}
          className=" text-[#F0F0F0]  -rotate-90 opacity-50 text-xl sm:text-2xl cursor-pointer "
        />
      </p>
    </div>
  );
};

export default PicChangeBar;
