import { useState } from "react";
import Album from "./Album";
import CarouselImages from "./CarouselImages";
import Footer from "./Footer";
import HeadlineWelcome from "./HeadlineWelcome";
import SectionStarter from "./SectionStarter";
import ImageIK from "./ImageIK";
import ImageZoomed from "./ImageZoomed";

function PageImages() {
  const [showImages, setShowImages] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(false);
  const [currentImageDescription, setCurrentImageDescription] = useState(false);

  const [curPhotoIndex, setCurPhotoIndex] = useState(
    zoomedImage !== false
      ? Number(zoomedImage.split(".")[0].at(-1)) - 1
      : false,
  );

  const [imagesIdeeKonstruktion] = useState([
    "/pics/album0.webp",
    "/pics/IKpic1.webp",
    "/pics/IKpic2.webp",
    "/pics/IKpic3.webp",
    "/pics/IKpic4.webp",
    "/pics/IKpic5.webp",
    "/pics/IKpic6.webp",
    "/pics/IKpic7.webp",
  ]);
  const [imageDetails] = useState([
    "Paving works",
    "Paving works",
    "Terrace building",
    "Paving works",
    "Paving works",
    "Paving works",
    "Paving works",
    "Paving works",
    "Paving works",
  ]);
  const [imageInformation] = useState([
    "Eine wunderschön gestaltete Terrasse mit eleganten, rechteckigen grauen Pflastersteinen. Die gleichmäßige Verlegung sorgt für ein modernes und sauberes Erscheinungsbild, das perfekt für einen stilvollen Außenbereich geeignet ist. Diese Fläche eignet sich ideal für eine gemütliche Sitzecke oder als funktionale Erweiterung des Hauses.",
    "Ein kunstvoll gestalteter Gehweg mit einem auffälligen Fischgrätenmuster aus warmen Terrakotta-, Orange- und Brauntönen. Die kontrastreiche weiße Umrandung aus Natursteinen hebt das Design hervor und verleiht dem Weg eine zeitlose, elegante Ausstrahlung. Perfekt für Gärten oder als dekorativer Zugang zu Eingangsbereichen.",
    "Ein geschmackvoll angelegter Ziegelweg mit klassischem Fischgrätenmuster, der eine erhöhte Terrasse mit einer robusten Betontreppe verbindet. Die harmonische Kombination aus traditionellen Ziegelsteinen und modernen Betonelementen sorgt für eine ansprechende Optik und hohe Langlebigkeit.",
    "Ein kunstvoll gestalteter Gehweg mit einem auffälligen Fischgrätenmuster aus warmen Terrakotta-, Orange- und Brauntönen. Die kontrastreiche weiße Umrandung aus Natursteinen hebt das Design hervor und verleiht dem Weg eine zeitlose, elegante Ausstrahlung. Perfekt für Gärten oder als dekorativer Zugang zu Eingangsbereichen.",
    "Eine stilvolle Terrasse mit großen, dunkelgrauen Platten, die ein modernes und luxuriöses Ambiente schaffen. Die feine Randgestaltung mit kleinen hellgrauen Steinen setzt dezente Akzente und sorgt für eine klare Trennung zur umliegenden Gartenfläche.",
    "Ein kunstvoll gepflasterter Weg mit warmen Ziegeltönen in Fischgrätenmuster, der zu einer modernen Betontreppe führt. Die elegante Randgestaltung mit weißen Natursteinen verleiht dem Design Tiefe und schafft eine harmonische Verbindung zwischen verschiedenen Landschaftselementen.",
    "Ein edler Gehweg aus hellen, rechteckigen Pflastersteinen, kombiniert mit stilvollen Kiesflächen an der Seite. Diese minimalistische und elegante Gestaltung sorgt für eine klare Struktur im Außenbereich und integriert sich nahtlos in moderne Gartenkonzepte.",
    "Eine geschmackvolle Terrasse mit großen, dunkelgrauen Platten, die direkt an ein Backsteinhaus anschließt. Die Kombination aus modernen Bodenfliesen und der traditionellen Backsteinfassade schafft einen spannenden Kontrast und verleiht dem Außenbereich eine edle Note.",
  ]);

  return (
    <div className="w-full page-color flex ">
      <div className=" w-full  ml-0 md:ml-0 lg:ml-0 md:mt-10 mt-5 ">
        <HeadlineWelcome
          message="Hier sehen Sie alle Bilder unserer bisherigen erfolgreichen Arbeiten."
          headline="Sehen Sie, wie wir arbeiten!"
        />
        <SectionStarter sectionName="Neueste" className={"mt-[10%] mb-[3%]"} />
        <div className="w-full justify-center pb-[5%] flex text-[17px] md:text-[19px] font-normal">
          <p className="font-inter w-[340px] text-center text-[#BABABA]">
            Werfen Sie einen Blick auf unsere{" "}
            <strong className="font-normal text-[#BEF860]">
              neuesten Meilensteine.
            </strong>
          </p>
        </div>
        <div className="w-full flex justify-center">
          <CarouselImages />
        </div>
        <SectionStarter
          sectionName="Alle Bilder"
          className={"mt-[10%] mb-[7%] md:mb-[3%]"}
        />
        <div className="w-full justify-center pb-[15%] md:pb-[5%] flex text-[17px] md:text-[19px] font-normal">
          <p className="font-inter w-[340px] text-center text-[#BABABA]">
            Entdecken Sie unser mit Hingabe{" "}
            <strong className="font-normal text-[#BEF860]">
              geschaffenes Portfolio
            </strong>
          </p>
        </div>
        <div className="w-full flex md:flex-row items-center md:gap-[0px] gap-[51px] flex-col justify-center">
          <Album
            albumName={"Idee & Konstruktion"}
            albumMainPhoto={"/pics/album0.webp"}
            imagesCount={8}
            showImages={showImages}
            setShowImages={setShowImages}
          />
          <Album
            albumName={"Gartenpflege"}
            albumMainPhoto={"/pics/album2.webp"}
            imagesCount={5}
            showImages={showImages}
            setShowImages={setShowImages}
          />
          <Album
            albumName={"Idee & Konstruktion"}
            albumMainPhoto={"/pics/album3.webp"}
            imagesCount={3}
            showImages={showImages}
            setShowImages={setShowImages}
          />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-wrap  mt-[5%] mr-[7%] ml-[7%]">
            {" "}
            {showImages === "Idee & Konstruktion" &&
              imagesIdeeKonstruktion.map((el, index) => (
                <ImageIK
                  key={index}
                  imageUrl={imagesIdeeKonstruktion[index]}
                  imageDetails={imageDetails}
                  index={index}
                  imageInformation={imageInformation}
                  zoomedImage={zoomedImage}
                  curPhotoIndex={curPhotoIndex}
                  setCurPhotoIndex={setCurPhotoIndex}
                  setZoomedImage={setZoomedImage}
                  setCurrentImageDescription={setCurrentImageDescription}
                />
              ))}
          </div>
        </div>
        {zoomedImage && (
          <div className="fixed inset-0 z-50 backdrop-blur-sm brightness-50"></div>
        )}

        <ImageZoomed
          showImages={showImages}
          zoomedImage={zoomedImage}
          setZoomedImage={setZoomedImage}
          imageInformation={imageInformation}
          curPhotoIndex={curPhotoIndex}
          setCurPhotoIndex={setCurPhotoIndex}
          currentImageDescription={currentImageDescription}
          setCurrentImageDescription={setCurrentImageDescription}
        />
        <div className="mt-36"></div>

        <Footer />
      </div>
    </div>
  );
}

export default PageImages;
