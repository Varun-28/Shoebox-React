import { React } from "react";
import "./product.css";
import { Card } from "../../components/Card";
import { useProduct } from "../../context/productContext/product-context.js";

function FilterProducts({ drawerVisibility, setDrawerVisibility }) {
  const { filteredProducts } = useProduct();

  return (
    <section className="product-section">
      {/* filter btn */}
      <div className="filter-btn">
        <button
          className="btn btn-fab btn-round"
          id="btn-filter"
          onClick={() => setDrawerVisibility((val) => !val)}
        >
          {drawerVisibility ? (
            <i className="fa-solid fa-filter"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
      </div>

      {/* products */}
      <h3 className="px-8 py-4">Products({filteredProducts.length})</h3>

      <div className="product-cards">
        {filteredProducts.length === 0 ? (
          <p>Loading Products ...</p>
        ) : (
          filteredProducts.map((product) => <Card product={product} key={product._id} />)
        )}
      </div>
    </section>
  );
}

export { FilterProducts };
