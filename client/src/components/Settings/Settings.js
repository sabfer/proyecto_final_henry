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
import {
  faChartLine,
  faCogs,
  faHome,
  faSitemap,
  faTasks,
  faUsers,
  faUtensils,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Products from "./views/Products";
import Generals from "./views/Generals";
import Contabilidad from "./views/Contabilidad/Contabilidad";
import InformesGenerales from "./views/Informes/InformesGenerales";
//import Users from "./views/Users";

import Categorias from "./views/Categorias";
import { changeSettings, getCategories } from "../../actions";
import Error403 from "../Home/views/Error403";

export default function Settings() {
  const settings = useSelector((state) => state.settings || "generales");
  const token = useSelector((state) => state.userToken);
  const userName = useSelector((state) => state.userName);
  const tables = useSelector((state) => state.mesas);
  const waiters = useSelector((state) => state.waiters);
  const expSession = useSelector((state) => state.expSession);
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
        return <Products />;
      case "mesas":
        // return <Mesas />;
        return;
      case "mozos":
        // return <Mozos />;
        return;
      case "categorias":
        return <Categorias />;
      case "generales":
        return <Generals />;
      case "contabilidad":
        return <Contabilidad />;
      case "informesGrles":
        return <InformesGenerales />;

      default:
        return <Generals />;
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
          <Button width="10rem" height="2.5rem" padding="1.3rem">
            <FontAwesomeIcon icon={faHome} size="lg" />
            Regresar a Home
          </Button>
        </StyledLink>
      </Header>
      <Body display="flex" padding="4rem 4rem" justifycontent="space-between">
        <AjustesIzquierda>
          <TituloIzquierda>Opciones</TituloIzquierda>
          <OpcionesIzquierda onClick={(e) => handleOptions(e, "generales")}>
            <FontAwesomeIcon icon={faCogs} size="lg" />
            <p>Generales</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "products")}>
            <FontAwesomeIcon icon={faUtensils} size="lg" />
            <p>Productos</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "contabilidad")}>
            <FontAwesomeIcon icon={faChartLine} size="lg" />
            <p>Informes Contables</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "categorias")}>
            <FontAwesomeIcon icon={faTasks} size="lg" />
            <p>Categorías</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "mesas")}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Mesas</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "mozos")}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Mozos</p>
          </OpcionesIzquierda>

          <OpcionesIzquierda onClick={(e) => handleOptions(e, "informesGrles")}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Informes Generales</p>
          </OpcionesIzquierda>
        </AjustesIzquierda>
        <AjustesDerecha>{settings && renderSwitch(settings.show)}</AjustesDerecha>
      </Body>
    </div>
  );
}
