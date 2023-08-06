import React from 'react';
import './Home.css';
import first from "../../assets/images/home_banner_1.png";
import second from "../../assets/images/home_banner_2.png";
import third from "../../assets/images/home_banner_3.png";
const App = () => {
  return (
    <div className="home">
      <div className="image-wrapper">
      <img src={first} alt="Example" />
      </div>
      <div className="image-wrapper">
      <img src={second} alt="Example"/>
      </div>
      <div className="image-wrapper">
      <img src={third} alt="Example" />
      </div>
    </div>
  );
};

export default App;
