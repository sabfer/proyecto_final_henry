import React, { useEffect } from "react";
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
import Categorias from "./views/Categorias";
import { changeSettings, getCategories } from "../../actions";
import Error403 from "../Home/views/Error403";

export default function Settings() {
  const settings = useSelector((state) => state.settings);
  const token = useSelector((state) => state.userToken);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getCategories(token));
    }, 1000);
  }, [dispatch, token]);

  function handleOptions(e, opt) {
    e.preventDefault();
    dispatch(changeSettings({ show: opt }));
  }

  function renderSwitch(param) {
    switch (param) {
      case "products":
        return <Products></Products>;
      case "users":
        return <Users></Users>;
      case "commerce":
        return <Comercios></Comercios>;
      case "categorias":
        return <Categorias></Categorias>;
      case "generales":
        return <Generals></Generals>;
      default:
        return <Generals></Generals>;
    }
  }

  if (!token) {
    return <Error403 />;
  }

  return (
    <div>
      <Header>
        <Title>Ajustes</Title>
        <StyledLink to="/home">
          <Button width="11.5rem" height="2.5rem" padding="0.5rem">
            Regresar a Home
          </Button>
        </StyledLink>
      </Header>
      <Body display="flex" padding="4rem 4rem" justifycontent="space-between">
        <AjustesIzquierda>
          <TituloIzquierda>Opciones</TituloIzquierda>
          <OpcionesIzquierda onClick={(e) => handleOptions(e, "generales")}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Generales</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "products")}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Productos</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "categorias")}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Categorías</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "users")}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Usuarios</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "commerce")}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Comercios</p>
          </OpcionesIzquierda>
        </AjustesIzquierda>
        <AjustesDerecha>{settings && renderSwitch(settings.show)}</AjustesDerecha>
      </Body>
    </div>
  );
}
