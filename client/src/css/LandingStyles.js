import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin-right: ${(props) => props.margin || 0};
  grid-row: ${(props) => props.gridRow || "unset"};
  grid-column: ${(props) => props.gridcolumn || "unset"};
  width: ${(props) => props.width || "unset"};
  justify-self: ${(props) => props.justifyself || "unset"};
  &:hover {
    text-decoration: ${(props) => props.hover || "none"};
  }
`;

export const Container = styled.div`
  background: url("https://i.imgur.com/KMouNmX.png") no-repeat;
  background-size: cover;
  position: relative;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  padding: 0 50px;
  height: 120px;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
`;

export const Title = styled.div`
  width: 10rem;
  height: 40px;
  background-color: rgba(0, 41, 107, 1);
  border-radius: 40px;
  text-align: center;
  & h2 {
    margin: 10px 0 0 0;
    color: rgb(255, 255, 255);
    font-size: 1.125rem;
  }
`;

export const NavBar = styled.nav`
  & ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0 22px;
    list-style: none;
    font-size: 1.125rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
`;

export const MainContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 150px);
  color: rgb(255, 255, 255);
  & h1 {
    text-align: center;
    font-size: 4rem;
    grid-column: 1 / span 5;
    grid-row: 2 / span 2;
    justify-self: center;
    z-index: 2;
  }
  & .ribbon {
    grid-column: 1 / span 5;
    grid-row: 2 / span 2;
    height: 250px;
    background-color: rgba(252, 175, 60, 0.5);
  }
`;

export const FormContainer = styled.section`
  padding: 50px;
`;

export const FormBody = styled.div`
  margin: 0 auto;
  width: 460px;
  min-height: 570px;
  background-color: rgba(0, 41, 107, 1);
  border-radius: 16px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.25);
`;

export const FormHeaderText = styled.div`
  height: 275px;
  background: url("https://i.imgur.com/08F3jYj.png");
  background-size: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px 16px 0 0;
  position: relative;
  & h2 {
    z-index: 2;
    color: rgb(255, 255, 255);
    font-size: ${(props) => props.fontsize || "4rem"};
    font-weight: 700;
    text-shadow: ${(props) => props.textshadow || "none"};
  }
`;

export const FormInputs = styled.form`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  margin: ${(props) => props.margin};
  align-self: center;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-weight: 700;
`;

export const InputContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

export const Inputs = styled.input`
  background-color: rgba(0, 0, 0, 0.5);
  width: 80%;
  padding: 0 20px 0;
  border-radius: 12px;
  border: 2px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-size: 16px;
  height: 45px;
  &:focus ~ .placeholder {
    transform: translateY(-35px) translateX(-0px) scale(0.9);
  }
  &:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-35px) translateX(-0px) scale(0.9);
  }
`;

export const Placeholder = styled.label`
  position: absolute;
  top: 15px;
  left: 60px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 14px;
  pointer-events: none;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  font-weight: 500;
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: rgb(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  z-index: 1;
  border-radius: 16px 16px 0 0;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 0 50px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  & .footer_left {
    display: flex;
    gap: 0 120px;
    & a {
      font-size: 1.125rem;
      color: rgb(255, 255, 255);
      font-weight: 600;
      text-decoration: none;
      &:hover {
        text-decoration: underline solid rgb(255, 255, 255);
      }
    }
  }
`;

export const SubmitContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0 1rem;
`;

export const Submit = styled.button`
  width: 100%;
  margin: 0 0 25px 0;
  height: 35px;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 6px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  &:active {
    background-color: rgb(202, 202, 202);
  }
`;

export const GSubmit = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  & .Icon {
    background-image: url("https://i.imgur.com/fhnjiVz.png");
    background-size: cover;
    width: 30px;
    height: 30px;
    justify-self: flex-start;
  }
  & .ButtonText {
    width: 100%;
    font-weight: 700;
    text-align: center;
  }
  &:active {
    background-color: rgb(202, 202, 202);
  }
`;

export const Button = styled.button`
  width: ${(props) => props.width || "7.5rem"};
  height: ${(props) => props.height || "2.5rem"};
  align-self: ${(props) => props.alignSelf || "unset"};
  background-color: ${(props) => props.bgColor || "rgba(0, 41, 107, 1)"};
  font-size: ${(props) => props.fontSize || "1.125rem"};
  border-radius: ${(props) => props.borderRadius || "1.5rem"};
  border: ${(props) => props.border || "none"};
  text-transform: ${(props) => props.upper || "none "};
  padding: 0;
  font-weight: bold;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: all 350ms ease-out;
  &:hover {
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
  }
`;

export const ErrorRegistro = styled.label`
  margin-top: 1rem;
  color: rgb(255, 255, 255);
`;

export const ErrorMessage = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  h3 {
    font-size: 4rem;
    color: black;
    margin: 1rem 0;
    font-style: italic;
  }
  p {
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  div {
    margin: 2rem 0;
    display: flex;
    gap: 0 1rem;
  }
`;
