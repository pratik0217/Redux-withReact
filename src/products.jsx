import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./Redux/slice";
import { removeAddItem } from "./Redux/slice";
import { clearItem } from "./Redux/slice";
import {fetchProducts} from './Redux/ProductSlice'
import { useEffect } from "react";

function Products() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchProducts());
  },[])
  const selector = useSelector((state)=> state.products.items);
  console.log(selector.products);


  const products = [
    { id: 1, name: "Product 1", price: 20, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Product 2", price: 15, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Product 3", price: 25, img: "https://via.placeholder.com/200" },
    { id: 4, name: "Product 4", price: 18, img: "https://via.placeholder.com/200" }
  ];

  return (
    <section className="products">
      <button onClick={()=> dispatch(clearItem())}>Clear item</button>
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={()=> dispatch(addItem(1))}>Add</button>
            <button onClick={()=> dispatch(removeAddItem(-1))}>Remove</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
