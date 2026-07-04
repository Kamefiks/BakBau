import { MdStar } from "react-icons/md";
import Achievement from "./Achievement";

function AchievementSection() {
  return (
    <div className="flex flex-col items-center sm:mt-32 ">
      <div className="flex w-full 2xl:w-[80%] xl:w-[80%] lg:w-[90%] justify-between lg:justify-start sm:gap-3  items-center   mt-20 sm:mt-0">
        <div className="bg-[#D9D9D9] lg:hidden h-[2px] opacity-[20%] w-[30%]"></div>
        <p className="text-[19px] lg:text-[22px] flex text-nowrap linear-text-dark font-medium font-inter">
          Our achievements
        </p>
        <div className="bg-[#D9D9D9] h-[2px] opacity-[20%]  lg:flex-1 w-[30%]"></div>
      </div>
      <div className=" w-[85%] 2xl:w-[80%] gap-3 justify-center  items-center lg:items-start sm:mt-10 mt-12 flex sm:gap-5 lg:flex-row flex-col">
        <Achievement
          text={"Completed Projects"}
          data={"100+"}
          type={"completed"}
        />
        <Achievement
          text={"Years in the industry"}
          data={"20+"}
          type={"years"}
        />
        <Achievement
          text={"Rating on Google"}
          data={
            <div className="gap-2 flex items-center">
              <p>5.0</p>
              <MdStar className="sm:text-[42px] text-[24px] text-[#7FAB49]" />
            </div>
          }
          type={"rating"}
        />
      </div>
    </div>
  );
}

export default AchievementSection;
