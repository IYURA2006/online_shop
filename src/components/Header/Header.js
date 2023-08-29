import React from "react";

//importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

import "./header.css";

import logo from "../../assets/images/company_logo.svg";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useBasket } from "../../contexts/BasketContext";

import { Link } from 'react-router-dom';

const Header = () => {
  const { basket } = useBasket();

  return (
    <div className="outer">
      <header className="header">
      <div className="header__titles">
        <span>Timely Delivery</span>
        <span>Responsive Service</span>
        <span>100% Original</span>
        <span>Trusted</span>
      </div>
      <nav className="nav">
          <BurgerMenu className="nav_burger"/>

        <img src={logo} alt="Example" className="nav__logo" />
        <ul className="nav__pages">
          <li>
            <a href="/search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="nav__icons"
              />
            </a>
          </li>
          <li>
            <Link to="/registration">
              <FontAwesomeIcon icon={faUser}  className="nav__icons"/>
            </Link>
          </li>
          <li>
            <Link to="/saved">
              <FontAwesomeIcon icon={faHeart}  className="nav__icons"/>
            </Link>
          </li>
          <li>
            <a href="/basket">
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className="nav__icons"
              />
            </a>
            <span className="cart-count">{basket.length}</span>
          </li>
        </ul>
      </nav>
    </header>
    </div>
    
  );
};

// Styles
export default Header;
