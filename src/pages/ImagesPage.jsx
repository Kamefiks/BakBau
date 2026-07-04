import { useState } from "react";
import NavBar from "../components/NavBar";

import MenuPhone from "../components/MenuPhone";
import NavEnterPhone from "../components/NavEnterPhone";
import PageImages from "../components/PageImages";

function ImagesPage() {
  const [visibilityMenu, setVisibilityMenu] = useState(
    "opacity-0 h-0 pointer-events-none"
  );

  return (
    <div className="overflow-x-hidden bg-black md:overflow-x-visible">
      <div className="flex 2xl:flex-row flex-col w-full h-full bg-color">
        <NavEnterPhone
          visibilityMenu={visibilityMenu}
          setVisibilityMenu={setVisibilityMenu}
        />
        <MenuPhone visibilityMenu={visibilityMenu} />
        <NavBar />
        <PageImages />
      </div>
    </div>
  );
}

export default ImagesPage;
