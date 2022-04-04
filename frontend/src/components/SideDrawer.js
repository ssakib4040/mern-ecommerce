import React from "react";
import "./SideDrawer.css";

import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    show && (
      <div className={sideDrawerClass.join(" ")}>
        <div className="sidedrawer__links" onClick={click}>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart <span className="sidedrawer__cart_badge">0</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </div>
      </div>
    )
  );
};

export default SideDrawer;
