import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  padding: 45px 45px 0;
  display: flex;
  justify-content: space-between;
  height: 120px;
  background-color: rgb(61, 61, 61);
`;

const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 2rem;
  margin: 0;
`;

const Button = styled.button`
  width: ${(props) => props.width || "80px"};
  padding: ${(props) => props.padding || 0};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "center"};
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  background-color: ${(props) => props.buttonColor || "rgb(0, 160, 210)"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
`;

const OptionsBar = styled.div`
  padding: 45px 25px;
  display: flex;
  gap: 0 25px;
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(208, 208, 208);
  height: 80px;
`;

export default function Home() {
  return (
    <div>
      <Header>
        <Title>Bienvenido "nombre"</Title>
        <Button buttonColor="rgb(255, 0, 0)">Salir</Button>
      </Header>
      <OptionsBar>
        <Button width="180px" justify="space-between" padding="10px">
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear usuario
        </Button>
        <Button
          width="190px"
          justify="space-between"
          padding="10px"
          buttonColor="rgb(0, 141, 101)"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear comercio
        </Button>
        <Button
          width="190px"
          justify="space-between"
          padding="10px"
          buttonColor="rgb(204, 0, 0)"
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          Crear producto
        </Button>
      </OptionsBar>
    </div>
  );
}
