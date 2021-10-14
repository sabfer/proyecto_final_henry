import styled from "styled-components";

export const OrdersContainer = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 3rem;
  background: rgb(225, 225, 225);
  border-radius: 12px;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
`;

export const OrderCard = styled.div`
  background: #fff;
  padding: 2rem;
  min-height: 450px;
  min-width: 304px;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
`;
