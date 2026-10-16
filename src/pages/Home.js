import React from "react";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="home-page">
      <div className="home-content">
        <h1>Welcome to ProductStore</h1>
        <p>Manage and explore products for your needs</p>
        <button className="primary-button" onClick={() => navigate("/products")}>View Products</button>
      </div>
    </section>
  );
}

export default Home;
