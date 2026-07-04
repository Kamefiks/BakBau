function ContactPhone() {
  return (
    <div className=" w-full h-96 mt-24 items-center flex flex-col">
      <div className="text-white font-semibold text-xl w-full flex justify-center border-b-2 pb-6 border-dark border-solid">
        All it takes is a phone call!
      </div>
      <div className="flex-col mt-12 flex">
        <div className="text-white border-lime-500 border-s-8 ml-5 pl-7 text-md font-light mt-10">
          Do you have any questions for us or would you like a personalised
          quote for your project?
        </div>
        <div className="  text-lg mt-5 gap-3 flex ml-5 ">
          <div className="text-white font-light ">No problem, just call:</div>
          <div className="text-lime-500 font-bold text-xl ">
            0162 - 8364008.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPhone;
