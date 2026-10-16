import React, { useEffect, useRef } from "react";

function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);
  // Tự động focus vào ô input khi vừa load trang
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <label>
        <span>Tìm kiếm theo tên sản phẩm</span>
        <input
          type="search"
          value={value}
          ref={inputRef}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Tìm tên sản phẩm............."
        />
      </label>
    </div>
  );
}

export default SearchBar;
