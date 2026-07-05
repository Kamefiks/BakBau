import { BiLeaf } from "react-icons/bi";
import { MdOutlineCarpenter } from "react-icons/md";

function Services() {
  return (
    <>
      <div
        id="services"
        className="md:w-[1020px]  w-full flex-col flex md:flex-row "
      >
        <div className="sm:hidden visible justify-end flex flex-col bg-transparent-green-mobile w-full h-[95px]">
          <div
            id="leaf-gardening"
            className="w-[45px]  flex justify-center items-center mb-5 ml-[5%] bg-[#2B4011] border-2 border-[#476225] h-[45px] rounded-[47px]"
          >
            <BiLeaf className="text-[#9CC35D] text-[27px] md:text-[40px]" />
          </div>
          <div className="flex items-center   gap-1 -mb-3">
            <div className="bg-[#344416] h-[1px] w-[4%]"></div>
            <p className="text-[#87D705] font-semibold font-inter">
              Garden maintenance
            </p>

            <div className="bg-[#344416]  h-[1px] w-[53%] flex  justify-self-end"></div>
          </div>
        </div>
        <div className="md:bg-linear-bg-green-transparent  bg-none flex-col md:flex-row  justify-between flex w-full h-full ">
          <div className="flex-col flex">
            <p className="text-[24px] md:pt-8 pt-10 pl-[5%] pr-[6%] pb-[5%] md:pb-[0%] md:pl-[0%] md:pr-[0%] linear-bg-headline-content font-semibold font-inter sm:text-[36px]">
              Ihr Garten, unsere Leidenschaft
            </p>
            <p className="md:text-[20px] text-[15px] pl-[6%] pb-[13%] md:pb-[0%] pr-[6%] md:pl-[0%] md:pr-[0%] md:mt-2 font-light md:mb-10 text-[#D1D1D1] opacity-[83%] font-inter md:w-[420px]">
              Von der Erstellung maßgeschneiderter Gartenentwürfe bis hin zur
              sorgfältigen Baumfällung und Heckenschnitt – wir sorgen dafür,
              dass jeder Winkel Ihres Gartens ein Meisterwerk wird. Ganz gleich,
              ob Sie ein farbenfrohes Blumenbeet anlegen, einen neuen Rasen
              anlegen oder Unkraut fernhalten möchten – unser Expertenteam
              arbeitet mit Sorgfalt und Präzision.
            </p>
          </div>
          <div className="flex md:items-start items-center   flex-col">
            <div className="stroke-bg-gardening  md:w-[478px] w-[84%] rounded-[9px] md:rounded-[29px]  justify-center pt-[2px] md:pt-[2px] md:-mr-2 flex md:-mt-2">
              <div className="md:w-[474px] w-[99%] linear-bg-gardening  rounded-[9px] md:rounded-[29px] ">
                <div className="flex pt-4 pl-6 md:pt-5 md:pl-8 flex-col border-b-[2px] pb-4 md:pb-6 border-[#405519]">
                  <div className="flex justify-between pr-5 md:pr-8 items-center">
                    <p className="linear-bg-text-gardening md:text-[32px] text-[20px] font-inter font-semibold">
                      Gartenpflege
                    </p>

                    <BiLeaf className="text-[#9CC35D] text-[27px] md:text-[40px]" />
                  </div>
                  <div className="flex justify-between md:pr-8 items-center">
                    <p className="text-[#435F2D] md:-mt-2 md:ml-[3px] md:text-[20px] text-[14px] font-inter">
                      Arbeitsbeispiele
                    </p>
                  </div>
                </div>

                <ul className="list-disc md:ml-14 ml-10 gap-1 flex flex-col pb-12 md:pb-16 font-inter text-[16px] md:text-[20px] text-[#BDBDBD] mt-5">
                  <li className="opacity-100">Gartengestaltung</li>
                  <li className="opacity-100">Baumfällung</li>
                  <li className="opacity-100">Pflanzarbeiten</li>
                  <li className="opacity-100">Rasenverlegung</li>
                  <li className="opacity-100">Heckenschnitt</li>
                  <li className="opacity-50">Unkraut jäten</li>
                  <li className="opacity-20">Rasenkanten anlegen</li>
                </ul>
              </div>
            </div>
            <div className="linear-bg-green-dark  h-[30px] md:h-[50px] rounded-[21px] -mt-7 w-[90%] md:w-[501px] z-50 md:-mr-10 md:translate-y-2 md:-translate-x-2"></div>
          </div>
        </div>
      </div>
      <div className="md:w-[1020px] mt-16 w-full flex-col flex md:flex-row md:mt-24">
        <div className="sm:hidden visible justify-end flex flex-col bg-transparent-gray-mobile w-full h-[95px]">
          <div
            id="leaf-gardening"
            className="w-[45px]  flex justify-center items-center mb-5 ml-[5%] bg-[#313131] border-2 border-[#434343] h-[45px] rounded-[47px]"
          >
            <MdOutlineCarpenter className="text-[#898989] text-[27px] md:text-[40px]" />
          </div>
          <div className="flex items-center   gap-1 -mb-3">
            <div className="bg-[#383838] h-[1px] w-[4%]"></div>
            <p className="text-[#FFFFFF] font-semibold font-inter">
              Idee & Umsetzung
            </p>

            <div className="bg-[#383838]  h-[1px] w-[55.5%] flex  justify-self-end"></div>
          </div>
        </div>
        <div className="md:bg-linear-bg-grey-transparent bg-none flex-col-reverse md:flex-row  justify-between flex w-full h-full ">
          <div className="flex md:items-start items-center  flex-col ">
            <div className="stroke-bg-constructing w-[84%] md:w-[478px] md:rounded-[29px] rounded-[9px]  pt-[2px] justify-center md:pt-[2px] md:-ml-2 flex md:-mt-2">
              <div className="md:w-[474px] w-[99%] linear-bg-constructing  md:rounded-[29px]  rounded-[9px] ">
                <div className="flex pt-4 pl-6 md:pt-5 pb-4 md:pl-8 flex-col border-b-[2px] md:pb-6 border-[#474747]">
                  <div className="flex justify-between pr-5 md:pr-8 items-center">
                    <p className="text-[#FFFFFF] md:text-[32px] text-[20px] font-inter font-semibold ">
                      Idee & Umsetzung
                    </p>

                    <MdOutlineCarpenter className="text-[#898989] text-[27px] md:text-[40px]" />
                  </div>
                  <div className="flex justify-between md:pr-8 items-center">
                    <p className="text-[#545454] md:-mt-2 md:ml-[3px] md:text-[20px] text-[14px] font-inter">
                      Arbeitsbeispiele
                    </p>
                  </div>
                </div>

                <ul className="list-disc md:ml-14 ml-10 gap-1 flex flex-col pb-12 md:pb-16 font-inter text-[16px] md:text-[20px] text-[#BDBDBD] mt-5">
                  <li className="opacity-100">Terrassengebäude</li>
                  <li className="opacity-100">Zaunbau</li>
                  <li className="opacity-100">Pflasterarbeiten</li>

                  <li className="opacity-50">Gartenteiche</li>
                  <li className="opacity-20">Bewässerung</li>
                </ul>
              </div>
            </div>
            <div className="linear-bg-gray-dark h-[30px] md:h-[50px] rounded-[21px] -mt-7 w-[90%] md:w-[501px] z-50  md:translate-y-2 md:-translate-x-4"></div>
          </div>
          <div className="flex-col flex">
            <p className="text-[24px] md:pt-8 pt-10 pl-[5%] pr-[6%] pb-[5%] md:pb-[0%] md:pl-[0%] md:pr-[0%]  linear-bg-headline-content font-semibold font-inter sm:text-[36px]">
              Verwirklichen Sie Ihre Ideen
            </p>
            <p className="md:text-[20px] text-[15px] pb-[13%] pl-[6%] pr-[6%] md:pl-[0%] md:pr-[0%] md:mt-2  font-light md:mb-10 text-[#D1D1D1] opacity-[83%] font-inter md:w-[420px]">
              mit unseren professionellen Bauleistungen. Wir sind spezialisiert
              auf den Bau schöner Terrassen, langlebiger Zäune und funktionaler
              Bewässerungssysteme. Lassen Sie uns Ihren Traum vom perfekten
              Außenbereich Wirklichkeit werden lassen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
