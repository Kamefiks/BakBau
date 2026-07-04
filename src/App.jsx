import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import DataProcessPage from "./pages/DataProcessPage";
import "./index.css";
import "tailwindcss/tailwind.css";
import "leaflet/dist/leaflet.css";
import ImagesPage from "./pages/ImagesPage";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="images" element={<ImagesPage />} />
        <Route path="datenschutz" element={<DataProcessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
