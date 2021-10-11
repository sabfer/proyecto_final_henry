import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function NumberOfProducts() {
  const products = useSelector((state) => state.products);
  return products && products.length >= 1 ? (
    <Products>
      <span>{products.length}</span> productos cargados exitosamente
    </Products>
  ) : (
    <Products>Ningún producto encontrado</Products>
  );
}

const Products = styled.div`
  font-size: 1.2rem;
  span {
    font-weight: 700;
  }
`;
