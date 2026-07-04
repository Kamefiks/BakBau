import { useState } from "react";
import ImageFromCarousel from "./ImageFromCarousel";
import ImageFromCarouselCurrent from "./ImageFromCarouselCurrent";

function CarouselImages() {
  const [images] = useState([
    "imageRobota6.webp",
    "imageRobota2.webp",
    "imageRobota3.webp",
    "imageRobota4.webp",
    "imageRobota5.webp",
  ]);
  const [imageDetails] = useState([
    "Garden maintenance",
    "Paving works",
    "Paving works",
    "Paving works",
    "Paving works",
  ]);
  const [index, setIndex] = useState(1);
  return (
    <div className="w-full container-3d justify-center items-center flex gap-10">
      <ImageFromCarousel
        type={"prev"}
        index={index}
        imageUrl={`src/pics/${images[index - 1]}`}
        onClick={() => index >= 1 && setIndex((cur) => cur - 1)}
      />
      <ImageFromCarouselCurrent
        imageUrl={`src/pics/${images[index]}`}
        imageDetails={imageDetails}
        index={index}
      />
      <ImageFromCarousel
        type={"next"}
        index={index}
        imageUrl={`src/pics/${images[index + 1]}`}
        onClick={() => index <= 3 && setIndex((cur) => cur + 1)}
      />
    </div>
  );
}

export default CarouselImages;
