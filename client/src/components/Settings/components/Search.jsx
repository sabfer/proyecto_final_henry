import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProducts, getProducts } from "../../../actions";

export default function Search() {
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

  function handleButton(e){
    dispatch(getProducts())
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
      <div>
        <button type="button" onClick={(e) => {handleButton(e)}}>
          Traer todos los productos
        </button>
      </div>
    </div>
  );
}
