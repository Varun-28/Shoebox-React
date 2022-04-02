import { React, useState } from "react";
import { FilterDrawer } from "./FilterDrawer";
import { FilterProducts } from "./FilterProducts";
import "./product.css";

function Product() {
  const [drawerVisibility, setDrawerVisibility] = useState(true);

  return (
    <div className="product-content">
      <FilterDrawer drawerVisibility={drawerVisibility} />
      <FilterProducts
        drawerVisibility={drawerVisibility}
        setDrawerVisibility={setDrawerVisibility}
      />
    </div>
  );
}

export { Product };
