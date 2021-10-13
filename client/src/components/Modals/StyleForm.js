import styled, { css } from "styled-components";

const Label = styled.label`
display:block;
font-weight:700;
padding:10 px
min-height:40px
cursos:pointer;


${(props) =>
  props.valido === "false" &&
  css`
    color: ${colores.error};
  `}

`;

const InputContainer = styled.div`
  margin: 1rem 0;
`;

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
};

const LeyendaError = styled.p`
  font-size: 13px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;
  text-align: center;
  margin-top: 3px;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

export { LeyendaError, Label, InputContainer };
