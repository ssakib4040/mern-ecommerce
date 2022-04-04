import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* logo  */}
      <div className="navbar__logo">
        <h2>Mern Ecommerce</h2>
      </div>
      {/* links  */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="navbar__cart_badge">0</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      {/* menu */}

      <div className="navbar__hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
