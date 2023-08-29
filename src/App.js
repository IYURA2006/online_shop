import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";
import Catalogue from "./pages/Catalogue/Catalogue.js";
import ProductDetails from "./pages/ProductDetails/ProductDetails.js";
import Basket from "./pages/Basket/Basket.js";
import { BasketProvider } from "./contexts/BasketContext.js";
import ProfilePage from "./pages/Profile/ProfilePage.js";
import Authentication from "./components/Autorisation/Authentication.js";
import ProtectedRoute from "./components/ProtectedRoute.js"; // Import the ProtectedRoute component
import "./styles/reset.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const isAuthenticated = true; // For testing purposes

  return (
    <Router>
      <BasketProvider>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/basket" element={<Basket />} />
              <Route
                path="/registration"
                element={<Authentication setLoggedInUser={setLoggedInUser} />}
              />
              <Route
                path="/profile/*"
                element={
                  <ProtectedRoute
                    element={<ProfilePage userId={loggedInUser?.id} />}
                    isAuthenticated={isAuthenticated}
                    redirectTo="/registration" // Redirect to registration if not authenticated
                  />
                }
              />
            </Routes>
          </main>
          {window.location.pathname !== "/product/:productId" && <Footer />}
        </div>
      </BasketProvider>
    </Router>
  );
};

export default App;
