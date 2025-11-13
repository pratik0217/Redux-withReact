import React, { useState } from "react";
import "./App.css";
// import { FaShoppingCart } from "react-icons/fa";


function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Product 1", price: 20, img: "https://via.placeholder.com/200x150" },
    { id: 2, name: "Product 2", price: 25, img: "https://via.placeholder.com/200x150" },
    { id: 3, name: "Product 3", price: 30, img: "https://via.placeholder.com/200x150" },
    { id: 4, name: "Product 4", price: 35, img: "https://via.placeholder.com/200x150" },
    { id: 5, name: "Product 5", price: 40, img: "https://via.placeholder.com/200x150" },
    { id: 6, name: "Product 6", price: 45, img: "https://via.placeholder.com/200x150" },
    { id: 7, name: "Product 7", price: 50, img: "https://via.placeholder.com/200x150" },
    { id: 8, name: "Product 8", price: 55, img: "https://via.placeholder.com/200x150" },
    { id: 9, name: "Product 9", price: 60, img: "https://via.placeholder.com/200x150" },
    { id: 10, name: "Product 10", price: 65, img: "https://via.placeholder.com/200x150" },
    { id: 11, name: "Product 11", price: 70, img: "https://via.placeholder.com/200x150" },
    { id: 12, name: "Product 12", price: 45, img: "https://via.placeholder.com/200x150" },
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Shop<span>Zone</span></div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="cart">
          {/* <FaShoppingCart size={24} /> */}
          <span className="cart-count">{cartCount}</span>
        </div>
      </nav>

      {/* Products */}
      <div className="product-container">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;