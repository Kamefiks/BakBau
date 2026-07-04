import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { HiOutlineSparkles } from "react-icons/hi";

import Footer from "./Footer";

import Services from "./Services";
import HeadlineWelcome from "./HeadlineWelcome";
import SectionStarter from "./SectionStarter";
import AchievementSection from "./AchievementSection";
import QuickActionsSection from "./QuickActionsSection";
import ContactSection from "./ContactSection";

function Page() {
  useGSAP(() => {
    gsap.fromTo(
      "#service-component-container",
      {
        opacity: 0,
        y: 200,
      },
      {
        y: 0,
        opacity: 1,
        ease: "expo.inOut",
        duration: 2,
        stagger: 0.4,
      },
    );
    gsap.fromTo(
      "#leaf-gardening",
      {
        y: -5,
        rotate: 0,
      },
      {
        y: 0,
        rotate: 10,
        ease: "power1.inOut",
        duration: 2.2,
        repeat: -1,
        yoyo: true,
      },
    );
  }, []);

  return (
    <div className="w-full page-color flex ">
      <div className=" w-full  ml-0 md:ml-0 lg:ml-0 md:mt-10 mt-5 ">
        <HeadlineWelcome
          message="Hier können Sie alles über uns und unsere Garten- und Landschaftsservices erfahren."
          headline="Herzlich willkommen!"
        />
        <div className=" w-full lg:w-full mt-24  md:mt-32 flex flex-col items-center">
          <SectionStarter sectionName="About us" />
          <div className="flex relative w-full h-full">
            <img
              src="/pics/group1.webp"
              className="absolute w-[100%] grayscale brightness-[35%] justify-center h-[300px] z-0 flex"
              alt="s"
            />
            <div className="flex w-full absolute h-[300px] linear-bg-about-bau"></div>
            <div className="flex  relative z-10 items-center w-full pl-9 sm:pl-[10%] md:pt-32 pt-7 mt-10">
              <div className="bg-[#343434]  w-[24px] h-[32px] flex rounded-[6px] justify-center items-center  text-[25px] font-inter text-[#555555]">
                ?
              </div>
              <p className="font-inter pl-4   sm:text-[36px]  text-[32px] font-medium linear-bg-headline-content">
                Was ist{" "}
              </p>
              <p className="font-inter pl-2   sm:text-[36px] text-[32px] font-bold linear-bg-headline-content">
                BAK BAU?
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%]  items-center flex flex-col sm:justify-center 2xl:justify-between 2xl:items-stretch sm:items-center sm:flex-row">
          <div className="bg-[#1B1B1B] relative z-20 gap-4 flex-col  md:pt-7 md:pb-10 sm:ml-[10%] sm:pl-7 pb-5 mt-8 pt-5 pl-3 pr-3 sm:text-left text-[17px] text-center text-wrap w-[355px] sm:w-[70%] flex">
            <p className="text-[#FFFFFF]    font-inter">
              <b className="opacity-[82%] font-medium sm:font-normal">
                Wir sind
              </b>{" "}
              <b className="opacity-[100%] font-semibold sm:font-normal">
                ein erfolgreiches{" "}
              </b>
              <b className="opacity-[82%] font-medium sm:font-normal">
                Familienunternehmen aus Rellingen/Hamburg und überzeugen unsere
                Kunden mit professioneller Arbeit durch unser kompetentes Team.{" "}
              </b>
            </p>
            <p className="text-[#FFFFFF] font-inter">
              <b className="opacity-[82%] font-medium sm:font-normal">Unser</b>{" "}
              <b className="opacity-[100%] font-semibold sm:font-normal">
                Expertenteam{" "}
              </b>
              <b className="opacity-[82%] font-medium sm:font-normal">
                vereint{" "}
              </b>
              <b className="opacity-[100%] font-semibold sm:font-normal">
                Kreativität, Präzision und erstklassiges Handwerk{" "}
              </b>
              <b className="opacity-[82%] font-medium sm:font-normal">
                um Ihre Vision zum Leben zu erwecken, sei es beim{" "}
              </b>
              <b className="opacity-[100%] font-semibold sm:font-normal">
                Gestalten{" "}
              </b>
              <b className="opacity-[82%] font-medium sm:font-normal">
                üppiger Gärten, dem Verlegen von{" "}
              </b>
              <b className="opacity-[100%] font-semibold sm:font-normal">
                hochwertigen{" "}
              </b>
              <b className="opacity-[82%] font-medium sm:font-normal">
                Pflastersteinen oder beim{" "}
              </b>
              <b className="opacity-[100%] font-semibold sm:font-normal">
                Pflegen{" "}
              </b>
              <b className="opacity-[82%] font-medium sm:font-normal">
                makelloser Landschaften.
              </b>
            </p>

            <p className="text-[#FFFFFF] font-inter">
              <b className="opacity-[100%] font-semibold sm:font-normal">
                Vertrauen Sie uns, Ihre Gartenträume Wirklichkeit werden zu
                lassen,{" "}
              </b>
              <b className="opacity-[82%] font-medium sm:font-normal">
                indem wir Ihr Grundstück in ein{" "}
              </b>
              <b className="opacity-[100%] font-semibold sm:font-normal">
                atemberaubendes Meisterwerk{" "}
              </b>
              <b className="opacity-[82%] font-medium sm:font-normal">
                verwandeln, das Sie viele Jahre lang genießen können.
              </b>
            </p>
          </div>
          <QuickActionsSection />
        </div>
        <AchievementSection />

        <div className=" w-full lg:w-full mt-24  sm:mt-32 flex flex-col items-center ">
          <SectionStarter sectionName="Our range of services" />
          <div className="text-[#FFFFFF] text-center mb-10 md:mb-32 mt-16 md:text-[20px] text-[17px] md:w-[793px] w-[311px]   font-inter">
            <b className="opacity-[100%] font-semibold sm:font-normal">
              We take pride{" "}
            </b>
            <b className="opacity-[82%] font-medium sm:font-normal">
              in offering a{" "}
            </b>
            <b className="opacity-[100%] font-semibold sm:font-normal">
              wide range of services{" "}
            </b>
            <b className="opacity-[82%] font-medium sm:font-normal">
              tailored to meet all your construction and gardening needs.{" "}
            </b>
            <b className="opacity-[100%] hidden md:block  font-semibold sm:font-normal">
              Check our range of services and let&apos;s create{" "}
            </b>
            <b className="opacity-[100%] md:hidden font-semibold sm:font-normal">
              Check our range of services and let&apos;s{" "}
            </b>

            <div className="flex w-full justify-center items-center">
              <b className="opacity-[82%] pr-1 md:hidden font-medium sm:font-normal">
                create{" "}
              </b>
              <b className="opacity-[100%] text-[#BEF860] font-semibold sm:font-normal">
                {" "}
                something extraordinary!
              </b>
              <span className="pl-2 text-[25px] text-[#BEF860] rotate-12">
                <HiOutlineSparkles />
              </span>
            </div>
          </div>
          <Services />
          <div className="flex mt-32 pb-44  flex-col sm:w-[65%] w-[100%]    md:justify-between">
            <p className="md:text-[30px] pl-7 text-[24px] font-semibold text-[#ffffff]">
              And many more...
            </p>
            <div className="flex md:flex-row items-center md:items-start flex-col mt-5 w-full md:justify-between">
              <p className="md:text-[20px] pl-7  text-[16px] pr-32">
                <b className="linear-bg-text-more-offers font-medium">
                  An offer that interests you is not on the list?
                </b>{" "}
                <b className="text-green-contact font-medium">Contact us</b>{" "}
                <b className="  font-medium linear-bg-text-more-offers">
                  and we will customize the perfect one for you ourselves.
                </b>
              </p>
              <div className="flex mt-24 md:mt-0 w-full md:pl-0 pl-10">
                <div className="flex rotate-[6deg] ">
                  <div className="md:w-[328px]  rounded-[16px] justify-center items-center md:h-[123px] h-[104px] flex stroke-bg-additional-offer ">
                    <div className=" rounded-[16px]   linear-covered-bg-additional-offer pr-16 md:w-[326px] h-[102px] flex md:h-[121px]">
                      <p className="linear-background-text-individual  md:pr-0 md:text-[22px] text-[18px] ml-5 mt-3 font-normal font-inter">
                        Your individual offer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex rotate-[20deg] mt-10 absolute ">
                  <div className="md:w-[328px] rounded-[16px] justify-center items-center h-[104px] md:h-[123px] flex stroke-bg-additional-offer ">
                    <div className=" rounded-[16px] flex-col pr-16 linear-bg-additional-offer md:w-[326px] h-[102px] flex md:h-[121px]">
                      <p className="text-[#ffffff]  md:text-[22px] text-[18px]  md:pr-0 ml-5 mt-3 font-normal font-inter">
                        Your individual offer
                      </p>
                      <div className="flex-col flex ml-6 h-full mt-3 gap-1">
                        <div className="flex w-[95px] h-[10%] rounded-[8px] bg-[#313131]"></div>
                        <div className="flex w-[115px] h-[10%] rounded-[8px] bg-[#313131]"></div>
                        <div className="flex w-[85px] h-[10%] rounded-[8px] bg-[#313131]"></div>
                        <div className="flex w-[55px] h-[10%] rounded-[8px] bg-[#313131]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionStarter sectionName="All it takes is a phone call!" />

        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}

export default Page;
