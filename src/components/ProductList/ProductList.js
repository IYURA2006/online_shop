
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>Sales: {product.sales}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
