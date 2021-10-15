import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProductsType } from "../../../actions";
import { Select } from "../../../css/Select";

export default function FilterProductTypes() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.productTypes);
  let array;
  if (Array.isArray(products)) {
    products = products.map((e) => e.name);
    products = new Set(products);
    array = [...products];
  }

  function handleFilterType(e) {
    dispatch(filterProductsType(e.target.value));
  }

  return (
    <div className="category_filter">
      <div className="actual_filter">
        <p>Filtrar por categoría</p>
        <Select onChange={(e) => handleFilterType(e)} width="50%" height="2.4rem">
          <option hidden>Categorías</option>
          {/* <option value="-1">Categorías</option> */}
          {array &&
            array.map((e, i) => (
              <option key={i++} value={e}>
                {e}
              </option>
            ))}
        </Select>
      </div>
    </div>
  );
}
