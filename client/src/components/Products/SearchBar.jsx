import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProducts } from "../../actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameProducts(name));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Producto..."
        onChange={(e) => handleInputChange(e)}
      />
      <br />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        BUSCAR
      </button>
    </div>
  );
}
