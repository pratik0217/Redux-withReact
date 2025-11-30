import "./App.css";
import { useState } from "react";
import Header from "./header";
import Products from "./products";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div>
      <Header cartItems={cartItems} />
      <Products addToCart={addToCart} />
    </div>
  );
}

export default App;