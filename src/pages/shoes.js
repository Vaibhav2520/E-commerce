import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../styles/productlist.scss";
import { Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useLocation } from "react-router-dom";
import Topbar from "../components/topbar";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebase";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Productlist = () => {
  const fetchProducts = async () => {
    await getDocs(collection(db, "nike-product-list")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData);
      let productListArray = [];
      newData.forEach(data=>{
        productListArray.push({
          ...data,
          img: <img
          src={data.img}
          alt="Nikeairforce1"
          className="image-container"
        />,
        button: (
          <Button variant="outlined" className="add-cart">
            Add to cart
          </Button>
        ),
        })
      });
    
      const updatedproducts = productListArray.filter(
        (singleproduct) =>
          checkCategory(singleproduct.category) &&
          checkGender(singleproduct.gender) &&
          checkPrice(singleproduct.price)
      );
      setProducts(updatedproducts);
      
    });
  };
 

  const [products, setProducts] = useState(
  );

  const [filters, setFilters] = useState({
    gender: {
      MEN: false,
      WOMEN: false,
    },
    price: {
      under20: false,
      between20to100: false,
      over100: false,
    },
    category: {
      Shoes: false,
      Tshirt: false,
      Jackets: false,
      Athleisure: false,
    },
  });

  const checkCategory = (category) => {
    let checkFilterRequired = false;
    const checkedCategory = [];
    // debugger
    for (let x in filters.category) {
      if (filters.category[x]) {
        checkFilterRequired = true;
        checkedCategory.push(x);
      }
    }
    if (checkFilterRequired) {
      if (checkedCategory.includes(category)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  const checkGender = (gender) => {
    let checkFilterRequired = false;
    const checkedGender = [];
    for (let x in filters.gender) {
      if (filters.gender[x]) {
        checkFilterRequired = true;
        checkedGender.push(x);
      }
    }
    if (checkFilterRequired) {
      if (checkedGender.includes(gender)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  const checkPrice = (price) => {
    let checkFilterRequired = false;
    const checkedPrice = [];
    for (let x in filters.price) {
      if (filters.price[x]) {
        checkFilterRequired = true;
        checkedPrice.push(x);
        // console.log(x)
      }
    }
    if (checkFilterRequired) {
      let flag = false;
      checkedPrice.forEach((value) => {
        switch (value) {
          case "under20":
            if (price < 20) {
              flag = true;
            }
            break;
          case "between20to100":
            if (price > 20 && price <= 100) {
              flag = true;
            }
            break;
          case "over100":
            console.log(value);
            console.log(price);
            if (price > 100) {
              flag = true;
            }
            break;
          default:
            break;
        }
      });

      return flag;
    } else {
      return true;
    }
  };

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const autoGender = queryParam.get("gender");

  useEffect(() => {
    if (autoGender === "MEN") {
      setFilters({
        ...filters,
        gender: {
          WOMEN: false,
          MEN: true,
        },
      });
    } else if (autoGender === "WOMEN") {
      setFilters({
        ...filters,
        gender: {
          WOMEN: true,
          MEN: false,
        },
      });
    }
  }, [autoGender]);

  useEffect(() => {
    
 
    fetchProducts();
  }, [filters]);
  return (
    <>
      <Topbar />
      <div>
        <Grid container className="main-container" style={{ display: "block" }}>
          <Grid className="filter-section" item md={3}>
            <Typography className="Gender-heading">Gender(1)</Typography>
            <div className="gender-section">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.gender.MEN}
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.gender.MEN = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="MEN"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filters.gender.WOMEN}
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.gender.WOMEN = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="WOMEN"
                />
              </FormGroup>
            </div>
            <Divider className="divider-container" variant="middle"></Divider>
            <Typography className="price-heading"> Shop by Price </Typography>
            <div className="price-section">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.price.under20 = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="Under $20"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.price.between20to100 = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="$20 - $100"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.price.over100 = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="Over $100"
                />
              </FormGroup>
            </div>
            <Divider className="divider-container" variant="middle"></Divider>
            <Typography className="category-heading">Category</Typography>
            <div className="category-section">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.category.Shoes = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="Shoes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.category.Tshirt = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="T-shirts"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.category.Jackets = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="Jackets"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        let updatedfilters = JSON.parse(
                          JSON.stringify(filters)
                        );
                        updatedfilters.category.Athleisure = e.target.checked;
                        setFilters(updatedfilters);
                      }}
                    />
                  }
                  label="Athleisure"
                />
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
                {products?.map((_, index) => (
                  <Grid item xs={2} sm={4} md={3} key={index}>
                    <Item className="item-container">
                      {_.img}
                      <div className="item-details">
                        <Typography style={{ color: "black" }}>
                          ${_.price}
                        </Typography>
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
    </>
  );
};

export default Productlist;
