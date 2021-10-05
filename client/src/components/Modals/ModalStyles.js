import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.form`
  width: 500px;
  height: ${(props) => (props.modalContainerBox ? "520px" : "430px")};
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: box-shadow: 0 0 12px 5px #ddd;

  input {
    width: 400px;
    height: 35px;
    left: 50px;
    right: 50px;
    margin: 10px 50px;
    border-radius: 12px;
  }

  label {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    left: 50px;
    right: 50px;
    margin: 10px 50px;
  }

  button {
    position: absolute;
    margin: 50px 0px 0px 180px;

    padding: 10px 30px;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    background: #00c2ff;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-weight: bold;

    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;

    &:hover {
      background-color: #1766dc;
      color: #ffffff;
      font-weight: bolder;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h2 {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
    margin: 30px 0px 0px 50px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #00c2ff;

  &:hover {
    color: #ff0000;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
