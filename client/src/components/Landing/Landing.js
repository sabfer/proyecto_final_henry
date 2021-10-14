import React from "react";
import {
  Container,
  NavBar,
  MainContainer,
  Footer,
  Header,
  Button,
  Title,
  StyledLink,
} from "../../css/LandingStyles";

function Landing() {
  return (
    <Container>
      <Header>
        <Title>
          <h2>Proyecto X</h2>
        </Title>
        <NavBar>
          <ul>
            <li>
              <StyledLink to="/login">
                <Button border="1px solid white" bgColor="transparent">
                  Ingresar
                </Button>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/register">
                <Button border="2px solid rgba(0, 0, 0, 0.19)">Registro</Button>
              </StyledLink>
            </li>
          </ul>
        </NavBar>
      </Header>

      <MainContainer>
        <div className="ribbon"></div>
        <h1>
          Gestionar tu restaurante, <br /> nunca fue tan sencillo.
        </h1>
        <StyledLink
          to="/login"
          gridRow="4 / 5"
          gridcolumn="2 / span 3"
          width="45%"
          justifyself="center"
          alignSelf="center"
        >
          <Button
            width="100%"
            height="50px"
            fontsize="1.5rem"
            borderRadius="12px"
            upper="uppercase"
          >
            Ingresar
          </Button>
        </StyledLink>
      </MainContainer>

      <Footer>
        <div className="footer_left">
          <a href="/">Productos</a>
          <a href="/">Sobre nosotros</a>
        </div>
      </Footer>
    </Container>
  );
}

export default Landing;
