import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function MenuPhone({ visibilityMenu }) {
  return (
    <div
      className={`nav-top  w-[100%] duration-150  z-[1800]  ${visibilityMenu} 2xl:hidden  items-start  nav-gradient `}
    >
      <div
        className={`top-[0px] duration-300 linear-bg-menu-phone fixed w-full ${visibilityMenu === "opacity-0 h-0 pointer-events-none" ? "h-[0%]" : "h-[100%]"} `}
      >
        <ul className="w-full duration-1000  sm:flex-col top-0  sm:flex justify-center md:justify-start pt-9 flex-row  font-sans h-full z-10 text-gray-200 text-[20px] pb-10">
          <li className="mt-5 border-[#4747472d] border-[1px] border-b-0 border-r-0 border-l-0 p-4 pl-10   items-center flex gap-4">
            <FontAwesomeIcon icon={fas.faHouse} />
            <NavLink to="/" className="font-extralight">
              Home
            </NavLink>
          </li>
          <li className=" border-[#6d6d6d46] border-[1px] border-r-0 border-b-0 border-l-0 p-4 pl-10 flex items-center gap-4">
            <FontAwesomeIcon icon={fas.faImage} />
            <NavLink to="/images" className="font-thin">
              Images
            </NavLink>
          </li>
          <li className=" border-[#6d6d6d56]  border-[1px] border-r-0 border-l-0 p-4 pl-10 flex items-center gap-4">
            <FontAwesomeIcon icon={fas.faDatabase} />
            <NavLink to="/datenschutz" className="font-thin">
              Datenschutz
            </NavLink>
          </li>
          <div className="linear-bg-border-footer h-[1px] absolute bottom-0 w-full"></div>
        </ul>
      </div>
    </div>
  );
}

export default MenuPhone;
