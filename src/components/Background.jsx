import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import PicChangeBar from "../components/PicChangeBar";
import ScrollDownBar from "../components/ScrollDownBar";
import ButtonMain from "./ButtonMain";

function Background({ scrollUpRef }) {
  const imagesNames = ["imagemain-1.webp", "lawnmow.jpg", "terrace.jpg"];
  const [imageMain, setImageMain] = useState(1);

  const scrollRef = useRef(null);
  const textPartsRef = useRef([]);
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current && textPartsRef.current.length && logoRef.current) {
        gsap.fromTo(
          textPartsRef.current,
          {
            opacity: 0,
            y: 500,
          },
          {
            y: 0,
            opacity: 1,
            ease: "expo.inOut",
            duration: 2,
            stagger: 0.4,
          }
        );
        gsap.fromTo(
          logoRef.current,
          {
            filter: "grayscale(100%)",
            opacity: 0.0,
          },
          {
            filter: "grayscale(0%)",
            opacity: 1,
            ease: "expo.inOut",
            duration: 7.2,
          }
        );
        gsap.fromTo(
          "#custom-cursor",
          {
            opacity: 0.1,
          },
          {
            opacity: 1,
            delay: 5,
            duration: 3,
          }
        );
        gsap.fromTo(
          "#picchangebar",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 5,
            duration: 1,
          }
        );
        gsap.fromTo(
          ".anim-def",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 3,
            duration: 1,
          }
        );
        gsap.fromTo(
          ".anim-bg",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 0.5,
            duration: 1.5,
          }
        );
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className="w-full  relative  h-full  flex justify-center "
        ref={scrollUpRef}
      >
        <div
          style={{
            backgroundImage: `url(/src/pics/${imagesNames[imageMain - 1]})`,
          }}
          className="background-main anim-bg h-full scale-x-[-1] section  bg-cover bg-center bg-no-repeat absolute w-full  "
        ></div>
        <div className="absolute w-full h-full linear-bg-image-main"></div>

        <div
          className="flex flex-col  justify-start items-start w-full h-full top-0 left-0  text-white"
          ref={scrollRef}
        >
          <div
            id="logoImage"
            ref={logoRef}
            className="logo  ml-[5%] text-6xl w-[90px] sm:mt-[4%] sm:w-[100px]    z-40 text-white uppercase font-bold"
          ></div>
          <div className="ml-[5%] font-lexend tracking-tighter  sm:tracking-tight  sm:w-[30%] w-[70%]  text-center   lg:text-6xl text-overlay z-10  flex-wrap  md:text-5xl  md:pt-0 md:flex-row flex font-bold gap-2 sm:gap-5">
            {["Baue", "mit", "uns", "die", "Zukunft."].map((text, index) => (
              <p
                key={index}
                id="text-main-part"
                ref={(el) => (textPartsRef.current[index] = el)}
                className={
                  index === 0
                    ? "gradient md:w-[160px] sm:h-[70px] flex text-[40px] md:text-[64px]"
                    : index === 4
                      ? "underln text-main sm:h-[80px]    flex justify-center flex-col text-[40px] md:text-[64px]"
                      : "text-main text-[40px] sm:h-[70px] items-center flex md:text-[64px]"
                }
              >
                {text}
              </p>
            ))}
          </div>

          <div className="w-full ml-[5%] anim-def z-50 flex  sm:mt-[6%] h-[70px] sm:h-[70px] mt-[15%]">
            <p className=" leading-6 sm:leading-8 text-[#DEDEDE] text-[17px] md:text-[24px] w-[330px] sm:w-[570px] ">
              <b className="text-[#DEDEDE] font-medium ">Professionalität</b>{" "}
              und Erfahrung. Lassen Sie uns{" "}
              <b className="text-[#DEDEDE] font-medium">Großes </b>
              schaffen!
            </p>
          </div>
          <div className="flex anim-def items-center ml-[5%] z-50 mt-[15%] sm:mb-[2%] mb-[15%] sm:mt-[5%]">
            <ButtonMain type="contact" />
            <p className="text-[#454545] ml-5 mr-5 z-[100]  text-[16px] sm:text-[22px] font-medium font-inter">
              OR
            </p>
            <ButtonMain type="more" />
          </div>
          <div className="flex w-full justify-center" id="picchangebar">
            <PicChangeBar imageMain={imageMain} setImageMain={setImageMain} />
          </div>
        </div>
      </div>

      <ScrollDownBar scrollUpRef={scrollUpRef} />
    </div>
  );
}

export default Background;
