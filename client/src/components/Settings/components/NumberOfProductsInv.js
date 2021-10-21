import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getProductsInv } from "../../../actions";

export default function NumberOfProducts(props) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productsInv);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  
  console.log(products)
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
