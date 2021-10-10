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
  border-radius: 0.6rem;
  box-shadow: 0px 1px 12px 1px rgba(0, 0, 0, 0.49);
`;

export const TakeOut = styled(Delivery)``;

export const Salon = styled(Delivery)`
  grid-row: 3 / 4;
  grid-column: span 2;
  width: 100%;
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

export const Mesa = styled.div`
  cursor: pointer;
  .available {
    color: rgb(30, 215, 96);
  }
  .occuped {
    color: rgb(229, 20, 0);
  }
`;
