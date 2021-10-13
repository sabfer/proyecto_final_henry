import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BodyTop } from "./HomeStyles";
import { OptionsBar, Body, Header, Title, Button, StyledLink } from "../../css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCog } from "@fortawesome/free-solid-svg-icons";
import DeliveryModule from "./components/Delivery";
import TakeOutModule from "./components/TakeOutModule";
import SalonModule from "./components/SalonModule";
import Modal from "../Modals/Modal";
import { changeSettings, getProducts, getCategories } from "../../actions/index";

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productTypes);
  const token = useSelector((state) => state.userToken);
  //Estado de las ventanas modales
  const [stateModal1, setStateModal1] = useState(false);
  const [stateModal2, setStateModal2] = useState(false);
  const [stateModal3, setStateModal3] = useState(false);

  useEffect(() => {
    dispatch(changeSettings({ show: "" }));
    dispatch(getCategories());
    setTimeout(() => {
      dispatch(getProducts(token));
      //dispatch(getCommerces(token));
    }, 1000);
  }, [dispatch, token]);

  if(!token){
    return (
      <>
        NO TENES ACCESO, FALTA TOKEN 
      </>
    )
  }

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
          buttonColor="rgb(2, 101, 210)"
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
        <BodyTop>
          <DeliveryModule />
          <TakeOutModule />
        </BodyTop>
        <SalonModule />
      </Body>

      {/* Modal 1 */}
      <Modal
        id={1}
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
        id={2}
        state={stateModal2}
        setStateModal={setStateModal2}
        title="Crear Comercio"
        label1="Nombre"
        label2="Ubicación del Comercio"
        modalContainerBox={false}
      />

      {/* Modal 3 */}
      <Modal
        id={3}
        state={stateModal3}
        setStateModal={setStateModal3}
        title="Crear un Producto"
        label1="Nombre"
        label2="Descripción"
        label3="Precio"
        label4="Tipo de Producto"
        modalContainerBox={true}
        categories={categories}
      />
    </div>
  );
}
