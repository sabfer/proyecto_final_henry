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
    </div>
  );
}
