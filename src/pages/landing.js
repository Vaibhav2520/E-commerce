import React from 'react';
import { Link } from 'react-router-dom';
import Nikelogo from '../images/Nikelogo.jpg';
import '../styles/landing.scss';
import Topbar from '../components/topbar';

const Landing = () => {
  return (
    <>
    <Topbar/>
    <div className="banner">
      <img src={Nikelogo} alt="Nikelogo" className="banner-logo"/>
      <div className="button-wrapper">
      <Link to="/shoes" >
      <button className="shop-button">Shop</button>
      </Link>
   
      </div>
    </div>
    </>
  )
}

export default Landing