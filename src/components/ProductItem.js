import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  const navigate = useNavigate();

  return (
    <tr className="product-row">
      <td>{String(product.id)}</td>
      <td>{product.name}</td>
      <td>
        <span className="product-category">{product.category}</span>
      </td>
      <td>{product.price.toLocaleString("vi-VN")}đ</td>
      <td>
        <button className="product-detail-button" onClick={() => navigate(`/products/${product.id}`)}>
          Chi tiết
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
