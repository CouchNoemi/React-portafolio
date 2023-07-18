import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutme from "./sections/Aboutme";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index exact element={<Aboutme />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
