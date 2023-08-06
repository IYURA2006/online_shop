import React from "react";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/company_logo2.svg";
import Newsletter from "../Newsletter/Newsletter.js"
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcAmex,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
        <Newsletter className="newsletter"/>
    <div className="horizontal-line"></div>
    <div className="footer__top ">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        className="grid"
      >
        <div className="grid__component social">
          <img src={logo} alt="Example" className="social__logo" />
          <ul className="social__icons">
            <li>
              <FontAwesomeIcon
                icon={faFacebookF}
                className="social__icons--facebook"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className="social__icons--instagram"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                className="social__icons--twitter"
              />
            </li>
          </ul>
        </div>

        <ul className="grid__component">
          <li>Payment method</li>
          <li>
            <FontAwesomeIcon icon={faCcVisa} className="grid__component--payment"/>
            Visa
          </li>
          <li>
            <FontAwesomeIcon icon={faCcMastercard} className="grid__component--payment"/>
            MasterCard
          </li>
          <li>
            <FontAwesomeIcon icon={faCcAmex} className="grid__component--payment"/>
            AmericanExpress
          </li>

          <li>
            <FontAwesomeIcon icon={faCcPaypal} className="grid__component--payment"/>
            PayPal
          </li>
        </ul>

        <ul className="grid__component">
          <li>
            Customer service
          </li>
          <li>
            <a href="">Customer service</a>
          </li>

          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Term and Condition</a>
          </li>
        </ul>

        <ul className="grid__component">
          <li>About us</li>
          <li>Asimov.com/about</li>
          <li>Bekerja dengan Kami</li>
        </ul>

        <ul className="grid__component">
          <li>Customer sevice</li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="grid__component--contact"/>
            <a href="tel:08-8080-277">08-8080-277</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="grid__component--contact" />
            <a href="mailto:asimovv@gmail.com">asimovv@gmail.com</a>
          </li>
        </ul>
      </Grid>



      </div>
    
      <div className="footer__bottom">
        <span>
          &copy; {new Date().getFullYear()} Asimov &#183; All rights reserved &#183; Legal
          notices &#183; Cookies Privacy policy &#183; Unsubscribe from the Newsletter
        </span>
      </div>
    </div>
  );
};
export default Footer;
