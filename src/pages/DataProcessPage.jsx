import { useState } from "react";

import NavBar from "../components/NavBar";
import NavEnterPhone from "../components/NavEnterPhone";
import MenuPhone from "../components/MenuPhone";
import PageDatenshutz from "../components/PageDatenshutz";

function DataProcessPage() {
  const [visibilityMenu, setVisibilityMenu] = useState(
    "opacity-0 h-0 pointer-events-none",
  );

  return (
    <div className="overflow-x-hidden bg-black sm:overflow-x-visible">
      <div className="flex 2xl:flex-row flex-col w-full h-full bg-color">
        <NavEnterPhone
          visibilityMenu={visibilityMenu}
          setVisibilityMenu={setVisibilityMenu}
        />
        <MenuPhone visibilityMenu={visibilityMenu} />
        <NavBar />
        <PageDatenshutz />
      </div>
    </div>
  );
}

export default DataProcessPage;
