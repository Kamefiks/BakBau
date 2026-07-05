import QuickAction from "./QuickAction";

function QuickActionsSection() {
  return (
    <div className="flex flex-col relative z-20 items-center w-full md:-mt-10 ">
      <div className="flex w-full  sm:w-[281px] xl:w-[50%] 2xl:w-[45%]  justify-between sm:justify-start sm:gap-3  items-center  mt-20 md:mt-0">
        <div className="bg-[#D9D9D9] sm:hidden h-[2px] opacity-[20%] flex-1"></div>
        <p className="text-[20px] 2xl:text-[22px] justify-center  flex text-nowrap linear-text-dark font-medium font-inter">
          Schnellaktionen
        </p>
        <div className="bg-[#D9D9D9] h-[2px] opacity-[20%] xl:w-[190px] flex-1"></div>
      </div>
      <div className="items-center  sm:items-start sm:mt-5 mt-12 gap-3 flex flex-col">
        <QuickAction text={"Weitere Details"} link="#contactinfo" />
        <QuickAction text={"Fotogalerie"} />
        <QuickAction text={"Kurznachricht"} link="#contact" />
      </div>
    </div>
  );
}

export default QuickActionsSection;
