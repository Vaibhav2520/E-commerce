import React from 'react';
import Nikelogo from '../images/Nikelogo.jpg';
import '../styles/landing.scss';

const Landing = () => {
  return (
    <div className="banner">
      <img src={Nikelogo} alt="Nikelogo" className="banner-logo"/>
      <div className="button-wrapper">
      <button className="shop-button">Shop</button>
      </div>
    </div>
  )
}

export default Landing