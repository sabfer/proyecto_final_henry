
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function NumberOfProductsInv(props) {
  const products = useSelector((state) => state.productsInv);

  return products && products.length ? (
    <Products>
      <span>{props.total}</span>
    {props.title}

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
