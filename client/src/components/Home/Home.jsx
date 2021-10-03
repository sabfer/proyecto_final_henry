import React from "react";
import { Header, Title, Button, OptionsBar, Body, BodyTop } from "./HomeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import DeliveryModule from "./Delivery";
import TakeOutModule from "./TakeOutModule";
import SalonModule from "./SalonModule";

export default function Home() {
  return (
    <div>
      <Header>
        <Title>Bienvenido "nombre"</Title>
        <Button buttonColor="rgb(255, 0, 0)">Salir</Button>
      </Header>
      <OptionsBar>
        <Button
          width="11.25rem"
          justify="space-between"
          padding="0.625rem"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear usuario
        </Button>
        <Button
          width="11.9rem"
          justify="space-between"
          padding="0.625rem"
          buttonColor="rgb(0, 141, 101)"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear comercio
        </Button>
        <Button
          width="11.9rem"
          justify="space-between"
          padding="0.625rem"
          buttonColor="rgb(204, 0, 0)"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear producto
        </Button>
      </OptionsBar>

      <Body>
        <BodyTop>
          <DeliveryModule />
          <TakeOutModule />
        </BodyTop>
        <SalonModule />
      </Body> 
    </div>
  );
}
