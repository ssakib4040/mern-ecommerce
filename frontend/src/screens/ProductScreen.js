import React from "react";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://via.placeholder.com/480x360" alt="" />
        </div>

        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p className="">Price: $499.99</p>
          <p className="">
            Description: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ipsam illum tempore dignissimos doloremque unde earum,
            mollitia, sed eos reprehenderit accusantium vero eligendi eaque id
            tempora nostrum rerum similique. Sint, quae.
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In stock</span>
          </p>
          <p>
            Qty:
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>
            <button>Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
