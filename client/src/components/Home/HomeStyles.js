import styled from "styled-components";

export const Header = styled.header`
  padding: 1.56rem 1.56rem 0;
  display: flex;
  justify-content: space-between;
  height: 5.62rem;
  background-color: rgb(61, 61, 61);
`;

export const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 2rem;
  margin: 0;
`;

export const Button = styled.button`
  width: ${(props) => props.width || "5rem"};
  padding: ${(props) => props.padding || 0};
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "center"};
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  background-color: ${(props) => props.buttonColor || "rgb(0, 160, 210)"};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
`;

export const OrderButton = styled(Button)`
  align-self: flex-end;
  background-color: rgba(0, 41, 107, 1);
`;

export const OptionsBar = styled.div`
  padding: 0 1.56rem;
  display: flex;
  gap: 0 1.56rem;
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(208, 208, 208);
  height: 5rem;
`;

export const Body = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 5rem;
  display: grid;
  grid-template-columns: 1 fr 1fr;
  gap: 2rem 0;
  background-color: rgb(234, 234, 234);
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
  grid-row: 2 / 3;
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
