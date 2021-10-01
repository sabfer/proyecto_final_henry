import React from "react";
import { Header, Title, Button, StyledLink, Body } from "../StyledComponents/";

export default function Settings() {
  return (
    <div>
      <Header>
        <Title>Ajustes</Title>
        <StyledLink to="/home">
          <Button width="11rem">Regresar a Home</Button>
        </StyledLink>
      </Header>
      <Body>
        <h1>Hola mundo</h1>
      </Body>
    </div>
  );
}
