import React from "react";

function CategoryFilter({ categories, selectCategory, onCategoryChange }) {
  return (
    <div>
      <label>
        <span>Tìm theo thể loại</span>
        <select
          value={selectCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "All" : category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default CategoryFilter;
