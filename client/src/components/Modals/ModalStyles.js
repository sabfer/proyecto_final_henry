import styled from "styled-components";

export const Overlay = styled.div`
  transition: all 0.8s ease;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 40px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || 'center'} ;
  width: fit-content;
  padding: 3rem;
  background: #fff;
  position: relative;
  border-radius: 0.6rem;
  form {
    width: 100%;
    div {
      margin-bottom: 1.5rem;
      input {
        width: 100%;
        height: 2.4rem;
        border: 1px solid #000;
        border-radius: 0.6rem;
        &:focus {
          border-color: #86b7fe;
          outline: 0;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }
      }
      label {
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
    }
  }
`;

export const CategoriasPedidos = styled.div`
  width: 100%;
  .category_filter {
    width: 100%;
    .actual_filter {
      width: 100%;
      select {
        width: 75%;
        border: solid 1px black;  
        font-weight: bold;
        margin: 15px 0px;
      }
    } 
  } 
`;

export const HeaderModal = styled.div`
  display: flex;
  img{
    height: 75px;
  }
`;

export const HeaderModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 600px;
  margin-left: 20px;
  h3 {
    margin: 4px 0px;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2rem;
    color: #000000;
  }
  h4 {
    margin: 2px 0px;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const HeaderModalDetails = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  p {
    margin: 1px 0px;
    font-weight: bold;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.2s ease all;
  color: rgb(2, 101, 210);
  .fa-window-close {
    width: 30px;
    height: 30px;
  }
  &:hover {
    color: #ff0000;
  }
`;

export const FormModal = styled.form`
  display: flex;
`;

export const SelectModal = styled.div`
  display: flex;
  width: 75%;
`;

export const InputModal = styled.div`
  width: 12%;
  margin: 0px 0px 0px 10px;
`;

export const TablesModal = styled.div`
  display: flex;
  width: 100%;
`;

export const TableProductsModal = styled.div`
  width: 75%;
`;

export const InputAmount = styled.input`
  width: 30px;
  border: transparent;
  background-color: transparent;
  color: black;
`;

export const TablePricesModal = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 25%;
  height: 200px;
  margin-left: 10px;
  font-size: 19px;
  font-weight: bold;
  padding: 5px;
  p {
    margin: 5px 0px;
  }
`;