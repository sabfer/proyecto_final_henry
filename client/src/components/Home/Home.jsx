import React, { useState } from "react";
import { BodyTop, SelectContainer, DivSelect, Select } from "./HomeStyles";
import {
  OptionsBar,
  Body,
  Header,
  Title,
  Button,
  StyledLink,
} from "../StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCog } from "@fortawesome/free-solid-svg-icons";
import DeliveryModule from "./Delivery";
import TakeOutModule from "./TakeOutModule";
import SalonModule from "./SalonModule";
import Modal from "./Modal";
import { postProduct } from "../../actions";

export default function Home() {
  //Estado de las ventanas modales
  const [stateModal1, setStateModal1] = useState(false);
  const [stateModal2, setStateModal2] = useState(false);
  const [stateModal3, setStateModal3] = useState(false);

  //Estado para la ventana 4(MODIFICAR PEDIDO) cuando este habilitada
  // const [stateModal4, setStateModal4] = useState(false);

  return (
    <div>
      <Header>
        <Title>Bienvenido "nombre"</Title>
        <Button buttonColor="rgb(255, 0, 0)">Salir</Button>
      </Header>
      <OptionsBar>
        <Button
          onClick={() => setStateModal1(!stateModal1)}
          width="11.25rem"
          justify="space-between"
          padding="0.625rem"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear usuario
        </Button>
        <Button
          onClick={() => setStateModal2(!stateModal2)}
          width="11.9rem"
          justify="space-between"
          padding="0.625rem"
          buttonColor="rgb(0, 141, 101)"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear comercio
        </Button>
        <Button
          onClick={() => setStateModal3(!stateModal3)}
          width="11.9rem"
          justify="space-between"
          padding="0.625rem"
          buttonColor="rgb(204, 0, 0)"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear producto
        </Button>
        <StyledLink to="/settings">
          <Button
            width="8rem"
            justify="space-between"
            padding="0.625rem"
            buttonColor="rgb(128, 128, 128)"
            hoverColor="rgb(166, 166, 166)"
          >
            <FontAwesomeIcon icon={faCog} size="lg" />
            Ajustes
          </Button>
        </StyledLink>
      </OptionsBar>

      <Body>
        <SelectContainer>
          <DivSelect>
            <Select>
              <option hidden>Type of diet</option>
              <option value="All">Everything</option>
              <span className="Focus"></span>
            </Select>
          </DivSelect>
        </SelectContainer>
        <BodyTop>
          <DeliveryModule />
          <TakeOutModule />
        </BodyTop>
        <SalonModule />
      </Body>

      {/* Modal 1 */}
      <Modal
        state={stateModal1}
        setStateModal={setStateModal1}
        title="Crear Usuario Nuevo"
        label1="Nombre"
        label2="Usuario"
        label3="Contraseña"
        modalContainerBox={true}
      />

      {/* Modal 2 */}
      <Modal
        state={stateModal2}
        setStateModal={setStateModal2}
        title="Crear Comercio"
        label1="Nombre"
        label2="Ubicación del Comercio"
        modalContainerBox={false}
      />

      {/* Modal 3 */}
      <Modal
        state={stateModal3}
        setStateModal={setStateModal3}
        title="Crear un Producto"
        label1="Nombre"
        label2="Descripción"
        label3="Precio"
        modalContainerBox={true}
        modalDispatch={postProduct}
      />

      {/* props Modal 4 para cuando esté habilitada */}
      {/* Modal 4 */}
      {/* <Modal
        state={stateModal4}
        setStateModal={setStateModal4}
        title="Modificar Pedido"
        label1="Productos"
        modalContainerBox={false}
      /> */}
    </div>
  );
}
