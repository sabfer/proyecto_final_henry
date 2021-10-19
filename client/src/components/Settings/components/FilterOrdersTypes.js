import React from "react";
import { Select } from "../../../css/Select";

export default function FilterOrdersTypes() {
  return (
    <div className="category_filter">
      <div className="actual_filter">
        <p>Filtrar Órdenes:</p>
        <Select width="50%" height="2.4rem">
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
