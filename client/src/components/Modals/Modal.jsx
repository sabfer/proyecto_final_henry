import React, { useState } from "react";
import {
  Overlay,
  ModalContainer,
  HeaderModal,
  CloseButton,
} from "./ModalStyles";
import { postProduct, updateProduct, postCommerce } from "../../actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { conditionalForm } from "./Forms";

export default function Modal({
  state,
  setStateModal,
  title,
  label1,
  label2,
  label3,
  label4,
  modalContainerBox,
  id,
  productName,
  productPrice,
  productType,
  idElement,
}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: productName,
    user: undefined,
    pass: undefined,
    location: undefined,
    description: undefined,
    price: productPrice,
    productType: productType,
    table: undefined,
    products: undefined,
    orderD: undefined,
    orderTA: undefined,
  });

  let labels = { label1, label2, label3, label4 };
  let productValues = { productName, productPrice, productType };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    // e.preventDefault();
    if (id === 1) {
      dispatch(input);
    }
    if (id === 2) {
      dispatch(postCommerce(input));
    }
    if (id === 3) {
      dispatch(postProduct(input));
    }
    if (id === 7) {
      const payload = {};
      for (let key in input) {
        if (input[key] !== undefined) {
          payload[key] = input[key];
        }
      }
      dispatch(updateProduct(payload, idElement));
      setStateModal(!state);
    }
  }

  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer modalContainerBox={modalContainerBox}>
            <HeaderModal>
              <h2>{title}</h2>
            </HeaderModal>
            <CloseButton onClick={() => setStateModal(!state)}>
              <FontAwesomeIcon icon={faWindowClose} />
            </CloseButton>
            {conditionalForm(id, input, handleChange, labels, productValues)}
            <button onClick={(e) => handleSubmit(e)}>Aceptar</button>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}
