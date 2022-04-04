import React from "react";
import "./CartItem.css";

import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="https://via.placeholder.com/480x360" alt="" />
      </div>

      <Link to={`/product/${111}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>

      <div className="cartitem__price">$499.99</div>

      <select name="" id="" className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
