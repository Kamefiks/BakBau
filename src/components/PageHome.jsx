import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
          <SectionStarter sectionName="Über uns" />
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

        <div className=" w-full lg:w-full mt-24 pb-32  sm:mt-32 flex flex-col items-center ">
          <SectionStarter sectionName="Unser Leistungsspektrum" />
          <div className="text-[#FFFFFF] text-center mb-10 md:mb-32 mt-16 md:text-[20px] text-[17px] md:w-[793px] w-[311px]   font-inter">
            <b className="opacity-[100%] font-semibold sm:font-normal">
              Schauen Sie sich{" "}
            </b>
            <b className="opacity-[82%] font-medium sm:font-normal">
              unser Leistungsangebot{" "}
            </b>
            <b className="opacity-[100%] font-semibold sm:font-normal">
              an und lassen Sie uns gemeinsam{" "}
            </b>
            <b className="opacity-[82%] font-medium sm:font-normal"> </b>

            <div>
              <span className="opacity-[82%] pr-1 font-medium sm:font-normal">
                etwas{" "}
              </span>
              <p className="opacity-[100%] text-[#BEF860] font-semibold sm:font-normal">
                {" "}
                Außergewöhnliches schaffen!
              </p>
            </div>
          </div>
          <Services />
        </div>
        <SectionStarter sectionName="Ein Anruf genügt!" />

        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}

export default Page;
