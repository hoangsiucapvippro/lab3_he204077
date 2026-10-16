import React from "react";
import { useSearchParams } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { products } from "../data/products";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("keyword") || "";
  const selectedCategory = searchParams.get("category") || "All";
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLocaleLowerCase()
      .includes(searchTerm.trim().toLocaleLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  function updateFilter(key, value) {
    const nextParams = new URLSearchParams(searchParams);
    if (value && value !== "All") {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    nextParams.delete("page");
    setSearchParams(nextParams);
  }

  return (
    <section className="product-list-page">
      <h1>Products</h1>
      <div className="product-filters">
        <SearchBar
          value={searchTerm}
          onChange={(value) => updateFilter("keyword", value)}
        />
        <CategoryFilter
          categories={categories}
          selectCategory={selectedCategory}
          onCategoryChange={(value) => updateFilter("category", value)}
        />
      </div>

      <Pagination products={filteredProducts} />
    </section>
  );
}

export default ProductList;
