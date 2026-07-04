function ImageFromCarouselCurrent({ imageUrl, imageDetails, index }) {
  return (
    <div className="w-[25%] relative flex h-[207px] md:h-[417px]">
      <img src={imageUrl} className="w-full select-none h-full" alt="image" />
      <div className="absolute linear-bg-photo flex-col pl-[5%] flex h-[55%] pb-[2%] justify-end w-full bottom-0">
        <p className="text-white font-inter font-bold text-[16px]">BAK-BAU</p>
        <p className="text-white font-inter font-extralight text-[18px]">
          {imageDetails[index]}
        </p>
      </div>
    </div>
  );
}

export default ImageFromCarouselCurrent;
