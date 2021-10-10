import React from "react";
import { Overlay, ModalContainer, HeaderModal, CloseButton } from "./ModalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export default function UptadeTable({ state, setStateModal, tableNumber }) {
  /* const MySwal = withReactContent(Swal);
  const dispatch = useDispatch(); */

  /* function handleChange(e) {
  } */

  // console.log(state, setStateModal, tableNumber);

  function handleClose(e) {
    setStateModal(!state);
  }
  return (
    <div>
      {state && (
        <Overlay>
          <ModalContainer>
            <HeaderModal>
              <h2>Hola</h2>
            </HeaderModal>
            <CloseButton onClick={(e) => handleClose(e)}>
              <FontAwesomeIcon icon={faWindowClose} />
            </CloseButton>
            <button type="submit">Aceptar</button>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
}