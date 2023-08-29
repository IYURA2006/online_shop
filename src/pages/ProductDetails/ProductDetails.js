import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faXmark,
  faArrowRight,
  faCartPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./ProductDetails.css";
import Link from "@mui/material/Link";
import { useBasket } from "../../contexts/BasketContext.js";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [promotions, setPromotions] = useState([]);
  const { basket, setBasket } = useBasket();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const newItem = {
      product,
      size: selectedSize,
    };

    setBasket([...basket, newItem]);
    setSelectedSize(null);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3030/db")
      .then((response) => {
        const productData = response.data.products.find(
          (p) => p.id === parseInt(productId)
        );
        setProduct(productData);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const isSizeAvailable = (size) => {
    return product.sizes && product.sizes.includes(size);
  };

  const handleSizeClick = (size) => {
    if (isSizeAvailable(size)) {
      setSelectedSize(size);
    }
  };

  const getDefaultSizes = () => {
    if (product.type === "shoes") {
      return ["4", "5", "6", "7", "8", "9", "10", "11"];
    } else if (product.type === "clothes") {
      return ["XS", "S", "M", "L", "XL"];
    } else {
      return [];
    }
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <div>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<FontAwesomeIcon icon={faArrowRight} />}
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/catalogue">
              Catalogue
            </Link>
            <Link underline="hover" color="inherit" href={product.section}>
              {product.section}
            </Link>
            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>
          <div className="promotions">
            {promotions.map((promotion, index) => (
              <div key={index} className="promotion">
                <h4>{promotion}</h4>
              </div>
            ))}
            <Link href={product.section} className="return-button">
              <FontAwesomeIcon icon={faXmark} />
            </Link>
          </div>
        </div>
        <h3>{product.id}</h3>
        <h2 className="product-name">
          {product.name} <FontAwesomeIcon icon={faHeart} />
        </h2>

        <div className="product-price">
          {product.discountPrice ? (
            <div>
              <span className="discounted-price">${product.discountPrice}</span>
              <span className="original-price">${product.price}</span>
            </div>
          ) : (
            <span className="price">${product.price}</span>
          )}
        </div>

        {product.sizes && product.sizes.length > 0 && (
          <div className="product-sizes">
            {getDefaultSizes().map((size, index) => (
              <label
                key={index}
                className={`size ${
                  isSizeAvailable(size) ? "available" : "unavailable"
                } ${size === selectedSize ? "selected" : ""}`}
                onClick={() => handleSizeClick(size)}
              >
                <input
                  type="radio"
                  name="size"
                  value={size}
                  disabled={!isSizeAvailable(size)}
                  checked={size === selectedSize}
                />
                {size}
              </label>
            ))}
          </div>
        )}
        <div className="horizontal-line"></div>
        <button
        className={`addtocart ${isAdded ? "added" : ""}`}
        onClick={handleAddToCart}
        disabled={!selectedSize}
      >
        <div className="pretext">
          <FontAwesomeIcon icon={faCartPlus} /> ADD TO CART
        </div>
        <div className={`pretext done ${isAdded ? "show" : ""}`}>
          <div className="posttext">
            <FontAwesomeIcon icon={faCheck} /> ADDED
          </div>
        </div>
      </button>
      </div>
    </div>
  );
};



export default ProductDetails;