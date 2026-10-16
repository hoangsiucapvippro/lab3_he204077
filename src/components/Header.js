import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink className="site-brand" to="/" aria-label="ProductsStore home">
          ProductsStore
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
