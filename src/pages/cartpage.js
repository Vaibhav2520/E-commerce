import { Button,Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/cartpage.scss";



const Cartpage = () => {

  const [count,setCount] = useState(0);

  function incrementCount(){
    
    setCount(count+1);
  }

  function decrementCount(){
    if(count > 0)
    setCount(count-1);
  }


  return (
    <div className="cart-container"> 
        <div className="cart-left">
        <u>
        <h2>
          Cart Products 
        </h2>
        </u>
            <div className="left-section">
            <img src="path_to_your_image" alt="Product" />
          <div className="item-details">
            <h3>Product Name</h3>
            <p>Price: $10.00</p>
            <div className="button-container">
            <Button className="button" onClick={decrementCount}> - </Button>
            {count}
           <Button className="button" onClick={incrementCount}> + </Button>
            </div>
          </div>
        </div>
        </div>
        <div className="cart-right">
        <h2>
          Cart Summary
        </h2>
        </div>
    </div>
  );
};

export default Cartpage;
