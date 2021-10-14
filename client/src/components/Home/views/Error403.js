import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Container, ErrorMessage } from "../../../css/LandingStyles";
import { Overlay } from "../../../css/ModalStyles";
import { Button, StyledLink } from "../../../css/index";

export default function Error403() {
  return (
    <Container>
      <Overlay display="flex" padding="0">
        <ErrorMessage>
          <FontAwesomeIcon icon={faExclamationTriangle} size="6x" />
          <h3>¡Acceso denegado!</h3>
          <p>No tienes las credenciales necesarias para ingresar.</p>
          <p>Por favor, inicia sesión o registrate para usar la aplicación.</p>
          <div>
            <StyledLink to="/login">
              <Button
                width="9rem"
                padding="0.8rem"
                buttonColor="rgba(0, 41, 107, 1)"
                hoverBgColor="#FFF"
                hoverColor="#000"
              >
                Ingresar
              </Button>
            </StyledLink>
            <StyledLink to="/register">
              <Button
                width="9rem"
                padding="0.8rem"
                buttonColor="rgba(0, 41, 107, 1)"
                hoverBgColor="#FFF"
                hoverColor="#000"
              >
                Registrarme
              </Button>
            </StyledLink>
          </div>
        </ErrorMessage>
      </Overlay>
    </Container>
  );
}
