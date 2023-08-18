import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3030/db')
      .then(response => {
        const productData = response.data.products.find(p => p.id === parseInt(productId));
        setProduct(productData);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, []);


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <h2>{product.id}</h2>
      <img src={product.image} />

    </div>
  );
};

export default ProductDetails;
