import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterOrdersType, getOrders } from "../../../../../actions";
import { Select } from "../../../../../css/Select";

export default function FilterOrdersTypes() {
  // let ordersTotal = useSelector((state) => state.totalOrders);
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();

  function handleFilterType(e) {
    if (e.target.value === "Todas") 
    return dispatch(getOrders(token));
    dispatch(filterOrdersType(e.target.value, token));
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
          <option value="Salon">Salón</option>
          <option value="Delivery">Delivery</option>
          <option value="Take Away">Take Away</option>
          <option value="Todas">Todas las Ordenes</option>
        </Select>
      </div>
    </div>
  );
}
