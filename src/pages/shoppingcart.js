import React, { useState } from "react";
import "../styles/shoppingCart.scss";
import AirforceNike from "../images/Nike Air force 1 .png";
import { Button, Divider } from "@mui/material";
import Topbar from "../components/topbar";
const Shoppingcart = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 0) setCount(count - 1);
  }
  return (
    <>
      <Topbar />
      <div className="shopping-cart">
      <h2>
        ShoppingCart
      </h2>
      <Divider className="divider"></Divider>
        <table className="table-list">
          <tr>
            <th>PRODUCT DETAILs</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>TOTAL</th>
          </tr>
          &nbsp;
          <tr>
            <td>
              <div>
                <img src={AirforceNike} width="100" height="100" />
                <h5>Air Force 1</h5>
                <Button color="error">Remove</Button>
              </div>
            </td>
            <td>
              <div className="counter">
                <span className="down" onClick={decrementCount}>
                  -
                </span>
                <h6>{count}</h6>
                <span className="up" onClick={incrementCount}>
                  +
                </span>
              </div>
            </td>
            <td>100$</td>
            <td>100$</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src={AirforceNike} width="100" height="100" />
                <h5>Air Force 1</h5>
                <Button color="error">Remove</Button>
              </div>
            </td>
            <td>
              <div className="counter">
                <span className="down" onClick={decrementCount}>
                  -
                </span>
                <h6>{count}</h6>
                <span className="up" onClick={incrementCount}>
                  +
                </span>
              </div>
            </td>
            <td>100$</td>
            <td>100$</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Shoppingcart;
