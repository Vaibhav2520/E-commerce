import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../styles/productlist.scss";
import { Button, Typography } from "@mui/material";
import Nikeairforce1 from "../images/Nike Air force 1 .png";
import Nikeairmax from "../images/Nike Air max.png";
import Nikeairjordanlow from "../images/Nike Air jordan low.jpeg";
import Nikeairjordanmid from "../images/Nike Air Jordan Mid .png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Productlist = () => {
  const product = [
    {
      img: (
        <img src={Nikeairforce1} alt="Nikeairforce1" className="image-container" />
      ),
      productname: "Nike Air force ",
      price: "$100",
      icon: <FavoriteBorderIcon />,
      button: <Button variant="outlined" className="add-cart">Add to cart</Button>,
    },
    {
      img: (
        <img src={Nikeairmax} alt="Nikeairforce1" className="image-container" />
      ),
      productname: "Nike Air max",
      price: "$150",
      icon: <FavoriteBorderIcon />,
      button: <Button variant="outlined" className="add-cart">Add to cart</Button>,
    },
    {
      img: (
        <img
          src={Nikeairjordanlow}
          alt="Nikeairforce1"
          className="image-container"
        />
      ),
      productname: "Nike Air Jordan low",
      price: "$190",
      icon: <FavoriteBorderIcon />,
      button: <Button variant="outlined" className="add-cart">Add to cart</Button>,
    },
    {
      img: (
        <img
          src={Nikeairjordanmid}
          alt="Nikeairforce1"
          className="image-container"
        />
      ),
      productname: "Nike Air Jordan mid",
      price: "$250",
      icon: <FavoriteBorderIcon />,
      button: <Button variant="outlined" className="add-cart">Add to cart</Button>,
    },
  ];
  return (
    <div>
      <Grid container className="main-container">
        <Grid className="filter-section" item md={3}>
          <Typography variant="h5">Men's Shoes(4)</Typography>
          <Divider className="divider-container" variant="middle"></Divider>
          <Typography className="Gender-heading">Gender(1)</Typography>
          <div className="gender-section">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="MEN"
              />
              <FormControlLabel control={<Checkbox />} label="WOMEN" />
              <FormControlLabel control={<Checkbox />} label="KIDS" />
            </FormGroup>
          </div>
          <Divider className="divider-container" variant="middle"></Divider>
          <Typography className="price-heading"> Shop by Price </Typography>
          <div className="price-section">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Under $20"
              />
              <FormControlLabel control={<Checkbox />} label="$20 - $100" />
              <FormControlLabel control={<Checkbox />} label="$100 - $130" />
              <FormControlLabel control={<Checkbox />} label="Over $130" />
            </FormGroup>
          </div>
          <Divider className="divider-container" variant="middle"></Divider>
          <Typography className="sale-heading"> Sale </Typography>
          <div className="sale-section">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="50% Sale" />
            </FormGroup>
          </div>
          <Divider className="divider-container" variant="middle"></Divider>
          <Typography className="category-heading">Category</Typography>
          <div className="category-section">
          <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Men's Shoes"
              />
              <FormControlLabel control={<Checkbox />} label="Women's Shoes" />
              <FormControlLabel control={<Checkbox />} label="Clothing" />
              <FormControlLabel control={<Checkbox />} label="Kid's Shoes" />
            </FormGroup>
          </div>
        </Grid>

        <Grid className="product-list" item md={9}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {product.map((_, index) => (
                <Grid item xs={2} sm={4} md={3} key={index} >
                  <Item className="item-container">
                    {_.img}
                    <div className="item-details">
                      <Typography style={{ color: "black" }}>
                        {_.price}
                      </Typography>
                      {_.icon}
                    </div>
                    <Typography style={{ color: "black" }}>
                      {_.productname}
                    </Typography>
                      {_.button}
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Productlist;
