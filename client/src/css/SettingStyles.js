import styled from "styled-components";

export const AjustesIzquierda = styled.div`
  padding: 1.5rem;
  height: 100%;
  width: 25%;
  display: block;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

export const TituloIzquierda = styled.h2`
  font-size: 1.5rem;
`;

export const OpcionesIzquierda = styled.div`
  width: 100%;
  height: 2.4rem;
  margin: 1.5rem 0;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  transition: all ease 200ms;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
    border-radius: 6px;
  }
  p {
    margin: 0 0 0 1rem;
  }
`;

export const AjustesDerecha = styled(AjustesIzquierda)`
  width: 70%;
  padding: 3rem;
`;

export const AjustesDerechaTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  .category_filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    .actual_filter {
      width: 100%;
      display: flex;
      align-items: center;
      p {
        margin: 0;
        font-weight: 700;
        margin-right: 1rem;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  margin-right: 1rem;
  input {
    width: 100%;
    height: 2.4rem;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 0.6rem;
    outline: none;
    &:hover {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
    &:focus {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
  }
  .input {
    position: relative;
    display: flex;
    width: 100%;
    .icon {
      position: absolute;
      top: 10px;
      right: 1rem;
      cursor: pointer;
    }
  }
`;

export const ExportExcel = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
