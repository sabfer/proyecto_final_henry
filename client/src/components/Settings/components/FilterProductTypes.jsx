import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProductsType } from "../../../actions";

export default function FilterProductTypes() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.productsCopy);
  products = products.map((e) => e.productType);
  products = new Set(products);
  let array = [...products];
  console.log(array);

  function handleFilterType(e) {
    dispatch(filterProductsType(e.target.value));
  }

  return (
    <div>
      <select onChange={(e) => handleFilterType(e)}>
        {array.map((e, i) => (
          <option key={i++} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}
