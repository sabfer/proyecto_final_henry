import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "../../../../../css/Select"
// import { getOrders } from "../../../../../actions";

export default function FilterOrdersTypes() {
  const dispatch = useDispatch()

  function handleFilterType(e) {
    // dispatch(filterOrdersType(e.target.value));
  }

  return (
    <div className="category_filter">
      <div className="actual_filter">
        <p>Filtrar Órdenes:</p>
        <Select
          onChange={(e) => handleFilterType(e)}
          width="50%"
          height="2.4rem"
        >
          <option hidden defaultValue>
            Seleccione el tipo de orden...
          </option>
          <option>Salón</option>
          <option>Delivery</option>
          <option>Take Away</option>
        </Select>
      </div>
    </div>
  );
}
