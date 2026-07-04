import { NavLink } from "react-router-dom";
import SplineModel from "../components/SplineModel";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdImage, MdStorage } from "react-icons/md";
function NavBar() {
  return (
    <div className="nav-top 2xl:w-[305px] hidden 2xl:flex   items-start  nav-gradient ">
      <div className="sm:sticky top-[0px] h-screen">
        <div className="flex  justify-center w-full">
          <div className="pointer-events-none pl-0 hidden md:flex  pb-5 pt-8 md:pb-4  justify-center">
            <SplineModel />
          </div>
        </div>

        <ul className="w-full  sm:flex-col top-0  sm:flex justify-center md:justify-start pt-9 md:pt-7 md:border-t-2 border-t-0 border-dashed border-style flex-row gap-5 font-sans h-full z-10 text-gray-200 text-lg pb-10">
          <li className="md:pt-5 pt-0 pl-10   items-center flex gap-4">
            <FontAwesomeIcon icon={fas.faHouse} />
            <NavLink to="/" className="font-extralight">
              Home
            </NavLink>
          </li>
          <li className="pl-10 flex items-center gap-4">
            <MdImage size={22} />
            <NavLink to="/images" className="font-thin">
              Images
            </NavLink>
          </li>
          <li className="pl-10 flex items-center gap-4">
            <MdStorage size={22} />
            <NavLink to="/datenschutz" className="font-thin">
              Datenschutz
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
