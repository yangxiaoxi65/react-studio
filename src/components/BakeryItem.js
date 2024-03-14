import React from 'react';

function BakeryItem({ item, addToCart }) {
  return (
    <div className="bakery-item">
      <img src={item.image} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default BakeryItem;


