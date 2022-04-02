import { React } from "react";
import "./product.css";
import { Card } from "../../components/Card";
import { useProduct } from "../../utilities/product-context";

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
      <div className="product-cards">
        {filteredProducts.length === 0 ? (
          <p>Loading Products ...</p>
        ) : (
          filteredProducts.map(
            ({ _id, brand, title, prodImage, rating, price, inStock }) => (
              <Card
                key={_id}
                brand={brand}
                title={title}
                prodImage={prodImage}
                rating={rating}
                price={price}
                _id={_id}
                inStock={inStock}
              />
            )
          )
        )}
      </div>
    </section>
  );
}

export { FilterProducts };
