import React from "react";
import "./Product.css";

import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img src="https://via.placeholder.com/480x360" className="" alt="" />

      <div className="product__info">
        <p className="info__name"></p>
        <p className="info__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque
          soluta dignissimos pariatur.
        </p>

        <p className="info__price">$499.99</p>

        <Link to={`/product/${11}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
