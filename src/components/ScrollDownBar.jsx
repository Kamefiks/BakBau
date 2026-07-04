import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
function ScrollDownBar({ scrollUpRef }) {
  const scrollDownRef = useRef(null);

  const [arrowState, setArrowState] = useState("down");
  const scrollTo = () => {
    if (arrowState === "down") {
      scrollDownRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      scrollUpRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY > viewportHeight / 2 && arrowState === "down") {
        setArrowState("up");
      } else if (scrollY <= viewportHeight / 2 && arrowState === "up") {
        scrollUpRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        setArrowState("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [arrowState]);

  useGSAP(() => {
    gsap.fromTo(
      "#scrollbar",
      {
        y: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        y: -32,
        duration: 2,
        delay: 4,
        ease: "expo.out",
      }
    );
    gsap.fromTo(
      "#skip-info",
      {
        y: 0,
        opacity: 0,
      },
      {
        opacity: 0.5,
        y: -65,
        duration: 1,
        delay: 4,
        ease: "expo.out",
      }
    );
  }, []);
  // let hoverSkip = gsap.to("#skip-info", {
  //   opacity: 1,
  //   fontWeight: 500,
  // });

  return (
    <div
      id="scrollbar"
      className="w-full scrolldownbar flex justify-center h-[48px] absolute items-center text-2xl text-white"
    >
      <div
        className={`cursor-pointer hover:text-lime-400 transition-all duration-300 ${
          arrowState === "up" ? "arrow-up" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={fas.faAnglesDown}
          onClick={() => scrollTo()}
          ref={scrollDownRef}
        />
      </div>
    </div>
  );
}

export default ScrollDownBar;
