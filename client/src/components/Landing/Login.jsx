import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    // console.log({[e.target.name]: e.target.value});
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // let validatePass = passwordValidation(input);
    // let validateEmail = await emailValidation(input);
    console.log("email: " + input.email, " // password:" + input.password);
    // if (validatePass && validateEmail === false) {
    // console.log("voy a despachar registerUser(input), con input: ", input);
    // dispatch(registerUser(input));
    // console.log("pasado el dispatch de registerUser(input)");
    //   setInput({
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    //   setSignUpErrors({
    //     ...signUpErrors,
    //     emailSucess: true,
    //     passwordSucess: true,
    //   });
    // }
    // if (validateEmail) {
    //   if (validatePass) {
    //     setSignUpErrors({
    //       ...signUpErrors,
    //       emailSucess: true,
    //       passwordSucess: false,
    //     });
    //   }
    //   setInput({
    //     ...input,
    //     password: "",
    //     confirmPassword: "",
    //   });
    // }
    // if (!validatePass) {
    //   console.log("valPwd false");
    //   if (!validateEmail) {
    //     console.log("valEmail false");
    //     setSignUpErrors({
    //       ...signUpErrors,
    //       emailSucess: false,
    //       passwordSucess: true,
    //     });
    //   }
    //   setInput({
    //     ...input,
    //     password: "",
    //     confirmPassword: "",
    //   });
    // }
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
          <FormInputs onSubmit={(e) => handleSubmit(e)}>
            <FormTitle>Iniciar sesión</FormTitle>
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
                value={input.password}
                placeholder=" "
                name="password"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
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
