import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeadlineWelcome({ headline, message }) {
  return (
    <>
      <p className="color-text-main sm:ml-6 ml-6 lg:ml-[75px] text-[24px] sm:text-[30px] font-bold mt-12">
        {headline}
      </p>
      <div className="w-full text-white text-md mt-6 ml-4 lg:ml-16 flex items-center">
        <div className="mr-3 info-color ml-4">
          <FontAwesomeIcon icon={fas.faCircleInfo} className="sm:text-[20px]" />
        </div>
        <p className="sm:border-l-4  font-inter border-l-2 flex-wrap w-[295px] text-[#E0E0E0] sm:text-[18px] text-[14px] xl:w-[35%] bgcolor-info pl-4 pr-3 pt-3 pb-3">
          {message}
        </p>
      </div>
    </>
  );
}

export default HeadlineWelcome;
