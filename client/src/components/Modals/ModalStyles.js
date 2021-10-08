import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
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
  button {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.6rem;
    color: #ffffff;
    border: none;
    background: rgb(2, 101, 210);
    cursor: pointer;
    font-weight: 500;
    font-size: 1.4rem;
    &:hover {
      background-color: rgb(26, 103, 255);
    }
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 2rem 0;
  h2 {
    margin: 0;
    font-weight: bold;
    font-size: 2rem;
    line-height: 48rem
    color: #000000;
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
