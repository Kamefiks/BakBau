import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

function Footer() {
  return (
    <footer className="radial-bg-footer-container   flex flex-col  w-[100%] h-[900px]  md:h-[586px]">
      <div className="linear-bg-border-footer  min-h-[1px] w-full"></div>
      <div className="w-full h-full flex md:flex-row flex-col md:pl-[5%] md:pt-[5%]">
        <div className="flex flex-col md:w-1/3">
          <div className="flex pl-5 md:pl-0 mt-12 md:mt-0 gap-[18px]">
            <div
              id="logoImage"
              className="logo text-6xl h-[80px] w-[80px] sm:w-[100px]  text-white uppercase font-bold"
            ></div>
            <div className="flex flex-col md:justify-start justify-center">
              <div className="font-black text-white md:text-[32px] text-[20px] font-inter">
                MARCIN BAK
              </div>
              <div className="md:text-[20px] text-[16px] font-light text-[#A4A4A4]">
                Rellingen | Hamburg | Norderstedt
              </div>
            </div>
          </div>
          <div className="flex md:mt-16 mt-10">
            <CustomLink type={"instagram"}></CustomLink>
            <CustomLink type={"facebook"}></CustomLink>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:w-2/3 md:items-start items-center md:h-auto h-[500px] flex-wrap  md:mt-12 mt-24 md:gap-[10%] md:pl-[10%]">
          <div className="flex flex-col w-[120px] md:w-auto">
            <p className="linear-text-footer-section font-inter md:text-[18px] text-[16px]">
              Support
            </p>
            <Link
              to="/datenschutz"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] font-inter font-light mt-5"
            >
              Datenschutz
            </Link>
            <a
              href="#contact"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              Frage stellen
            </a>
            <a
              href="#contact"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              Kontakt
            </a>
          </div>
          <div className="flex flex-col w-[120px] md:w-auto mt-10 md:mt-0">
            <p className="linear-text-footer-section font-inter md:text-[18px] text-[16px]">
              Explore
            </p>
            <Link
              to="/"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] font-inter font-light mt-5"
            >
              Über uns
            </Link>
            <a
              href="#services"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              Unser Angebot
            </a>
            <a
              href="#services"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              Schnellmeldung
            </a>
            <a
              href="#services"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              Neue Fotos
            </a>
            <a
              href="#services"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              Bildergalerie
            </a>
            <Link
              to="/datenschutz"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] font-inter font-light mt-2"
            >
              Datenschutz
            </Link>
            <a
              href="#contact"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              Kontakt
            </a>
          </div>
          <div className="flex flex-col w-[120px] md:w-auto">
            <p className="linear-text-footer-section font-inter md:text-[18px] text-[16px]">
              Development
            </p>
            <a
              href="https://www.fiverr.com/s/BRGdypz"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-5 font-inter font-light"
            >
              Fiverr der Autorin
            </a>
            <a
              href="https://www.facebook.com/kacper.niedopytalski.146/?locale=pl_PL"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              Facebook der Autorin
            </a>
            <a
              href="https://www.linkedin.com/in/kacper-niedopytalski-0801122a2/"
              className="text-[#FFFFFF] duration-150 hover:text-[#dbdbdb] md:text-[18px] text-[16px] mt-2 font-inter font-light"
            >
              LinkedIn der Autorin
            </a>
          </div>
        </div>
      </div>
      <div className="linear-bg-border-footer h-[1px] w-full"></div>
      <div className="flex items-center flex-col md:items-start justify-center w-full h-[70px] ">
        <p className="md:pl-10 font-inter text-[17px] font-light text-[#53535355]">
          Author: @kamefiks_dev
        </p>
      </div>
    </footer>
  );
}

export default Footer;
