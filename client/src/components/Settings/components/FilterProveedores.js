import React from "react";
import { useDispatch } from "react-redux";
import { filterProveedores } from "../../../actions";
import { Select } from "../../../css/Select";

export default function FilterProductTypes() {
  const dispatch = useDispatch();
  let proveedores = [
    { _id: "20", name: "Coca Cola" },
    { _id: "21", name: "Carniceria Bermejo" },
    { _id: "22", name: "Jumbo" },
    { _id: "23", name: "Super Vea" },
    { _id: "24", name: "Polleria 9 de Julio" },
    { _id: "25", name: "Libreria San Marcos" },
    { _id: "26", name: "Panaderia Milagros" },
    { _id: "27", name: "PepsiCo" },
  ];

  let array;
  if (Array.isArray(proveedores)) {
    proveedores = proveedores.map((e) => e.name);
    proveedores = new Set(proveedores);
    array = [...proveedores];
  }

  function handleFilterProv(e) {
    dispatch(filterProveedores(e.target.value));
  }

  return (
    <div className="category_filter">
      <div className="actual_filter">
        <p>Filtrar por Proveedores</p>
        <Select onChange={(e) => handleFilterProv(e)} width="50%" height="2.4rem">
          <option hidden defaultValue>
            Proveedores
          </option>
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
