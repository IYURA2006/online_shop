import React, { useState, useEffect } from "react";
import axios from "axios";
import SortMenu from "../../components/Sort/Sort.js";
import { Typography, Breadcrumbs, Grid, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import "./Catalogue.css";
import { Link } from "react-router-dom";

const App = () => {
  const [data, setData] = useState({
    categories: [],
    products: [],
    partners: [],
  });
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const handleSortButtonClick = () => {
    setSortMenuOpen(!sortMenuOpen);
  };

  const closeSortMenu = () => {
    setSortMenuOpen(false);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3030/db")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { categories, products, partners } = data;

  return (
    <div className="catalogue">
      <div className="catalogue__bar bar">
        <Breadcrumbs aria-label="breadcrumb" className="bar__links">
          <Link to="/" underline="hover" color="inherit">
            Home
          </Link>
          <Typography color="text.primary">Shop</Typography>
        </Breadcrumbs>

        <div className="bar__search">
          <input
            label="Search"
            variant="outlined"
            placeholder="Search"
            className="bar__search__field"
          />
          <Button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </div>

        <div className="bar__filter">
          <Button onClick={handleSortButtonClick}>
            <FontAwesomeIcon icon={faFilter} style={{ color: "#11053b" }} />
            Sort
          </Button>
          <SortMenu
            open={sortMenuOpen}
            onClose={closeSortMenu}
            className="bar__filter"
          />
        </div>
      </div>

      <Box>
        <h2>Categories</h2>
        <Grid
          container
          columns={{ xs: 3, sm: 8, md: 18 }}
          gap={4}
          className="categories"
        >
          {categories.map((category) => (
            <Grid
              item
              xs={1}
              sm={2}
              md={3}
              key={category.name}
              className="categories__item"
            >
              <Link to={category.name}>
                <img src={category.image} alt={category.name} />
                <p>{category.name}</p>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <h2>Popular items</h2>
        <Grid container gap={4} className="products">
          {products.map((product) => (
            <Grid
              item
              xs={2}
              sm={3}
              md={1.4}
              key={product.name}
              className="products__item"
            >
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      <div>
        <h2>Partners</h2>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className="partners">
          {partners.map((partner) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={partner.id}
              className="partner"
            >
              <img src={partner.image} alt={partner.name} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default App;
