import React from 'react'

const TotalItems = (cartItems) => {
    
    let itemCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );
    let total = cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
    return { itemCount, total };
  };

export default TotalItems;
