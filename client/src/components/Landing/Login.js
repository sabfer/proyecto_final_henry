import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
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
  FormTitle,
} from "../../css/LandingStyles";
import { loginUser } from "../../actions/index";
import { emailValidation } from "../../services/passwordValidation";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.userToken);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [signUpErrors, setSignUpErrors] = useState({
    emailSuccess: false,
    emailNotValid: "El email ingresado no existe.",
    passwordSuccess: false,
    passwordNotValid: "Las contraseña es errónea.",
    newTry: false,
  });

  //const [login, setLogin] = useState(false);

  function handleChange(e) {
    // console.log({[e.target.name]: e.target.value});
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    //console.log("token: ", token);

  }

  useEffect(() => {
    if (token) {
      history.push("/home");
      //console.log('ya estoy logueado')
    }
  }, [history, token]);

  async function handleSubmit(e) {
    e.preventDefault();
    let validateEmail = await emailValidation(input); // if true means that user exists
    console.log("email: " + input.email, " // email existe:" + validateEmail);
    // let validatePwd = await
    if (validateEmail && input.password) {
      console.log("debo despachar inicio sesion, con input: ", input);
      dispatch(loginUser(input));
      console.log("token: ", token);

      setInput({
        email: "",
        password: "",
      });
      setSignUpErrors({
        ...signUpErrors,
        emailSuccess: true,
        passwordSuccess: true,
      });
    }
    if (!validateEmail) {
      console.log("estoy en validateEmail: FALSE");
      setSignUpErrors({
        ...signUpErrors,
        emailSuccess: false,
        newTry: true,
      });
      setInput({
        ...input,
        password: "",
      });
    }
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
              {!signUpErrors.emailSuccess && signUpErrors.newTry && (
                <ErrorRegistro>{signUpErrors.emailNotValid}</ErrorRegistro>
              )}
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
