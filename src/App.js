import React, { useState } from "react";
import "./App.css";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"; 

// Make image URLs work
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(selectedItem) {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find(item => item.id === selectedItem.id);
      if (isItemInCart) {
        return prevCart.map(item =>
          item.id === selectedItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...selectedItem, quantity: 1 }];
      }
    });
  }

  return (
    <div className="App">
      <h1>My Bakery</h1>
      <div className="bakery-items">
        {bakeryData.map((item) => (
          <BakeryItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <p key={item.id}>{item.name} - ${item.price} x {item.quantity}</p>
          ))
        ) : (
          <p>The cart is empty.</p>
        )}
        <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;
