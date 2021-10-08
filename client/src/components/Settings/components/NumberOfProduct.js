import React from "react";
import { useSelector } from "react-redux";

export default function NumberOfProducts() {
  const products = useSelector((state) => state.products);
  console.log("aguante boca")
  return products && products.length >= 1 ? (
    <div>{products.length} productos cargados exitosamente</div>
  ) : (
    <div>Ningún producto encontrado</div>
  );
}