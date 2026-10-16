import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductItem from "./ProductItem";

function Pagination({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const pageSize = 3;

  const totalPage = Math.max(1, Math.ceil(products.length / pageSize));
  const currentPage = Math.min(page, totalPage);

  const startIndex = (currentPage - 1) * pageSize;

  const displayProducts = products.slice(startIndex, startIndex + pageSize);


  function updatePage(newPage) {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("page", String(Math.max(1, Math.min(newPage, totalPage))));
    setSearchParams(nextParams);
  }

  return (
    <div>
      <div className="pagination-summary">
        <p>Tổng: {products.length}</p>
        <p>Trang: {currentPage} / {totalPage}</p>
      </div>

      <div className="product-table-wrap">
      <table className="product-table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Danh mục</th>
            <th scope="col">Giá</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts.length > 0 ? (
            displayProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <tr>
              <td colSpan="5">Không tìm thấy sản phẩm</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>

      <nav className="pagination-controls" aria-label="Product pages">
        <button
          type="button"
          onClick={() => updatePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPage}
        </span>
        <button
          type="button"
          onClick={() => updatePage(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
