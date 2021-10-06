import styled from "styled-components";

export const AjustesIzquierda = styled.div`
  padding: 1.5rem;
  height: 100%;
  width: 25%;
  display: block;
  box-shadow: 0 0 11px 6px #ddd;
`;

export const TituloIzquierda = styled.h2`
  font-size: 1.5rem;
`;

export const OpcionesIzquierda = styled.div`
  width: 100%;
  height: 2.4rem;
  margin: 1.5rem 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: all ease 200ms;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 11px 6px #ddd;
    transform: scale(1.05);
  }
  p {
    margin-left: 1rem;
  }
`;

export const AjustesDerecha = styled(AjustesIzquierda)`
  width: 70%;
  padding: 2rem;
`;

export const Loading = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: bolder;
  }
`;
