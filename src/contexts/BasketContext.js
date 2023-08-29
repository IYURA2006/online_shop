import React, { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const storedBasket = sessionStorage.getItem('basket');
    return storedBasket ? JSON.parse(storedBasket) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  return useContext(BasketContext);
};
