import React from "react";
import {
  Container,
  Header,
  Title,
  NavBar,
  StyledLink,
  FormContainer,
  FormBody,
  FormHeaderText,
  FormInputs,
  InputContainers,
  Inputs,
  Placeholder,
  Footer,
  Overlay,
  Button,
  SubmitContainer,
  Submit,
  GSubmit,
  FormTitle,
} from "./LandingStyles";

function Login() {
  return (
    <Container>
      <Header>
        <Title>
          <h2>Proyecto X</h2>
        </Title>
        <NavBar>
          <ul>
            <li>
              <StyledLink
                to="/"
                margin="12px"
                hover="underline solid rgb(255,255,255)"
              >
                Inicio
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

      <FormContainer>
        <FormBody>
          <FormHeaderText textshadow="text-shadow: 0px 5px 2px rgba(0, 0, 0, 0.5)">
            <h2>Bienvenido</h2>
            <Overlay />
          </FormHeaderText>
          <FormInputs>
            <FormTitle>Iniciar sesión</FormTitle>
            <InputContainers>
              <Inputs
                required
                id="email"
                type="email"
                placeholder=" "
                autoComplete="off"
              />
              <Placeholder htmlFor="email" className="placeholder">
                Correo electrónico
              </Placeholder>
            </InputContainers>
            <InputContainers>
              <Inputs
                required
                id="password"
                type="password"
                placeholder=" "
                autoComplete="off"
              />
              <Placeholder htmlFor="password" className="placeholder">
                Contraseña
              </Placeholder>
            </InputContainers>
            <SubmitContainer>
              <Submit type="submit">Ingresar</Submit>
              <Submit>
                <GSubmit>
                  <div className="Icon"></div>
                  <span className="ButtonText">Continuar con Google</span>
                </GSubmit>
              </Submit>
            </SubmitContainer>
          </FormInputs>
        </FormBody>
      </FormContainer>

      <Footer>
        <div className="footer_left">
          <a href="/">Productos</a>
          <a href="/">Sobre nosotros</a>
        </div>
      </Footer>
    </Container>
  );
}

export default Login;
