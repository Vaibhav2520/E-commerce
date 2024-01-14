import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/cartpage.scss";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';




const Cartpage = () => {

  const[quantity, setQuantity] = useState(0);

  const incrementHandler = () =>{
        setQuantity(quantity+1);
  };

  const decrementHandler = () =>{
    if (quantity>0) {
      setQuantity(quantity-1);
    }
};

  
  return (
    <div className="main-container">
       <Typography variant="h3">
        Cart
       </Typography>
      <div className="left-container">
      <div className="left-section">
        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        borderRadius:'2em'
        
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
            </Grid>
            <div className="quantity-handler">
            <Button onClick={incrementHandler} style={{color:"black"}}>
              +
            </Button>
            <Typography>
              {quantity}
            </Typography>
            <Button onClick={decrementHandler} style={{color:"black"}}>
              -
            </Button>
            </div>
            <Grid item>
              <Button style={{color:"black"}}>
                Remove
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
      </div>
      </div>
      <div className="right-container">
        <div className="right-section">
        <div className="expense-container">
        <div className="right-side">
        <Typography>
          $100
        </Typography>
        <Typography>
          18%
        </Typography>
        <Typography>
          $118
        </Typography>
        </div>
        <div className="left-side">
        <Typography>
          Subtotal
        </Typography>
        <Typography>
          Tax
        </Typography>
        <Typography>
          Total
        </Typography>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
