import React, { useState } from "react";
import { Header, Title, Button, StyledLink, Body } from "../StyledComponents/";
import {
  LateralBar,
  LateralBarOptions,
  LateralBarTitle,
  RightSideOptions,
} from "./SettingStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import Products from "./Products";
import Generals from "./Generals";
import Comercios from "./Comercios";
import Users from "./Users";


export default function Settings() {
  const [settings, setSettings] = useState({
    show: "",
  });

  function handleProducts(e) {
    e.preventDefault();
    setSettings({
      show: "products",
    });
  }
  function handleCommerce(e) {
    e.preventDefault();
    setSettings({
      show: "commerce",
    });
  }
  function handleUsers(e) {
    e.preventDefault();
    setSettings({
      show: "users",
    });
  }
  function handleGenerals(e) {
    e.preventDefault();
    setSettings({
      show: "",
    });
  }

  function renderSwitch(param) {
    switch (param) {
      case "products":
        return <Products></Products>;
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
      <Body display="flex" padding="4rem" justifycontent="space-between">
        <LateralBar>
          <LateralBarTitle>Categorías</LateralBarTitle>
          <LateralBarOptions onClick={(e) => handleGenerals(e)}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Generales</p>
          </LateralBarOptions>
          <LateralBarOptions onClick={(e) => handleProducts(e)}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Productos</p>
          </LateralBarOptions>
          <LateralBarOptions onClick={(e) => handleUsers(e)}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Usuarios</p>
          </LateralBarOptions>
          <LateralBarOptions onClick={(e) => handleCommerce(e)}>
            <FontAwesomeIcon icon={faWrench} size="lg" />
            <p>Comercios</p>
          </LateralBarOptions>
        </LateralBar>
        <RightSideOptions>{renderSwitch(settings.show)}</RightSideOptions>
      </Body>
    </div>
  );
}
