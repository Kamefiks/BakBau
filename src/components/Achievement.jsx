import {
  MdHistoryToggleOff,
  MdOutlineCheckCircle,
  MdOutlineReviews,
} from "react-icons/md";

function Achievement({ text, type, data }) {
  return (
    <div
      className={`${
        type === "rating" && "linear-bg-achievement-rating rounded-[20px]"
      } ${
        type === "completed" && "linear-bg-achievement-completed rounded-[20px]"
      } ${
        type === "years" && "linear-bg-achievement-years rounded-[20px]"
      } flex justify-center items-center w-[286px] 2xl:w-[35%] sm:w-[70%]  h-[76px] sm:h-[172px]`}
    >
      <div
        className={`${type === "years" && "bg-[#343434] "} ${
          type === "rating" && "linear-bg-green  "
        } ${
          type === "completed" && "bg-[#d9d9d9] "
        } rounded-[19px] pl-5 sm:pr-5 sm:pl-5 sm:pb-8 justify-between flex-col flex  w-[281px] sm:w-[100%]  h-[72px] sm:h-[167px]`}
      >
        <div className="flex w-full justify-between">
          <div
            className={` text-[32px] sm:text-[64px] font-medium font-inter ${
              type === "years" && "inner-shadow-text-white"
            } ${type === "rating" && " inner-shadow-text-green-light"} ${
              type === "completed" && " inner-shadow-text-dark"
            }`}
          >
            {data}
          </div>
          <span>
            {" "}
            {type === "completed" && (
              <MdOutlineCheckCircle className="text-[#919191] text-[38px] sm:text-[30px] sm:mt-2  sm:mr-0 mr-3 mt-4" />
            )}
            {type === "years" && (
              <MdHistoryToggleOff className="text-[#c6c6c6cc] text-[38px] sm:text-[30px]  sm:mt-2  sm:mr-0 mr-3 mt-4" />
            )}
            {type === "rating" && (
              <MdOutlineReviews className="text-[#52643E] text-[38px] sm:text-[30px]  sm:mt-2  sm:mr-0 mr-3 mt-4" />
            )}
          </span>
        </div>

        <div
          className={`${type === "years" && "inner-shadow-text-white"} ${
            type === "rating" && " inner-shadow-text-green"
          } ${
            type === "completed" && " inner-shadow-text-dark"
          } sm:text-[32px]  -translate-y-3 sm:-translate-y-0 font-medium text-[16px] font-inter `}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
