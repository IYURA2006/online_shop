import React from "react";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./Newsletter.css";


const Newsletter = () => {
  return (
    <div className="newsletter">
      <FormControl className="newsletter__form form">
        <span>Join us!</span>
        <Input id="my-input" placeholder="Enter your email" className="form__input"/>
        <button type="button" className="form__button">
          <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </FormControl>
    
        <div className="vertical-line"></div>
      <span className="newsletter__information">
        By subscribing to our website, you have followed the terms and
        conditions.
      </span>
    </div>
  );
};

export default Newsletter;
