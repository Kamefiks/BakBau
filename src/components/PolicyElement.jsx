function PolicyElement({ headline, message, index }) {
  return (
    <div className=" md:w-[45%] w-[75%] flex flex-col font-inter">
      <p className="text-[#FFFFFF] text-[22px]">
        {index}.{headline}
      </p>

      <div className="w-[100%] flex h-[100%] mt-[1.5%]">
        <div className="bg-[#252525]  flex w-[10px] rounded-sm self-stretch mr-[2%] "></div>

        <div className="text-[#B3B3B3] w-[100%] font-inter flex">
          {" "}
          {message}
        </div>
      </div>
    </div>
  );
}

export default PolicyElement;
