import React, { useState, useEffect } from "react";
import { useBasket } from "../../contexts/BasketContext";
import "./Basket.css";

const Basket = () => {
  const { basket, setBasket } = useBasket();
  const [quantities, setQuantities] = useState([]);
  
  useEffect(() => {
    const storedQuantities = JSON.parse(localStorage.getItem("basketQuantities")) || [];
    setQuantities(storedQuantities);
  }, []);

  useEffect(() => {
    localStorage.setItem("basketQuantities", JSON.stringify(quantities));
  }, [quantities]);

  const handleQuantityChange = (productId, newSize, newQuantity) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      const index = updatedQuantities.findIndex((q) => q.id === productId && q.size === newSize);

      if (index !== -1) {
        updatedQuantities[index] = { id: productId, size: newSize, quantity: newQuantity };
      } else {
        updatedQuantities.push({ id: productId, size: newSize, quantity: newQuantity });
      }

      return updatedQuantities;
    });
  };

  const handleRemoveItem = (productId, size) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.product.id !== productId || item.size !== size));
    setQuantities((prevQuantities) => prevQuantities.filter((q) => !(q.id === productId && q.size === size)));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basket.forEach((item) => {
      const quantityInfo = quantities.find((q) => q.id === item.product.id && q.size === item.size);
      const quantity = quantityInfo?.quantity || 1;
      totalPrice += item.product.discountPrice
        ? item.product.discountPrice * quantity
        : item.product.price * quantity;
    });
    return totalPrice;
  };

  return (
    <div className="basket-container">
      <h1>Your Basket</h1>
      <ul>
        {basket.map((item, index) => {
          const quantityInfo = quantities.find((q) => q.id === item.product.id && q.size === item.size);
          const quantity = quantityInfo?.quantity || 1;
          const totalPrice = item.product.discountPrice
            ? item.product.discountPrice * quantity
            : item.product.price * quantity;

          return (
            <li key={index} className="basket-item">
              <div className="product-info">
                <img src={item.product.image} alt={item.product.name} />
                <div>
                  <p>Product: {item.product.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Price: ${item.product.price}</p>
                </div>
              </div>
              <div className="quantity-control">
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.size, Math.max(quantity - 1, 1))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.size, quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="item-total">${totalPrice.toFixed(2)}</div>
              <button className="remove-button" onClick={() => handleRemoveItem(item.product.id, item.size)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <div className="total-price">
        <strong>Total: ${calculateTotalPrice().toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Basket;
