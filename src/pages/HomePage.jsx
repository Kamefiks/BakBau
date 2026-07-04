import { useRef, useState } from "react";
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import Page from "../components/PageHome";
import NavEnterPhone from "../components/NavEnterPhone";
import MenuPhone from "../components/MenuPhone";

function HomePage() {
  const [visibilityMenu, setVisibilityMenu] = useState(
    "opacity-0 h-0 pointer-events-none"
  );
  const scrollUpRef = useRef(null);
  return (
    <div className="overflow-x-hidden bg-black md:overflow-x-visible">
      <Background scrollUpRef={scrollUpRef} />

      <div className="flex 2xl:flex-row flex-col w-full h-full bg-color">
        <NavEnterPhone
          visibilityMenu={visibilityMenu}
          setVisibilityMenu={setVisibilityMenu}
        />
        <MenuPhone visibilityMenu={visibilityMenu} />
        <NavBar />
        <Page />
      </div>
    </div>
  );
}

export default HomePage;
