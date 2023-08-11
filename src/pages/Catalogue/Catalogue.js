import React from 'react';
import "./Catalogue.css"


import jsonData from '../../data.json'; // Import the JSON data

const App = () => {
  const { categories, products, partners } = jsonData; // Destructure the data

  return (
    <div className="App">
      <h1>Online Shop</h1>
      <div className="categories">
        {categories.map((category) => (
          <div key={category.name} className="category">
                        <img src={(category.image)} alt={category.name} />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div className="partners">
        {partners.map((partner) => (
          <div key={partner.id} className="partner">
            <img src={partner.image} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
