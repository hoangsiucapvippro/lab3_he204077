import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <section className="product-detail-page">

        <Link to="/products">Quay lại danh sách sản phẩm</Link>
      </section>
    );
  }

  return (
    <section className="product-detail-page">
      <p><Link to="/products">Quay lại danh sách</Link></p>
      <h1>{product.name}</h1>
      <table className="detail-table">
        <tbody>
          <tr>
            <th scope="row">ID</th>
            <td>{product.id}</td>
          </tr>
          <tr><td colSpan="2"><hr /></td></tr>
          <tr>
            <th scope="row">Danh mục</th>
            <td>{product.category}</td>
          </tr>
          <tr><td colSpan="2"><hr /></td></tr>
          <tr>
            <th scope="row">Giá</th>
            <td>{product.price.toLocaleString("vi-VN")} ₫</td>
          </tr>
          <tr><td colSpan="2"><hr /></td></tr>
          <tr>
            <th scope="row">Mô tả</th>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProductDetail;
