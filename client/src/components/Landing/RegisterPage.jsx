import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/index";
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
  ErrorRegistro,
} from "./LandingStyles";

function Register() {
  const dispatch = useDispatch();
  const singUpError = useSelector((state) => state.singUpErrors);
  const [input, setInput] = useState({
    email: "",
    password: "",
    /* confirmPassword: "", */
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(registerUser(input));
    setInput({
      email: "",
      password: "",
    });
  }

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
                hoverUnderline="underline solid rgb(255,255,255)"
              >
                Inicio
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/login">
                <Button border="1px solid white" bgColor="transparent">
                  Ingresar
                </Button>
              </StyledLink>
            </li>
          </ul>
        </NavBar>
      </Header>

      <FormContainer>
        <FormBody>
          <FormHeaderText
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
              0px 5px 2px rgba(0, 0, 0, 0.5)"
            fontSize="2rem"
          >
            <h2>
              Registrate y conoce las <br /> bondades de una buena <br />{" "}
              gestión
            </h2>
            <Overlay />
          </FormHeaderText>
          <FormInputs onSubmit={(e) => handleSubmit(e)}>
            <h2>Registro</h2>
            {singUpError && <ErrorRegistro>{singUpError.msg}</ErrorRegistro>}
            <InputContainers>
              <Inputs
                required
                id="email"
                type="email"
                value={input.email}
                name="email"
                placeholder=" "
                autoComplete="off"
                onChange={(e) => handleChange(e)}
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
                value={input.password}
                name="password"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
              />
              <Placeholder htmlFor="password" className="placeholder">
                Contraseña
              </Placeholder>
            </InputContainers>
            {/* <InputContainers>
              <Inputs
                required
                id="confirmPassword"
                type="password"
                placeholder=" "
                value={input.confirmPassword}
                name="confirmPassword"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
              />
              <Placeholder htmlFor="confirmPassword" className="placeholder">
                Confirmar contraseña
              </Placeholder>
            </InputContainers> */}
            <SubmitContainer>
              <Submit type="submit">Registrarme</Submit>
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

export default Register;
