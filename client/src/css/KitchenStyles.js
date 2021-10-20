import styled from "styled-components";

export const OrdersContainer = styled.section`
  display: grid;
  grid-template-columns: ${(props) =>
    props.ordersColumns || "repeat(auto-fill, minmax(259px, 1fr))"};
  gap: 2rem;
  padding: 3rem;
  background: rgb(225, 225, 225);
  border-radius: 12px;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
`;

export const OrdersContainerPending = styled.section`
  display: grid;
  grid-template-columns: ${(props) =>
    props.ordersColumns || "repeat(auto-fill, minmax(260px, 1fr))"};
  gap: 2rem;
  padding: 1.5rem;
  background: rgb(225, 225, 225);
  border-radius: 12px;
  width: 49%;
  height: 100%;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
`;
export const OrdersContainerInProgress = styled(OrdersContainerPending)``;

export const OrderCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2rem;
  min-height: 350px;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
`;

export const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  margin-bottom: 2.7rem;
  p {
    font-weight: bold;
    margin: 0.5rem 0;
  }
`;

export const OrderProducts = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: span 2;
  p {
    font-weight: normal;
    margin: 0.5rem 0;
  }
`;
