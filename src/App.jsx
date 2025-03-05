import React from "react";
import NavbarX from "./Comp/headerfooter/NavbarX";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeX from "./Comp/pages/HomeX";
import { Box } from "@mui/material";
import AboutX from "./Comp/pages/AboutX";
import Nopage from "./Comp/pages/Nopage";
import Country from "./Comp/pages/Country";
import Contect from "./Comp/pages/Contect";
import FooterX from "./Comp/headerfooter/FooterX";
import Viewpage from "./Comp/pages/Viewpage";
function App() {
  return (
    <>
      <NavbarX />
      <Box sx={{  mt:{xs:'3.5rem',sm:'4.1rem'}  }}>
        <Routes>
          <Route path="/" element={<HomeX />} />
          <Route path="about" element={<AboutX />} />
          <Route path="country" element={<Country />} />
          <Route path="contact" element={<Contect />} />
          <Route path="view/:id" element={<Viewpage />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Box>
      <FooterX/>
    </>
  );
}

export default App;

// {/* 009898 */}bliue
// {/* 42beb2 */}blue
// {/* eeba00 */}yello
// {/* f9c508 */} yello
