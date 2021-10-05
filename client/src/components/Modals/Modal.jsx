import React, { useState, useEffect } from "react";
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
  name,
  price,
  productType,
  idElement,
}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: name,
    price: price,
    productType: productType,
    user: undefined,
    pass: undefined,
    location: undefined,
    description: undefined,
    table: undefined,
    products: undefined,
    orderD: undefined,
    orderTA: undefined,
  });

  useEffect(() => {
    setInput({
      name: name,
      price: price,
      productType: productType,
    });
  }, [name, price, productType]);

  let labels = { label1, label2, label3, label4 };
  let productValues = { name: name, price: price, productType: productType };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    // e.preventDefault();
    if (id === 1) {
      setStateModal(!state);
      dispatch(input);
      setInput({
        name: "",
        user: "",
        pass: "",
      });
    }
    if (id === 2) {
      setStateModal(!state);
      dispatch(postCommerce(input));
      setInput({
        name: "",
        location: "",
      });
    }
    if (id === 3) {
      setStateModal(!state);
      dispatch(postProduct(input));
      setInput({
        name: "",
        price: "",
        productType: "",
      });
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

  function handleClose(e) {
    setStateModal(!state);
    setInput({
      ...input,
      name: "",
      price: "",
      productType: "",
    });
  }

  return (
    <div>
      {state && (
        <Overlay>
          <ModalContainer modalContainerBox={modalContainerBox}>
            <HeaderModal>
              <h2>{title}</h2>
            </HeaderModal>
            <CloseButton onClick={(e) => handleClose(e)}>
              <FontAwesomeIcon icon={faWindowClose} />
            </CloseButton>
            {conditionalForm(id, input, handleChange, labels, productValues)}
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Aceptar
            </button>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
}
