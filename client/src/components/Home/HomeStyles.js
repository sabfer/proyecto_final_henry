import styled from "styled-components";
import { Button } from "../../css";

export const OrderButton = styled(Button)`
  align-self: flex-end;
  background-color: rgba(0, 41, 107, 1);
`;

export const BodyTop = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: span 2;
  width: 100%;
`;

export const Delivery = styled.div`
  width: 47%;
  padding: 1.25rem;
  min-height: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.125rem solid black;
`;

export const TakeOut = styled(Delivery)`
  background-color: grey;
`;

export const Salon = styled(Delivery)`
  grid-row: 3 / 4;
  grid-column: span 2;
  width: 100%;
  background-color: aquamarine;
`;

export const Orders = styled.div`
  padding: 1.2rem;
  height: 90%;
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.ordersColumns || "repeat(6, 1fr)"};
  grid-template-rows: 1fr 1fr;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SelectContainer = styled.div`
  grid-column: span 2;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0 1rem;
`;

export const DivSelect = styled.div`
  height: 35px;
  width: 60%;
  min-width: 20ch;
  max-width: 25ch;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #777;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  &::after {
    justify-self: end;
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: #777;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;

export const Select = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  &:after {
    grid-area: select;
  }
  &:focus + .Focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid blue;
    border-radius: inherit;
  }
`;
