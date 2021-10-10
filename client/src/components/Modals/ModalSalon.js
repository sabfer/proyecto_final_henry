import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import {
  Overlay,
  ModalContainer,
  HeaderModal,
  CloseButton,
} from "./ModalStyles";
import { Select } from "../../css/Select";
import FilterProductTypes from "../Settings/components/FilterProductTypes";

export default function ModalSalon({ state, setState, title }) {
  const products = useSelector((state) => state.products);
  const [input, setInput] = useState("");

  

  function handleClose(e) {
    setState(!state);
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  // function handleSubmit(e) {}

  return (
    <div>
      {products && (
        <Overlay>
          <ModalContainer>
            <HeaderModal>
              <h2>
                {title}
                {35}
              </h2>
            </HeaderModal>
            <CloseButton onClick={(e) => handleClose(e)}>
              <FontAwesomeIcon icon={faWindowClose} />
            </CloseButton>

            <FilterProductTypes />

            <Select>
              {products.map &&
                products.map((e) => {
                  return <option value="{e.name}">{e.name} </option>;
                })}
            </Select>



            <form>
              <div>
                <label>entrada1</label>
                <input
                  type="string"
                  name="entrada1"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>entrada2</label>
                <input
                  type="text"
                  name="entrada2"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label>entrada3</label>
                <input
                  type="text"
                  name="entrada3"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </form>
          




            <button type="submit">Aceptar</button>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
}
