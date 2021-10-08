import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Title, Button, StyledLink, Body } from "../../css";
import {
  AjustesIzquierda,
  OpcionesIzquierda,
  TituloIzquierda,
  AjustesDerecha,
} from "../../css/SettingStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import Products from "./views/Products";
import Generals from "./views/Generals";
import Comercios from "./views/Comercios";
import Users from "./views/Users";
import { changeSettings } from "../../actions";

export default function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  function handleProducts(e) {
    e.preventDefault();
    dispatch(changeSettings({ show: "products" }));
  }
  function handleCommerce(e) {
    e.preventDefault();
    dispatch(changeSettings({ show: "commerce" }));
  }
  function handleUsers(e) {
    e.preventDefault();
    dispatch(changeSettings({ show: "users" }));
  }
  function handleGenerals(e) {
    e.preventDefault();
    dispatch(changeSettings({ show: "" }));
  }

  function renderSwitch(param) {
    switch (param) {
      case "products":
        return <Products handle={handleProducts}></Products>;
      case "users":
        return <Users></Users>;
      case "commerce":
        return <Comercios></Comercios>;
      default:
        return <Generals></Generals>;
    }
  }

  return (
    <div>
      <Header>
        <Title>Ajustes</Title>
        <StyledLink to="/home">
          <Button width="11rem">Regresar a Home</Button>
        </StyledLink>
      </Header>
      <Body display="flex" padding="4rem 6rem" justifycontent="space-between">
        <AjustesIzquierda>
          <TituloIzquierda>Categorías</TituloIzquierda>
          <OpcionesIzquierda onClick={(e) => handleGenerals(e)}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Generales</p>
          </OpcionesIzquierda>
          <OpcionesIzquierda onClick={(e) => handleProducts(e)}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Productos</p>
          </OpcionesIzquierda>
          <OpcionesIzquierda onClick={(e) => handleUsers(e)}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Usuarios</p>
          </OpcionesIzquierda>
          <OpcionesIzquierda onClick={(e) => handleCommerce(e)}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Comercios</p>
          </OpcionesIzquierda>
        </AjustesIzquierda>
        <AjustesDerecha>{renderSwitch(settings.show)}</AjustesDerecha>
      </Body>
    </div>
  );
}
