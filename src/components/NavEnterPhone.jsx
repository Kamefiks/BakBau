import { MdClose, MdMenu } from "react-icons/md";

function NavEnterPhone({ setVisibilityMenu, visibilityMenu }) {
  return (
    <div className="fixed linear-bg-shadow-navtop  top-0  z-[2000] 2xl:hidden items-center w-full h-[8%] flex flex-row justify-end pr-3">
      {visibilityMenu === "opacity-0 h-0 pointer-events-none" ? (
        <MdMenu
          size={32}
          color="white"
          onClick={() =>
            setVisibilityMenu("opacity-100 h-full pointer-events-auto")
          }
        />
      ) : (
        <MdClose
          size={32}
          color="white"
          onClick={() => setVisibilityMenu("opacity-0 h-0 pointer-events-none")}
        />
      )}
    </div>
  );
}

export default NavEnterPhone;
