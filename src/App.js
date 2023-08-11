import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";
import Catalogue from "./pages/Catalogue/Catalogue.js";
import Authentication from "./components/Login/Authentication.js";

import "./styles/reset.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/catalogue" element={<Catalogue/>} />
            <Route path="/registration" element={<Authentication/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
