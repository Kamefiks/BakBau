import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { MdOpenInFull } from "react-icons/md";
function ImageIK({
  imageUrl,
  imageDetails,
  index,
  setZoomedImage,

  imageInformation,
  curPhotoIndex,
  setCurPhotoIndex,
  setCurrentImageDescription,
}) {
  useGSAP(() => {
    gsap.fromTo(
      "#image",
      {
        opacity: 0,
        y: 200,
      },
      {
        y: 0,
        opacity: 1,
        ease: "expo.inOut",
        duration: 0.5,
        stagger: 0.2,
      }
    );
  }, []);

  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsRendered(true), 20);
  }, []);

  function setInfo() {
    setCurPhotoIndex(Number(imageUrl.split(".")[0].at(-1)));
    setCurrentImageDescription(imageInformation[index]);
    setZoomedImage(imageUrl);
    //zmienia sie asynchronicznie wiec tutaj tak nie mozna sobie pokolei ze statea
    //setCurPhotoIndex(Number(zoomedImage.split(".")[0].at(-1)) - 1);

    console.log(curPhotoIndex, "ty kurwo");
  }
  return (
    <div
      id="image"
      className={`  relative  transition-all ease-in-out  duration-500 ${
        isRendered ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <img src={imageUrl} className="w-full select-none h-full" alt="image" />
      <div className="absolute linear-bg-photo flex-col pl-[5%] flex h-[55%] pb-[2%] justify-end w-full bottom-0">
        <p className="text-white font-inter font-bold text-[16px]">BAK-BAU</p>
        <p className="text-white font-inter font-extralight text-[18px]">
          {imageDetails[index]}
        </p>
      </div>
      <div
        onClick={() => setInfo()}
        className="absolute cursor-pointer  flex-col flex  pb-[2%] justify-end bottom-0 right-[3%]"
      >
        <p className="text-white font-inter font-extralight text-[18px]">
          <MdOpenInFull color="#BCBCBC" size={29} />
        </p>
      </div>
    </div>
  );
}

export default ImageIK;
