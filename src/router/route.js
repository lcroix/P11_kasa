import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Logement from "../pages/logement";
import ErrorPage from "../pages/errorPage";
import Footer from "../components/footer/footer";
const route = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default route;
